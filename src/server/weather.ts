/**
 * 即時天氣與未來多日預報資料服務（伺服器端、含快取）。
 *
 * - 對外只回傳整理過的 JSON，不暴露上游 API 名稱或金鑰。
 * - 在 Cloudflare Workers 上以模組級快取（30 分鐘內不重複抓取）。
 * - 在靜態建構階段被呼叫時，直接發出請求並把資料烘焙到 HTML。
 *
 * 同時輸出一份「遊客視覺」建議集合（穿搭／游玩／随身＋風險提醒），
 * 讓普通使用者不必自行解讀體氣、湿度、紫外线、風力等專業參數。
 */

const FORECAST_DAYS = 7;
const CACHE_MS = 30 * 60 * 1000;

export type WeatherSnapshot = {
  fetchedAt: string;
  timezone: string;
  location: { name: string; latitude: number; longitude: number };
  current: WeatherCurrent;
  today: WeatherToday;
  daily: WeatherDaily[];
  advice: WeatherAdvice;
};

export type WeatherCurrent = {
  temperatureC: number;
  feelsLikeC: number | null;
  humidity: number;
  weatherCode: number;
  weatherLabel: string;
  windSpeedKmh: number;
  precipitationMm: number;
  isDay: boolean;
};

export type WeatherToday = {
  temperatureMaxC: number;
  temperatureMinC: number;
  precipitationMm: number;
  precipitationProbabilityMax: number;
  uvIndexMax: number;
  windSpeedMaxKmh: number;
  windGustMaxKmh: number;
};

export type WeatherDaily = WeatherToday & {
  date: string;
  weekday: string;
  weatherCode: number;
  weatherLabel: string;
};

export type WeatherAdvice = {
  summary: string;
  warnings: WeatherWarning[];
  tips: WeatherTip[];
};

export type WeatherWarning = {
  level: "info" | "caution" | "danger";
  text: string;
};

export type WeatherTip = {
  category: "穿搭" | "游玩" | "随身";
  text: string;
};

/* ------------------------------------------------------------------ */
/* 上游請求（無金鑰）                                                    */
/* ------------------------------------------------------------------ */

type UpstreamCurrent = {
  time: string;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature?: number;
  weather_code: number;
  wind_speed_10m: number;
  precipitation?: number;
  is_day: number;
};

type UpstreamDaily = {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
  precipitation_probability_max: number[];
  uv_index_max?: number[];
  wind_speed_10m_max?: number[];
  wind_gusts_10m_max?: number[];
};

type UpstreamResponse = {
  timezone: string;
  current: UpstreamCurrent;
  daily: UpstreamDaily;
};

async function loadFromUpstream(lat: number, lon: number): Promise<UpstreamResponse> {
  const params = new URLSearchParams({
    latitude: lat.toString(),
    longitude: lon.toString(),
    timezone: "Asia/Taipei",
    forecast_days: FORECAST_DAYS.toString(),
    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation,is_day",
    daily:
      "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,uv_index_max,wind_speed_10m_max,wind_gusts_10m_max",
    wind_speed_unit: "kmh",
  });
  const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
  const response = await fetch(url, {
    headers: { "User-Agent": "wanggaoliao.com (Cloudflare Worker)" },
  });
  if (!response.ok) {
    throw new Error(`weather upstream ${response.status}`);
  }
  return (await response.json()) as UpstreamResponse;
}

/* ------------------------------------------------------------------ */
/* WMO Weather Code → 中文描述                                          */
/* ------------------------------------------------------------------ */

export function weatherCodeLabel(code: number): string {
  if (code === 0) return "晴朗";
  if (code === 1) return "大致晴朗";
  if (code === 2) return "局部多雲";
  if (code === 3) return "陰天";
  if (code === 45 || code === 48) return "濃霧";
  if (code === 51 || code === 53 || code === 55) return "毛毛雨";
  if (code === 56 || code === 57) return "凍毛毛雨";
  if (code === 61) return "小雨";
  if (code === 63) return "中雨";
  if (code === 65) return "大雨";
  if (code === 66 || code === 67) return "凍雨";
  if (code === 71) return "小雪";
  if (code === 73) return "中雪";
  if (code === 75) return "大雪";
  if (code === 77) return "雪粒";
  if (code === 80) return "陣雨";
  if (code === 81) return "中陣雨";
  if (code === 82) return "強陣雨";
  if (code === 85 || code === 86) return "陣雪";
  if (code === 95) return "雷雨";
  if (code === 96 || code === 99) return "雷雨夾冰雹";
  return "未知天況";
}

export function weatherCodeIcon(code: number, isDay = true): string {
  if (code === 0) return isDay ? "☀️" : "🌕";
  if (code === 1) return isDay ? "🌤️" : "🌖";
  if (code === 2) return "⛅";
  if (code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if (code >= 51 && code <= 67) return "🌦️";
  if (code >= 71 && code <= 86) return "🌨️";
  if (code >= 80 && code <= 82) return "🌧️";
  if (code >= 95) return "⛈️";
  return "🌥️";
}

/* ------------------------------------------------------------------ */
/* 正規化                                                                */
/* ------------------------------------------------------------------ */

export function normalize(
  data: UpstreamResponse,
  location: { name: string; latitude: number; longitude: number }
): WeatherSnapshot {
  const c = data.current;
  const d = data.daily;

  const current: WeatherCurrent = {
    temperatureC: round(c.temperature_2m),
    feelsLikeC:
      c.apparent_temperature !== undefined ? round(c.apparent_temperature) : null,
    humidity: Math.round(c.relative_humidity_2m),
    weatherCode: c.weather_code,
    weatherLabel: weatherCodeLabel(c.weather_code),
    windSpeedKmh: round(c.wind_speed_10m),
    precipitationMm: c.precipitation !== undefined ? round(c.precipitation, 1) : 0,
    isDay: c.is_day === 1,
  };

  const daily: WeatherDaily[] = d.time.map((date, i) => ({
    date,
    weekday: weekdayLabel(date),
    weatherCode: d.weather_code[i],
    weatherLabel: weatherCodeLabel(d.weather_code[i]),
    temperatureMaxC: round(d.temperature_2m_max[i]),
    temperatureMinC: round(d.temperature_2m_min[i]),
    precipitationMm: round(d.precipitation_sum[i], 1),
    precipitationProbabilityMax: Math.round(d.precipitation_probability_max[i] ?? 0),
    uvIndexMax: d.uv_index_max ? round(d.uv_index_max[i] ?? 0, 1) : 0,
    windSpeedMaxKmh: d.wind_speed_10m_max ? round(d.wind_speed_10m_max[i] ?? 0) : 0,
    windGustMaxKmh: d.wind_gusts_10m_max ? round(d.wind_gusts_10m_max[i] ?? 0) : 0,
  }));

  const today: WeatherToday = {
    temperatureMaxC: daily[0].temperatureMaxC,
    temperatureMinC: daily[0].temperatureMinC,
    precipitationMm: daily[0].precipitationMm,
    precipitationProbabilityMax: daily[0].precipitationProbabilityMax,
    uvIndexMax: daily[0].uvIndexMax,
    windSpeedMaxKmh: daily[0].windSpeedMaxKmh,
    windGustMaxKmh: daily[0].windGustMaxKmh,
  };

  const advice = generateAdvice(current, today);

  return {
    fetchedAt: c.time,
    timezone: data.timezone,
    location,
    current,
    today,
    daily,
    advice,
  };
}

/* ------------------------------------------------------------------ */
/* 遊客視覺建議生成                                                       */
/* ------------------------------------------------------------------ */

/**
 * 根據氣象數據生成「穿搭 / 游玩 / 隨身」三類建議，以及「風險提醒」。
 * - 不滿足條件的條目直接不返回（前端不會顯示）。
 * - 風險提醒單獨置頂，由「危險 / 警示 / 提示」三級層級區分。
 */
export function generateAdvice(
  current: WeatherCurrent,
  today: WeatherToday
): WeatherAdvice {
  const warnings: WeatherWarning[] = [];
  const tips: WeatherTip[] = [];
  const summaryParts: string[] = [];

  const isThunderstorm = current.weatherCode === 95 || current.weatherCode === 96 || current.weatherCode === 99;
  const isFog = current.weatherCode === 45 || current.weatherCode === 48;
  const isHeavyRain = [63, 65, 81, 82].includes(current.weatherCode);
  const isMidRain = current.weatherCode === 61 || current.weatherCode === 80;
  const isLightRain = current.weatherCode === 51 || current.weatherCode === 53 || current.weatherCode === 55;
  const isRainingNow = current.precipitationMm >= 0.2 || isLightRain || isMidRain || isHeavyRain || isThunderstorm;
  const precipProbToday = today.precipitationProbabilityMax;
  const highWindToday = today.windSpeedMaxKmh >= 41 || today.windGustMaxKmh >= 62; // 6 級以上
  const strongGustToday = today.windGustMaxKmh >= 50;
  const tempDelta = today.temperatureMaxC - today.temperatureMinC;
  const isHighUV = today.uvIndexMax >= 8;
  const isMidUV = today.uvIndexMax >= 5 && today.uvIndexMax < 8;
  const isHot = today.temperatureMaxC >= 32;
  const isWarm = today.temperatureMaxC >= 28 && today.temperatureMaxC < 32;
  const isCold = today.temperatureMaxC <= 18 || current.temperatureC <= 15;
  const isChillyNight = today.temperatureMinC <= 15;
  const dayCode = current.weatherCode;

  /* ----- 風險提醒（最高優先）----- */
  if (isThunderstorm) {
    warnings.push({
      level: "danger",
      text: "雷雨警報：請勿登山、勿在稜線邊緣停留；園區部分設施可能關閉。",
    });
  }
  if (isHeavyRain) {
    warnings.push({
      level: "danger",
      text: "雨勢偏大：山區步道濕滑，請走主步道、避開草坡與低窪處。",
    });
  }
  if (isFog) {
    warnings.push({
      level: "danger",
      text: "能見度差：夜間駕車上山極度危險，建議改日或改於白天前往。",
    });
  }
  if (highWindToday) {
    warnings.push({
      level: "caution",
      text: "風力偏強：帽子容易吹落、長裙可能被風掀起，請遠離稜線邊緣。",
    });
  }
  if (strongGustToday && !highWindToday) {
    warnings.push({
      level: "info",
      text: "留意陣風：手機、自拍桿請握穩，停車後關好車門。",
    });
  }
  if (isCold && isRainingNow) {
    warnings.push({
      level: "caution",
      text: "低溫且有雨：體感會明顯偏低，建議攜帶一件防風外套。",
    });
  }
  if (isCold && !isRainingNow) {
    warnings.push({
      level: "info",
      text: "夜間低溫：海拔不到 300 公尺，但夜間體感可再低 3–5°C。",
    });
  }

  /* ----- 一句話總結 ----- */
  if (dayCode === 0 || dayCode === 1) {
    summaryParts.push("天氣晴朗");
  } else if (dayCode === 2) {
    summaryParts.push("雲量偏多");
  } else if (dayCode === 3) {
    summaryParts.push("陰天");
  } else if (isLightRain) {
    summaryParts.push("毛毛雨");
  } else if (isMidRain) {
    summaryParts.push("小雨");
  } else if (isHeavyRain) {
    summaryParts.push("雨勢明顯");
  } else if (isThunderstorm) {
    summaryParts.push("雷雨");
  } else if (isFog) {
    summaryParts.push("起霧");
  }
  if (isHot) summaryParts.push("高溫");
  else if (isCold) summaryParts.push("偏冷");
  else if (isWarm) summaryParts.push("偏熱");
  if (isHighUV || isMidUV) summaryParts.push("紫外線偏強");
  if (highWindToday) summaryParts.push("風大");
  summaryParts.push(`目前 ${current.temperatureC}°C`);
  const summary = summaryParts.join("，");

  /* ----- 穿搭 ----- */
  if (isHot) {
    tips.push({
      category: "穿搭",
      text: "白天偏熱，建議穿著淺色、薄長袖或短袖；上山後風大會降溫，可加一件薄外套。",
    });
  } else if (isWarm) {
    tips.push({
      category: "穿搭",
      text: "天氣溫暖，薄長袖或短袖即可；夜間海風偏涼，建議帶一件薄外套。",
    });
  } else if (isCold) {
    tips.push({
      category: "穿搭",
      text: "天氣偏冷，建議穿著厚外套；夜間體感會再降，圍巾與手套可選。",
    });
  } else if (isChillyNight) {
    tips.push({
      category: "穿搭",
      text: "白天還算舒適，但夜間偏涼，建議帶一件防風外套。",
    });
  } else if (tempDelta >= 8) {
    tips.push({
      category: "穿搭",
      text: "日夜溫差大，建議洋蔥式穿搭，方便上山前後增減衣物。",
    });
  } else if (isRainingNow) {
    tips.push({
      category: "穿搭",
      text: "建議攜帶一件防水或快乾外套，避免久站淋濕。",
    });
  }

  /* ----- 游玩 ----- */
  if (isThunderstorm) {
    tips.push({
      category: "游玩",
      text: "雷雨期間不建議上山；待雨勢轉小、雷胞遠離後再上山，並隨身攜帶手電筒。",
    });
  } else if (isHeavyRain) {
    tips.push({
      category: "游玩",
      text: "雨勢偏大，建議先到山下室內景點或便利商店；待雨勢轉小再上山。",
    });
  } else if (isFog) {
    tips.push({
      category: "游玩",
      text: "能見度差，城市燈海拍起來會比較模糊；建議改日或於白天前來。",
    });
  } else if (dayCode === 0 || dayCode === 1) {
    tips.push({
      category: "游玩",
      text: "天氣晴朗，適合拍夕陽、藍調與夜景；建議日落前 60 分鐘抵達主步道。",
    });
  } else if (dayCode === 2 || dayCode === 3) {
    tips.push({
      category: "游玩",
      text: "光線柔和，長時間戶外拍照更不易過曝；夜景燈海會偏擴散、適合拍城市氛圍。",
    });
  } else if (isMidRain || isLightRain) {
    tips.push({
      category: "游玩",
      text: "小雨不致影響上山，但主步道可能濕滑；建議改穿防滑鞋。",
    });
  } else if (highWindToday) {
    tips.push({
      category: "游玩",
      text: "稜線風大，自拍、合照請注意手機握穩；建議避開觀景平台邊緣站立。",
    });
  } else if (isCold) {
    tips.push({
      category: "游玩",
      text: "夜景低溫偏冷，建議縮短停留時間，每 30 分鐘回到車上或主步道回溫。",
    });
  }

  /* ----- 隨身 ----- */
  if (isHighUV) {
    tips.push({
      category: "随身",
      text: "紫外線偏強，建議防曬乳、帽子與墨鏡；白天上山請備好。",
    });
  } else if (isMidUV) {
    tips.push({
      category: "随身",
      text: "紫外線中等，建議帶帽子或薄長袖防曬。",
    });
  }
  if (precipProbToday >= 60 || isRainingNow) {
    if (isThunderstorm) {
      tips.push({
        category: "随身",
        text: "建議攜帶輕便雨衣（不要帶長柄傘，風大會吹壞）；手機、相機做好防潮。",
      });
    } else if (highWindToday) {
      tips.push({
        category: "随身",
        text: "建議攜帶輕便雨衣；長柄傘容易被風吹翻，不建議。",
      });
    } else {
      tips.push({
        category: "随身",
        text: "降雨機率高，建議攜帶折傘或輕便雨衣。",
      });
    }
  }
  if (isHot || isWarm) {
    tips.push({
      category: "随身",
      text: "建議攜帶 1–1.5 公升飲水；山頂無飲水機。",
    });
  }
  if (isCold || isChillyNight) {
    tips.push({
      category: "随身",
      text: "建議攜帶暖暖包或熱飲；夜間靜候時可避免體溫過低。",
    });
  }
  if (highWindToday) {
    tips.push({
      category: "随身",
      text: "請避免戴寬沿帽與穿長裙；建議改戴棒球帽或無帽外套。",
    });
  }
  if (current.weatherCode === 0 && !isHot && !isCold) {
    tips.push({
      category: "随身",
      text: "好天氣建議攜帶備用電池；低溫會讓手機、相機電池掉電加快。",
    });
  }
  // Always remind water when entering mountain viewpoint in daylight
  if (current.isDay && !isRainingNow && (tips.filter((t) => t.category === "随身" && /飲水/.test(t.text)).length === 0)) {
    tips.push({
      category: "随身",
      text: "山頂無飲水機，建議自備 0.5–1 公升飲水。",
    });
  }
  if (!current.isDay && (tips.filter((t) => t.category === "随身" && /手電筒|頭燈|小夜燈/.test(t.text)).length === 0)) {
    tips.push({
      category: "随身",
      text: "夜間照明有限，建議攜帶柔和雙色頭燈或小手電筒；高亮度光源會影響他人。",
    });
  }

  return { summary, warnings, tips };
}

function round(value: number, digits = 0): number {
  const factor = Math.pow(10, digits);
  return Math.round(value * factor) / factor;
}

const WEEKDAYS = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"];

function weekdayLabel(date: string): string {
  const d = new Date(date + "T00:00:00+08:00");
  return WEEKDAYS[d.getDay()];
}

/* ------------------------------------------------------------------ */
/* 取資料（含快取）                                                       */
/* ------------------------------------------------------------------ */

type CacheEntry = { value: WeatherSnapshot; expires: number };
let cache: CacheEntry | null = null;

export async function getWeather(
  location: { name: string; latitude: number; longitude: number }
): Promise<WeatherSnapshot> {
  const now = Date.now();
  if (cache && cache.expires > now) {
    return cache.value;
  }
  const upstream = await loadFromUpstream(location.latitude, location.longitude);
  const value = normalize(upstream, location);
  cache = { value, expires: now + CACHE_MS };
  return value;
}

/** 測試用：清空快取 */
export function clearWeatherCache(): void {
  cache = null;
}
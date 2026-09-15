export const place = {
  name: "望高寮夜景公園",
  englishName: "Wanggaoliao Night View Park",
  shortName: "望高寮",
  shortNameEn: "Wanggaoliao",

  latitude: 24.143647,
  longitude: 120.5815564,
  placeId: "ChIJEWgWs_c-aTQRTjmwrsj3UmI",

  address: {
    street: "中台路",
    streetAddress: "中台路601號",
    village: "春社里",
    district: "南屯區",
    city: "臺中市",
    postalCode: "408",
    country: "TW",
    countryName: "臺灣",
    countryNameEn: "Taiwan",
    full: "408台灣臺中市南屯區春社里中台路601號",
  },

  plusCode: "4HVJ+FJ 春社里 台灣臺中市南屯區",

  /** 周邊核心地標，用於實體語意綁定與結構化資料 */
  nearbyLandmarks: ["彩虹眷村", "追分車站"],

  /**
   * 網站層級的地理歸屬：景點 → 城市 → 行政區 → 國家
   */
  geoHierarchy: ["望高寮夜景公園", "臺中市", "南屯區", "臺灣"],

  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1" +
    "&query=24.143647%2C120.5815564" +
    "&query_place_id=ChIJEWgWs_c-aTQRTjmwrsj3UmI",

  /** Google 地圖分享短連結（資料來源標示用） */
  mapsShareUrl: "https://maps.app.goo.gl/XL5xGEBcUgzbMptM7",

  directionsUrl:
    "https://www.google.com/maps/dir/?api=1" +
    "&destination=24.143647%2C120.5815564" +
    "&destination_place_id=ChIJEWgWs_c-aTQRTjmwrsj3UmI" +
    "&travelmode=driving",

  transitDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1" +
    "&destination=24.143647%2C120.5815564" +
    "&destination_place_id=ChIJEWgWs_c-aTQRTjmwrsj3UmI" +
    "&travelmode=transit",

  lookoutMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=%E6%9C%9B%E9%AB%98%E5%AF%AE%E8%A7%80%E6%99%AF%E8%87%BA",

  liveCameraUrl: "https://travel.taichung.gov.tw/zh-tw/live-camera/56",

  /** 臺中市政府觀光旅遊局官方景點頁（權威出站連結） */
  govtTourismUrl: "https://travel.taichung.gov.tw/zh-tw/Attractions/Intro/146/",

  /** 臺中觀光旅遊網景點列表（周邊景點查詢入口） */
  govtNearbyUrl: "https://travel.taichung.gov.tw/zh-tw/Attractions/List",

  embedMapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.800396008462!2d120.5815564!3d24.143646999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693ef7b3166811%3A0x6252f7c8aeb0394e!2sWanggaoliao%20Night%20View%20Park!5e0!3m2!1szh-CN!2stw!4v1785144176142!5m2!1szh-CN!2stw",
} as const;

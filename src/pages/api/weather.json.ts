/**
 * 公開的即時天氣 + 未來一週 API。
 *
 * - 僅對本站 widget 提供；資料經伺服器端抓取與整理，不對外暴露。
 * - 回傳結構經過白名單設計，避免洩漏內部設定。
 */
import type { APIRoute } from "astro";
import { getWeather } from "../../server/weather";
import { place } from "../../data/place";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const lat = parseFloat(url.searchParams.get("lat") ?? place.latitude.toString());
  const lon = parseFloat(url.searchParams.get("lon") ?? place.longitude.toString());
  const name = url.searchParams.get("name") ?? place.name;

  try {
    const data = await getWeather({ name, latitude: lat, longitude: lon });
    return jsonResponse(data, 200, {
      "Cache-Control": "public, max-age=1800, s-maxage=1800, stale-if-error=7200",
    });
  } catch (error) {
    console.error("weather endpoint failed:", error);
    return jsonResponse(
      { error: "weather_unavailable" },
      502,
      { "Cache-Control": "no-store" }
    );
  }
};

function jsonResponse(payload: unknown, status: number, headers: Record<string, string>) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...headers, "Content-Type": "application/json; charset=utf-8" },
  });
}
import { place } from "./place";

/**
 * 景點評分與評價數。
 *
 * 注意：
 * - 這裡的數字是「人工同步」的快照，僅用於頁面顯示。
 * - 評分與評價數「不寫入 JSON-LD」，避免與 Google 地圖即時數據不同步而產生結構化資料錯誤。
 * - 頁面必須同時標示來源與同步時間，並保留前往 Google 地圖的連結。
 */
export const rating = {
  value: 4.5,
  reviewCount: 14961,
  /** 顯示用的千分位字串 */
  reviewCountLabel: "14,961",
  category: "公園",

  /** 同步年月（ISO 縮寫） */
  syncedAt: "2026-10",
  /** 同步年月（顯示用） */
  syncedAtLabel: "2026 年 10 月",

  sourceName: "Google 地圖",
  sourceUrl: place.mapsShareUrl,
} as const;

export const ratingSourceNote =
  `評分與評價數同步自 Google 地圖（Google Maps）使用者評價 · ${rating.syncedAtLabel} · ` +
  "點擊查看 Google 地圖全部評價 ↗";

export const reviewsSourceNote =
  `同步自 Google 地圖使用者評價，同步時間 ${rating.syncedAtLabel}；` +
  "版權歸原作者與 Google 地圖所有";

export const reviewsButtonLabel = "在 Google 地圖查看全部評價";

export const sourcesReviewLabel = `評價 · 同步時間 ${rating.syncedAtLabel}`;

/** 圖片產權聲明（全站共用） */
export const imageRightsNotice =
  "本網站所展示的所有圖片產權及版權均歸原攝影者所有。";

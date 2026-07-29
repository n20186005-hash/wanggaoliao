# Wanggaoliao.com — 望高寮夜景公園旅遊指南

以 Astro + Tailwind CSS 4 建置的純靜態景點指南網站，部署於 Cloudflare Workers Static Assets。

## 開發

```bash
pnpm install
pnpm dev      # 本機開發 http://localhost:4321
pnpm build    # 產出靜態網站至 dist/
pnpm preview  # 預覽建置結果
pnpm worker:dev     # 建置後以本機 Worker 預覽
pnpm deploy:dry-run # 驗證 Worker 部署包，不上傳
pnpm deploy         # 建置並部署至 Cloudflare Workers
```

## 技術架構

- **框架**：Astro（純靜態輸出，無 SSR、無資料庫）
- **樣式**：Tailwind CSS 4（@tailwindcss/vite）＋ @tailwindcss/typography
- **內容**：Markdown/MDX ＋ Astro Content Collections（`src/content/guides/`）
- **地圖**：Google Maps URLs（免 API 金鑰），iframe 點擊後才載入
- **SEO**：@astrojs/sitemap、canonical、Open Graph、JSON-LD（TouristAttraction／Article／FAQPage／BreadcrumbList）

## 目錄重點

| 路徑 | 說明 |
| --- | --- |
| `src/data/place.ts` | 景點座標、Place ID 與 Google 地圖連結（單一來源） |
| `src/data/faq.ts` | FAQ 內容（首頁精選＋完整頁共用） |
| `src/data/credits.ts` | 圖片授權資訊（顯示於關於頁） |
| `src/content/guides/` | 全部攻略內容（MDX） |
| `src/pages/[...slug].astro` | 攻略頁動態路由（頂層網址，如 `/parking/`） |
| `wrangler.jsonc` | Cloudflare Worker 名稱、相容日期與靜態資源路由 |
| `public/_headers` | Workers Static Assets 安全標頭與靜態資源快取 |

## Cloudflare Workers 部署設定

| 項目 | 設定 |
| --- | --- |
| Production branch | `main` |
| Build command | `pnpm build` |
| Deploy command | `pnpm exec wrangler deploy` |
| Static assets | `dist`（由 `wrangler.jsonc` 的 `assets.directory` 指定） |
| Worker script / SSR / Adapter | 不使用；由 Workers Static Assets 直接服務預先產生的檔案 |

Worker 建立後，在 Cloudflare Workers 控制台綁定 `wanggaoliao.com` 自訂網域。`www.wanggaoliao.com` 的 301 轉址請使用 Cloudflare Redirect Rules 或 Bulk Redirects；Workers Static Assets 的 `_redirects` 僅接受相對路徑，不能依主機名稱匹配。

## 圖片授權

網站照片取自 Wikimedia Commons 之 CC BY-SA 授權作品，作者與出處標示於各頁圖說及[關於頁](src/pages/about.astro)。新增圖片時請同步更新 `src/data/credits.ts`。

[![台中望高寮｜最美約會勝地，台中夜景公園、交通資訊、附近餐廳一次攻略 - 好好玩FUNIT 2026](https://images.openai.com/static-rsc-4/jt1alOOrN9fsaiLyDeIV611mHG7EXjlCjrR2OHVZwmketzY43eFir78kaMIx4zw_d36ACKv1eXuBBFKYNfIzn4tT6Ll-BG-6NNu7i-aOUpeYj0SVell0lLJZQcucWZwrlPmtfh6B5_sdqRgYgZQZbar-itBhCVrgHqLFXitiNmo?purpose=inline)](https://www.welcometw.com/%E6%9C%9B%E9%AB%98%E5%AF%AE/?utm_source=chatgpt.com)

# Wanggaoliao.com 完整建站建議

## 一、專案定案

### 網站基本資料

| 項目    | 定案                                     |
| ----- | -------------------------------------- |
| 主域名   | **Wanggaoliao.com**                    |
| 網站名稱  | **望高寮夜景公園旅遊指南**                        |
| 英文品牌  | **Wanggaoliao Night View Guide**       |
| 網站語言  | 繁體中文                                   |
| 語言標記  | `zh-Hant-TW`                           |
| 前端框架  | Astro                                  |
| CSS   | Tailwind CSS 4                         |
| 套件管理  | pnpm                                   |
| 內容管理  | Markdown／MDX＋Astro Content Collections |
| 部署平台  | Cloudflare Pages                       |
| 輸出模式  | 純靜態網站                                  |
| 資料庫   | 無                                      |
| 使用者登入 | 無                                      |
| 線上預訂  | 無                                      |
| 外部字型  | 無                                      |
| 地圖服務  | Google 地圖                              |
| 核心轉換  | 開啟地圖、開始導航、查看停車攻略、查看即時影像                |

### 一句話定位

> **幫助遊客在前往望高寮之前，快速解決導航、停車、觀景位置、拍照與返程問題。**

這個網站不應只是重複景點歷史，而要成為「準備出發時真正會打開」的工具型旅遊指南。

望高寮的官方景點特色包括大肚台地視野、台中市區、台中港、彰化方向、夕陽及夜景；官方也提供望高寮即時影像，這兩項應成為網站內容設計的基礎。([台中市旅游局][1])

---

# 二、域名與品牌策略

## 主域名

```text
https://wanggaoliao.com
```

建議一律使用不帶 `www` 的版本作為正式網址：

```text
https://wanggaoliao.com/
```

並設定：

```text
https://www.wanggaoliao.com/*
→ 301
https://wanggaoliao.com/*
```

### 為什麼適合使用 Wanggaoliao.com

1. 與 Google 地圖英文名稱中的 `Wanggaoliao` 一致。
2. 不限制網站只能介紹「夜景公園」，未來可涵蓋觀景平台、大肚山與周邊路線。
3. `.com` 容易記憶，也適合國際遊客。
4. 不會讓使用者誤以為是政府機關或景區管理單位。
5. 後續可自然增加英文頁面。

## 品牌呈現

### 主品牌

```text
望高寮
WANGGAOLIAO
```

### 網站完整名稱

```text
望高寮夜景公園旅遊指南
```

### 品牌標語

推薦：

> **今晚，從大肚台地看見台中。**

備選：

* 從夕陽到燈海，安排你的望高寮之旅
* 前往望高寮之前，先把導航與停車看清楚
* 一次整理望高寮夜景、停車與周邊行程

### Logo方向

Logo不要直接模仿政府識別或使用官方標誌。

可結合：

* 字母 `W`
* 山坡弧線
* 城市天際線
* 三至五個燈光圓點
* 地圖定位圖形
* 深藍色夜空與暖黃色燈光

Favicon可使用簡化的「W＋山坡」圖形，避免在小尺寸中塞入中文字。

---

# 三、網站核心目標

## 第一目標：成為 Google 地圖的實用補充頁

Google 地圖負責：

* 即時導航
* 開放狀態
* 使用者評論
* 路況
* 照片
* 評分
* 行車路線

Wanggaoliao.com負責：

* 兩個觀景位置有什麼不同
* 哪裡適合看夕陽
* 哪裡適合看城市夜景
* 停車入口怎麼找
* 沒有車如何安排返程
* 哪個時段適合拍照
* 如何搭配周邊景點
* 第一次前往容易犯什麼錯誤

## 第二目標：獲取搜尋流量

主要承接：

```text
望高寮夜景
望高寮夜景公園
望高寮停車場
望高寮怎麼去
望高寮導航
望高寮即時影像
望高寮夕陽
望高寮觀景平台
台中夜景
台中約會景點
大肚山夜景
```

## 第三目標：提高 Google 地圖網站連結的可信度

網站應具備：

* 明確景點名稱
* 清楚地址與地圖按鈕
* 實用原創內容
* 正確經緯度
* 獨立聯絡與關於頁
* 隱私權政策
* 良好的手機體驗
* 不冒充官方
* 不大量複製其他旅遊網站內容

---

# 四、目標客群

## 1. 台中本地情侶

最關心：

* 晚上臨時去是否方便
* 停車位置
* 適合約會的區域
* 看完夜景後的宵夜
* 是否需要準備外套
* 哪裡拍合照比較好

## 2. 外地自駕遊客

最關心：

* 正確Google地圖位置
* 停車場入口
* 山路是否好開
* 假日是否擁擠
* 建議提早多久到
* 能否和彩虹村安排在同一天

## 3. 攝影使用者

最關心：

* 藍調時刻
* 日落方向
* 城市燈海方向
* 手機拍攝位置
* 長焦與廣角差異
* 三腳架是否方便
* 現場能見度

## 4. 無車遊客

最關心：

* 公車是否適合看夜景
* 下車後需要走多久
* 回程是否還有公車
* 計程車是否容易叫
* 是否應該預約接送

## 5. 親子與長者

最關心：

* 是否有公廁
* 階梯與坡度
* 推車能否通行
* 照明是否足夠
* 是否有座位
* 小孩夜間活動安全

---

# 五、網站資訊架構

第一階段建議完成 **16個內容頁＋基本法律頁面**。

```text
/
├── night-view/
├── sunset/
├── parking/
├── directions/
├── public-transport/
├── live-camera/
├── park-vs-viewpoint/
├── photography/
├── facilities/
├── accessibility/
├── nearby-attractions/
├── nearby-food/
├── itineraries/
│   ├── date-night/
│   ├── half-day/
│   └── photography/
├── faq/
├── about/
├── privacy/
└── en/
```

## 頁面規劃

| 路徑                          | 頁面名稱                  | 主要目的         |
| --------------------------- | --------------------- | ------------ |
| `/`                         | 望高寮夜景公園完整指南           | 品牌主頁與導航入口    |
| `/night-view/`              | 望高寮夜景攻略               | 看夜景時間、方向與位置  |
| `/sunset/`                  | 望高寮夕陽攻略               | 日落方向與觀景平台    |
| `/parking/`                 | 望高寮停車攻略               | 停車位置、入口與駕駛提醒 |
| `/directions/`              | 望高寮怎麼去                | 自駕、機車、計程車    |
| `/public-transport/`        | 搭公車前往望高寮              | 無車遊客與返程建議    |
| `/live-camera/`             | 望高寮即時影像               | 引導前往官方即時畫面   |
| `/park-vs-viewpoint/`       | 夜景公園與觀景平台差別           | 解決最重要的地點混淆   |
| `/photography/`             | 望高寮拍照攻略               | 手機、相機與拍攝位置   |
| `/facilities/`              | 廁所、步道與設施              | 親子及一般遊客資訊    |
| `/accessibility/`           | 無障礙與長者指南              | 坡道、階梯與推車     |
| `/nearby-attractions/`      | 望高寮附近景點               | 建立周邊內容集群     |
| `/nearby-food/`             | 附近美食與宵夜               | 晚餐、甜點、宵夜方向   |
| `/itineraries/date-night/`  | 情侶約會路線                | 晚餐＋夜景＋宵夜     |
| `/itineraries/half-day/`    | 台中半日行程                | 彩虹村等組合路線     |
| `/itineraries/photography/` | 攝影半日路線                | 日落到藍調夜景      |
| `/faq/`                     | 常見問題                  | 集中回答出發問題     |
| `/en/`                      | English Visitor Guide | 國際遊客核心資訊     |

官方列出的附近景點包括大肚藍色公路、追分車站、知高圳步道、彩虹村、成功車站及聚奎居等，可作為周邊行程頁的初始內容來源。([台中市旅游局][2])

---

# 六、首頁完整結構

## 1. 頂部導覽列

左側：

```text
望高寮 WANGGAOLIAO
```

右側：

```text
夜景
停車
怎麼去
拍照
附近景點
```

右上角使用醒目按鈕：

```text
在 Google 地圖開啟
```

手機版只保留：

* Logo
* 選單按鈕
* 底部固定導航列

---

## 2. Hero首屏

### 主標題

```text
望高寮夜景公園
```

### 副標題

```text
台中夜景、停車、導航與拍照攻略
```

### 簡介

```text
從大肚台地俯瞰台中城市燈海。
出發前先確認觀景位置、停車方式與Google地圖導航。
```

### 主要按鈕

```text
開始導航
```

### 次要按鈕

```text
查看 Google 地圖
查看即時影像
```

Hero圖片應選擇：

* 藍調時刻
* 城市仍有天空層次
* 前景可看到草坡、階梯或步道
* 不要只剩全黑天空與細小燈點

---

## 3. 快速資訊卡

建議顯示：

```text
免費景點
Google地圖導航
夜景與夕陽
設有觀景空間
適合自駕
可查看即時影像
```

不要在這裡放：

* 固定Google評分
* 固定評論數量
* 「目前正常開放」
* 固定攤販營業情況

動態資訊統一引導至Google地圖。

---

## 4. 出發前先看

使用四張卡片：

### 開車前往

前往停車與山路駕駛指南。

### 沒有開車

確認公車與夜間返程方案。

### 想看夕陽

先理解觀景平台與夜景公園的差異。

### 想拍夜景

先查看能見度及藍調時間建議。

---

## 5. 夜景公園與觀景平台比較

這是首頁最重要的差異化模組。

| 項目   | 望高寮夜景公園  | 望高寮觀景平台 |
| ---- | -------- | ------- |
| 主要景色 | 台中城市燈海   | 海線與夕陽方向 |
| 適合時間 | 藍調至入夜    | 日落之前    |
| 空間特色 | 草坡、階梯、步道 | 觀景平台    |
| 適合客群 | 情侶、家庭、聚會 | 攝影、快速停留 |
| 建議安排 | 日落後前往    | 日落前先去   |

頁面下方放：

```text
查看兩個觀景點的完整差異
```

---

## 6. Google地圖區塊

不要在首屏立即載入大型iframe。

推薦做法：

1. 首次顯示簡單地圖示意卡。
2. 提供「在Google地圖開啟」。
3. 提供「開始導航」。
4. 使用者點擊「顯示地圖」後，再載入Google地圖iframe。
5. 手機底部固定導航按鈕。

---

## 7. 停車與交通摘要

顯示：

* 自駕入口提醒
* 停車攻略連結
* 夜間道路提醒
* 公車返程提醒
* 計程車備案
* Google地圖導航按鈕

不要承諾：

* 一定有空位
* 停車場永遠免費
* 某一條路永遠不塞車
* 深夜一定叫得到車

---

## 8. 三條推薦路線

### 情侶夜遊

```text
市區晚餐
→ 望高寮夜景
→ 台中宵夜或甜點
```

### 經典半日遊

```text
彩虹村
→ 周邊晚餐
→ 望高寮夕陽
→ 夜景公園
```

### 攝影路線

```text
日落前抵達觀景平台
→ 拍攝夕陽
→ 移動至夜景公園
→ 拍攝藍調與城市燈海
```

---

## 9. FAQ

首頁放6至8題，完整FAQ頁放15至20題。

建議問題：

* 望高寮夜景公園需要門票嗎？
* 望高寮夜景公園在哪裡？
* 有停車場嗎？
* 沒有開車可以去嗎？
* 夜景公園和觀景平台一樣嗎？
* 適合看日落還是夜景？
* 有公廁嗎？
* 適合帶小孩嗎？
* 下雨後適合前往嗎？
* 深夜前往需要注意什麼？

---

## 10. 手機底部固定欄

只保留兩個按鈕：

```text
查看地圖
開始導航
```

不要加入太多按鈕，避免遮擋文章。

---

# 七、Google地圖整合方案

Google Maps URLs可以直接開啟地點搜尋及導航，而且不需要自行申請Google Maps API金鑰，適合這個無後端的純靜態網站。([Google for Developers][3])

## 地點資料統一管理

建立：

```text
src/data/place.ts
```

內容：

```ts
export const place = {
  name: "望高寮夜景公園",
  englishName: "Wanggaoliao Night View Park",
  latitude: 24.143647,
  longitude: 120.5815564,
  placeId: "ChIJEWgWs_c-aTQRTjmwrsj3UmI",

  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1" +
    "&query=24.143647%2C120.5815564" +
    "&query_place_id=ChIJEWgWs_c-aTQRTjmwrsj3UmI",

  directionsUrl:
    "https://www.google.com/maps/dir/?api=1" +
    "&destination=24.143647%2C120.5815564" +
    "&destination_place_id=ChIJEWgWs_c-aTQRTjmwrsj3UmI" +
    "&travelmode=driving",
} as const;
```

所有頁面都從此檔案讀取，不要在十幾個頁面重複貼網址。

## 地圖按鈕文案

推薦使用：

```text
在 Google 地圖查看
開始導航
查看評論與即時狀態
```

不建議：

```text
立即前往
保證有停車位
目前暢通
景點正常開放
```

## 地圖嵌入

需要嵌入地圖時，使用Google地圖「分享／嵌入地圖」產生的iframe，並採取點擊後載入。

```astro
<button
  type="button"
  data-load-map
  class="rounded-xl border px-5 py-3 font-semibold"
>
  顯示 Google 地圖
</button>

<div
  id="google-map-container"
  class="mt-4 aspect-[4/3] overflow-hidden rounded-2xl"
></div>
```

## MapActions元件

```astro
---
import { place } from "../data/place";
---

<div class="flex flex-col gap-3 sm:flex-row">
  <a
    href={place.googleMapsUrl}
    target="_blank"
    rel="noopener noreferrer"
    class="rounded-xl border px-5 py-3 text-center font-semibold"
  >
    在 Google 地圖查看
  </a>

  <a
    href={place.directionsUrl}
    target="_blank"
    rel="noopener noreferrer"
    class="rounded-xl bg-amber-500 px-5 py-3 text-center font-bold text-slate-950"
  >
    開始導航
  </a>
</div>
```

---

# 八、內容策略

## 內容原則

每篇文章只解決一個主要問題。

錯誤方式：

```text
一篇文章同時寫歷史、停車、美食、攝影、交通、附近景點，
其他頁面再把同樣內容重複一次。
```

正確方式：

```text
停車頁專門解決停車
交通頁專門解決怎麼去
拍照頁專門解決攝影
首頁只做摘要與導流
```

## Markdown與MDX分工

### 使用Markdown

適合：

* 停車攻略
* 交通攻略
* FAQ
* 附近景點
* 無障礙指南
* 一般文字型行程

### 使用MDX

適合：

* 嵌入Google地圖按鈕
* 觀景點比較表
* 路線卡片
* 圖片畫廊
* 攝影機位元件
* 即時影像入口
* 警示資訊元件

Astro目前可用Content Collections的`glob()`載入本地Markdown與MDX檔案，並在建置時產生純靜態路由，很適合這種Git管理的內容站。([Astro 文档][4])

## 不顯示具體核對時間

內容欄位不要加入：

```text
lastCheckedAt
verifiedAt
reviewDataDate
最後核對
最後確認
```

動態資訊改為固定提示：

> 開放狀態、即時路況、訪客評論及導航路線，請以Google地圖顯示為準。

即時景觀則引導至官方望高寮即時影像。([台中市旅游局][5])

---

# 九、內容頁模板

每一篇攻略建議使用相同結構：

```text
H1頁面標題
簡短直接答案
Google地圖按鈕
重點資訊卡
詳細說明
常見錯誤
適合哪些人
相關頁面
FAQ
再次顯示導航按鈕
```

## 停車頁示例

### H1

```text
望高寮夜景公園停車攻略：入口、導航與假日前往建議
```

### 開頭

```text
前往望高寮夜景公園，自駕或騎機車通常較方便。
假日傍晚可能出現停車與進出車流，建議先在Google地圖
確認路況，並避免在彎道或出入口臨時停車。
```

### 內文模組

* Google地圖導航
* 停車區域示意圖
* 入口辨識方式
* 低底盤車提醒
* 機車停放
* 假日建議
* 雨天與夜間駕駛
* 停車場滿位的備案

---

# 十、SEO策略

## 首頁Title

```text
望高寮夜景公園｜停車、導航、即時影像與拍照攻略
```

## 首頁Description

```text
前往望高寮夜景公園前，先查看Google地圖導航、停車方式、
夜景與夕陽觀景位置、即時影像、拍照建議及附近行程。
```

## 關鍵字集群

### 核心景點

```text
望高寮
望高寮夜景
望高寮夜景公園
Wanggaoliao
Wanggaoliao Night View Park
```

### 交通與停車

```text
望高寮停車
望高寮停車場
望高寮怎麼去
望高寮導航
望高寮公車
望高寮計程車
```

### 景觀與攝影

```text
望高寮夕陽
望高寮日落
望高寮拍照
望高寮夜景拍攝
望高寮即時影像
望高寮觀景平台
```

### 台中旅遊

```text
台中夜景
台中約會景點
台中夜景推薦
大肚山夜景
南屯夜景
台中免費景點
```

## SEO用詞策略

標題中建議使用搜尋者更常輸入的：

```text
台中
```

正式地址、政府名稱則使用：

```text
臺中市
```

兩種寫法都可自然出現在正文中，不需要刻意堆疊。

## 內部連結

每篇文章至少連結：

* 一篇交通頁
* 一篇觀景頁
* 一篇行程頁
* Google地圖按鈕

例如停車頁連結：

```text
望高寮怎麼去
夜景公園與觀景平台差別
情侶夜遊路線
```

---

# 十一、結構化資料

首頁使用：

* `TouristAttraction`
* `Place`
* `WebSite`
* `BreadcrumbList`

內容頁使用：

* `Article`
* `BreadcrumbList`
* 適合時使用`FAQPage`

不要放入難以持續維護的：

* Google評分
* Google評論數
* 即時繁忙程度
* 即時開放狀態

## TouristAttraction示例

```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "望高寮夜景公園",
  "alternateName": [
    "Wanggaoliao Night View Park",
    "Wangaoliao Night View Park",
    "東海古堡"
  ],
  "url": "https://wanggaoliao.com/",
  "description": "望高寮夜景公園交通、停車、導航、攝影與周邊行程指南。",
  "isAccessibleForFree": true,
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.143647,
    "longitude": 120.5815564
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "中台路",
    "addressLocality": "南屯區",
    "addressRegion": "臺中市",
    "addressCountry": "TW"
  },
  "hasMap": "https://www.google.com/maps/search/?api=1&query=24.143647%2C120.5815564&query_place_id=ChIJEWgWs_c-aTQRTjmwrsj3UmI"
}
```

---

# 十二、視覺設計

## 設計主題

```text
Blue Hour Taichung
台中藍調夜景
```

## 配色

| 用途    | 色彩        |
| ----- | --------- |
| 深色主背景 | `#081426` |
| 次深色   | `#12233D` |
| 暖色按鈕  | `#F4B544` |
| 淺色背景  | `#F7F5F0` |
| 正文文字  | `#172033` |
| 次要文字  | `#64748B` |
| 邊框    | `#DDE3EA` |

建議首頁Hero與夜景圖庫使用深色，長篇攻略使用淺色背景。

不要整站使用純黑色，否則：

* 長文章閱讀疲勞
* 圖片與文字層次不足
* 容易像活動頁而非旅遊指南
* 白色文字在手機上閱讀壓力較大

## 系統字型

```css
font-family:
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "PingFang TC",
  "Microsoft JhengHei",
  "Noto Sans TC",
  Arial,
  sans-serif;
```

雖然字型堆疊中可保留`Noto Sans TC`作為使用者本機備用字型，但不得從Google Fonts或其他CDN載入。

## UI風格

推薦：

* 大圓角卡片
* 清楚邊框
* 少量陰影
* 大尺寸導航按鈕
* 寬鬆行距
* 清楚層級
* 夜景照片搭配暖色CTA

避免：

* 霓虹燈動畫
* 粒子背景
* 自動播放影片
* 自動播放音樂
* 大量毛玻璃效果
* 過多浮動按鈕
* 首屏載入地圖iframe

---

# 十三、圖片策略

圖片只使用：

1. 自行拍攝照片
2. 獲得明確授權的照片
3. 可商業使用的素材
4. 自製路線圖
5. 自製觀景方向圖
6. 自製插畫

不要直接複製：

* Google地圖使用者照片
* 其他旅遊部落格圖片
* 社群平台未授權照片
* 搜尋引擎圖片結果

## 圖片規格

| 用途     |     比例 |      建議尺寸 |
| ------ | -----: | --------: |
| 首頁Hero |   16:9 | 1920×1080 |
| OG社群圖  | 1.91:1 |  1200×630 |
| 文章封面   |    3:2 |  1200×800 |
| 路線卡片   |    4:3 |   800×600 |
| 手機行程圖  |    1:2 |  800×1600 |
| 觀景差異圖  |   16:9 |  1200×675 |

建議把原始圖片存放在`src/assets/`，使用Astro的`<Image />`或`<Picture />`處理尺寸、格式和CLS；Astro官方也建議本地圖片盡量存放在`src/`，而不是未經處理地放入`public/`。([Astro 文档][6])

---

# 十四、Astro技術架構

## 建立專案

```bash
pnpm create astro@latest wanggaoliao
cd wanggaoliao

pnpm astro add mdx
pnpm astro add sitemap

pnpm add tailwindcss @tailwindcss/vite
pnpm add -D @tailwindcss/typography
```

Tailwind CSS 4目前建議透過官方Vite外掛接入Astro，而非繼續使用已棄用的舊`@astrojs/tailwind`整合。([Astro 文档][7])

## astro.config.mjs

```js
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://wanggaoliao.com",
  output: "static",
  trailingSlash: "always",

  integrations: [
    mdx(),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    layout: "constrained",
  },
});
```

## global.css

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

:root {
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "PingFang TC",
    "Microsoft JhengHei",
    Arial,
    sans-serif;

  color: #172033;
  background: #f7f5f0;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
}

a,
button {
  -webkit-tap-highlight-color: transparent;
}

:focus-visible {
  outline: 3px solid #f4b544;
  outline-offset: 3px;
}
```

---

# 十五、專案目錄

```text
wanggaoliao/
├── public/
│   ├── favicon.svg
│   ├── og-default.jpg
│   ├── robots.txt
│   ├── _headers
│   └── _redirects
├── src/
│   ├── assets/
│   │   ├── hero/
│   │   ├── parking/
│   │   ├── viewpoints/
│   │   ├── itineraries/
│   │   └── nearby/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── QuickFacts.astro
│   │   ├── MapActions.astro
│   │   ├── LazyGoogleMap.astro
│   │   ├── MobileMapBar.astro
│   │   ├── LiveCameraCard.astro
│   │   ├── ViewpointComparison.astro
│   │   ├── RouteCard.astro
│   │   ├── NoticeBox.astro
│   │   ├── FAQList.astro
│   │   └── Breadcrumbs.astro
│   ├── content/
│   │   └── guides/
│   │       ├── night-view.mdx
│   │       ├── sunset.mdx
│   │       ├── parking.mdx
│   │       ├── directions.md
│   │       ├── public-transport.md
│   │       ├── photography.mdx
│   │       ├── facilities.md
│   │       ├── accessibility.md
│   │       └── nearby-attractions.md
│   ├── data/
│   │   ├── place.ts
│   │   ├── navigation.ts
│   │   └── site.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── GuideLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── guides/
│   │   │   └── [...slug].astro
│   │   ├── itineraries/
│   │   ├── en/
│   │   │   └── index.astro
│   │   ├── about.astro
│   │   ├── privacy.astro
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

---

# 十六、Content Collections設定

```ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guides = defineCollection({
  loader: glob({
    base: "./src/content/guides",
    pattern: "**/*.{md,mdx}",
  }),

  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    category: z.enum([
      "夜景",
      "交通",
      "攝影",
      "設施",
      "行程",
      "周邊",
    ]),
    featured: z.boolean().default(false),
    order: z.number().default(999),
    heroImage: z.string().optional(),
    noindex: z.boolean().default(false),
  }),
});

export const collections = {
  guides,
};
```

## Markdown Frontmatter

```md
---
title: "望高寮夜景公園停車攻略"
seoTitle: "望高寮停車場在哪裡？入口、導航與假日前往建議"
description: "整理望高寮夜景公園停車位置、Google地圖導航及夜間駕駛注意事項。"
category: "交通"
featured: true
order: 2
heroImage: "./images/parking.webp"
---

前往望高寮夜景公園時，自駕或騎機車通常較方便。
出發前建議先查看Google地圖路況……
```

---

# 十七、BaseLayout SEO設定

```astro
---
interface Props {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
}

const {
  title,
  description,
  canonical = Astro.url.pathname,
  image = "/og-default.jpg",
  noindex = false,
} = Astro.props;

const canonicalUrl = new URL(canonical, Astro.site);
const imageUrl = new URL(image, Astro.site);
---

<!doctype html>
<html lang="zh-Hant-TW">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />

    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalUrl} />
    <link rel="sitemap" href="/sitemap-index.xml" />

    {noindex && <meta name="robots" content="noindex,nofollow" />}

    <meta property="og:locale" content="zh_TW" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:image" content={imageUrl} />

    <meta name="twitter:card" content="summary_large_image" />
  </head>

  <body>
    <slot />
  </body>
</html>
```

Astro官方Sitemap整合可在靜態建置時自動產生站點地圖，並依賴`site`設定生成正式網址。([Astro 文档][8])

---

# 十八、robots.txt

```text
User-agent: *
Allow: /

Sitemap: https://wanggaoliao.com/sitemap-index.xml
```

## 不需要禁止

* 一般內容頁
* 圖片
* CSS
* JavaScript資源

## 應設為noindex

* 測試頁
* 重複篩選頁
* 尚未完成的英文頁
* 只有模板沒有實質內容的頁面

---

# 十九、Cloudflare Pages部署

Astro靜態網站可直接部署至Cloudflare Pages，不需要Cloudflare Adapter、Pages Functions或資料庫。Cloudflare官方Astro部署指南也是以建置後輸出靜態檔案的方式部署。([Cloudflare Docs][9])

## 部署設定

| 項目                | 設定           |
| ----------------- | ------------ |
| Production branch | `main`       |
| Build command     | `pnpm build` |
| Build output      | `dist`       |
| Root directory    | `/`          |
| Functions         | 不使用          |
| SSR               | 不使用          |
| Adapter           | 不使用          |

## 建議流程

```text
GitHub repository
→ Cloudflare Pages
→ 自動建置
→ pages.dev預覽
→ 綁定Wanggaoliao.com
→ 設定www重新導向
```

## public/_redirects

```text
https://www.wanggaoliao.com/* https://wanggaoliao.com/:splat 301
```

若Cloudflare Pages的網域重新導向規則與此設定衝突，以Cloudflare Dashboard中的Redirect Rules為主。

## public/_headers

```text
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

不要禁止Google地圖frame來源，否則嵌入地圖可能失效。

## 批量網站提醒

Cloudflare Pages官方目前對每個帳號的Pages專案數量設有上限。若未來要用同一帳號批量部署大量景點站，應提早規劃專案分組，或評估Workers Static Assets等方案。([Cloudflare Docs][10])

---

# 二十、效能目標

| 指標                     |       目標 |
| ---------------------- | -------: |
| Lighthouse Performance |      95+ |
| Accessibility          |      95+ |
| SEO                    |      100 |
| CLS                    |    小於0.1 |
| LCP                    |   小於2.5秒 |
| 首頁初始JavaScript         |   越接近0越好 |
| 首屏圖片                   | 約250KB以內 |
| 一般文章圖片總量               | 約1.5MB以內 |

## 效能規則

* Google地圖延後載入
* Hero圖片預載
* 其他圖片懶載入
* 圖片設定寬高
* 不使用React處理普通靜態卡片
* 不載入外部字型
* 不使用影片Hero
* 不使用大型輪播元件
* 不同頁面避免重複載入第三方腳本
* 只在確實需要時使用少量原生JavaScript

---

# 二十一、分析與轉換追蹤

這個網站的核心轉換不是預訂，而是：

```text
Google地圖開啟
Google導航開始
即時影像開啟
停車攻略瀏覽
行程頁瀏覽
分享按鈕點擊
```

建議事件名稱：

```text
maps_place_open
maps_directions_open
live_camera_open
parking_guide_open
viewpoint_comparison_open
itinerary_open
share_click
```

第一階段可使用：

* Google Search Console
* Cloudflare流量統計
* 少量自訂事件分析

不需要：

* 使用者帳號
* Cookie登入
* 個人化推薦
* 行程收藏資料庫
* 即時聊天室

---

# 二十二、信任與合規頁面

## About頁面

應說明：

* 網站目的是提供旅遊規劃資訊
* 網站不負責景點管理
* 即時資訊以Google地圖及相關單位公告為準
* 圖片來源與授權原則
* 聯絡電子郵件

不需要在Hero放置醒目的「非官方網站」警告，但頁尾和About頁應保持身份透明。

## 頁尾文字

```text
Wanggaoliao.com 提供望高寮旅遊、交通與觀景資訊。
開放狀態、路況及導航請以Google地圖顯示為準。
```

## 聯絡方式

```text
hello@wanggaoliao.com
```

不需要聯絡表單，直接使用`mailto:`即可，避免增加後端與垃圾郵件處理成本。

---

# 二十三、首批內容發布順序

## 上線前必須完成

1. 首頁
2. 停車攻略
3. 怎麼去
4. 夜景攻略
5. 夜景公園與觀景平台差別
6. 即時影像頁
7. FAQ
8. 關於頁
9. 隱私權政策
10. 自訂404頁

## 第一輪擴充

11. 夕陽攻略
12. 攝影攻略
13. 公車與無車前往
14. 附近景點
15. 情侶夜遊路線
16. 彩虹村半日路線

## 第二輪擴充

17. 設施與公廁
18. 親子與長者指南
19. 附近美食與宵夜
20. 攝影半日路線
21. 英文核心指南
22. 台中夜景比較頁

---

# 二十四、最重要的原創資產

比大量文章更重要的是以下五項：

## 1. 停車入口示意圖

清楚標示：

* 道路方向
* 停車區域
* 公園入口
* 容易走錯的位置
* 夜間道路提醒

## 2. 兩個觀景點比較圖

一張圖清楚解釋：

```text
哪裡看夕陽
哪裡看城市夜景
兩者之間怎麼移動
```

## 3. 手機攝影機位圖

標示：

* 適合帶入城市背景的位置
* 適合拍人物的位置
* 適合使用長焦的位置
* 不應阻擋的主要通道

## 4. 一張半日行程圖

比例建議1:2，方便手機收藏與社群分享。

## 5. 原創Hero照片

網站能否建立可信度，很大程度取決於是否擁有一張真正屬於自己的望高寮主視覺。

---

# 二十五、不要做的事情

* 不要只做一頁景點簡介
* 不要大量改寫官方介紹
* 不要複製Google評論
* 不要寫死Google評分
* 不要寫死評論數量
* 不要顯示具體核對時間
* 不要使用Google地圖使用者照片
* 不要假裝景點官方網站
* 不要加入無法維護的即時天氣資料
* 不要建立空洞的20個附近美食頁
* 不要使用外部字型
* 不要使用重型前端框架
* 不要立即載入Google地圖iframe
* 不要為了頁數製造重複內容
* 不要上線未完成的多語言頁面

---

# 二十六、最終執行版本

## 品牌

```text
望高寮
WANGGAOLIAO
```

## 網址

```text
https://wanggaoliao.com
```

## 首頁標題

```text
望高寮夜景公園｜停車、導航、即時影像與拍照攻略
```

## 核心CTA

```text
在 Google 地圖查看
開始導航
```

## 首頁核心模組

```text
Hero
快速資訊
出發前先看
夜景公園與觀景平台比較
Google地圖
停車與交通
推薦行程
拍照攻略
附近景點
FAQ
```

## 技術定案

```text
pnpm
Astro
Tailwind CSS 4
Markdown／MDX
Astro Content Collections
Astro Sitemap
Cloudflare Pages
純靜態輸出
系統字型
Google Maps URLs
```

## 網站的真正競爭力

Wanggaoliao.com最值得做深的不是「望高寮是什麼」，而是：

> **停車入口、Google地圖導航、兩個觀景點的差別、即時影像、拍照位置與夜間返程。**

只要這幾項內容清楚、原創、手機友善，Wanggaoliao.com就能比一般景點介紹頁更有實際價值，也更適合作為Google地圖上的景點網站連結。

[1]: https://travel.taichung.gov.tw/zh-tw/attractions/intro/146?utm_source=chatgpt.com "望高寮夜景公園 - 臺中觀光旅遊網"
[2]: https://travel.taichung.gov.tw/zh-tw/attractions/nearbyattractions/146?utm_source=chatgpt.com "望高寮夜景公園-周邊景點"
[3]: https://developers.google.com/maps/documentation/urls/get-started?utm_source=chatgpt.com "Get Started | Maps URLs"
[4]: https://docs.astro.build/en/guides/content-collections/?utm_source=chatgpt.com "Content collections - Astro Docs"
[5]: https://travel.taichung.gov.tw/zh-tw/live-camera/56?utm_source=chatgpt.com "望高寮4K即時影像 - 臺中觀光旅遊網"
[6]: https://docs.astro.build/en/guides/images/?utm_source=chatgpt.com "Images - Astro Docs"
[7]: https://docs.astro.build/en/guides/integrations-guide/tailwind/?utm_source=chatgpt.com "@astrojs/tailwind | Docs"
[8]: https://docs.astro.build/en/guides/integrations-guide/sitemap/?utm_source=chatgpt.com "astrojs/sitemap - Astro Docs"
[9]: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/?utm_source=chatgpt.com "Astro · Cloudflare Pages docs"
[10]: https://developers.cloudflare.com/pages/platform/limits/?utm_source=chatgpt.com "Limits · Cloudflare Pages docs"


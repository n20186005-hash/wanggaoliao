export type LegalSlug = "privacy-policy" | "terms-of-service" | "cookie-settings";
export type LegalLang = "zh" | "en";

type Section = { heading: string; paragraphs?: string[]; bullets?: string[] };
type Page = { title: string; description: string; updated: string; sections: Section[] };

export const legalPages: Record<LegalLang, Record<LegalSlug, Page>> = {
  zh: {
    "privacy-policy": {
      title: "隱私政策", description: "了解望高寮旅遊指南的資料處理方式、第三方服務與隱私選擇。", updated: "2026 年 11 月 17 日",
      sections: [
        { heading: "適用範圍與網站性質", paragraphs: ["本政策適用於 Wanggaoliao.com 的旅遊內容、景點與導覽頁面。本站為獨立的旅遊資訊項目，不提供會員、訂房或線上付款服務。使用外部網站時，請另行閱讀該服務的政策。"] },
        { heading: "可能處理的資料", paragraphs: ["本站不要求註冊，也不主動要求姓名、電話、住址或付款資料。當您瀏覽網站時，託管與安全服務可能處理 IP 位址、瀏覽器類型、裝置與請求資訊，以交付頁面、維護安全、排查問題及統計整體使用情形。", "如果您主動以電子郵件聯繫我們，我們會使用您提供的郵件地址與訊息回覆、更正內容或處理相關要求。請勿在郵件中提供不必要的敏感資料。"] },
        { heading: "分析與使用目的", paragraphs: ["本站可能使用 Cloudflare 的流量、安全與效能工具，以及 Google Search Console 分析搜尋表現。技術紀錄的保存時間及處理方式依相關服務供應商的設定與政策而定。我們不販售訪客個人資料。"] },
        { heading: "外部連結、地圖與影片", paragraphs: ["本站提供 Google Maps、官方旅遊與交通網站等外部連結，部分頁面也可能嵌入地圖、YouTube 影像或即時資訊。啟用或開啟這些服務時，第三方可能取得裝置、網路與 Cookie 資訊，並依各自的隱私政策處理。", "您可參閱 Google 隱私政策：https://policies.google.com/privacy。"] },
        { heading: "Cookie 與選擇", paragraphs: ["本站的基本瀏覽功能不需要您建立帳戶。某些安全、統計或嵌入的第三方功能可能使用 Cookie 或類似技術。您可透過瀏覽器封鎖、清除或限制 Cookie，並查看本站的 Cookie 設定頁以了解選擇與影響。"] },
        { heading: "資料保護與保留", paragraphs: ["我們僅在提供網站、維護安全、處理聯絡要求或遵循適用義務所需的範圍內使用資料。網路傳輸及第三方系統無法保證絕對安全。您可來信要求查詢、更正或刪除您主動提供給我們的聯絡資訊；我們會依可適用規定與實際可控制的資料範圍處理。"] },
        { heading: "兒童隱私", paragraphs: ["本站面向一般旅客，不以兒童為資料蒐集對象，也不主動要求兒童提供個人資訊。"] },
        { heading: "政策更新與聯絡", paragraphs: ["網站功能或資料處理方式如有調整，我們會更新本頁與修訂日期。隱私問題、資料要求與內容更正可寄至 hello@wanggaoliao.com。"] },
      ],
    },
    "terms-of-service": {
      title: "服務條款", description: "使用望高寮獨立旅遊指南前應了解的資訊用途、限制與責任。", updated: "2026 年 11 月 17 日",
      sections: [
        { heading: "服務與接受條款", paragraphs: ["Wanggaoliao.com 提供望高寮及鄰近地點的旅遊、歷史、交通與攝影參考資訊。使用本網站代表您理解這些條款；如不同意，可停止使用。本站不是景點管理單位或政府機關的官方網站。"] },
        { heading: "資訊準確性與現場核實", paragraphs: ["我們努力根據公開資料整理實用內容，但開放時間、票價、交通班次、道路狀況、天候、設施及出入口可能變動。出發前請向管理單位或服務提供者確認，並於現場核實。本站不保證所有資訊即時、完整或適用於每位旅客。"] },
        { heading: "安全與個人責任", paragraphs: ["步道、階梯、觀景邊緣、夜間道路和惡劣天候可能存在風險。請遵守現場標誌、法律與管理規範，評估自己的身體能力與交通安排，照顧同行兒童。本站行程建議不構成安全保證。"] },
        { heading: "第三方服務及連結", paragraphs: ["Google Maps、交通業者、影片平台和其他外部網站由各自提供者營運，其內容、可用性、收費與隱私政策不受本站控制。連結並不代表本站與其存在合作、授權或背書關係。"] },
        { heading: "著作權及合理使用", paragraphs: ["網站文字、設計與編排的權利依適用法律及原權利人而定。照片、地圖、商標及第三方內容的權利屬於各自權利人；不得將本站的署名或來源標示視為額外轉載授權。引用時請保留必要來源資訊，使用第三方素材前自行確認授權條件。"] },
        { heading: "禁止使用方式", bullets: ["不得以違法、誤導或侵害他人權利的方式使用本站。", "不得破壞網站安全、以大量自動請求干擾服務，或冒稱本站為官方管理機構。"] },
        { heading: "責任範圍", paragraphs: ["在適用法律允許範圍內，本站按現況提供資訊，不對因資料變動、服務中斷或依賴旅遊建議所造成的損失承擔保證責任。本條款不排除依法不得排除的消費者或其他權利。"] },
        { heading: "修訂與聯絡", paragraphs: ["我們可能因網站功能與法律要求更新條款，並在本頁標示修訂日期。勘誤、圖片或內容權利問題請聯絡 hello@wanggaoliao.com。"] },
      ],
    },
    "cookie-settings": {
      title: "Cookie 設定", description: "了解本站 Cookie 類型，以及如何在瀏覽器中管理或拒絕非必要追蹤。", updated: "2026 年 11 月 17 日",
      sections: [
        { heading: "Cookie 是什麼？", paragraphs: ["Cookie 是網站或第三方服務可能在瀏覽器保存的小型資料。類似技術也包括本機儲存空間。不同的 Cookie 可能用於基本安全、偏好記錄、使用統計或嵌入媒體。"] },
        { heading: "本站可能涉及的類型", bullets: ["必要功能與安全：託管或防護服務可能使用技術資訊防止濫用、提供頁面。", "統計與效能：託管及分析服務可能提供彙整使用數據，實際是否設定 Cookie 依其部署方式而定。", "第三方嵌入：Google Maps、YouTube 等內容若被載入，可能由該平台設定 Cookie。"] },
        { heading: "管理與拒絕方式", paragraphs: ["您可在瀏覽器的「隱私與安全性」設定中查看網站資料、阻擋第三方 Cookie、清除既有 Cookie，或使用私密瀏覽。不同裝置及瀏覽器須分別設定。封鎖 Cookie 後，嵌入地圖、影片或個人化功能可能受影響。", "本站目前沒有自建的跨服務同意管理平台；本頁不會假裝能關閉第三方網站已設置的 Cookie。若需拒絕特定平台的追蹤，請使用該平台的隱私控制以及瀏覽器設定。"] },
        { heading: "外部服務政策", paragraphs: ["Google 隱私政策：https://policies.google.com/privacy。Cloudflare 隱私政策：https://www.cloudflare.com/privacypolicy/。請以第三方發布的最新版本為準。"] },
        { heading: "更新與問題", paragraphs: ["如本站新增會改變 Cookie 使用方式的功能，我們會更新此頁。問題與更正請來信 hello@wanggaoliao.com。"] },
      ],
    },
  },
  en: {
    "privacy-policy": {
      title: "Privacy Policy", description: "How the Wanggaoliao visitor guide handles technical information, third-party services and privacy choices.", updated: "November 17, 2026",
      sections: [
        { heading: "Scope and website purpose", paragraphs: ["This policy covers Wanggaoliao.com travel guides and attraction pages. We are an independent information project, not a booking, membership or payment service. Third-party websites have their own policies."] },
        { heading: "Information that may be processed", paragraphs: ["We do not require registration or actively request names, telephone numbers, postal addresses or payment details. Hosting and security providers may process IP addresses, browser and device details, and request logs to serve pages, protect the website, diagnose faults and measure aggregate use.", "If you email us voluntarily, we use the address and information you provide to respond, correct an article or address your request. Please avoid sending unnecessary sensitive information."] },
        { heading: "Analytics and purposes", paragraphs: ["We may use Cloudflare traffic, security and performance tools and Google Search Console to understand search performance. Retention and processing of technical logs depend on the relevant provider and configuration. We do not sell visitor personal data."] },
        { heading: "External links, maps and video", paragraphs: ["Our pages link to Google Maps, official tourism and transport sites and may embed maps, YouTube videos or live information. Opening or loading these services may share device, network or cookie information with their operators under their own policies.", "Google's privacy policy is available at https://policies.google.com/privacy."] },
        { heading: "Cookies and your choices", paragraphs: ["You do not need an account to browse. Security, measurement and embedded third-party features may use cookies or similar technology. You can block or clear cookies in your browser and read our Cookie Settings page for practical instructions."] },
        { heading: "Security, retention and requests", paragraphs: ["We use information only as needed to operate the site, maintain security, respond to contact requests or meet applicable obligations. No internet transmission is guaranteed to be completely secure. You can request access, correction or deletion of contact information you supplied to us; we will respond within the limits of applicable law and the data we control."] },
        { heading: "Children", paragraphs: ["The site serves general visitors and does not intentionally solicit personal information from children."] },
        { heading: "Changes and contact", paragraphs: ["If site functions or data practices change, we will update this page and its revision date. Send privacy questions and correction requests to hello@wanggaoliao.com."] },
      ],
    },
    "terms-of-service": {
      title: "Terms of Service", description: "Conditions, limitations and responsibilities when using this independent Wanggaoliao travel guide.", updated: "November 17, 2026",
      sections: [
        { heading: "Service and acceptance", paragraphs: ["Wanggaoliao.com publishes reference information on travel, local history, transport and photography around Wanggaoliao. By using the website you acknowledge these terms. If you disagree, you may stop using it. This is not an official park or government website."] },
        { heading: "Accuracy and on-site verification", paragraphs: ["We work from publicly available references, but hours, admission, services, roads, weather, transport schedules and access points can change. Check with the relevant operator before departure and verify conditions on site. We do not guarantee that every detail is current, complete or suitable for every traveller."] },
        { heading: "Safety and personal responsibility", paragraphs: ["Trails, stairs, lookout edges, night roads and severe weather involve risks. Follow posted signs and applicable rules, assess your own abilities and transport arrangements, and supervise children. Our itineraries do not guarantee safety."] },
        { heading: "Third-party services", paragraphs: ["Google Maps, transport operators, video platforms and linked websites are operated independently. We do not control their content, availability, charges or privacy practices. Links do not imply sponsorship or affiliation."] },
        { heading: "Copyright and reuse", paragraphs: ["Rights to text, layout and design are governed by applicable law and the respective owners. Photographs, maps, marks and third-party materials remain with their owners. A credit or source link is not a separate licence to redistribute an asset. Check the applicable permission before reuse."] },
        { heading: "Prohibited conduct", bullets: ["Do not use this website unlawfully, deceptively or to infringe others' rights.", "Do not disrupt site security with abusive automated requests or impersonate an official authority using our content."] },
        { heading: "Liability", paragraphs: ["To the extent permitted by applicable law, information is supplied as-is, without a guarantee against changes, outages or losses arising from reliance on travel recommendations. Nothing here excludes rights that cannot legally be excluded."] },
        { heading: "Updates and contact", paragraphs: ["Terms may change with site features and legal requirements. The revision date appears on this page. For corrections or rights enquiries, email hello@wanggaoliao.com."] },
      ],
    },
    "cookie-settings": {
      title: "Cookie Settings", description: "Cookie categories and practical options for managing browser storage and third-party tracking.", updated: "November 17, 2026",
      sections: [
        { heading: "What are cookies?", paragraphs: ["Cookies are small pieces of information that a website or third-party service may store in your browser. Similar technologies include local storage. They can help with security, preferences, analytics and embedded media."] },
        { heading: "Possible categories", bullets: ["Essential and security: hosting or protection services may use technical data to deliver pages and prevent abuse.", "Analytics and performance: hosting and measurement services may provide aggregate statistics; whether they place cookies depends on how they are configured.", "Third-party embeds: Google Maps, YouTube and similar services may set cookies when their content loads."] },
        { heading: "How to manage or refuse cookies", paragraphs: ["Use your browser's Privacy and Security settings to inspect site data, block third-party cookies, clear existing cookies or use private browsing. Set preferences separately for each browser and device. Blocking cookies may affect embedded maps, videos or personalised features.", "We do not currently offer an in-house consent-management platform. This page does not claim to disable cookies already set by other websites. Use the relevant provider's privacy controls and your browser settings to restrict their tracking."] },
        { heading: "Third-party policies", paragraphs: ["Google: https://policies.google.com/privacy. Cloudflare: https://www.cloudflare.com/privacypolicy/. Please consult each provider's latest published policy."] },
        { heading: "Updates and questions", paragraphs: ["We will update this page if new site features change cookie use. Send questions or corrections to hello@wanggaoliao.com."] },
      ],
    },
  },
};

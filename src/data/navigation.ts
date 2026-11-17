export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "夜景", href: "/night-view/" },
  { label: "停車", href: "/parking/" },
  { label: "怎麼去", href: "/directions/" },
  { label: "拍照", href: "/photography/" },
  { label: "四季", href: "/seasons/" },
  { label: "附近景點", href: "/nearby-attractions/" },
];

export const mainNavEn: NavItem[] = [
  { label: "Night View", href: "/en/night-view/" },
  { label: "Parking", href: "/en/parking/" },
  { label: "Getting There", href: "/en/directions/" },
  { label: "Photography", href: "/en/photography/" },
  { label: "Seasons", href: "/en/seasons/" },
  { label: "Nearby", href: "/en/nearby-attractions/" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "觀景攻略",
    items: [
      { label: "夜景攻略", href: "/night-view/" },
      { label: "夕陽攻略", href: "/sunset/" },
      { label: "夜景公園與觀景平台差別", href: "/park-vs-viewpoint/" },
      { label: "拍照攻略", href: "/photography/" },
      { label: "即時影像", href: "/live-camera/" },
      { label: "四季游覽指南", href: "/seasons/" },
    ],
  },
  {
    title: "交通與設施",
    items: [
      { label: "停車攻略", href: "/parking/" },
      { label: "怎麼去", href: "/directions/" },
      { label: "搭公車前往", href: "/public-transport/" },
      { label: "廁所、步道與設施", href: "/facilities/" },
      { label: "周邊服務類型", href: "/visitor-services/" },
      { label: "無障礙與長者指南", href: "/accessibility/" },
    ],
  },
  {
    title: "行程與周邊",
    items: [
      { label: "情侶約會路線", href: "/itineraries/date-night/" },
      { label: "台中半日行程", href: "/itineraries/half-day/" },
      { label: "攝影半日路線", href: "/itineraries/photography/" },
      { label: "附近景點", href: "/nearby-attractions/" },
      { label: "彩虹村", href: "/attractions/rainbow-village/" },
      { label: "知高圳步道", href: "/attractions/zhigao-trail/" },
      { label: "追分車站", href: "/attractions/zhuifen-station/" },
      { label: "聚奎居", href: "/attractions/jukuiju/" },
      { label: "筏子溪水岸", href: "/attractions/fazi-riverside/" },
      { label: "成功車站", href: "/attractions/chenggong-station/" },
      { label: "附近美食與宵夜", href: "/nearby-food/" },
    ],
  },
  {
    title: "網站資訊",
    items: [
      { label: "常見問題", href: "/faq/" },
      { label: "歷史與責任", href: "/etiquette/" },
      { label: "關於本站", href: "/about/" },
      { label: "English Guide", href: "/en/" },
    ],
  },
];

export const footerNavEn: { title: string; items: NavItem[] }[] = [
  {
    title: "Viewing Guides",
    items: [
      { label: "Night View", href: "/night-view/" },
      { label: "Sunset", href: "/sunset/" },
      { label: "Night Park vs Lookout", href: "/park-vs-viewpoint/" },
      { label: "Photography", href: "/photography/" },
      { label: "Live Camera", href: "/live-camera/" },
      { label: "Four Seasons", href: "/seasons/" },
    ],
  },
  {
    title: "Transport & Facilities",
    items: [
      { label: "Parking", href: "/parking/" },
      { label: "Getting There", href: "/directions/" },
      { label: "By Bus", href: "/public-transport/" },
      { label: "Restrooms & Trails", href: "/facilities/" },
      { label: "Visitor Services", href: "/visitor-services/" },
      { label: "Accessibility", href: "/accessibility/" },
    ],
  },
  {
    title: "Itineraries & Nearby",
    items: [
      { label: "Date Night", href: "/itineraries/date-night/" },
      { label: "Half-Day Trip", href: "/itineraries/half-day/" },
      { label: "Photo Route", href: "/itineraries/photography/" },
      { label: "Nearby Attractions", href: "/nearby-attractions/" },
      { label: "Nearby Food", href: "/nearby-food/" },
    ],
  },
  {
    title: "Site Info",
    items: [
      { label: "FAQ", href: "/faq/" },
      { label: "History & Responsibility", href: "/etiquette/" },
      { label: "About", href: "/about/" },
      { label: "中文指南", href: "/" },
    ],
  },
];

// English navigation must never lead visitors back to Chinese-only guides.
for (const group of footerNavEn) {
  for (const item of group.items) {
    if (item.href.startsWith("/") && item.href !== "/") item.href = `/en${item.href}`;
  }
}

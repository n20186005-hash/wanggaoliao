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
      { label: "附近美食與宵夜", href: "/nearby-food/" },
    ],
  },
  {
    title: "網站資訊",
    items: [
      { label: "常見問題", href: "/faq/" },
      { label: "歷史與責任", href: "/etiquette/" },
      { label: "關於本站", href: "/about/" },
      { label: "隱私權政策", href: "/privacy/" },
      { label: "English Guide", href: "/en/" },
    ],
  },
];

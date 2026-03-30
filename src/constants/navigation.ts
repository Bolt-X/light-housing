export interface NavigationItem {
  title: string;
  url: string;
  sub_items?: NavigationItem[];
}

export const NAVIGATION_DATA: NavigationItem[] = [
  { title: 'TRANG CHỦ', url: '/' },
  { title: 'GIỚI THIỆU', url: '#' },
  {
    title: 'DỰ ÁN',
    url: '#',
    sub_items: [
      {
        title: 'Nhà ở thương mại',
        url: '#',
        sub_items: [{ title: 'LH NHA TRANG', url: '#' }],
      },
      {
        title: 'Nhà ở xã hội',
        url: '#',
        sub_items: [
          { title: 'LH HẢI PHÒNG', url: '#' },
          { title: 'LH QUẢNG TRỊ', url: '#' },
          { title: 'LH HUẾ', url: '#' },
        ],
      },
    ],
  },
  { title: 'CẨM NANG MUA NHÀ QUỐC DÂN', url: '#' },
  {
    title: 'TIN TỨC',
    url: '#',
    sub_items: [
      { title: 'ĐỐI TÁC', url: '#' },
      { title: 'TUYỂN DỤNG', url: '#' },
      { title: 'LIÊN HỆ', url: '#' },
    ],
  },
];

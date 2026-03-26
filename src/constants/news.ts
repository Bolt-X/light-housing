export interface NewsItem {
  image: string;
  category: string;
  title: string;
  description: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    image: 'https://c.animaapp.com/Bhe9g9ou/img/image-9@2x.png',
    category: 'Quy hoạch',
    title: 'Chính sách mới về nhà ở xã hội',
    description:
      'Nhà ở xã hội thường có giá thấp hơn so với các loại nhà ở khác, chính sách hỗ trợ mua nhà ở xã hội là phương án giúp người dân sớm có nhà nhưng phải đáp ứng những điều kiện và phải có giấy tờ chứng minh.',
  },
  {
    image: 'https://c.animaapp.com/Bhe9g9ou/img/image-10@2x.png',
    category: 'Phát triển kinh tế',
    title: 'Xu hướng căn hộ giá hợp lý tại đô thị lớn',
    description:
      'Nhà ở xã hội thường có giá thấp hơn so với các loại nhà ở khác, chính sách hỗ trợ mua nhà ở xã hội là phương án giúp người dân sớm có nhà nhưng phải đáp ứng những điều kiện và phải có giấy tờ chứng minh.',
  },
  {
    image: 'https://c.animaapp.com/Bhe9g9ou/img/image-11@2x.png',
    category: 'Tin tức dự án',
    title: 'Người trẻ nên mua nhà hay thuê nhà?',
    description:
      'Nhà ở xã hội thường có giá thấp hơn so với các loại nhà ở khác, chính sách hỗ trợ mua nhà ở xã hội là phương án giúp người dân sớm có nhà nhưng phải đáp ứng những điều kiện và phải có giấy tờ chứng minh.',
  },
  {
    image: 'https://c.animaapp.com/Bhe9g9ou/img/image-12@2x.png',
    category: 'Hạ tầng giao thông',
    title: 'Thị trường bất động sản năm 2025 có gì thay đổi?',
    description:
      'Nhà ở xã hội thường có giá thấp hơn so with các loại nhà ở khác, chính sách hỗ trợ mua nhà ở xã hội là phương án giúp người dân sớm có nhà nhưng phải đáp ứng những điều kiện và phải có giấy tờ chứng minh.',
  },
];

export const NEWS_CONTENT = {
  subtitle: 'TIN TỨC THỊ TRƯỜNG',
  title: 'Thông tin mới nhất về thị trường bất động sản',
  moreButton: 'XEM THÊM TIN TỨC',
};

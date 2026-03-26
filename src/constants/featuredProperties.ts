export interface FeatureProperty {
  id: string;
  title: string;
  description: string;
  image: string;
  imagePosition: 'top' | 'bottom';
}

export const FEATURED_PROPERTIES: FeatureProperty[] = [
  {
    id: '01',
    title: 'Quy hoạch xanh hài hòa',
    description:
      'Dự án được phát triển với không gian sống cân bằng, cảnh quan xanh và tiện ích đồng bộ, mang đến môi trường sống trong lành.',
    image: '/assets/images/feature_1.png',
    imagePosition: 'top',
  },
  {
    id: '02',
    title: 'Thiết kế tối ưu bền vững',
    description:
      'Không gian được tối ưu công năng, ánh sáng và thông gió tự nhiên, giúp nâng cao trải nghiệm sống và giá trị lâu dài.',
    image: '/assets/images/feature_2.png',
    imagePosition: 'bottom',
  },
  {
    id: '03',
    title: 'Cộng đồng sống văn minh',
    description:
      'Hướng đến cộng đồng cư dân hiện đại, gắn kết và tích cực, nơi mỗi người đều cảm thấy thoải mái và thuộc về.',
    image: '/assets/images/feature_3.png',
    imagePosition: 'top',
  },
  {
    id: '04',
    title: 'Giá trị tương lai vững bền',
    description:
      'Không chỉ đáp ứng nhu cầu an cư hiện tại, mỗi dự án còn mở ra giá trị bền vững theo thời gian.',
    image: '/assets/images/feature_4.png',
    imagePosition: 'bottom',
  },
  {
    id: '05',
    title: 'Tiên phong nhà ở quốc dân',
    description:
      'Dùng tư duy tối ưu để tạo ra những giá trị thiết thực, đặt ra một chuẩn mực mới cho chất lượng sống.',
    image: '/assets/images/feature_5.png',
    imagePosition: 'top',
  },
];

export const FEATURED_PROPERTIES_CONTENT = {
  subtitle:
    'CÙNG LIGHT HOUSING, HÀNH TRÌNH AN CƯ TRỞ NÊN NHẸ NHÀNG VÀ VỮNG TÂM HƠN',
  title: 'Một khởi đầu an cư đang dần hiện hữu trong tầm tay.',
};

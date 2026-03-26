export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const GREEN_FREQ_FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: 'Dải tần Xanh Kiến trúc',
    description:
      'Tần số xanh bắt đầu từ không gian sống. Light Housing tối ưu layout, tận dụng ánh sáng và thông gió tự nhiên, nâng cao hiệu quả sử dụng và tiết kiệm năng lượng.',
    image: '/assets/images/step_1.svg',
  },
  {
    id: 2,
    title: 'Dải tần Xanh Trải nghiệm',
    description:
      'Hệ tiện ích được lựa chọn có chủ đích, tập trung vào nhu cầu thiết yếu hằng ngày. Không gian cộng đồng, khu vui chơi và mảng xanh được tổ chức như những "điểm chạm" giúp cư dân kết nối, thư giãn và tái tạo năng lượng.',
    image: '/assets/images/step_2.svg',
  },
  {
    id: 3,
    title: 'Dải tần Xanh Vận hành',
    description:
      'Tần số xanh được duy trì qua hệ vận hành thông minh, tối ưu và tiết kiệm. Số hóa quản lý giúp tinh gọn quy trình, giảm chi phí và hạn chế lãng phí, đồng thời hướng đến một đời sống ổn định, hiệu quả và bền vững.',
    image: '/assets/images/step_3.svg',
  },
  {
    id: 4,
    title: 'Dải tần Xanh Đồng hành',
    description:
      '"Tần số xanh" không chỉ trong không gian sống mà còn trong hành trình sở hữu. Pháp lý minh bạch, quy trình rõ ràng và tài chính linh hoạt giúp việc an cư trở nên nhẹ nhàng, bền vững hơn.',
    image: '/assets/images/step_4.svg',
  },
];

export const GREEN_FREQ_CONTENT = {
  subtitle: 'Kiên Định Với Chất Sống',
  title: 'Tần Số Xanh',
  description:
    'Light Housing là thương hiệu phát triển bất động sản quốc dân, tập trung vào các giải pháp nhà ở phù hợp với nhu cầu an cư thực của người trẻ và gia đình đô thị. Chúng tôi tin rằng hạnh phúc không bắt đầu từ những điều xa vời, mà từ một khởi đầu ổn định và vững tâm.',
};

export interface Project {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
  type?: (typeof PROJECT_TYPE)[keyof typeof PROJECT_TYPE];
}

export const PROJECT_TYPE = {
  COMMERCIAL: 'Nhà ở thương mại',
  SOCIAL: 'Nhà ở xã hội',
} as const;

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    year: '2026',
    title: 'Light Housing Nha Trang',
    description:
      'Mang tinh thần phóng khoáng của thành phố biển, dự án kiến tạo một chuẩn mực mới cho phong cách “sống sang – sống đẹp” tại phía Nam Nha Trang. Không gian được kiến tạo với tầm nhìn đa tầng hiếm có, giao hòa giữa biển, núi và sông, tạo nên một tổng thể khoáng đạt và giàu cảm hứng. Mỗi trải nghiệm sống được nâng tầm qua sự tinh tế trong thiết kế và chất lượng hoàn thiện, mở ra nhịp sống hiện đại, năng động. ',
    image: '/assets/images/project_nha_trang.jpg',
    imagePosition: 'left',
    type: PROJECT_TYPE.COMMERCIAL,
  },
  {
    id: 2,
    year: '2026',
    title: 'Eco Hill (Phường Thủy Xuân, TP. Huế)',
    description:
      'Tọa lạc tại Thủy Xuân, kề cận dòng sông Hương êm đềm, Eco Hill mở ra một không gian sống tĩnh tại và giàu chiều sâu. Địa hình thoải đồi đặc trưng tạo nên nhịp điệu cảnh quan riêng biệt, đồng thời mang đến nền đất cao ráo, ổn định, hạn chế tác động của ngập lụt. Trên nền cảnh quan ấy, dự án hướng đến một chuẩn sống chất lượng cao, nơi sự an yên, riêng tư và bền vững được nâng niu như những giá trị cốt lõi cho hành trình an cư lâu dài.',
    image: '/assets/images/project_eco_hill.jpg',
    imagePosition: 'right',
    type: PROJECT_TYPE.SOCIAL,
  },
  {
    id: 3,
    year: '2026',
    title: 'Light Housing Hương Sơ',
    description:
      'Nép mình trong nhịp sống hiền hòa của Hương Sơ, dự án gợi mở một không gian an cư bình dị và lắng đọng. Không cầu kỳ hay phô trương, mọi trải nghiệm sống được giữ ở trạng thái nhẹ nhàng và vừa vặn, đủ để mỗi ngày trôi qua trong sự an yên, quen thuộc.',
    image: '/assets/images/project_huong_so.jpg',
    imagePosition: 'left',
    type: PROJECT_TYPE.SOCIAL,
  },
  {
    id: 4,
    year: '2026',
    title: 'Light Housing Quảng Trị ',
    description:
      'Mang âm hưởng trầm tĩnh của vùng đất Quảng Trị, dự án mở ra một không gian an cư đậm chất điềm nhiên và bền bỉ. Nhịp sống được nâng niu trong sự êm đềm và vững vàng, nơi mỗi khoảnh khắc đều lắng lại trong cảm giác an tâm và gắn bó. Từng đường nét không gian được chắt lọc tinh giản, kiến tạo nên một chuẩn sống bền vững, lặng lẽ tích lũy giá trị theo thời gian.',
    image: '/assets/images/project_quang_tri.jpg',
    imagePosition: 'right',
    type: PROJECT_TYPE.SOCIAL,
  },
  {
    id: 5,
    year: '2026',
    title: 'Coming soon',
    description: '',
    image: '/assets/images/project_coming_soon.jpg',
    imagePosition: 'left',
  },
];

export const PROJECTS_CONTENT = {
  subtitle: 'DỰ ÁN CỦA CHÚNG TÔI',
  title: 'Khám phá những ý tưởng và thiết kế hiện đại cùng Light Housing',
};

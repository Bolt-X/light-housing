export interface ProjectDetail {
  label: string;
  value: string;
  isSuccess: boolean;
}

export interface DevelopmentProject {
  id: number;
  name: string;
  position: { top: string; left: string };
  details: ProjectDetail[];
}

export const DEVELOPMENT_PROJECTS: DevelopmentProject[] = [
  {
    id: 4,
    name: 'Light Housing Hải Phòng',
    position: { top: '18%', left: '35%' },
    details: [
      { label: 'Vị trí', value: 'Hải Phòng', isSuccess: false },
      { label: 'Diện tích ô đất', value: '15000 m2', isSuccess: false },
      { label: 'Mật độ xây dựng', value: '35%', isSuccess: false },
      { label: 'Loại dự án', value: 'Khu đô thị phức hợp', isSuccess: false },
      {
        label: 'Tình trạng bất động sản',
        value: 'Sắp ra mắt',
        isSuccess: true,
      },
      { label: 'Số tầng', value: '25', isSuccess: false },
      { label: 'Số căn', value: '1200', isSuccess: false },
      { label: 'Diện tích hầm', value: '10000 m2', isSuccess: false },
    ],
  },
  {
    id: 1,
    name: 'Light Housing Huế',
    position: { top: '40%', left: '54%' },
    details: [
      { label: 'Vị trí', value: 'Bàu Vá Huế', isSuccess: false },
      { label: 'Diện tích ô đất', value: '8652 m2', isSuccess: false },
      { label: 'Mật độ xây dựng', value: '40%', isSuccess: false },
      { label: 'Loại dự án', value: 'Nhà ở quốc dân', isSuccess: false },
      {
        label: 'Tình trạng bất động sản',
        value: 'Đã thi công phần móng',
        isSuccess: true,
      },
      { label: 'Số tầng', value: '12', isSuccess: false },
      { label: 'Số căn', value: '462', isSuccess: false },
      { label: 'Diện tích hầm', value: '5138 m2', isSuccess: false },
    ],
  },
  {
    id: 3,
    name: 'Light Housing Nha Trang',
    position: { top: '55%', left: '62%' },
    details: [
      { label: 'Vị trí', value: 'Nha Trang', isSuccess: false },
      { label: 'Diện tích ô đất', value: '10000 m2', isSuccess: false },
      { label: 'Mật độ xây dựng', value: '35%', isSuccess: false },
      { label: 'Loại dự án', value: 'Nhà ở thương mại', isSuccess: false },
      {
        label: 'Tình trạng bất động sản',
        value: 'Chuẩn bị thi công',
        isSuccess: true,
      },
      { label: 'Số tầng', value: '25', isSuccess: false },
      { label: 'Số căn', value: '800', isSuccess: false },
      { label: 'Diện tích hầm', value: '8000 m2', isSuccess: false },
    ],
  },
  {
    id: 2,
    name: 'Light Housing TP. Hồ Chí Minh',
    position: { top: '68%', left: '40%' },
    details: [
      { label: 'Vị trí', value: 'Đông Hà, TP. Hồ Chí Minh ', isSuccess: false },
      { label: 'Diện tích ô đất', value: '6400 m2', isSuccess: false },
      { label: 'Mật độ xây dựng', value: '42%', isSuccess: false },
      { label: 'Loại dự án', value: 'Khu dân cư', isSuccess: false },
      {
        label: 'Tình trạng bất động sản',
        value: 'Đang triển khai',
        isSuccess: true,
      },
      { label: 'Số tầng', value: '10', isSuccess: false },
      { label: 'Số căn', value: '320', isSuccess: false },
      { label: 'Diện tích hầm', value: '4000 m2', isSuccess: false },
    ],
  },
];

export const DEVELOPMENT_CONTENT = {
  subtitle: 'DẤU ẤN PHÁT TRIỂN',
  title: 'Hành trình kiến tạo trải dài khắp Việt Nam',
  description:
    'Từng bước mở rộng mạng lưới trên các đô thị giàu tiềm năng, chúng tôi hiện phát triển 2 dự án tại Huế, 1 dự án tại Quảng Trị, 1 dự án tại Nha Trang và 1 dự án tại Hải Phòng sắp ra mắt. Mỗi điểm chấm trên bản đồ không chỉ đại diện cho một dự án, mà còn là dấu mốc cho hành trình kiến tạo những không gian sống chất lượng, phù hợp với nhu cầu an cư thực tế và định hướng phát triển bền vững tại nhiều khu vực trên cả nước.',
  viewDetails: 'Xem chi tiết',
};

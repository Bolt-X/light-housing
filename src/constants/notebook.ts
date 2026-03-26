export interface NotebookStep {
  id: number;
  title: string;
}

export const NOTEBOOK_STEPS: NotebookStep[] = [
  { id: 1, title: 'Tìm hiểu dự án' },
  { id: 2, title: 'Chuẩn bị hồ sơ' },
  { id: 3, title: 'Nộp hồ sơ' },
  { id: 4, title: 'Xét duyệt' },
  { id: 5, title: 'Ký kết hợp đồng' },
];

export const NOTEBOOK_CONTENT = {
  subtitle: 'CẨM NANG MUA NHÀ',
  title: 'Hành trình sở hữu ngôi nhà đầu tiên',
};

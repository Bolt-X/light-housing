'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = (): React.ReactNode => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      year: '2025',
      title: 'Nhà ở thương mại Nha Trang',
      description:
        'Mang tinh thần phóng khoáng của thành phố biển, dự án kiến tạo một chuẩn mực mới cho phong cách “sống sang – sống đẹp” tại phía Nam Nha Trang. Không gian được kiến tạo với tầm nhìn đa tầng hiếm có, giao hòa giữa biển, núi và sông, tạo nên một tổng thể khoáng đạt và giàu cảm hứng. Mỗi trải nghiệm sống được nâng tầm qua sự tinh tế trong thiết kế và chất lượng hoàn thiện, mở ra nhịp sống hiện đại, năng động. ',
      image: '/assets/images/project_nha_trang.jpg',
      imagePosition: 'left',
    },
    {
      id: 2,
      year: '2025',
      title: 'Light Housing Eco Hill (Phường Thủy Xuân, TP. Huế)',
      description:
        'Tọa lạc tại Thủy Xuân, kề cận dòng sông Hương êm đềm, Eco Hill mở ra một không gian sống tĩnh tại và giàu chiều sâu. Địa hình thoải đồi đặc trưng tạo nên nhịp điệu cảnh quan riêng biệt, đồng thời mang đến nền đất cao ráo, ổn định, hạn chế tác động của ngập lụt. Trên nền cảnh quan ấy, dự án hướng đến một chuẩn sống chất lượng cao, nơi sự an yên, riêng tư và bền vững được nâng niu như những giá trị cốt lõi cho hành trình an cư lâu dài .',
      image: '/assets/images/project_eco_hill.jpg',
      imagePosition: 'right',
    },
    {
      id: 3,
      year: '2025',
      title: 'Light Housing Hương Sơ',
      description:
        'Nép mình trong nhịp sống hiền hòa của Hương Sơ, dự án gợi mở một không gian an cư bình dị và lắng đọng. Không cầu kỳ hay phô trương, mọi trải nghiệm sống được giữ ở trạng thái nhẹ nhàng và vừa vặn, đủ để mỗi ngày trôi qua trong sự an yên, quen thuộc.',
      image: '/assets/images/project_huong_so.jpg',
      imagePosition: 'left',
    },
    {
      id: 4,
      year: '2025',
      title: 'Light Housing Quảng Trị ',
      description:
        'Mang âm hưởng trầm tĩnh của vùng đất Quảng Trị, dự án mở ra một không gian an cư đậm chất điềm nhiên và bền bỉ. Nhịp sống được nâng niu trong sự êm đềm và vững vàng, nơi mỗi khoảnh khắc đều lắng lại trong cảm giác an tâm và gắn bó. Từng đường nét không gian được chắt lọc tinh giản, kiến tạo nên một chuẩn sống bền vững, lặng lẽ tích lũy giá trị theo thời gian.',
      image: '/assets/images/project_quang_tri.jpg',
      imagePosition: 'right',
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

  useGSAP(
    () => {
      /*
      const projectItems = gsap.utils.toArray('.project-item');
      projectItems.forEach((item: any) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50,
          },
          {
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'bottom 50%',
              scrub: 1,
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
          },
        );
      });
      */
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col items-center gap-10 py-10 xl:gap-[60px] xl:py-16 2xl:py-[100px]"
    >
      <div className="container flex w-full flex-col items-center gap-4 md:gap-10">
        <div className="flex w-full flex-col items-center gap-2 xl:gap-3">
          <p className="section-subtitle">DỰ ÁN CỦA CHÚNG TÔI</p>

          <p className="section-title text-center text-brand-dark">
            Khám phá những ý tưởng và thiết kế hiện đại cùng Light Housing
          </p>
        </div>
      </div>

      <div className="container flex w-full flex-col items-center">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-item flex w-full flex-col items-stretch transition-all md:h-[420px] md:flex-row lg:h-[480px] xl:h-[560px] 2xl:h-[640px] ${
              project.imagePosition === 'right' ? 'md:flex-row-reverse' : ''
            }`}
          >
            <ImageBlock image={project.image} />
            <ContentBlock
              year={project.year}
              title={project.title}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ContentBlock = ({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center gap-4 py-12 md:gap-7 md:px-10 md:py-0 3xl:px-24">
      {/* <div className="relative hidden h-10 w-[3px] bg-brand-50 xl:block" /> */}

      <div className="relative flex w-full flex-col items-center gap-2 xl:gap-3">
        <div className="text-sm font-normal text-brand-dark xl:text-base">
          {year}
        </div>

        <Link
          href={'#'}
          className="group relative flex items-center justify-center text-brand-50 transition-all hover:text-brand-50/80"
        >
          <span className="text-center text-lg font-bold leading-tight transition-all duration-300 group-hover:underline lg:text-[22px] 2xl:text-[26px]">
            {title}
          </span>
          <ChevronRight className="absolute -right-6 size-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:-right-8 lg:size-6 2xl:size-7" />
        </Link>
      </div>

      <div className="relative flex w-full flex-col items-center gap-6">
        <p className="text-center text-sm leading-relaxed text-[#5F5F74] lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const ImageBlock = ({ image }: { image: string }) => (
  <div className="relative min-h-[300px] w-full md:min-h-0 md:w-1/2">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
  </div>
);

export const RealEstateNewsSection = (): React.ReactNode => {
  const projects = [
    {
      id: 1,
      year: '2025',
      title: 'Nhà Ở Quốc Dân Bàu Vá',
      description:
        'Chúng tôi hướng đến việc mang lại những giải pháp nhà ở phù hợp với khả năng tài chính của người trẻ và các gia đình hiện đại. Thấu hiểu rằng hành trình sở hữu ngôi nhà đầu tiên luôn đi kèm nhiều áp lực về tài chính và thông tin, chúng tôi tập trung kiến tạo các dự án có mức giá hợp lý, pháp lý rõ ràng và quy trình minh bạch. Mỗi sản phẩm không chỉ đáp ứng nhu cầu an cư cơ bản mà còn tạo nền tảng ổn định cho tương lai lâu dài. Với định hướng đó, việc sở hữu nhà không còn là mục tiêu xa vời, mà trở thành lựa chọn dễ dàng và thực tế hơn cho nhiều người.',
      image: 'https://c.animaapp.com/Bhe9g9ou/img/image-5.png',
      imagePosition: 'left',
    },
    {
      id: 2,
      year: '2025',
      title: 'Light House Nha Trang',
      description:
        'Chúng tôi hướng đến việc mang lại những giải pháp nhà ở phù hợp với khả năng tài chính của người trẻ và các gia đình hiện đại. Thấu hiểu rằng hành trình sở hữu ngôi nhà đầu tiên luôn đi kèm nhiều áp lực về tài chính và thông tin, chúng tôi tập trung kiến tạo các dự án có mức giá hợp lý, pháp lý rõ ràng và quy trình minh bạch. Mỗi sản phẩm không chỉ đáp ứng nhu cầu an cư cơ bản mà còn tạo nền tảng ổn định cho tương lai lâu dài. Với định hướng đó, việc sở hữu nhà không còn là mục tiêu xa vời, mà trở thành lựa chọn dễ dàng và thực tế hơn cho nhiều người.',
      image: 'https://c.animaapp.com/Bhe9g9ou/img/image-6.png',
      imagePosition: 'right',
    },
    {
      id: 3,
      year: '2025',
      title: 'Light House Huế',
      description:
        'Chúng tôi hướng đến việc mang lại những giải pháp nhà ở phù hợp với khả năng tài chính của người trẻ và các gia đình hiện đại. Thấu hiểu rằng hành trình sở hữu ngôi nhà đầu tiên luôn đi kèm nhiều áp lực về tài chính và thông tin, chúng tôi tập trung kiến tạo các dự án có mức giá hợp lý, pháp lý rõ ràng và quy trình minh bạch. Mỗi sản phẩm không chỉ đáp ứng nhu cầu an cư cơ bản mà còn tạo nền tảng ổn định cho tương lai lâu dài. Với định hướng đó, việc sở hữu nhà không còn là mục tiêu xa vời, mà trở thành lựa chọn dễ dàng và thực tế hơn cho nhiều người.',
      image: 'https://c.animaapp.com/Bhe9g9ou/img/image-7.png',
      imagePosition: 'left',
    },
    {
      id: 4,
      year: '2025',
      title: 'Nhà Ở Quốc Dân Hải Phòng',
      description:
        'Chúng tôi hướng đến việc mang lại những giải pháp nhà ở phù hợp với khả năng tài chính của người trẻ và các gia đình hiện đại. Thấu hiểu rằng hành trình sở hữu ngôi nhà đầu tiên luôn đi kèm nhiều áp lực về tài chính và thông tin, chúng tôi tập trung kiến tạo các dự án có mức giá hợp lý, pháp lý rõ ràng và quy trình minh bạch. Mỗi sản phẩm không chỉ đáp ứng nhu cầu an cư cơ bản mà còn tạo nền tảng ổn định cho tương lai lâu dài. Với định hướng đó, việc sở hữu nhà không còn là mục tiêu xa vời, mà trở thành lựa chọn dễ dàng và thực tế hơn cho nhiều người.',
      image: 'https://c.animaapp.com/Bhe9g9ou/img/image-8.png',
      imagePosition: 'right',
    },
  ];

  const ContentBlock = ({
    year,
    title,
    description,
  }: {
    year: string;
    title: string;
    description: string;
  }) => (
    <div className="relative flex flex-1 flex-col items-center justify-center gap-4 py-8 md:gap-6 md:px-20 md:py-0">
      <div className="bg-primitives-primary-color-brand-50 relative h-10 w-[3px]" />

      <div className="relative flex w-full flex-col items-center gap-2 md:gap-3">
        <div className="text-sm font-semibold text-brand md:text-base">
          {year}
        </div>

        <p className="max-w-md text-center text-xl font-bold leading-tight text-brand md:text-3xl">
          {title}
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center gap-6">
        <p className="max-w-lg text-center text-sm leading-relaxed text-gray-600 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );

  const ImageBlock = ({ image }: { image: string }) => (
    <div className="relative w-full md:w-1/2">
      <div
        className="relative h-[300px] w-full bg-cover bg-center md:h-[500px]"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );

  return (
    <div className="relative flex w-full flex-col items-center gap-10 py-16 md:gap-[60px] md:py-[100px]">
      <div className="flex w-full flex-col items-center gap-4 px-6 md:gap-10 md:px-20">
        <div className="flex w-full flex-col items-center gap-2 md:gap-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 md:text-sm">
            DỰ ÁN CỦA CHÚNG TÔI
          </p>

          <p className="max-w-2xl text-center text-xl font-bold leading-tight text-brand md:text-3xl">
            Khám phá những ý tưởng và thiết kế hiện đại cùng Light Housing
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex w-full flex-col items-center transition-all md:flex-row ${
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

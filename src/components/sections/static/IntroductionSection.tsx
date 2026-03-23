export const IntroductionSection = (): React.ReactNode => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      {/* Left content */}
      <div className="container relative flex flex-1 flex-col justify-center gap-6 py-10 md:w-1/2 md:flex-1">
        {/* Background pattern */}
        <img
          src="/assets/bgs/bg-pattern.png"
          alt="bg pattern"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100"
        />

        <div className="relative z-10 flex flex-col gap-2 bg-transparent xl:gap-4">
          <span className="section-subtitle">VỀ CHÚNG TÔI</span>

          <h2 className="section-title text-brand-dark">
            Kiến tạo những dự án nhà ở quốc dân, giúp việc sở hữu nhà trở nên dễ
            dàng và thực tế hơn với mọi người.
          </h2>
        </div>

        <p className="relative z-10 line-clamp-4 text-sm leading-relaxed text-[#5F5F74] md:max-w-[800px] xl:text-base">
          Chúng tôi hướng đến việc mang lại những giải pháp nhà ở phù hợp với
          khả năng tài chính của người trẻ và các gia đình hiện đại. Thấu hiểu
          rằng hành trình sở hữu ngôi nhà đầu tiên luôn đi kèm nhiều áp lực về
          tài chính và thông tin, chúng tôi tập trung kiến tạo các dự án có mức
          giá hợp lý, pháp lý rõ ràng và quy trình minh bạch. Mỗi sản phẩm không
          chỉ đáp ứng nhu cầu an cư cơ bản mà còn tạo nền tảng ổn định cho tương
          lai lâu dài. Với định hướng đó, việc sở hữu nhà không còn là mục tiêu
          xa vời, mà trở thành lựa chọn dễ dàng và thực tế hơn cho nhiều người.
        </p>
      </div>

      {/* Right image */}
      <img
        src="/assets/images/introduction_image.png"
        alt="image"
        className="max-h-[280px] w-full flex-1 object-cover md:h-[280px] md:max-h-none md:w-1/2 md:flex-1 lg:h-[400px] xl:h-[460px]"
      />
    </div>
  );
};

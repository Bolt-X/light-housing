export const IntroductionSection = (): React.ReactNode => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      {/* Left content */}
      <div className="relative flex flex-1 flex-col justify-center gap-6 p-6 md:h-[700px] md:gap-10 md:p-20">
        {/* Background pattern */}
        <img
          src="https://c.animaapp.com/Bhe9g9ou/img/bg-pattern.svg"
          alt="bg pattern"
          className="absolute inset-0 h-full w-full object-cover opacity-50 md:opacity-100"
        />

        <div className="relative z-10 flex flex-col gap-2 md:gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 md:text-sm">
            VỀ CHÚNG TÔI
          </span>

          <h2 className="text-brand text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
            Kiến tạo những dự án nhà ở quốc dân, giúp việc sở hữu nhà trở nên dễ
            dàng và thực tế hơn với mọi người.
          </h2>
        </div>

        <p className="relative z-10 text-sm leading-relaxed text-gray-600 md:max-w-[800px] md:text-base">
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
      <div
        className="h-[300px] flex-1 bg-cover bg-center md:h-[700px]"
        style={{
          backgroundImage: 'url(https://c.animaapp.com/Bhe9g9ou/img/image.png)',
        }}
      />
    </div>
  );
};

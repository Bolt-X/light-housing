export const IntroductionSection = (): React.ReactNode => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      {/* Left content */}
      <div className="container relative flex flex-1 flex-col justify-center gap-6 py-10 md:w-1/2 md:flex-none">
        {/* Background pattern */}
        <img
          src="/assets/bgs/bg-pattern.png"
          alt="bg pattern"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100"
        />

        <div className="relative z-10 flex flex-col gap-2 bg-transparent xl:gap-4">
          <span className="section-subtitle">VỀ LIGHT HOUSING</span>

          <h2 className="section-title text-brand-dark">
            KHỞI NGUỒN HẠNH PHÚC
          </h2>
        </div>

        <div className="relative z-10 text-sm leading-relaxed text-[#5F5F74] md:max-w-[800px] xl:text-base 3xl:mt-6">
          <p>
            Light Housing là thương hiệu phát triển bất động sản quốc dân, tập
            trung vào các giải pháp nhà ở phù hợp với nhu cầu an cư thực của
            người trẻ và gia đình đô thị. Chúng tôi tin rằng hạnh phúc không bắt
            đầu từ những điều xa vời, mà từ một khởi đầu ổn định và vững tâm.
          </p>
          <br />
          <p>Ngôi nhà đầu tiên, ánh sáng đầu tiên của cuộc sống an cư.</p>
        </div>
      </div>

      {/* Right image */}
      <img
        src="/assets/images/introduction_image.png"
        alt="image"
        className="max-h-[280px] w-full flex-1 object-cover md:h-[280px] md:max-h-none md:w-1/2 md:flex-none lg:h-[400px] xl:h-[460px] 3xl:h-[520px]"
      />
    </div>
  );
};

import { INTRODUCTION_CONTENT, INTRODUCTION_ASSETS } from '../../../constants/introduction';

export const IntroductionSection = (): React.ReactNode => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      {/* Left content */}
      <div className="container relative flex flex-1 flex-col justify-center gap-6 py-10 md:w-1/2 md:flex-none">
        {/* Background pattern */}
        <img
          src={INTRODUCTION_ASSETS.pattern}
          alt="bg pattern"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100"
        />

        <div className="relative z-10 flex flex-col gap-2 bg-transparent xl:gap-4">
          <span className="section-subtitle">{INTRODUCTION_CONTENT.subtitle}</span>

          <h2 className="section-title text-brand-dark">
            {INTRODUCTION_CONTENT.title}
          </h2>
        </div>

        <div className="relative z-10 text-sm leading-relaxed text-[#5F5F74] md:max-w-[800px] xl:text-base 3xl:mt-6">
          <p>
            {INTRODUCTION_CONTENT.description1}
          </p>
          <br />
          <p>{INTRODUCTION_CONTENT.description2}</p>
        </div>
      </div>

      {/* Right image */}
      <img
        src={INTRODUCTION_ASSETS.image}
        alt="image"
        className="max-h-[280px] w-full flex-1 object-cover md:h-[280px] md:max-h-none md:w-1/2 md:flex-none lg:h-[400px] xl:h-[460px] 3xl:h-[520px]"
      />
    </div>
  );
};

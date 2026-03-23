export const PartnerSection = (): React.ReactNode => {
  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-12 md:gap-12 md:px-20 md:py-16">
      {/* Header */}
      <div className="flex max-w-2xl flex-col items-center gap-2 text-center md:gap-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 md:text-sm">
          ĐỐI TÁC CHIẾN LƯỢC
        </span>

        <h2 className="text-brand text-xl font-bold leading-tight md:text-3xl">
          Chúng tôi hợp tác cùng các đơn vị uy tín trong lĩnh vực tài chính, xây
          dựng
        </h2>
      </div>

      {/* Partner logos / image */}
      <div className="w-full max-w-5xl overflow-hidden">
        <img
          src="https://c.animaapp.com/Bhe9g9ou/img/item.svg"
          alt="Đối tác"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

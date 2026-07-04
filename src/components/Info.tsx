import svgPaths from "@/imports/Final-1/svg-30j3xpnyjl";

const infoData = {
  stats: [
    { value: "15,000+", label: "Children on the platform" },
    { value: "450+", label: "Clinics & providers" },
    { value: "120k+", label: "Health records managed" },
  ],
};

export default function Info() {
  return (
    <div className="bg-[#0b283b] content-stretch flex flex-col h-[349px] items-center justify-center overflow-clip relative shrink-0 w-full z-[8]">
      {/* Background decorations */}
      <div className="absolute flex h-[976.692px] items-center justify-center left-[-429px] top-[-592.19px] w-[1082.91px]">
        <div className="flex-none rotate-[-62.27deg]">
          <div className="h-[889.067px] relative w-[636.014px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 636.014 889.067">
              <path d={svgPaths.p1708b030} fill="black" fillOpacity="0.2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[1075.637px] items-center justify-center left-[422.01px] top-[-186.52px] w-[1143.391px]">
        <div className="flex-none rotate-[-55.43deg]">
          <div className="h-[930.08px] relative w-[665.354px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 665.354 930.08">
              <path d={svgPaths.p2bba4a00} fill="black" fillOpacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[957.26px] items-center justify-center left-[1271px] top-[-386.19px] w-[861.475px]">
        <div className="flex-none rotate-[152.61deg]">
          <div className="h-[786.573px] relative w-[562.693px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 562.693 786.573">
              <path d={svgPaths.p2e72d400} fill="black" fillOpacity="0.15" />
            </svg>
          </div>
        </div>
      </div>
      {/* Stats container */}
      <div className="h-[174px] max-w-[1280px] relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
          <div className="content-center flex flex-wrap gap-[48px] items-center justify-center max-w-[inherit] px-[24px] relative size-full">
            {infoData.stats.map((stat, i) => (
              <div key={i} className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[378.66px]">
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                  <div className="font-['Inter',sans-serif] font-bold leading-[48px] not-italic relative shrink-0 text-[60px] text-center text-white whitespace-nowrap">
                    {stat.value}
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                  <div className="font-['Inter',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#94c8f3] text-[18px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

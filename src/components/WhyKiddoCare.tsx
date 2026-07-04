import svgPaths from "@/imports/Final-1/svg-30j3xpnyjl";

const whyData = {
  title: "Why KiddoCare?",
  subtitle: "Built for connected pediatric care.",
  reasons: [
    {
      title: "Connected Care",
      description: "Bringing families, clinics, providers, and care teams together",
      iconPaths: ["p23fc3cf0"],
    },
    {
      title: "Unified Records",
      description: "One complete view of a child's health journey",
      iconPaths: ["p3048100"],
    },
    {
      title: "Care Automation",
      description: "Automating routine pediatric care workflows",
      iconPaths: ["p16410e00"],
    },
    {
      title: "Care Team Collaboration",
      description: "Better communication and shared information",
      iconPaths: ["p25f4100"],
    },
    {
      title: "Data-Driven Insights",
      description: "Insights that support better decisions and outcomes",
      iconPaths: ["p3af41a80"],
    },
    {
      title: "Scalable & Secure",
      description: "Built for privacy, compliance, and growth",
      iconPaths: ["p3e268100"],
    },
  ],
};

type IconKey = keyof typeof svgPaths;

function ReasonIcon({ iconPaths }: { iconPaths: string[] }) {
  const key = iconPaths[0] as IconKey;
  return (
    <div className="bg-[#94c8f3] content-stretch flex items-center justify-center p-[22px] relative rounded-[9999px] shrink-0 size-[80px] z-[3]">
      <div className="relative shrink-0 size-[36px] z-[1]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <path d={svgPaths[key]} fill="#072033" />
        </svg>
      </div>
    </div>
  );
}

function LiquidBackground() {
  return (
    <div className="absolute h-[1032px] left-0 top-[-0.19px] w-[1920px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 1032">
        <g clipPath="url(#clipWhyBg)">
          <path d="M1920 0H0V1032H1920V0Z" fill="white" />
          <g>
            <path d={svgPaths.p2e8d6980} fill="#F8F9FA" />
            <path d={svgPaths.p235e9e00} fill="#BEE2D9" fillOpacity="0.04" />
            <path d={svgPaths.p318bb500} fill="#BCE2D6" fillOpacity="0.1" />
            <path d={svgPaths.p24e90b00} fill="#BAE1D6" fillOpacity="0.12" />
            <path d={svgPaths.p37b6a800} fill="#FEDAC4" fillOpacity="0.15" />
            <path d={svgPaths.p3fff2c80} fill="#E7F6FF" />
            <path d={svgPaths.p6e86680} fill="#EDF8FF" />
            <path d={svgPaths.p36f6a100} fill="#F3FBFF" />
            <path d={svgPaths.p1372cb00} fill="#F9FDFF" />
            <path d={svgPaths.p28571c00} fill="white" />
          </g>
        </g>
        <defs>
          <clipPath id="clipWhyBg">
            <rect fill="white" height="1032" width="1920" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function WhyKiddoCare() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center py-[128px] relative shrink-0 w-full z-[7]">
      <LiquidBackground />
      {/* Top separator */}
      <div className="absolute flex h-[32.939px] items-center justify-center left-0 top-0 w-[1920px]">
        <div className="flex-none rotate-180">
          <div className="h-[32.939px] relative w-[1920px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 32.9387">
              <g clipPath="url(#clipWhyTop)">
                <path d={svgPaths.p3dad2d00} fill="#DDF1FF" />
              </g>
              <defs>
                <clipPath id="clipWhyTop">
                  <rect fill="white" height="32.9387" width="1920" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[64px] isolate items-start max-w-[1280px] relative shrink-0 w-full">
        {/* Heading */}
        <div className="content-stretch flex flex-col gap-[16px] isolate items-center relative shrink-0 w-full z-[2]">
          <p className="font-['Inter',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#0b283b] text-[48px] text-center tracking-[-0.5px] w-full z-[1]">
            {whyData.title}
          </p>
          <p className="font-['Inter',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1a5780] text-[20px] text-center tracking-[-0.5px] w-full z-[1]">
            {whyData.subtitle}
          </p>
        </div>
        {/* Grid */}
        <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] relative shrink-0 w-full z-[1]">
          {whyData.reasons.map((reason, i) => (
            <div key={i} className="bg-white drop-shadow-[0px_5px_7.5px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[24px] self-stretch shrink-0">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[24px] isolate items-center p-[32px] relative size-full">
                  <ReasonIcon iconPaths={reason.iconPaths} />
                  <p className="font-['Inter',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#0b283b] text-[24px] text-center tracking-[-0.5px] w-full z-[2]">
                    {reason.title}
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#1d5f8b] text-[16px] text-center tracking-[-0.5px] w-full z-[1]">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

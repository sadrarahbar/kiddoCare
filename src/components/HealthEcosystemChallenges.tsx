import svgPaths from "@/imports/Final-1/svg-30j3xpnyjl";

const challengesData = {
  title: "Health Ecosystem Challenges",
  subtitle:
    "We understand the gaps, because pediatric healthcare is still fragmented across families, providers, and systems.",
  cards: [
    {
      variant: "light" as const,
      title: "Fragmented Child Health Data",
      items: ["Disconnected records across care settings", "Limited interoperability", "Incomplete patient history"],
    },
    {
      variant: "dark" as const,
      title: "Administrative Burden for Clinics",
      items: ["Repetitive manual workflows", "Delays in follow-up", "Billing and documentation pressure"],
    },
    {
      variant: "light" as const,
      title: "Poor Care Coordination",
      items: [
        "Gaps between families and providers",
        "Limited visibility across care teams",
        "Missed preventive care opportunities",
      ],
    },
  ],
  ctaText: "We are solving these challenges, building the foundation for connected, child-centered care.",
  ctaButton: "See How KiddoCare Helps",
};

function CheckCircleIcon({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d={svgPaths.p1865080} fill={color} />
      </svg>
    </div>
  );
}

function FolderIcon() {
  return (
    <div className="h-[30px] relative shrink-0 w-[26.25px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.25 30">
        <path d={svgPaths.p6164000} fill="#072033" />
      </svg>
    </div>
  );
}

function HospitalIcon() {
  return (
    <div className="h-[30px] relative shrink-0 w-[33.75px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.75 30">
        <path d={svgPaths.p831b8c0} fill="#072033" />
      </svg>
    </div>
  );
}

function CoordIcon() {
  return (
    <div className="h-[30px] relative shrink-0 w-[33.75px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.75 30.0044">
        <path d={svgPaths.p12b7fa00} fill="#072033" />
      </svg>
    </div>
  );
}

function ChallengeCard({
  variant,
  title,
  items,
  iconIndex,
}: {
  variant: "light" | "dark";
  title: string;
  items: string[];
  iconIndex: number;
}) {
  const isDark = variant === "dark";
  const checkColor = isDark ? "#94C8F3" : "#1A5780";
  const textColor = isDark ? "#2795dd" : "#1d5f8b";
  const titleColor = isDark ? "#94c8f3" : "#0b283b";

  return (
    <div
      className={`${isDark ? "bg-[#072033]" : "bg-white drop-shadow-[0px_8px_15px_rgba(0,0,0,0.04)]"} flex-[1_0_0] min-w-px relative rounded-[24px]`}
    >
      {isDark && (
        <div className="absolute bg-[rgba(59,130,246,0.1)] blur-[32px] left-[-2px] rounded-[9999px] size-[395px] top-[-147.19px]" />
      )}
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className={`content-stretch flex flex-col items-center ${isDark ? "pb-[85px]" : "p-[40px]"} pt-[40px] px-[40px] relative size-full`}>
          {/* Icon */}
          <div className="content-stretch flex flex-col h-[96px] items-start pb-[32px] relative shrink-0 w-[64px]">
            <div className="bg-[#94c8f3] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[64px]">
              {iconIndex === 0 && <FolderIcon />}
              {iconIndex === 1 && <HospitalIcon />}
              {iconIndex === 2 && <CoordIcon />}
            </div>
          </div>
          {/* Title */}
          <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full">
            <div className={`font-['Vazirmatn',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] tracking-[0.0703px] w-full`} style={{ color: titleColor }}>
              {title}
            </div>
          </div>
          {/* Items */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            {items.map((item, i) => (
              <div key={i} className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start pt-[6px] relative shrink-0">
                  <CheckCircleIcon color={checkColor} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                  <p className={`font-['Vazirmatn',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full`} style={{ color: textColor }}>
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15.75px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 18">
        <path d={svgPaths.p209ef480} fill="white" />
      </svg>
    </div>
  );
}

export default function HealthEcosystemChallenges() {
  return (
    <div className="bg-[#ddf1ff] content-stretch flex flex-col items-center justify-center overflow-clip py-[128px] relative shrink-0 w-full z-[6]">
      <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full max-w-[1280px]">
        {/* Heading */}
        <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[1280px] relative shrink-0 w-full">
            <div className="font-['Vazirmatn',sans-serif] font-bold leading-[60px] relative shrink-0 text-[#0b283b] text-[48px] text-center tracking-[-1.2px] whitespace-nowrap w-full">
              {challengesData.title}
            </div>
            <div className="content-stretch flex flex-col items-center max-w-[800px] relative shrink-0 w-full">
              <p className="font-['Inter',sans-serif] font-medium leading-[32px] not-italic relative shrink-0 text-[#1a5780] text-[20px] text-center w-full">
                {challengesData.subtitle}
              </p>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="content-stretch flex gap-[32px] items-start max-w-[1280px] relative shrink-0 w-full">
          {challengesData.cards.map((card, i) => (
            <ChallengeCard key={i} variant={card.variant} title={card.title} items={card.items} iconIndex={i} />
          ))}
        </div>
        {/* CTA Banner */}
        <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.49)] relative rounded-[24px] shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between p-[32px] relative size-full">
            <p className="font-['Vazirmatn',sans-serif] font-semibold h-full leading-[36px] relative shrink-0 text-[#0b283b] text-[24px] w-[782px]">
              {challengesData.ctaText}
            </p>
            <button className="bg-[#0d9488] content-stretch flex gap-[12px] h-[60px] items-center justify-center px-[40px] py-[20px] relative rounded-[9999px] shrink-0">
              <div className="absolute bg-[#072033] inset-[0_0.18px_0_0] rounded-[16px]" />
              <span className="font-['Vazirmatn',sans-serif] font-bold leading-[28px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap z-10">
                {challengesData.ctaButton}
              </span>
              <div className="flex items-center justify-center relative shrink-0 z-10">
                <div className="flex-none rotate-180">
                  <div className="content-stretch flex flex-col items-center justify-center py-[2.25px] relative">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

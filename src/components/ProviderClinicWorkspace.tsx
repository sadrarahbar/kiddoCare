import svgPaths from "@/imports/Final-1/svg-30j3xpnyjl";
import { imgJun292026035910Pm1 } from "@/imports/Final-1/svg-wifk8";
import imgJun292026035910Pm2 from "@/imports/Final-1/a77cab99e53d5a9365098559faaa663484e5855a.png";
import imgChatGptImageJun292026040047Pm1 from "@/imports/Final-1/259b7ad238fffb6872d260069491ac6a5263e0a8.png";

const workspaceData = {
  title: "Provider/ Clinic Workspace",
  subtitle: "Powerful tools for Provider /clinics.",
  cardTitle: "Provider/ Clinic Workspace",
  contentTitle: "Everything care teams need, in one place.",
  features: [
    "Access complete patient information",
    "Reduce admin workload & save time",
    "Manage billing & financial workflows",
    "Collaborate across your care team",
  ],
  ctaButton: "Explore Workspace",
};

function CheckIcon() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.5px] z-[1]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 20">
        <g>
          <g clipPath="url(#clipProviderCheck)">
            <path d={svgPaths.pd369e00} fill="#1A5780" />
          </g>
        </g>
        <defs>
          <clipPath id="clipProviderCheck">
            <path d="M0 0H17.5V20H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MonitorIcon() {
  return (
    <div className="h-[72px] relative shrink-0 w-[81px] z-[1]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 72">
        <g>
          <g clipPath="url(#clipMonitor)">
            <path d={svgPaths.p34505b00} fill="#0B283B" />
          </g>
        </g>
        <defs>
          <clipPath id="clipMonitor">
            <path d="M0 0H81V72H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageSection() {
  return (
    <div className="h-[593px] relative shrink-0 w-[686px] z-[2]">
      <div className="absolute flex h-[723.545px] items-center justify-center left-[-80.84px] top-[-95.89px] w-[794.032px]">
        <div className="-scale-y-100 flex-none rotate-[120.75deg]">
          <div className="h-[654.806px] relative w-[452.361px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 452.361 654.806">
              <path d={svgPaths.p79a9200} fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[689.719px] items-center justify-center left-[-16.11px] top-[-52.3px] w-[635.407px]">
        <div className="flex-none rotate-[-148.88deg]">
          <div className="h-[562.658px] relative w-[402.51px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402.51 562.658">
              <path d={svgPaths.p2fa32b80} fill="#98CBF0" fillOpacity="0.15" />
            </svg>
          </div>
        </div>
      </div>
      {/* Masked images */}
      <div className="absolute contents left-[-42.78px] top-[-17.65px]">
        <div
          className="absolute h-[485.387px] left-[8.64px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.923px_8.507px] mask-size-[600.875px_476.972px] top-[45.1px] w-[728.08px]"
          style={{ maskImage: `url("${imgJun292026035910Pm1}")` }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgJun292026035910Pm2} />
          </div>
        </div>
        <div
          className="absolute h-[413.533px] left-[-598.08px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[612.642px_-290.368px] mask-size-[600.875px_476.972px] top-[343.98px] w-[620.299px]"
          style={{ maskImage: `url("${imgJun292026035910Pm1}")` }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageJun292026040047Pm1} />
        </div>
      </div>
    </div>
  );
}

function LiquidBackground() {
  return (
    <div className="absolute h-[991px] left-0 top-[-0.19px] w-[1920px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 991">
        <g clipPath="url(#clip0_1_785)">
          <path d="M1920 0H0V991H1920V0Z" fill="white" />
          <g>
            <path d={svgPaths.p2224c400} fill="#F8F9FA" />
            <path d={svgPaths.p3ee1cf00} fill="#BEE2D9" fillOpacity="0.04" />
            <path d={svgPaths.p27549b00} fill="#BCE2D6" fillOpacity="0.1" />
            <path d={svgPaths.p1154c780} fill="#BAE1D6" fillOpacity="0.12" />
            <path d={svgPaths.p15d57d80} fill="#FEDAC4" fillOpacity="0.15" />
            <path d={svgPaths.p34156780} fill="#E7F6FF" />
            <path d={svgPaths.p35b21580} fill="#EDF8FF" />
            <path d={svgPaths.p3041c00} fill="#F3FBFF" />
            <path d={svgPaths.p3054d400} fill="#F9FDFF" />
            <path d={svgPaths.pd612980} fill="white" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_785">
            <rect fill="white" height="991" width="1920" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function ProviderClinicWorkspace() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center py-[128px] relative shrink-0 w-full z-[9]">
      <LiquidBackground />
      <div className="content-stretch flex flex-col gap-[64px] isolate items-start max-w-[1280px] relative shrink-0 w-full">
        {/* Heading */}
        <div className="content-stretch flex flex-col gap-[16px] isolate items-center relative shrink-0 w-full z-[2]">
          <p className="font-['Inter',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#0b283b] text-[48px] text-center tracking-[-0.5px] w-full z-[1]">
            {workspaceData.title}
          </p>
          <p className="font-['Inter',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1a5780] text-[20px] text-center tracking-[-0.5px] w-full z-[1]">
            {workspaceData.subtitle}
          </p>
        </div>
        {/* Content */}
        <div className="content-stretch flex isolate items-start relative shrink-0 w-full z-[1]">
          {/* Left image */}
          <ImageSection />
          {/* Right card */}
          <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px overflow-clip relative rounded-[16px] self-stretch z-[1]">
            {/* Card header */}
            <div className="relative shrink-0 w-full z-[2]">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col isolate items-center pt-[48px] px-[48px] relative size-full">
                  <div className="content-stretch flex flex-col h-[115px] isolate items-center pb-[23px] pt-[20px] relative shrink-0 z-[2]">
                    <div className="content-stretch flex flex-col h-[72px] isolate items-center relative shrink-0 w-[81px] z-[1]">
                      <MonitorIcon />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col isolate items-center relative shrink-0 w-full z-[1]">
                    <p className="font-['Inter',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#0b283b] text-[30px] text-center tracking-[-0.5px] w-full whitespace-pre-wrap z-[1]">
                      {workspaceData.cardTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card body */}
            <div className="relative shrink-0 w-full z-[1]">
              <div className="content-stretch flex flex-col gap-[32px] isolate items-start p-[40px] relative size-full">
                <p className="font-['Inter',sans-serif] font-medium leading-[30px] not-italic relative shrink-0 text-[#1a5780] text-[25px] tracking-[-0.5px] w-full z-[3]">
                  {workspaceData.contentTitle}
                </p>
                <div className="content-stretch flex flex-col gap-[16px] isolate items-start relative shrink-0 w-full z-[2]">
                  {workspaceData.features.map((feature, i) => (
                    <div key={i} className="relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[12px] isolate items-start relative size-full">
                        <div className="content-stretch flex flex-col h-[24px] isolate items-start py-[4px] relative shrink-0 w-[18px] z-[1]">
                          <CheckIcon />
                        </div>
                        <p className="font-['Inter',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1d5f8b] text-[20px] tracking-[-0.5px] whitespace-nowrap z-[1]">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0b283b] content-stretch flex isolate items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full z-[1]">
                  <p className="font-['Inter',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.5px] whitespace-nowrap z-[1]">
                    {workspaceData.ctaButton}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom separator */}
      <div className="absolute h-[28px] left-0 top-[-0.19px] w-[1920px]" style={{ top: "auto", bottom: 0 }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 28">
          <g clipPath="url(#clip0_1_810)">
            <path d={svgPaths.p36ca2080} fill="#DDF1FF" />
          </g>
          <defs>
            <clipPath id="clip0_1_810">
              <rect fill="white" height="28" width="1920" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

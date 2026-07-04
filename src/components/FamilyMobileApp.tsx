import svgPaths from "@/imports/Final-1/svg-30j3xpnyjl";
import { imgChatGptImageJun292026034057Pm1 } from "@/imports/Final-1/svg-wifk8";
import imgChatGptImageJun292026034057Pm2 from "@/imports/Final-1/bc325f1f9a39ef250c4f69a7c69c6cfd423961f6.png";
import img98Bdec5A from "@/imports/Final-1/b0c27b4bda6a46e82afe525ef4ed537677dd2237.png";

const familyAppData = {
  title: "Family Mobile App",
  subtitle: "Powerful tools for families.",
  cardTitle: "Family Mobile App",
  contentTitle: "Your child's health, at your fingertips.",
  features: [
    "View health records & milestones",
    "Get reminders & recommendations",
    "Access trusted health content",
    "Communicate with care teams",
  ],
  ctaButton: "Explore Family App",
};

function CheckIcon() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.5px] z-[1]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 20">
        <g>
          <g clipPath="url(#clipFamilyCheck)">
            <path d={svgPaths.pd369e00} fill="#1A5780" />
          </g>
        </g>
        <defs>
          <clipPath id="clipFamilyCheck">
            <path d="M0 0H17.5V20H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="h-[72px] relative shrink-0 w-[54px] z-[1]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 72">
        <g>
          <path d="M54 72H0V0H54V72Z" stroke="#0B283B" />
          <path d={svgPaths.p3aa4eb90} fill="#0B283B" />
        </g>
      </svg>
    </div>
  );
}

function ImageSection() {
  return (
    <div className="h-[593px] relative shrink-0 w-[686px] z-[1]">
      <div className="absolute flex h-[768.746px] items-center justify-center left-[-46px] top-[-100.24px] w-[753.025px]">
        <div className="-scale-y-100 flex-none rotate-[-138.56deg]">
          <div className="h-[628.515px] relative w-[449.623px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 449.623 628.515">
              <path d={svgPaths.p260a00} fill="white" fillOpacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[616.405px] items-center justify-center left-[-46px] top-[-30.98px] w-[772.291px]">
        <div className="flex-none rotate-[-78.38deg]">
          <div className="h-[688.139px] relative w-[487.789px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 487.789 688.139">
              <path d={svgPaths.p2e774200} fill="#FDD9C3" />
            </svg>
          </div>
        </div>
      </div>
      {/* Masked images */}
      <div className="absolute contents left-[-27.56px] top-[-22.82px]">
        <div
          className="absolute left-[17.47px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.104px_83.247px] mask-size-[631.446px_522.203px] size-[707.069px] top-[-29.94px]"
          style={{ maskImage: `url("${imgChatGptImageJun292026034057Pm1}")` }}
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="707.069" src={imgChatGptImageJun292026034057Pm2} width="707.069" />
        </div>
        <div
          className="absolute h-[606.373px] left-[-197.77px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[215.337px_15.476px] mask-size-[631.446px_522.203px] top-[37.84px] w-[911.042px]"
          style={{ maskImage: `url("${imgChatGptImageJun292026034057Pm1}")` }}
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img98Bdec5A} />
        </div>
      </div>
    </div>
  );
}

export default function FamilyMobileApp() {
  return (
    <div className="content-stretch flex flex-col isolate items-center justify-center py-[128px] relative shrink-0 w-full z-[10]">
      <div className="content-stretch flex flex-col gap-[64px] isolate items-start max-w-[1280px] relative shrink-0 w-full z-[1]">
        {/* Heading */}
        <div className="content-stretch flex flex-col gap-[16px] isolate items-center relative shrink-0 w-full z-[2]">
          <p className="font-['Inter',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#0b283b] text-[48px] text-center tracking-[-0.5px] w-full z-[1]">
            {familyAppData.title}
          </p>
          <p className="font-['Inter',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1a5780] text-[20px] text-center tracking-[-0.5px] w-full z-[1]">
            {familyAppData.subtitle}
          </p>
        </div>
        {/* Content + Image */}
        <div className="content-stretch flex isolate items-start relative shrink-0 w-full z-[1]">
          {/* Left card */}
          <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px overflow-clip relative rounded-[16px] self-stretch z-[2]">
            {/* Card header */}
            <div className="relative shrink-0 w-full z-[2]">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col isolate items-center pt-[48px] px-[48px] relative size-full">
                  <div className="content-stretch flex flex-col h-[115px] isolate items-center pb-[23px] pt-[20px] relative shrink-0 z-[2]">
                    <div className="content-stretch flex flex-col h-[72px] isolate items-center px-[2px] relative shrink-0 w-[54px] z-[1]">
                      <PhoneIcon />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col isolate items-center relative shrink-0 w-full z-[1]">
                    <p className="font-['Inter',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#0b283b] text-[30px] text-center tracking-[-0.5px] w-full z-[1]">
                      {familyAppData.cardTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card body */}
            <div className="relative shrink-0 w-full z-[1]">
              <div className="content-stretch flex flex-col gap-[32px] isolate items-start p-[40px] relative size-full">
                <p className="font-['Inter',sans-serif] font-medium leading-[30px] not-italic relative shrink-0 text-[#1a5780] text-[25px] tracking-[-0.5px] w-full z-[3]">
                  {familyAppData.contentTitle}
                </p>
                <div className="content-stretch flex flex-col gap-[16px] isolate items-start relative shrink-0 w-full z-[2]">
                  {familyAppData.features.map((feature, i) => (
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
                <div className="bg-[#0b283b] relative rounded-[12px] shrink-0 w-full z-[1]">
                  <div className="content-stretch flex isolate items-center justify-center overflow-clip py-[16px] relative rounded-[inherit] size-full">
                    <p className="font-['Inter',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.5px] whitespace-nowrap z-[1]">
                      {familyAppData.ctaButton}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right image */}
          <ImageSection />
        </div>
      </div>
    </div>
  );
}

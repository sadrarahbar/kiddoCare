import svgPaths from "@/imports/Final-1/svg-30j3xpnyjl";
import { imgFrame45151 } from "@/imports/Final-1/svg-wifk8";
import imgFrame45152 from "@/imports/Final-1/ce91321c477b927b14cd83eabbaef18eac2841f1.png";
import img2C0Fcce8 from "@/imports/Final-1/5d225c2f7228532fe66f487d731f2df15f29cc9c.png";
import img651002E4 from "@/imports/Final-1/7d369b95da364aeb0008783da7bf159eb6683bb9.png";
import img919Bdd14 from "@/imports/Final-1/51b994d776c282c49cff0f01e5760bb2965d066e.png";

const heroData = {
  headline: ["One Child.", "One Journey.", "Connected Care."],
  subHeading: "Canadian Pediatric Health SaaS Platform",
  description:
    "KiddoCare is the pediatric healthcare SaaS platform that connects families, clinics, and care teams, bringing every part of a child's health journey together.",
  ctaPrimary: "Request a Demo",
  ctaSecondary: "See How It Works",
};

function MaskGroup() {
  return (
    <div className="absolute contents left-[-28.63px] top-[-14.4px]">
      <div
        className="absolute h-[483.845px] left-[-316.48px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[331.033px_822.025px] mask-size-[579.444px_430.704px] top-[-759.19px] w-[562.084px]"
        style={{ maskImage: `url("${imgFrame45151}")` }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame45152} />
      </div>
      <div
        className="absolute h-[999.683px] left-[-34.19px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[48.746px_302.534px] mask-size-[579.444px_430.704px] top-[-239.7px] w-[666.455px]"
        style={{ maskImage: `url("${imgFrame45151}")` }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2C0Fcce8} />
      </div>
      <div
        className="absolute h-[499.666px] left-[-151.38px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[165.937px_51.988px] mask-size-[579.444px_430.704px] top-[10.85px] w-[749.499px]"
        style={{ maskImage: `url("${imgFrame45151}")` }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img651002E4} />
      </div>
      <div
        className="absolute h-[601.098px] left-[-148.45px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[163.003px_67.163px] mask-size-[579.444px_430.704px] top-[-4.33px] w-[901.647px]"
        style={{ maskImage: `url("${imgFrame45151}")` }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img919Bdd14} />
      </div>
    </div>
  );
}

function ImageBox() {
  return (
    <div className="h-[510px] relative shrink-0 w-[598px] z-[1]">
      <div className="absolute flex h-[624.718px] items-center justify-center left-[-40.03px] top-[-65.38px] w-[611.942px]">
        <div className="-scale-y-100 flex-none rotate-[-138.56deg]">
          <div className="h-[510.76px] relative w-[365.384px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365.384 510.76">
              <path d={svgPaths.p1714ecf0} fill="#0B283B" fillOpacity="0.04" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[641.616px] items-center justify-center left-[-61.02px] top-[-60.2px] w-[690.744px]">
        <div className="flex-none rotate-[-58.78deg]">
          <div className="h-[557.947px] relative w-[412.087px]">
            <div className="absolute inset-[0_-0.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 413.091 558.946">
                <path d={svgPaths.p243e4380} fill="white" fillOpacity="0.5" stroke="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <MaskGroup />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute h-[710px] left-0 top-0 w-[1920px] z-[1]">
      <div className="absolute inset-[-39.45%_-13.48%_0_-26.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2689.36 990.096">
          <g>
            <path d={svgPaths.p27f34880} fill="#BDE2DA" opacity="0.3" />
            <path d={svgPaths.p3a9f1780} fill="white" fillOpacity="0.2" />
            <path d={svgPaths.paa8b800} fill="#FEDAC3" fillOpacity="0.5" opacity="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative shrink-0 w-full z-[14]">
      <div className="content-stretch flex isolate items-center justify-center overflow-clip py-[100px] relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] max-w-[1280px] min-w-px relative z-[2]">
          <div className="content-stretch flex flex-col isolate items-start max-w-[inherit] px-[32px] relative size-full">
            <div className="content-stretch flex gap-[32px] isolate items-center relative shrink-0 w-full z-[1]">
              {/* Content */}
              <div className="content-stretch flex flex-col gap-[16px] isolate items-start relative shrink-0 w-[584px] z-[2]">
                {/* Headline */}
                <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full z-[3]">
                  <div className="font-['Inter',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#0b283b] text-[50px] tracking-[-0.5px] w-full whitespace-pre-wrap z-[1]">
                    {heroData.headline.map((line, i) => (
                      <p key={i} className="leading-[60px] mb-0">{line}</p>
                    ))}
                  </div>
                </div>
                {/* Sub content */}
                <div className="content-stretch flex flex-col gap-[12px] isolate items-start relative shrink-0 w-full z-[2]">
                  <p className="font-['Inter',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1a5780] text-[30px] tracking-[-0.5px] w-full z-[2]">
                    {heroData.subHeading}
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1d5f8b] text-[20px] tracking-[-0.5px] w-full z-[1]">
                    {heroData.description}
                  </p>
                </div>
                {/* Buttons */}
                <div className="relative shrink-0 w-full z-[1]">
                  <div className="content-stretch flex gap-[16px] isolate items-start pr-[221px] relative size-full">
                    <div className="bg-[#0b283b] relative rounded-[12px] self-stretch shrink-0 z-[2]">
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex isolate items-center justify-center px-[32px] py-[12px] relative size-full">
                          <p className="font-['Inter',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.5px] whitespace-nowrap z-[1]">
                            {heroData.ctaPrimary}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white content-stretch flex h-[60px] isolate items-center justify-center px-[32px] py-[12px] relative rounded-[12px] shrink-0 z-[1]">
                      <div aria-hidden className="absolute border border-[#0b283b] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <p className="font-['Inter',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#0b283b] text-[18px] text-center tracking-[-0.5px] whitespace-nowrap z-[1]">
                        {heroData.ctaSecondary}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ImageBox />
            </div>
          </div>
        </div>
        <Background />
      </div>
    </div>
  );
}

import svgPaths from "@/imports/Final-1/svg-30j3xpnyjl";

const footerData = {
  description: "A connected pediatric health platform for families, clinics, providers, and care teams.",
  contact: {
    phone: "+1 (800) 555-0123",
    address: "123 Health Innovation Way San Francisco, CA 94103 United States",
    email: "contact@kiddocare.com",
  },
  links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  copyright: "© 2026 KiddoCare Technology Inc. All rights reserved.",
};

function FooterLogo() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[149px]">
      <div className="absolute inset-[5.21%_0_5.2%_0.96%]">
        <div className="absolute inset-[-6.98%_0_-6.98%_-1.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149.33 28.5854">
            <g>
              <g>
                <path d={svgPaths.p28177d00} fill="white" />
                <path d={svgPaths.p71ca080} fill="white" />
                <path d={svgPaths.p29dc5300} fill="white" />
                <path d={svgPaths.p2a3d6c00} fill="white" />
                <path d={svgPaths.p8ed1440} fill="white" />
                <path d={svgPaths.p28860d00} fill="white" />
                <path d={svgPaths.p9681900} fill="white" />
                <path d={svgPaths.p2db59e80} fill="white" />
                <path d={svgPaths.p20df2700} fill="white" />
              </g>
              <path d={svgPaths.pb25f580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2.613" strokeWidth="3.5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clipFooterPhone)">
          <g>
            <path d={svgPaths.p1a6fb2e0} fill="#2795DD" />
            <path d={svgPaths.p3153aa00} stroke="#2795DD" strokeWidth="0.3" />
          </g>
        </g>
        <defs>
          <clipPath id="clipFooterPhone">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LocationIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p29771500} fill="#2795DD" stroke="#2795DD" strokeWidth="0.3" />
      </svg>
    </div>
  );
}

function EmailIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[14.58%_11.74%_14.59%_11.17%]">
        <div className="absolute inset-[-5.29%_-4.86%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9167 15.6667">
            <g>
              <path d={svgPaths.p3d4beb00} stroke="#2795DD" strokeWidth="1.5" />
              <path d={svgPaths.p158ab480} stroke="#2795DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ children }: { children: React.ReactNode }) {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]">
      <div aria-hidden className="absolute border border-[#fedac4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      {children}
    </div>
  );
}

function LocationSocialIcon() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.5px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 20">
        <path d={svgPaths.p39b4a500} fill="#FEDAC4" />
      </svg>
    </div>
  );
}

function InstagramIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[1.66%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3359 19.3359">
          <path d={svgPaths.p3b7b6180} fill="#FEDAC4" />
          <path d={svgPaths.p26127280} fill="#FEDAC4" />
          <path d={svgPaths.p3b921700} fill="#FEDAC4" />
        </svg>
      </div>
    </div>
  );
}

function InstaIcon2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.5px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5098 20">
        <path d={svgPaths.p1d980170} fill="#FEDAC4" />
      </svg>
    </div>
  );
}

function YouTubeIcon() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22.5px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 20">
        <path d={svgPaths.p3130e500} fill="#FEDAC4" />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#072033] content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full z-[1]">
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
      {/* Main footer content */}
      <div className="content-stretch flex flex-col items-start py-[32px] relative shrink-0 w-full max-w-[1280px]">
        <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
          {/* Left: logo + description + social */}
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[23.25px] items-start min-w-px relative">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <FooterLogo />
            </div>
            <p className="font-['Inter',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#94c8f3] text-[14px] w-[303px] whitespace-pre-wrap">
              {footerData.description}
            </p>
            <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
              <SocialLink>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <LocationSocialIcon />
                </div>
              </SocialLink>
              <SocialLink>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <InstagramIcon />
                </div>
              </SocialLink>
              <SocialLink>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <InstaIcon2 />
                </div>
              </SocialLink>
              <SocialLink>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <YouTubeIcon />
                </div>
              </SocialLink>
            </div>
          </div>
          {/* Right: contact info */}
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[423px]">
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative">
                <p className="capitalize font-['Inter',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[16px] text-white w-full">
                  Contact us
                </p>
                <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                    <PhoneIcon />
                    <p className="font-['Inter',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94c8f3] text-[15px] whitespace-nowrap">
                      {footerData.contact.phone}
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                    <LocationIcon />
                    <p className="font-['Inter',sans-serif] font-normal leading-normal relative shrink-0 text-[#94c8f3] text-[15px]">
                      {footerData.contact.address}
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                    <EmailIcon />
                    <p className="font-['Inter',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#94c8f3] text-[15px] whitespace-nowrap">
                      {footerData.contact.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Under footer */}
      <div className="content-stretch flex flex-col items-center justify-center py-[32px] relative shrink-0 w-full max-w-[1280px]">
        <div aria-hidden className="absolute border-[rgba(39,149,221,0.2)] border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[24px] h-[16px] items-start relative shrink-0">
            {footerData.links.map((link, i) => (
              <div key={i} className="content-stretch flex flex-col items-start relative self-stretch shrink-0">
                <p className="font-['Inter',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#94c8f3] text-[12px] whitespace-nowrap">
                  {link}
                </p>
              </div>
            ))}
          </div>
          <p className="font-['Inter',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#94c8f3] text-[12px] whitespace-nowrap">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </div>
  );
}

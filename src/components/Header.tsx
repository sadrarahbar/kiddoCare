import svgPaths from "@/imports/Final-1/svg-30j3xpnyjl";

const navData = {
  menuItems: [
    { label: "Services", active: true },
    { label: "Applications", active: false },
    { label: "Articles", active: false },
    { label: "Why Us", active: false },
    { label: "Team", active: false },
    { label: "Contact", active: false },
  ],
};

function Logo() {
  return (
    <div className="h-[33.681px] overflow-clip relative shrink-0 w-[182.611px] z-[2]">
      <div className="absolute inset-[5.21%_0_5.2%_0.96%]">
        <div className="absolute inset-[-5.8%_0_-5.8%_-0.97%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 182.62 33.675">
            <g id="logo">
              <g id="Group 1">
                <path d={svgPaths.p1ff00880} fill="#2795DD" />
                <path d={svgPaths.pfdba500} fill="#2795DD" />
                <path d={svgPaths.p3d77500} fill="#2795DD" />
                <path d={svgPaths.p2e29e2a0} fill="#2795DD" />
                <path d={svgPaths.p147e1100} fill="#2795DD" />
                <path d={svgPaths.p348cc7f0} fill="#2795DD" />
                <path d={svgPaths.p28b59800} fill="#2795DD" />
                <path d={svgPaths.pd13000} fill="#2795DD" />
                <path d={svgPaths.p1edf9080} fill="#2795DD" />
              </g>
              <path d={svgPaths.p1d476e00} stroke="#2795DD" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2.613" strokeWidth="3.5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#0b283b] content-stretch flex flex-col items-center justify-center relative shrink-0 w-full z-[16]">
      <div className="content-stretch flex flex-col isolate items-start max-w-[1280px] px-[32px] relative shrink-0 w-full">
        <div className="content-stretch flex h-[80px] isolate items-center justify-between py-[16px] relative shrink-0 w-full">
          <Logo />
          <div className="content-stretch flex gap-[32px] isolate items-center relative shrink-0 z-[1]">
            {navData.menuItems.map((item, i) => (
              <div key={i} className="content-stretch flex flex-col isolate items-start relative shrink-0">
                <p
                  className={`font-['Inter',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] tracking-[-0.5px] whitespace-nowrap z-[1] ${
                    item.active ? "text-[#2795dd]" : "text-white"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

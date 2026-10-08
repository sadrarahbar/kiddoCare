"use client";

import Image from 'next/image';
import { Button } from "@/app/components/ui/button";
import { showComingSoon } from "@/lib/show-coming-soon";

export default function HealthEcosystemChallenges() {
  const iconsPath = "icons/healthEcosystem";

  const cards = [
    {
      variant: "light",
      title: "Fragmented Child Health Data",
      iconPath: `${iconsPath}/HealthEcosystemIcon1.svg`,
      items: ["Disconnected records across care settings", "Limited interoperability", "Incomplete patient history"],
    },
    {
      variant: "dark",
      title: "Administrative Burden for Clinics",
      iconPath: `${iconsPath}/HealthEcosystemIcon2.svg`,
      items: ["Repetitive manual workflows", "Delays in follow-up", "Billing and documentation pressure"],
    },
    {
      variant: "light",
      title: "Poor Care Coordination",
      iconPath: `${iconsPath}/HealthEcosystemIcon3.svg`,
      items: [
        "Gaps between families and providers",
        "Limited visibility across care teams",
        "Missed preventive care opportunities",
      ],
    },
  ];

  return (
    <section id="challenges" className="relative w-full overflow-hidden bg-[#ddf1ff] py-[96px] md:py-[128px]">
      <div className="container-custom flex flex-col items-center gap-[32px] md:gap-[64px]">

        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-[24px] text-center px-5 md:px-0">
          <h2 className="w-full text-[40px] font-bold leading-[48px] tracking-[-1.2px] text-[#0b283b] md:text-[48px] md:leading-[60px]">
            Health Ecosystem Challenges
          </h2>
          <p className="w-full max-w-[800px] text-[20px] font-medium leading-[32px] text-[#1a5780]">
            We understand the gaps, because pediatric healthcare is still fragmented across families, providers, and systems.
          </p>
        </div>

        {/* Items */}
        <div className="grid w-full gap-[32px] lg:grid-cols-3  px-5 md:px-0">
          {cards.map((card) => {
            const isDark = card.variant === "dark";
            const textColor = isDark ? "#2795dd" : "#1d5f8b";
            const titleColor = isDark ? "#94c8f3" : "#0b283b";

            return (
              <div
                key={card.title}
                className={`
                  relative rounded-[24px]  max-h-min
                  ${isDark ? "bg-[#072033]" : "bg-white drop-shadow-[0px_8px_15px_rgba(0,0,0,0.04)]"}`}>
             

                {/* Content */}
                <div className={`relative flex flex-col items-center z-[1]
                        p-[32px] md:p-[40px] ${isDark ? "md:pb-[85px]" : ""}`}>

                  {/* Icon */}
                  <div className="flex w-[64px] pb-[32px]">
                    <div className="flex size-[64px] shrink-0 items-center justify-center rounded-[16px] bg-[#94c8f3]">
                      <div className="relative shrink-0">
                        <Image
                          src={card.iconPath}
                          width={64}
                          height={64}
                          alt={`${card.title} icon`} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="w-full pb-[24px] text-[24px] font-bold leading-[32px] tracking-[0.0703px]" style={{ color: titleColor }}>
                    {card.title}
                  </h3>

                  {/* List */}
                  <ul className="flex w-full flex-col gap-[16px]">
                    {card.items.map((item) => (
                      <li key={item} className="flex w-full items-start gap-[12px]">
                        <div className="mt-1 flex items-center justify-center">
                          {card.variant === "dark" ? (
                            <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18ZM12.9727 7.34766L8.47266 11.8477C8.14219 12.1781 7.60781 12.1781 7.28086 11.8477L5.03086 9.59766C4.70039 9.26719 4.70039 8.73281 5.03086 8.40586C5.36133 8.07891 5.8957 8.07539 6.22266 8.40586L7.875 10.0582L11.7773 6.15234C12.1078 5.82188 12.6422 5.82188 12.9691 6.15234C13.2961 6.48281 13.2996 7.01719 12.9691 7.34414L12.9727 7.34766Z" fill="#94C8F3" />
                            </svg>
                          ) : (
                            <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18ZM12.9727 7.34766L8.47266 11.8477C8.14219 12.1781 7.60781 12.1781 7.28086 11.8477L5.03086 9.59766C4.70039 9.26719 4.70039 8.73281 5.03086 8.40586C5.36133 8.07891 5.8957 8.07539 6.22266 8.40586L7.875 10.0582L11.7773 6.15234C12.1078 5.82188 12.6422 5.82188 12.9691 6.15234C13.2961 6.48281 13.2996 7.01719 12.9691 7.34414L12.9727 7.34766Z" fill="#1A5780" />
                            </svg>
                          )}

                        </div>
                        <p className="w-full text-[16px] font-normal leading-[24px]" style={{ color: textColor }}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                 {/* Shadow if dark card */}
                {isDark && (
                  <div className="
                          absolute z-0 left-0 right-0 m-auto top-[-147.19px] 
                          size-[395px] rounded-full 
                          bg-[rgba(59,130,246,0.1)] blur-[32px]" />
                )}
              </div>
            );
          })}
        </div>

        {/* Info */}
        <div className="w-full rounded-[24px] md:bg-[rgba(255,255,255,0.49)] p-[32px] backdrop-blur-[10px]">
          <div className="flex flex-col items-start lg:flex-row justify-between gap-[24px]  lg:items-center">
            <p className="w-full md:w-auto md:flex-1 text-[24px] font-semibold leading-[36px] text-[#0b283b]">
              We are solving these challenges, building the foundation for connected, child-centered care.
            </p>
            <Button size="auto" onClick={showComingSoon}
              className="
                relative rounded-[16px] h-[60px] px-[32px] py-[20px] w-full md:w-auto
                flex items-center justify-center gap-[12px]
                bg-[#072033] hover:bg-[#143b55]">
              <span className="text-center text-[18px] font-bold leading-[28px] text-white">
                See How KiddoCare Helps
              </span>
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4194 9.79482C15.8589 9.35537 15.8589 8.6417 15.4194 8.20225L9.79443 2.57725C9.35498 2.13779 8.64131 2.13779 8.20186 2.57725C7.7624 3.0167 7.7624 3.73037 8.20186 4.16983L11.9108 7.87529L1.1249 7.87529C0.502638 7.87529 -9.72996e-05 8.37803 -9.72452e-05 9.00029C-9.71908e-05 9.62256 0.502638 10.1253 1.1249 10.1253L11.9073 10.1253L8.20537 13.8308C7.76592 14.2702 7.76592 14.9839 8.20537 15.4233C8.64483 15.8628 9.3585 15.8628 9.79795 15.4233L15.423 9.79834L15.4194 9.79482Z" fill="white" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

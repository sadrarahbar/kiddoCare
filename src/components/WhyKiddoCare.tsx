import Image from 'next/image';

export default function WhyKiddoCare() {
    const whyKiddoIconsPath ="icons/whyKiddoCare";
  const items = [
    {
      title: "Connected Care",
      description: "Bringing families, clinics, providers, and care teams together",
      icon: { src: `${whyKiddoIconsPath}/whyIcon1.svg`, alt: "Connected Care icon" },
    },
    {
      title: "Unified Records",
      description: "One complete view of a child's health journey",
      icon: { src: `${whyKiddoIconsPath}/whyIcon2.svg`, alt: "Unified Records icon" },
    },
    {
      title: "Care Automation",
      description: "Automating routine pediatric care workflows",
      icon: { src: `${whyKiddoIconsPath}/whyIcon3.svg`, alt: "Care Automation icon" },
    },
    {
      title: "Care Team Collaboration",
      description: "Better communication and shared information",
      icon: { src: `${whyKiddoIconsPath}/whyIcon4.svg`, alt: "Care Team Collaboration icon" },
    },
    {
      title: "Data-Driven Insights",
      description: "Insights that support better decisions and outcomes",
      icon: { src: `${whyKiddoIconsPath}/whyIcon5.svg`, alt: "Data-Driven Insights icon" },
    },
    {
      title: "Scalable & Secure",
      description: "Built for privacy, compliance, and growth",
      icon: { src: `${whyKiddoIconsPath}/whyIcon6.svg`, alt: "Scalable & Secure icon" },
    },
  ];

  return (
    <section id="why-us" className="whyKiddo relative z-[7] w-full overflow-hidden bg-white py-[96px] md:py-[128px]">
      {/* Top separator */}
      <div className="absolute w-full left-0 bottom-[-1px] z-[1]">
        <div className="separator separator--whyKiddo"></div>
      </div>
      <div className="container-custom relative flex flex-col gap-[32px] md:gap-[64px]">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-[16px] text-center">
          <h2 className="w-full text-[40px] font-bold leading-[44px] tracking-[-0.5px] text-[#0b283b] md:text-[48px]">
            Why KiddoCare?
          </h2>
          <p className="w-full text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#1a5780]">
            Built for connected pediatric care.
          </p>
        </div>
        {/* Grid */}
        <div className="grid w-full gap-[32px] md:grid-cols-2 xl:grid-cols-3 px-5 md:px-0">
          {items.map((item) => (
            <div key={item.title} className="rounded-[24px] bg-white p-[16px] md:p-[64px] text-center drop-shadow-[0px_5px_7.5px_rgba(0,0,0,0.05)]">
              <div className="flex h-full flex-col items-center gap-5">
                <Image
                  src={item.icon.src}
                  width={80}
                  height={80}
                  alt={item.icon.alt}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="w-full text-[24px] font-normal text-[#0b283b]">
                    {item.title}
                  </h3>
                  <p className="w-full text-[16px] font-normal text-[#1d5f8b]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

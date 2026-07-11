import Image from "next/image";

export default function OurServices() {
  const servicesIconsPath = "icons/services";
  const servicesVectorsPath = "vectors/services";
  const services = [
    {
      title: "Health Monitoring",
      description: "Track growth, vaccinations, and developmental milestones in real-time with detailed analytics",
      icon: { src: `${servicesIconsPath}/servicesIcon1.svg`, alt: "Health monitoring icon" },
      vector: {
        src: `${servicesVectorsPath}/servicesVector1.svg`,
        alt: "Health monitoring background vector",
        width: 199,
        height: 188,
        className: "top-[-52px] left-[-45px]",
      },
      active: true,
    },
    {
      title: "Smart Reminders",
      description: "Never miss appointments, vaccinations, or medication schedules with automated alerts",
      icon: { src: `${servicesIconsPath}/servicesIcon2.svg`, alt: "Smart reminders icon" },
      vector: {
        src: `${servicesVectorsPath}/servicesVector2.svg`,
        alt: "Smart reminders background vector",
        width: 197,
        height: 164,
        className: "top-[-52px] left-[-52px]",
      },
      active: true,
    },
    {
      title: "Medical Records",
      description: "Secure digital storage of all medical history and documents in one place",
      icon: { src: `${servicesIconsPath}/servicesIcon3.svg`, alt: "Medical records icon" },
      vector: {
        src: `${servicesVectorsPath}/servicesVector3.svg`,
        alt: "Medical records background vector",
        width: 192,
        height: 176,
        className: "top-[-52px] left-[-18px]",
      },
      active: true,
    },
    {
      title: "Doctor Consultation",
      description: "Connect with certified pediatricians and specialists for professional medical guidance",
      icon: { src: `${servicesIconsPath}/servicesIcon4.svg`, alt: "Doctor consultation icon" },
      vector: {
        src: `${servicesVectorsPath}/servicesVector4.svg`,
        alt: "Doctor consultation background vector",
        width: 213,
        height: 195,
        className: "top-[-55px] left-[-52px]",
      },
    },
    {
      title: "Appointment Booking",
      description: "Easy scheduling system for consultations and check-ups with your preferred doctors",
      icon: { src: `${servicesIconsPath}/servicesIcon5.svg`, alt: "Appointment booking icon" },
      vector: {
        src: `${servicesVectorsPath}/servicesVector5.svg`,
        alt: "Appointment booking background vector",
        width: 198,
        height: 191,
        className: "top-[-67px] left-[-52px]",
      },
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support for any questions or technical assistance needed",
      icon: { src: `${servicesIconsPath}/servicesIcon6.svg`, alt: "Support icon" },
      vector: {
        src: `${servicesVectorsPath}/servicesVector6.svg`,
        alt: "Support background vector",
        width: 209,
        height: 157,
        className: "top-[-60px] left-[-52px]",
      },
    },
  ];

  return (
    <section id="services" className="relative z-[12] w-full bg-white py-[70px] md:py-[128px]">
      <div className="container-custom flex flex-col gap-[64px]">
        <div className="flex w-full flex-col items-center gap-[16px]">
          <p className="w-full text-center text-[40px] font-bold leading-[44px] tracking-[-0.5px] text-[#0b283b] md:text-[48px]">
            Our Services
          </p>
          <p className="w-full text-center text-[20px] font-normal leading-[28px] tracking-[-0.5px] text-[#1a5780]">
            A complete end-to-end platform for connected pediatric care.
          </p>
        </div>

        <div className="grid w-full gap-[32px] md:grid-cols-2 xl:grid-cols-3 px-10 md:px-0">
          {services.map((service) => (
            <div key={service.title} className="relative flex w-full flex-col gap-[10px]">
              <div className={`absolute z-[-1] ${service.vector.className}`}>
                <Image
                  src={service.vector.src}
                  width={service.vector.width}
                  height={service.vector.height}
                  alt={service.vector.alt}
                />
              </div>

              <div
                className={`
                   w-full rounded-[24px] border-[0.5px] border-[rgba(39,149,221,0.1)]
                  bg-[rgba(255,255,255,0.01)] backdrop-blur-[31px]
                  flex h-full flex-col items-start  md:gap-[24px] p-[16px_24px] md:p-[32px]
                  ${service.active ? "shadow-[0px_4px_50px_0px_rgba(0,0,0,0.1)]" : ""}
                `}
              >
                <Image
                  src={service.icon.src}
                  width={64}
                  height={64}
                  alt={service.icon.alt}
                  className="w-[48px] md:w-[64px] h-[48px] md:h-[64px] mb-3 md:mb-0"
                />
                <p className="w-full text-[24px] font-normal leading-[32px] tracking-[-0.5px] text-[#0b283b]">
                  {service.title}
                </p>
                <p className="w-full pb-px text-[16px] font-normal leading-[26px] tracking-[-0.5px] text-[#1d5f8b]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

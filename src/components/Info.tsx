import Image from 'next/image';

export default function Info() {
  const stats = [
    {
      value: "15,000+", label: "Children on the platform",
      vector: {
        src: "vectors/info/vector1.svg",
        alt: "Support background vector",
        className: "md:top-[-110px] md:left-[-60px]",
      },
    },
    {
      value: "450+", label: "Clinics & providers",
      vector: {
        src: "vectors/info/vector2.svg",
        alt: "Support background vector",
        className: "md:top-[-70px] md:left-[-20px]",
      },
    },
    {
      value: "120k+", label: "Health records managed",
      vector: {
        src: "vectors/info/vector3.svg",
        alt: "Support background vector",
        className: "md:top-[-80px] md:left-[5px]",
      },
    },
  ];

  return (
    <section className="info relative z-[8] w-full overflow-hidden bg-[#0b283b] pt-[140px] pb-[80px] md:pt-[180px] md:pb-[130px]">
      {/* Stats container */}
      <div className="container-custom">
        <div className="grid gap-[120px] md:gap-x-[70px] md:gap-y-[120px] sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="relative">
              <Image
                src={stat.vector.src}
                alt={stat.vector.alt}
                width={240}
                height={210}
                className={`
                          absolute z-[-1] 
                          top-[-80%] right-0 left-0 m-auto
                          ${stat.vector.className}`}
              />
              <div className="flex flex-col items-center gap-[16px] text-center">
                <p className="text-[48px] font-bold leading-[52px] text-white md:text-[60px]">
                  {stat.value}
                </p>
                <p className="text-[16px] font-semibold uppercase leading-[22px] tracking-[1.4px] text-[#94c8f3] md:text-[18px]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

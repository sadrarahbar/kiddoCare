import Image from 'next/image';
import { Button } from "@/app/components/ui/button";

export default function ProviderClinicWorkspace() {
  const features = [
    "Access complete patient information",
    "Reduce admin workload & save time",
    "Manage billing & financial workflows",
    "Collaborate across your care team",
  ];

  return (
    <section className="provider relative z-[9] w-full bg-white py-[96px] pb-[50px] md:py-[128px]">
      {/* top separator */}
      <div className="separator separator--provider absolute left-0 top-[-0.19px] w-full"></div>
      <div className="container-custom flex flex-col gap-[32px] md:gap-[64px]">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-[16px] text-center">
          <p className="w-full text-[40px] font-bold leading-[44px] tracking-[-0.5px] text-[#0b283b] md:text-[48px]">
            Provider/ Clinic Workspace
          </p>
          <p className="w-full text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#1a5780]">
            Powerful tools for Provider /clinics.
          </p>
        </div>
        {/* Content */}
        <div className="flex w-full flex-col items-center md:gap-[32px] lg:flex-row lg:items-stretch">
          {/* Left image */}
          <div className="w-full flex-1">
            <Image src='/images/providerImage.png' width={637} height={593} alt="Provider Image" />
          </div>
          {/* Right card */}
          <div className="flex w-full flex-1 flex-col overflow-hidden rounded-[16px]">
            {/* Card header */}
            <div className="flex w-full flex-col items-center px-[32px]  md:px-[48px] md:pt-[48px] text-center">
              <div className="flex items-center md:pb-[23px] md:pt-[20px]">
                <Image src='images/providerIcon.svg' width={81} height={115} alt="Provider Icon" className="w-full" />
              </div>
              <p className="w-full whitespace-pre-wrap text-[30px] font-bold leading-[36px] tracking-[-0.5px] text-[#0b283b]">
                Provider/ Clinic Workspace
              </p>
            </div>
            {/* Card body */}
            <div className="flex w-full flex-col gap-[16px] md:gap-[32px] p-[16px] md:p-[40px]">
              <p className="w-full text-xl md:text-[25px] font-medium leading-[30px] tracking-[-0.5px] text-[#1a5780]">
                Everything care teams need, in one place.
              </p>
              <div className="flex w-full flex-col gap-[16px]">
                {features.map((feature) => (
                  <div key={feature} className="flex w-full items-center gap-[12px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.3848 3.11523C17.873 3.60352 17.873 4.39648 17.3848 4.88477L7.38477 14.8848C6.89648 15.373 6.10352 15.373 5.61523 14.8848L0.615234 9.88477C0.126953 9.39649 0.126953 8.60352 0.615234 8.11523C1.10352 7.62695 1.89648 7.62695 2.38477 8.11523L6.50195 12.2285L15.6191 3.11523C16.1074 2.62695 16.9004 2.62695 17.3887 3.11523H17.3848Z" fill="#1A5780" />
                    </svg>

                    <p className="text-lg md:text-[20px] font-normal leading-[24px] tracking-[-0.5px] text-[#1d5f8b]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              <Button variant="primary" size="auto" className="w-full py-[16px]">
                Explore Workspace
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

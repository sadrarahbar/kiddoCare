import svgPaths from "@/imports/Final-1/svg-30j3xpnyjl";

const servicesData = {
  title: "Our Services",
  subtitle: "A complete end-to-end platform for connected pediatric care.",
  services: [
    {
      title: "Health Monitoring",
      description: "Track growth, vaccinations, and developmental milestones in real-time with detailed analytics",
      iconType: "monitoring",
    },
    {
      title: "Smart Reminders",
      description: "Never miss appointments, vaccinations, or medication schedules with automated alerts",
      iconType: "reminders",
    },
    {
      title: "Medical Records",
      description: "Secure digital storage of all medical history and documents in one place",
      iconType: "records",
    },
    {
      title: "Doctor Consultation",
      description: "Connect with certified pediatricians and specialists for professional medical guidance",
      iconType: "consultation",
    },
    {
      title: "Appointment Booking",
      description: "Easy scheduling system for consultations and check-ups with your preferred doctors",
      iconType: "booking",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support for any questions or technical assistance needed",
      iconType: "support",
    },
  ],
};

function MonitoringIcon() {
  return (
    <div className="aspect-[55/55] overflow-clip relative shrink-0 w-full z-[1]">
      <div className="absolute inset-[11.46%_16.67%_29.17%_16.67%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.3333 35.625">
          <path d={svgPaths.p2e1fa600} fill="#0B283B" />
        </svg>
      </div>
      <div className="absolute inset-[5.21%_5.21%_5.2%_5.21%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.8542 53.7565">
          <path d={svgPaths.p38e22880} fill="#2795DD" />
        </svg>
      </div>
    </div>
  );
}

function RemindersIcon() {
  return (
    <div className="relative shrink-0 size-[64px] z-[1]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g>
          <path d={svgPaths.p3ef0bd00} fill="#0B283B" />
          <path d={svgPaths.p770300} fill="#2795DD" />
        </g>
      </svg>
    </div>
  );
}

function RecordsIcon() {
  return (
    <div className="relative shrink-0 size-[55px] z-[1]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
        <g>
          <path d={svgPaths.p244fe600} fill="#0B283B" />
          <path d={svgPaths.p20c35600} fill="#2795DD" />
          <path clipRule="evenodd" d={svgPaths.p3ba9400} fill="#2795DD" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function ConsultationIcon() {
  return (
    <div className="h-[55px] relative shrink-0 w-[48px] z-[1]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 55">
        <g clipPath="url(#clipConsult)">
          <path d={svgPaths.p1fc95780} fill="#2795DD" />
          <path d={svgPaths.p1d914000} fill="#0B283B" />
          <path d={svgPaths.pd5b0880} fill="#2795DD" />
        </g>
        <defs>
          <clipPath id="clipConsult">
            <path d="M0 0H48V55H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BookingIcon() {
  return (
    <div className="relative shrink-0 size-[64px] z-[1]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g>
          <path d={svgPaths.p36939040} fill="#2795DD" />
          <path d={svgPaths.p37813c80} fill="#0B283B" />
          <path d={svgPaths.pa3f1000} fill="#2795DD" />
        </g>
      </svg>
    </div>
  );
}

function SupportIcon() {
  return (
    <div className="relative shrink-0 size-[58px] z-[1]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
        <g>
          <path d={svgPaths.p3e1af800} fill="#2795DD" />
          <path d={svgPaths.p1ee5a400} fill="#0B283B" />
        </g>
      </svg>
    </div>
  );
}

function ServiceIcon({ type }: { type: string }) {
  switch (type) {
    case "monitoring":
      return (
        <div className="content-stretch flex isolate items-center justify-center p-[20px] relative rounded-[8px] shrink-0 size-[64px] z-[3]">
          <div className="content-stretch flex flex-col h-[64px] isolate items-center justify-center relative shrink-0 w-[59px] z-[1]">
            <MonitoringIcon />
          </div>
        </div>
      );
    case "reminders":
      return (
        <div className="content-stretch flex isolate items-center justify-center px-[22px] py-[20px] relative rounded-[8px] shrink-0 size-[64px] z-[3]">
          <RemindersIcon />
        </div>
      );
    case "records":
      return (
        <div className="content-stretch flex isolate items-center justify-center px-[23px] py-[20px] relative rounded-[8px] shrink-0 size-[64px] z-[3]">
          <RecordsIcon />
        </div>
      );
    case "consultation":
      return (
        <div className="content-stretch flex isolate items-center justify-center px-[22px] py-[20px] relative rounded-[8px] shrink-0 size-[64px] z-[3]">
          <ConsultationIcon />
        </div>
      );
    case "booking":
      return (
        <div className="content-stretch flex isolate items-center justify-center px-[22px] py-[20px] relative rounded-[8px] shrink-0 size-[64px] z-[3]">
          <BookingIcon />
        </div>
      );
    case "support":
      return (
        <div className="content-stretch flex isolate items-center justify-center px-[17px] py-[20px] relative rounded-[8px] shrink-0 size-[64px] z-[3]">
          <SupportIcon />
        </div>
      );
    default:
      return null;
  }
}

function ServiceCard({ title, description, iconType }: { title: string; description: string; iconType: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[282px] items-start relative shrink-0 w-[384px]">
      <div className="backdrop-blur-[31px] bg-[rgba(255,255,255,0.01)] flex-[1_0_0] min-h-px relative rounded-[24px] w-full">
        <div aria-hidden className="absolute border-[0.5px] border-[rgba(39,149,221,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_50px_0px_rgba(0,0,0,0.1)]" />
        <div className="content-stretch flex flex-col gap-[24px] isolate items-start p-[32px] relative size-full">
          <ServiceIcon type={iconType} />
          <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full z-[2]">
            <p className="font-['Inter',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#0b283b] text-[24px] tracking-[-0.5px] w-full z-[1]">
              {title}
            </p>
          </div>
          <div className="content-stretch flex flex-col isolate items-start pb-px relative shrink-0 w-full z-[1]">
            <p className="font-['Inter',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#1d5f8b] text-[16px] tracking-[-0.5px] w-full z-[1]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurServices() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center py-[128px] relative shrink-0 w-full z-[12]">
      <div className="content-stretch flex flex-col gap-[64px] isolate items-start max-w-[1280px] px-[32px] relative shrink-0 w-full">
        {/* Heading */}
        <div className="content-stretch flex flex-col gap-[16px] isolate items-center relative shrink-0 w-full z-[2]">
          <p className="font-['Inter',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#0b283b] text-[48px] text-center tracking-[-0.5px] w-full z-[1]">
            {servicesData.title}
          </p>
          <p className="font-['Inter',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1a5780] text-[20px] text-center tracking-[-0.5px] w-full z-[1]">
            {servicesData.subtitle}
          </p>
        </div>
        {/* Grid */}
        <div className="content-start flex flex-wrap gap-[32px] isolate items-start relative shrink-0 w-full z-[1]">
          {servicesData.services.map((service, i) => (
            <ServiceCard key={i} title={service.title} description={service.description} iconType={service.iconType} />
          ))}
        </div>
      </div>
    </div>
  );
}

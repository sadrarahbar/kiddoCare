
export default function OurFoundingTeam() {
  const foundersImagesPath ="avatars";

  const members = [
    {
      name: "Mohsen Sanjari",
      role: "CEO",
      email: "sanjari@kiddocare.com",
      imagePath: `${foundersImagesPath}/sanjariImage.png`,
    },
    {
      name: "Ahmad Salehi",
      role: "CTO",
      email: "salehi@kiddocare.com",
      imagePath: `${foundersImagesPath}/salehiImage.png`,
    },
    {
      name: "Majid Kazemi",
      role: "COO",
      email: "kazemi@kiddocare.com",
      imagePath: `${foundersImagesPath}/kazemiImage.png`,
    },
    {
      name: "Ali Sadeghinejad",
      role: "CFO",
      email: "sadeghinejad@kiddocare.com",
      imagePath: `${foundersImagesPath}/sadeghinejadImage.png`,
    },
  ];

  return (
    <section id="our-team" className="relative z-[2] w-full bg-[#ddf1ff] py-[64px]">
      <div className="container-custom flex flex-col gap-[48px]">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-[16px] text-center">
          <p className="w-full text-[36px] font-bold leading-[40px] tracking-[-0.5px] text-[#0b283b]">
            Our Founding Team
          </p>
          <p className="w-full text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#1a5780]">
            Meet the experts behind our KiddoCare platform
          </p>
        </div>
        {/* Team grid */}
        <div className="grid w-full gap-[32px] sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.email} className="flex w-full flex-col items-center gap-[8px] text-center sm:w-[280px]">
              <div className="relative size-[180px] shrink-0 overflow-hidden rounded-full">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full"
                  src={member.imagePath}
                />
    
              </div>
              <p className="w-full text-[20px] font-normal leading-[28px] tracking-[-0.5px] text-[#0b283b]">
                {member.name}
              </p>
              <p className="w-full text-[20px] font-semibold leading-[24px] tracking-[-0.5px] text-[#1a5780]">
                {member.role}
              </p>
              <p className="w-full break-words text-[16px] font-normal leading-[24px] tracking-[-0.5px] text-[#1d5f8b]">
                {member.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import imgImg from "@/imports/Final-1/1af2086220affecd5f498aeca93f64918a91bf86.png";
import imgImg20260704Wa00052 from "@/imports/Final-1/b6a9911ad923ad737aa182694304e6da603b8bcc.png";
import imgImg1 from "@/imports/Final-1/30a03b20d0d79bd9c491d22b6f3398fcaedf2780.png";
import imgDddd1 from "@/imports/Final-1/7f1ff39c017c3e54bbe6077e8aaac982f6b9741a.png";
import imgImg2 from "@/imports/Final-1/e988e6ef720aa675113d122b1059a42df6b88463.png";
import imgImg20260704Wa00032 from "@/imports/Final-1/eedf1451a67be14627d5e354a7c4d1b5e91a3736.png";
import imgImg3 from "@/imports/Final-1/d1de8b14dcdb224d3238629ee05b2850c42f6549.png";
import imgImg20260704Wa00041 from "@/imports/Final-1/21d56a7c89a7508b1b801052387c9f3332474d4f.png";

const teamData = {
  title: "Our Founding Team",
  subtitle: "Meet the experts behind our KiddoCare platform",
  members: [
    {
      name: "Mohsen Sanjari",
      role: "CEO",
      email: "sanjari@kiddocare.com",
      bgImg: imgImg,
      faceImg: imgImg20260704Wa00052,
      faceStyle: { height: "241px", left: "0", top: "-7.19px", width: "180px" },
    },
    {
      name: "Ahmad Salehi",
      role: "CTO",
      email: "salehi@kiddocare.com",
      bgImg: imgImg1,
      faceImg: imgDddd1,
      faceStyle: { height: "243px", left: "-2px", top: "-13.19px", width: "183px" },
    },
    {
      name: "Majid Kazemi",
      role: "COO",
      email: "kazemi@kiddocare.com",
      bgImg: imgImg2,
      faceImg: imgImg20260704Wa00032,
      faceStyle: { height: "247px", left: "-1px", top: "-13.19px", width: "185px" },
    },
    {
      name: "Ali Sadeghinejad",
      role: "CFO",
      email: "sadeghinejad@kiddocare.com",
      bgImg: imgImg3,
      faceImg: imgImg20260704Wa00041,
      faceStyle: { height: "248.463px", left: "-5px", top: "-22.19px", width: "186px" },
    },
  ],
};

interface TeamMember {
  name: string;
  role: string;
  email: string;
  bgImg: string;
  faceImg: string;
  faceStyle: { height: string; left: string; top: string; width: string };
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-center relative shrink-0 w-[280px]">
      <div className="overflow-clip relative rounded-[200px] shrink-0 size-[180px] z-[4]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none rounded-[200px] size-full"
          src={member.bgImg}
        />
        <div className="absolute" style={member.faceStyle}>
          <img alt={member.name} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={member.faceImg} />
        </div>
      </div>
      <p className="font-['Inter',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#0b283b] text-[20px] text-center tracking-[-0.5px] w-full z-[3]">
        {member.name}
      </p>
      <p className="font-['Inter',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1a5780] text-[20px] text-center tracking-[-0.5px] w-full z-[2]">
        {member.role}
      </p>
      <p className="font-['Inter',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1d5f8b] text-[16px] text-center tracking-[-0.5px] w-full z-[1]">
        {member.email}
      </p>
    </div>
  );
}

export default function OurFoundingTeam() {
  return (
    <div className="bg-[#ddf1ff] content-stretch flex flex-col items-center py-[64px] relative shrink-0 w-full z-[2]">
      <div className="content-stretch flex flex-col gap-[48px] isolate items-start max-w-[1280px] px-[32px] relative shrink-0 w-full">
        {/* Heading */}
        <div className="content-stretch flex flex-col gap-[16px] isolate items-center relative shrink-0 w-full z-[2]">
          <p className="font-['Inter',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#0b283b] text-[36px] text-center tracking-[-0.5px] w-full z-[1]">
            {teamData.title}
          </p>
          <p className="font-['Inter',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1a5780] text-[20px] text-center tracking-[-0.5px] w-full z-[1]">
            {teamData.subtitle}
          </p>
        </div>
        {/* Team grid */}
        <div className="content-stretch flex gap-[32px] isolate items-start relative shrink-0 w-full z-[1]">
          {teamData.members.map((member, i) => (
            <MemberCard key={i} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

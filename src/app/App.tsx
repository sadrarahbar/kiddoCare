import svgPaths from "@/imports/Final-1/svg-30j3xpnyjl";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import FamilyMobileApp from "@/components/FamilyMobileApp";
import ProviderClinicWorkspace from "@/components/ProviderClinicWorkspace";
import Info from "@/components/Info";
import WhyKiddoCare from "@/components/WhyKiddoCare";
import HealthEcosystemChallenges from "@/components/HealthEcosystemChallenges";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import OurFoundingTeam from "@/components/OurFoundingTeam";
import Footer from "@/components/Footer";

function Separator({ variant }: { variant: "dark" | "white1" | "white2" | "white3" }) {
  if (variant === "dark") {
    return (
      <div className="flex items-center justify-center relative shrink-0 w-full z-[15]">
        <div className="-scale-y-100 flex-none w-full">
          <div className="content-stretch flex flex-col h-[17px] items-start overflow-clip relative w-full">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[36px] relative w-[1920px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 36">
                    <path d={svgPaths.p14248a00} fill="#0B283B" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "white1") {
    return (
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full z-[13]">
        <div className="h-[56.189px] relative shrink-0 w-[1920px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 56.1892">
            <path d={svgPaths.p3b3caf00} fill="white" />
          </svg>
        </div>
      </div>
    );
  }
  if (variant === "white2") {
    return (
      <div className="flex items-center justify-center relative shrink-0 w-full z-[11]">
        <div className="flex-none rotate-180 w-full">
          <div className="content-stretch flex flex-col items-start overflow-clip relative w-full">
            <div className="h-[28px] relative shrink-0 w-[1920px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 28">
                <path d={svgPaths.p2ef71480} fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "white3") {
    return (
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full z-[5]">
        <div className="h-[32px] relative shrink-0 w-[1920px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 32">
            <path d={svgPaths.p27436700} fill="white" />
          </svg>
        </div>
      </div>
    );
  }
  return null;
}

function SeparatorWhite4() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full z-[3]">
      <div className="flex-none rotate-180 w-full">
        <div className="content-stretch flex flex-col items-start overflow-clip relative w-full">
          <div className="h-[32px] relative shrink-0 w-[1920px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 32">
              <path d={svgPaths.p27436700} fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#ddf1ff] content-stretch flex flex-col isolate items-start relative w-full">
      <Header />
      <Separator variant="dark" />
      <Hero />
      <Separator variant="white1" />
      <OurServices />
      <Separator variant="white2" />
      <FamilyMobileApp />
      <ProviderClinicWorkspace />
      <Info />
      <WhyKiddoCare />
      <HealthEcosystemChallenges />
      <Separator variant="white3" />
      <FrequentlyAskedQuestions />
      <SeparatorWhite4 />
      <OurFoundingTeam />
      <Footer />
    </div>
  );
}

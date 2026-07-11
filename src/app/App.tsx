import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurServices from "@/components/OurServices";
import WhyKiddoCare from "@/components/WhyKiddoCare";
import OurFoundingTeam from "@/components/OurFoundingTeam";
import FamilyMobileApp from "@/components/FamilyMobileApp";
import ProviderClinicWorkspace from "@/components/ProviderClinicWorkspace";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import HealthEcosystemChallenges from "@/components/HealthEcosystemChallenges";

export default function App() {
  return (
    <div id="home" className="bg-[#ddf1ff] content-stretch flex flex-col isolate items-start relative w-full">
      <Header />
      <div className="separator separator--header"></div>

      <Hero />
      <div className="separator separator--hero mb-[-2px]"></div>

      <OurServices />
      <div className="separator separator--services"></div>

      <FamilyMobileApp />
      <ProviderClinicWorkspace />
      <Info />
      <WhyKiddoCare />

      <HealthEcosystemChallenges />
      <div className="separator separator--healthEcosystem"></div>

      <FrequentlyAskedQuestions />
      <div className="separator separator--FAQ"></div>

      <OurFoundingTeam />
      <Footer />
    </div>
  );
}

import AboutHero from "@/components/about/about-hero";
import OurMission from "@/components/about/our-mission";
import OurStart from "@/components/about/our-start";
import OurStory from "@/components/about/our-story";
import ClientWrapper from "@/components/client-wrapper";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";

const AboutPage = () => {
  return (
    <ClientWrapper>
      <div className="w-full relative flex flex-col pt-16">
        <AboutHero />
        <OurStory />
        <OurStart />
        <OurMission />
        <Faq />
        <CTA />
      </div>
    </ClientWrapper>
  );
};

export default AboutPage;

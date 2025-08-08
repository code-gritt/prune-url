import ClientWrapper from "@/components/client-wrapper";
import IntegrationsHero from "@/components/integrations/integrations-hero";
import IntegrationsSection from "@/components/integrations/integrations-section";
import Blogs from "@/components/marketing/blogs";
import CTA from "@/components/marketing/cta";
import Stats from "@/components/marketing/stats";

const IntegrationsPage = () => {
  return (
    <ClientWrapper>
      <div className="w-full relative flex flex-col pt-16">
        <IntegrationsHero />
        <IntegrationsSection />
        <Stats />
        <CTA />
      </div>
    </ClientWrapper>
  );
};

export default IntegrationsPage;

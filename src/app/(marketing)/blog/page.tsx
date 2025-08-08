import BlogHero from "@/components/blog/blog-hero";
import BlogSection from "@/components/blog/blog-section";
import ClientWrapper from "@/components/client-wrapper";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";

const BlogPage = () => {
  return (
    <ClientWrapper>
      <div className="w-full relative flex flex-col pt-16">
        <BlogHero />
        <BlogSection />
        <Faq />
        <CTA />
      </div>
    </ClientWrapper>
  );
};

export default BlogPage;

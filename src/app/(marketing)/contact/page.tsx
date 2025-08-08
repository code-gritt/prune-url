import React from "react";
import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import CTA from "@/components/marketing/cta";
import ClientWrapper from "@/components/client-wrapper";

const ContactPage = () => {
  return (
    <ClientWrapper>
      <div className="w-full relative flex flex-col pt-16">
        <ContactHero />
        <ContactForm />
        <CTA />
      </div>
    </ClientWrapper>
  );
};

export default ContactPage;

import ContactHero from "@/components/Blocks/contact-blocks/ContactHero";
import ContactCard from "@/components/Blocks/contact-blocks/ContactCard";
import SEO from "@/components/SEO";

const HomeContact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <SEO
        title="Contact Marco Talaat — Hire a WordPress Developer"
        description="Get in touch with Marco Talaat, a PHP and WordPress developer based in Cairo, Egypt, for custom websites, WooCommerce stores, and Laravel projects."
        path="/contact"
      />
      <ContactHero />
      <ContactCard />
    </section>
  );
};

export default HomeContact;

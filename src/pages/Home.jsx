import ContactCard from "@/components/Blocks/contact-blocks/ContactCard";
import HomeAbout from "@/components/Blocks/home-blocks/About";
import HomeHero from "@/components/Blocks/home-blocks/Hero";
import HomeProjects from "@/components/Blocks/home-blocks/Projects";
import HomeReviews from "@/components/Blocks/home-blocks/Reviews";
import HomeServices from "@/components/Blocks/home-blocks/Services";
import SEO from "@/components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Marco Talaat | PHP & WordPress Developer in Cairo"
        description="Marco Talaat builds custom WordPress, Laravel, and React solutions — dynamic systems, WooCommerce stores, and scalable web platforms."
        path="/"
      />
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeProjects />
      <HomeReviews />
      <section className="px-6">
        <ContactCard />
      </section>
    </>
  );
};

export default Home;

import AboutHero from "@/components/Blocks/about-blocks/AboutHero";
import AboutStory from "@/components/Blocks/about-blocks/AboutStory";
import AboutSkills from "@/components/Blocks/about-blocks/AboutSkills";
import AboutTimeline from "@/components/Blocks/about-blocks/AboutTimeline";
import AboutCTA from "@/components/Blocks/about-blocks/AboutCTA";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <SEO
        title="About Marco Talaat — PHP & WordPress Developer"
        description="Learn more about Marco Talaat, a PHP and WordPress developer in Cairo, Egypt, specializing in custom WordPress builds, WooCommerce stores, and Laravel-powered systems."
        path="/about"
      />
      <AboutHero />
      <AboutStory />
      <AboutSkills />
      <AboutTimeline />
      <AboutCTA />
    </div>
  );
};

export default About;

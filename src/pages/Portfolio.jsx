import PortfolioHero from "@/components/Blocks/portfolio-blocks/Portfolio-Hero";
import StoryIntro from "@/components/Blocks/portfolio-blocks/StoryIntro";
import StorySection from "@/components/Blocks/portfolio-blocks/StorySection";
import SEO from "@/components/SEO";

const Portfolio = () => {
  return (
    <div id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      <SEO
        title="Marco Talaat's Projects — WordPress, Laravel & React Work"
        description="Explore Marco Talaat's portfolio of custom WordPress builds, WooCommerce stores, and Laravel and React projects for real clients across Egypt and beyond."
        path="/portfolio"
      />
      <PortfolioHero />

      <StoryIntro />

      {/* Story Flow */}
      <div>
        <StorySection />
      </div>
    </div>
  );
};

export default Portfolio;

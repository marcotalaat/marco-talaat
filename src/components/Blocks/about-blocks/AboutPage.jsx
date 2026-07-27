import {
  AboutHero,
  AboutStory,
  AboutStats,
  AboutSkills,
  AboutTimeline,
  AboutCTA,
} from "@/components/Blocks/about-blocks";

// Example composition — drop this in as src/pages/About.jsx (or wherever
// your router expects a page component) and adjust the import path above
// to match where about-blocks actually lives in your project.
const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutSkills />
      <AboutTimeline />
      <AboutCTA />
    </>
  );
};

export default AboutPage;

import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";

import AboutImage from "../../../assets/images/about-me.svg";
import Button from "@/components/ui/button";

const HomeAbout = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold text-neutral-900">
            <SplittingText text="About Me" aria-hidden="true" />
          </h2>

          <p className="text-neutral-700 text-lg md:text-xl leading-relaxed max-w-xl">
            I am a WordPress developer with strong experience in building custom
            functionality, advanced filtering systems, user management
            workflows, AJAX-based features, and multilingual platforms. My goal
            is to transform ideas into structured, scalable digital systems.
          </p>

          {/* Button */}
          <div>
            <Button size="lg" asChild>
              <a href="/about">About Me</a>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={AboutImage}
            alt="About Marco"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;

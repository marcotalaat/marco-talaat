import { Code2, Workflow, Layers, Globe2, Quote } from "lucide-react";
import AboutImage from "@/assets/images/about-me.svg";

const focusAreas = [
  {
    icon: <Code2 size={22} />,
    title: "Custom Plugin Development",
    description:
      "Purpose-built WordPress plugins instead of stacking generic ones — lighter, faster, and built for exactly what the project needs.",
  },
  {
    icon: <Workflow size={22} />,
    title: "Workflow Automation",
    description:
      "AJAX-driven filtering, approval flows, and user management systems that remove manual steps from day-to-day operations.",
  },
  {
    icon: <Layers size={22} />,
    title: "Scalable Architecture",
    description:
      "Code and database structures planned to handle growth from day one, so features don't need to be rebuilt as traffic or data scales.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Multilingual Systems",
    description:
      "Content structures and admin workflows that support multiple languages cleanly, without duplicating logic per locale.",
  },
];

const AboutStory = () => {
  return (
    <section className="relative mx-auto max-w-7xl md:px-6 pb-24 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="flex justify-center md:justify-start order-2 md:order-1">
          <img
            src={AboutImage}
            alt="Marco Talaat"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </div>

        {/* Copy */}
        <div className="space-y-6 text-center md:text-left order-1 md:order-2">
          <span className="text-primary uppercase tracking-[4px] text-sm font-medium">
            My Story
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            From Curiosity to Code
          </h2>

          <div className="space-y-4 text-neutral-700 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            <p>
              I started out customizing WordPress themes for small local
              businesses, and quickly got curious about what was happening under
              the hood. That curiosity turned into a deep dive into PHP, then
              into building custom plugins, dashboards, and workflows that
              off-the-shelf themes simply couldn't do.
            </p>

            {/* <p>
              Today I split my time between WordPress ecosystems and modern
              stacks like React and Laravel — bridging the gap between flexible
              content management and fully custom, scalable applications.
              Whether it's an AJAX-powered filtering system or a multilingual
              client portal, I care most about building things that hold up as
              they grow.
            </p> */}

            <p>
              Every project starts the same way: understanding how the business
              actually works before writing a single line of code. That means
              mapping out the real workflow — who enters data, who approves it,
              what happens next — and only then deciding whether it needs a
              custom plugin, a Laravel service, or a React interface layered on
              top. The goal is never just "a working site," it's a system the
              client can actually run their business on.
            </p>

            {/* <p>
              Outside of client work, I'm usually refining a personal dashboard
              project or picking apart a new framework just to see how it
              thinks.
            </p> */}
          </div>
        </div>
      </div>

      {/* Pull Quote */}
      <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
        <Quote
          size={30}
          className="text-primary/60 mx-auto mb-4"
          strokeWidth={1.5}
        />
        <p className="text-2xl md:text-3xl font-medium text-neutral-800 leading-snug italic">
          "A good system doesn't just work today — it still makes sense a year
          later, when the business has outgrown its first version."
        </p>
      </div>

      {/* What I Focus On */}
      <div className="mt-20 md:mt-24">
        <div className="text-center mb-12">
          <span className="text-primary uppercase tracking-[4px] text-sm font-medium">
            What I Focus On
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3">
            Where I Add the Most Value
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="
                rounded-[24px]
                p-7
                bg-white/60
                backdrop-blur-sm
                border border-black/5
                shadow-[0_10px_30px_rgba(0,0,0,.05)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(0,0,0,.08)]
              "
            >
              <div
                className="
                  w-12 h-12 rounded-xl
                  bg-primary/10
                  text-primary
                  flex items-center justify-center
                  mb-5
                "
              >
                {area.icon}
              </div>

              <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                {area.title}
              </h4>

              <p className="text-neutral-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStory;

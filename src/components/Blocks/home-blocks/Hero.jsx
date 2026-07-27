import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";
import { TypingText } from "@/components/animate-ui/primitives/texts/typing";

import {
  FaPhp,
  FaWordpress,
  FaReact,
  FaLaravel,
  FaElementor,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import { SiTailwindcss, SiMysql, SiWoocommerce } from "react-icons/si";

const skills = [
  { icon: <FaPhp />, name: "PHP" },
  { icon: <FaWordpress />, name: "WordPress" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaLaravel />, name: "Laravel" },
  { icon: <FaElementor />, name: "Elementor" },
  { icon: <SiWoocommerce />, name: "WooCommerce" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
];

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-28 flex flex-col items-center justify-center text-center space-y-8">
        <SplittingText
          text="Hi"
          aria-hidden="true"
          className="text-xl font-medium text-neutral-600"
        />

        <h1 className="text-6xl md:text-7xl font-extrabold text-neutral-900">
          <SplittingText text="I'm Marco Talaat" aria-hidden="true" />
        </h1>

        <TypingText
          text="PHP - WordPress Developer"
          className="text-2xl md:text-3xl font-semibold text-primary"
        />

        <p className="max-w-3xl text-neutral-700 text-lg md:text-xl leading-relaxed">
          I build powerful, scalable, and conversion-focused web solutions using
          WordPress, React, and modern development tools. I specialize in
          dynamic systems, custom dashboards, and user-based platforms — not
          just websites.
        </p>
      </div>

      <div className="relative py-8 mb-28 border-y border-neutral-200 overflow-hidden">
        <div className="marquee flex gap-12 items-center">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-neutral-700 shrink-0"
            >
              <span className="text-3xl text-primary">{skill.icon}</span>

              <span className="text-lg font-medium whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

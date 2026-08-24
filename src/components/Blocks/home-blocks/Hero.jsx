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
  { icon: FaPhp, name: "PHP" },
  { icon: FaWordpress, name: "WordPress" },
  { icon: FaReact, name: "React" },
  { icon: FaLaravel, name: "Laravel" },
  { icon: FaElementor, name: "Elementor" },
  { icon: SiWoocommerce, name: "WooCommerce" },
  { icon: FaJs, name: "JavaScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiMysql, name: "MySQL" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
];

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-28 flex flex-col items-center justify-center text-center space-y-8">
        <span className="text-xl font-medium text-neutral-600">Hi</span>

        <h1 className="text-6xl md:text-7xl font-extrabold text-neutral-900">
          I'm Marco Talaat
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-primary">
          PHP - WordPress Developer
        </h2>

        <p className="max-w-3xl text-neutral-700 text-lg md:text-xl leading-relaxed">
          I build powerful, scalable, and conversion-focused web solutions using
          WordPress, React, and modern development tools. I specialize in
          dynamic systems, custom dashboards, and user-based platforms — not
          just websites.
        </p>
      </div>

      {/* SKILLS MARQUEE */}
      <div className="relative py-8 mb-28 border-y border-neutral-200 overflow-hidden">
        <div className="marquee flex gap-12 items-center">
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center gap-3 text-neutral-700 shrink-0"
              >
                {/* Decorative icon - skill name provides the accessible text */}
                <span className="text-3xl text-primary" aria-hidden="true">
                  <Icon />
                </span>

                <span className="text-lg font-medium whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

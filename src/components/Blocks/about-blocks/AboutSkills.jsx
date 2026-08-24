import {
  FaPhp,
  FaWordpress,
  FaReact,
  FaLaravel,
  FaElementor,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaBitbucket,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiWoocommerce,
  SiJquery,
  SiCpanel,
  SiGoogleanalytics,
  SiGoogletagmanager,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Web Development",
    description: "The core building blocks of every site I ship.",
    skills: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiJquery />, name: "jQuery" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaPhp />, name: "PHP" },
      { icon: <SiMysql />, name: "MySQL" },

      { icon: null, name: "AJAX" },
    ],
  },
  {
    title: "CMS & WordPress",
    description: "Where the logic and content structure live.",
    skills: [
      { icon: <FaWordpress />, name: "Theme & Plugin Development" },
      { icon: <SiWoocommerce />, name: "WooCommerce" },
      { icon: null, name: "Custom Post Types" },
      { icon: null, name: "Widgets" },
      { icon: <FaElementor />, name: "Elementor PRO" },
      { icon: null, name: "Gutenberg" },
      { icon: null, name: "ACF PRO" },
    ],
  },
  {
    title: "APIs",
    description: "Connecting systems and data sources together.",
    skills: [{ icon: null, name: "REST API Integration & Development" }],
  },
  /*   {
    title: "Databases",
    description: "Structuring and querying the data behind it all.",
    skills: [{ icon: <SiMysql />, name: "MySQL" }],
  }, */
  {
    title: "Version Control",
    description: "Tracking changes and collaborating with confidence.",
    skills: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <FaBitbucket />, name: "Bitbucket" },
    ],
  },
  {
    title: "Hosting & Server Management",
    description: "Keeping sites live, secure, and running smoothly.",
    skills: [
      { icon: <SiCpanel />, name: "cPanel" },
      { icon: null, name: "FTP/SFTP" },
      { icon: null, name: "Domain & DNS Management" },
      { icon: null, name: "SSL Installation" },
      { icon: null, name: "Website Migration" },
      { icon: null, name: "Backups & Restore" },
    ],
  },
  {
    title: "Analytics & Optimization",
    description: "Measuring performance and improving what matters.",
    skills: [
      { icon: <SiGoogleanalytics />, name: "GA4" },
      { icon: <SiGoogletagmanager />, name: "GTM" },
      { icon: null, name: "Core Web Vitals" },
      { icon: null, name: "SEO Basics" },
    ],
  },
  {
    title: "Programming Fundamentals",
    description: "The thinking behind every solution I build.",
    skills: [
      { icon: null, name: "Object-Oriented Programming (OOP)" },
      { icon: null, name: "Data Structures" },
      { icon: null, name: "Algorithms" },
    ],
  },
  {
    title: "Other WordPress Skills",
    description: "The day-to-day craft of maintaining real sites.",
    skills: [
      { icon: null, name: "Security Hardening" },
      { icon: null, name: "Performance Optimization" },
      { icon: null, name: "Troubleshooting & Debugging" },
      { icon: null, name: "Plugin & Theme Customization" },
    ],
  },
];

const AboutSkills = () => {
  return (
    <section className="">
      <div className="text-center mb-16">
        <span className="text-primary uppercase tracking-[4px] text-sm font-medium">
          What I Work With
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900">
          Skills & Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className="
              rounded-[30px]
              p-8
              border border-neutral-200
              bg-white/60
              backdrop-blur-sm
              transition-all duration-500
              hover:-translate-y-2
              hover:border-primary/40
            "
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              {group.title}
            </h3>

            <p className="text-neutral-600 mb-6">{group.description}</p>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="
                    group
                    flex items-center gap-2
                    px-4 py-2
                    rounded-xl
                    bg-neutral-900/5
                    border border-neutral-200
                    text-neutral-800
                    transition-all duration-300
                   hover:border-primary
                  "
                >
                  {skill.icon ? (
                    <span className="text-lg text-primary transition-colors duration-300 group-hover:text-neutral-900">
                      {skill.icon}
                    </span>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-primary transition-colors duration-300 shrink-0 group-hover:bg-neutral-900" />
                  )}
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSkills;

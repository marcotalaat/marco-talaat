import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";
import ServicesBkg from "../../../assets/images/texture/PK_PAPER_12.jpg";
import PaperTexture from "../../../assets/images/texture/PK_PAPER_12.jpg";

const servicesList = [
  {
    title: "Custom Website Development",
    description:
      "I build fully customized WordPress websites tailored to your business goals — no templates, no limitations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="#FFFF" className="w-10 h-10">
        <path d="M4 6h16M4 12h16M4 18h16" stroke="#FFFF" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Dynamic Content Management",
    description:
      "Easily manage and update your website content without technical knowledge, with flexible structures built for growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="#FFFF" className="w-10 h-10">
        <path d="M12 4v16M4 12h16" stroke="#FFFF" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Modern Block-Based Design",
    description:
      "Reusable and flexible content sections that allow you to edit pages visually and efficiently.",
    icon: (
      <svg viewBox="0 0 24 24" fill="#FFFF" className="w-10 h-10">
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "API & System Integrations",
    description:
      "Connect your website with external platforms, services, or mobile apps for seamless functionality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="#FFFF" className="w-10 h-10">
        <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="2" />
        <path
          d="M3 12h4M17 12h4M12 3v4M12 17v4"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Multilingual Websites",
    description:
      "Reach a wider audience with fully translated websites supporting multiple languages.",
    icon: (
      <svg viewBox="0 0 24 24" fill="#FFFF" className="w-10 h-10">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Performance & Security",
    description:
      "Fast-loading, secure websites optimized for performance, user experience, and search engines.",
    icon: (
      <svg viewBox="0 0 24 24" fill="#FFFF" className="w-10 h-10">
        <path
          d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

//const rotations = ["-2deg", "2deg", "-1deg", "1deg", "-3deg", "2deg"];

const HomeServices = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black mb-6">
          <SplittingText text="Services" aria-hidden="true" />
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {servicesList.map((service, idx) => (
          <div
            key={idx}
            className="
              relative overflow-hidden
              rounded-[30px]
              p-2 md:p-6
              border border-white/10
              transition-all duration-500 ease-out
              hover:-translate-y-3
              hover:rotate-0
              group
              backdrop-blur-md
            "
            style={{
              //transform: `rotate(${rotations[idx]})`,
              backgroundImage: `
                linear-gradient(
                  135deg,
                  rgba(20,20,20,0.88),
                  rgba(10,10,10,0.92)
                ),
                url(${ServicesBkg})
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Paper Texture */}
            <div
              className="
                absolute inset-0 opacity-[0.12]
                mix-blend-overlay pointer-events-none
              "
              style={{
                backgroundImage: `url(${PaperTexture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Glow Layer */}
            <div
              className="
                absolute inset-0 opacity-0
                group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br
                from-primary/10
                via-transparent
                to-white/5
              "
            />

            {/* Content */}
            <div className="relative z-10  md:p-0 p-5">
              {/* Icon */}
              <div
                className="
                  inline-flex items-center justify-center
                  w-20 h-20
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  text-primary
                  mb-7
                  transition duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-2xl md:text-3xl
                  font-bold
                  text-white
                  leading-snug
                  mb-5
                "
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-base md:text-lg
                  leading-8
                  text-gray-300
                "
              >
                {service.description}
              </p>

              {/* Bottom Line */}
              <div
                className="
                  mt-8 w-16 h-[2px]
                  bg-white
                  transition-all duration-500
                  group-hover:w-28
                "
              />
            </div>

            {/* Inner Shadow */}
            <div
              className="
                absolute inset-0
                rounded-[30px]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                pointer-events-none
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;

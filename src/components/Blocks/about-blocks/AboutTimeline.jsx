import { Briefcase } from "lucide-react";

// Placeholder history — swap in real roles, companies, and dates.
const timeline = [
  {
    year: "2024 — Present",
    role: "PHP & WordPress Developer",
    place: "TransformUs",
    description:
      "Building custom WordPress systems, dashboards, and WooCommerce stores for international clients, alongside React front ends where the project calls for it.",
  },
  {
    year: "2022 — 2024",
    role: "WordPress Developer",
    place: "iLamp Agency",
    description:
      "Delivered custom features, Elementor-based systems, and multilingual sites, with a focus on AJAX-driven filtering and dynamic content.",
  },
  {
    year: "2020 — 2021",
    role: "Front End Developer",
    place: "Freelance",
    description:
      "Started out building and customizing websites for small businesses.",
  },
];

const AboutTimeline = () => {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="text-center mb-20">
        <span className="text-primary uppercase tracking-[4px] text-sm font-medium">
          The Path So Far
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900">
          Experience
        </h2>
      </div>

      <div className="relative border-l border-neutral-200 ml-4 md:ml-8">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative pl-10 pb-14 last:pb-0">
            {/* Dot */}
            <div
              className="
                absolute -left-[21px] top-0
                w-10 h-10
                rounded-2xl
                bg-white
                border border-neutral-200
                flex items-center justify-center
                text-primary
                shadow-sm
              "
            >
              <Briefcase size={18} />
            </div>

            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
              {item.year}
            </span>

            <h3 className="text-2xl font-bold text-neutral-900 mt-2">
              {item.role}
            </h3>

            <p className="text-neutral-500 font-medium mb-3">{item.place}</p>

            <p className="text-neutral-700 leading-relaxed max-w-2xl">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTimeline;

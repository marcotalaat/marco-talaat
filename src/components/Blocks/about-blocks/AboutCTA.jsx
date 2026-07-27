import { ArrowUpRight } from "lucide-react";
import ContactPaper from "@/assets/images/texture/contact-paper.webp";

const AboutCTA = () => {
  return (
    <section className="relative mx-auto max-w-7xl md:px-6 pb-24">
      <div
        className="
          relative
          rounded-[32px]
          px-8 py-16 md:px-16
          overflow-hidden
          border border-white/10
          text-center
          shadow-[0_20px_60px_rgba(0,0,0,.35)]
        "
        style={{
          backgroundImage: `
            linear-gradient(
                rgba(43,43,43,.95),
                rgba(43,43,43,.75)
            ),
            url(${ContactPaper})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Have a project in mind?
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          I'm currently open to new WordPress and custom development work. Let's
          talk about what you're building.
        </p>

        <a
          href="/contact"
          className="
            group
            relative
            inline-flex items-center gap-3
            overflow-hidden
            px-10 py-5
            rounded-2xl
            bg-primary
            text-white
            text-lg font-medium
            transition-all duration-300
            hover:scale-105
            shadow-lg shadow-black/20
          "
        >
          Get In Touch
          <ArrowUpRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </section>
  );
};

export default AboutCTA;

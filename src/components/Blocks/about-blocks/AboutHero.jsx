import ContactPaper from "@/assets/images/texture/contact-paper.webp";

const roles = ["PHP Developer", "WordPress Specialist", "React Developer"];

const AboutHero = () => {
  return (
    <section className="relative mt-12 md:mt-20 md:px-6 pb-24">
      <div
        className="
          relative
          mx-auto
          min-h-[480px] sm:min-h-[440px] md:h-[460px]
          max-w-7xl
          overflow-hidden
          rounded-[24px] md:rounded-[32px]
          border border-white/10
          shadow-[0_25px_60px_rgba(0,0,0,.45)]
        "
      >
        {/* Paper Texture */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${ContactPaper})`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Premium Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_45%)]" />

        {/* Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />

        {/* Top Shine — slow breathing glow */}
        <div className="absolute -top-24 left-1/2 h-52 w-[650px] -translate-x-1/2 rounded-full bg-white/10 blur-[90px] motion-safe:animate-[pulse_6s_ease-in-out_infinite]" />

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-[24px] md:rounded-[32px] ring-1 ring-white/10" />

        {/* Availability Pill */}
        <div
          className="
            absolute top-4 right-4 md:top-6 md:right-6
            flex items-center gap-1.5 md:gap-2
            rounded-full
            border border-white/10
            bg-white/5
            px-2.5 py-1.5 md:px-4 md:py-2
            backdrop-blur-sm
          "
        >
          <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
            <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-[#4caf50] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#4caf50]" />
          </span>
          <span className="text-[9px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.15em] text-white/70 whitespace-nowrap">
            Available for Work
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 sm:px-8 py-20 md:py-0 text-center">
          <span className="mb-3 md:mb-4 text-[10px] md:text-xs uppercase tracking-[0.35em] md:tracking-[0.5em] text-white">
            About Me
          </span>

          <h1
            className="
              text-[clamp(2rem,10vw,6rem)]
              uppercase
              tracking-[0.06em] sm:tracking-[0.1em] md:tracking-[0.14em]
              leading-tight md:leading-none
              text-white
              break-words
            "
            style={{
              textShadow: `
                inset 0 0 0 transparent,
                0 -1px 1px rgba(255,255,255,.12),
                0 2px 2px rgba(0,0,0,.95),
                0 8px 18px rgba(0,0,0,.85)
              `,
            }}
          >
            MARCO TALAAT
          </h1>

          <p className="mt-5 md:mt-6 max-w-xl text-sm leading-7 text-white/70">
            Turning ideas into structured, scalable digital systems — one custom
            build at a time.
          </p>

          {/* Role Pills */}
          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {roles.map((role, idx) => (
              <span
                key={idx}
                className="
                  rounded-full
                  border border-white/10
                  px-3 py-1 md:px-4 md:py-1.5
                  text-[10px] md:text-xs
                  uppercase
                  tracking-[0.08em] md:tracking-[0.1em]
                  text-white/60
                  transition-colors duration-300
                  hover:border-primary/40 hover:text-white
                "
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

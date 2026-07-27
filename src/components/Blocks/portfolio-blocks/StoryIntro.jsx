const StoryIntro = () => {
  return (
    <section className="max-w-5xl mx-auto md:px-6 text-center">
      {/* Small label */}
      <p className="text-primary uppercase tracking-[0.5em] text-xs">
        My Work Philosophy
      </p>

      {/* Main headline */}
      <h2 className="mt-6 text-3xl md:text-5xl font-light leading-snug">
        I don’t just build websites —
        <br />I build{" "}
        <span className="text-primary">systems, experiences, and stories</span>.
      </h2>

      {/* Description */}
      <p className="mt-6 text-primary leading-7 max-w-2xl mx-auto">
        Every project below started as a real problem. I didn’t design screens —
        I designed solutions, workflows, and user journeys that actually solve
        business needs.
      </p>

      {/* Divider */}
      <div className="mt-10 flex items-center justify-center">
        <div className="w-24 h-[1px] bg-white/10" />
      </div>
    </section>
  );
};

export default StoryIntro;

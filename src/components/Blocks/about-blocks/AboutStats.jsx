import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, FolderCheck, Clock } from "lucide-react";

import PaperTexture from "@/assets/images/texture/PK_PAPER_12.jpg";

const stats = [
  { icon: Briefcase, value: 5, suffix: "+", label: "Years Experience" },
  { icon: FolderCheck, value: 60, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 40, suffix: "+", label: "Happy Clients" },
  { icon: Clock, value: 98, suffix: "%", label: "On-Time Delivery" },
];

// Lightweight count-up, no extra dependency — starts once the section
// scrolls into view.
const useCountUp = (target, duration = 1400) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return [value, ref];
};

const StatCard = ({ value, suffix, label }) => {
  const [count, ref] = useCountUp(value);

  return (
    <div
      ref={ref}
      className="
        relative overflow-hidden
        rounded-[30px]
        p-8
        border border-white/10
        backdrop-blur-md
        text-center
      "
      style={{
        backgroundImage: `
          linear-gradient(
            135deg,
            rgba(20,20,20,0.88),
            rgba(10,10,10,0.92)
          ),
          url(${PaperTexture})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="
          inline-flex items-center justify-center
          w-16 h-16
          rounded-2xl
          bg-white/5
          border border-white/10
          text-primary
          mb-6
        "
      >
        <Icon size={26} />
      </div>

      <p className="text-4xl md:text-5xl font-black text-white">
        {count}
        {suffix}
      </p>

      <p className="mt-3 text-gray-300 text-base">{label}</p>
    </div>
  );
};

const AboutStats = () => {
  return (
    <section className="relative mx-auto max-w-7xl md:px-6 pb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default AboutStats;

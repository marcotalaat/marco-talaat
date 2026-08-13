import { useState } from "react";
import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import ReviewsBkg from "../../../assets/images/texture/review-card.webp";
import reviews from "@/data/reviews";

// How many cards deep the stack renders behind the active one.
const STACK_DEPTH = 4;

const HomeReviews = () => {
  const [index, setIndex] = useState(0);
  const total = reviews.length;

  const goNext = () => setIndex((prev) => (prev + 1) % total);
  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-28 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-16 gap-5 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5 text-center lg:text-left">
          <span className="text-primary uppercase tracking-[4px] text-sm font-medium">
            Client Words
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 text-primary">
            <SplittingText text="Reviews" aria-hidden="true" />
          </h2>

          <p className="text-neutral-700 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-10">
            Real feedback from people I've worked with — on projects that
            shipped, scaled, and held up long after launch.
          </p>
        </div>

        {/* Right - Card Stack */}
        <div className="lg:col-span-7">
          <div className="relative h-[420px] flex items-center justify-center">
            {/* Prev Arrow */}
            <button
              onClick={goPrev}
              aria-label="Previous review"
              className="
                  absolute left-0 top-1/2
                  -translate-y-1/2
                  z-20
                  w-14 h-14 rounded-2xl
                  bg-primary border border-primary
                  backdrop-blur-sm
                  flex items-center justify-center
                  text-white
                  hover:-translate-x-1
                  transition-all duration-300

                  max-md:top-auto
                  max-md:bottom-[-100px]
                  max-md:translate-y-0
              "
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next Arrow */}
            <button
              onClick={goNext}
              aria-label="Next review"
              className="
                    absolute right-0 top-1/2
                    -translate-y-1/2
                    z-20
                    w-14 h-14 rounded-2xl
                    bg-primary border border-primary
                    backdrop-blur-sm
                    flex items-center justify-center
                    text-white
                    hover:translate-x-1
                    transition-all duration-300

                    max-md:top-auto
                    max-md:bottom-[-100px]
                    max-md:translate-y-0
              "
            >
              <ChevronRight size={22} />
            </button>

            {reviews.map((item, idx) => {
              // Distance behind the active card, wrapping forward through the deck.
              let diff = idx - index;
              if (diff < 0) diff += total;

              const withinStack = diff < STACK_DEPTH;

              const translateY = diff * 16;
              const scale = 1 - diff * 0.05;
              const rotate =
                diff === 0 ? 0 : (idx % 2 === 0 ? 1 : -1) * diff * 2;
              const opacity = withinStack ? 1 - diff * 0.24 : 0;
              const zIndex = total - diff;

              return (
                <div
                  key={idx}
                  className="absolute w-full max-w-md"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                    opacity,
                    zIndex,
                    pointerEvents: diff === 0 ? "auto" : "none",
                    transition:
                      "transform 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease",
                  }}
                >
                  <div
                    className="
                      relative overflow-hidden
                      rounded-[26px]
                      p-8
                      border border-white/10
                      min-h-[300px]
                      shadow-[0_25px_60px_rgba(0,0,0,.4)]
                    "
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          160deg,
                          rgb(22 22 22 / 60%),
                          rgb(10 10 10 / 90%)
                        ),
                        url(${ReviewsBkg})
                      `,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <Quote
                      size={34}
                      className="text-primary/70 mb-5"
                      strokeWidth={1.5}
                      color="#FFF"
                    />

                    <p className="text-gray-200 text-base md:text-lg leading-8 mb-8 min-h-[150px]">
                      {item.review}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <p className="text-white font-medium">
                        {item.name || "—"}
                      </p>

                      {item.rating ? (
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < item.rating
                                  ? "fill-primary text-primary"
                                  : "text-white/20"
                              }
                            />
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deck counter */}
          <div className="mt-16 md:mt-8 text-center">
            <span className="text-sm text-gray-500 font-medium tabular-nums">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;

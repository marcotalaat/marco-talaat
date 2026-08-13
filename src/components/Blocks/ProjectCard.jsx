import { ArrowUpRight, Globe, Eye } from "lucide-react";
import { trackClick } from "@/lib/clickTracker";

const ProjectCard = ({ project, onSelect, source = "home" }) => {
  const handleCaseStudyClick = () => {
    trackClick("project", project.title, source);
    onSelect?.(project);
  };

  const handleLiveLinkClick = () => {
    trackClick("project", project.title, source);
  };

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border border-white/10
        bg-[#0F172A]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-2xl
        hover:shadow-black/40
      "
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 h-12 px-5 flex items-center gap-2 bg-black backdrop-blur-md border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />

        <div className="ml-3 flex items-center gap-2 text-xs text-gray-400 truncate">
          <Globe size={14} />
          {project.liveUrl?.replace("https://", "")}
        </div>
      </div>

      {/* Image */}
      <div className="relative h-[350px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Bottom Title */}
        <div
          className="
            absolute bottom-0 left-0 right-0 p-6
            transition-all duration-500
            group-hover:opacity-0 group-hover:translate-y-8
          "
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            {project.category}
          </span>

          <h3 className="mt-3 text-2xl font-semibold text-white">
            {project.title}
          </h3>
        </div>

        {/* Hover Overlay */}
        <div
          className="
            absolute inset-0 bg-black/75 backdrop-blur-md
            opacity-0 group-hover:opacity-100
            transition-all duration-500
            flex flex-col justify-end p-8 z-50
          "
        >
          <div
            className="
              translate-y-8 opacity-0
              group-hover:translate-y-0 group-hover:opacity-100
              transition-all duration-500
            "
          >
            <span className="inline-block rounded-full border border-white px-3 py-1 text-xs uppercase tracking-widest text-white">
              {project.category}
            </span>

            <h3 className="mt-4 text-xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-300 line-clamp-3">
              {project.overview}
            </p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={handleCaseStudyClick}
                className="
                  inline-flex items-center gap-2
                  rounded-full bg-primary px-5 py-3
                  text-sm font-medium text-white
                  hover:scale-105 transition
                "
              >
                <Eye size={18} />
                Case Study
              </button>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLiveLinkClick}
                className="
                  inline-flex h-12 w-12 items-center justify-center
                  rounded-full border border-white/20 bg-white/10
                  text-white transition
                  hover:bg-white hover:text-black
                "
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 backdrop-blur-xl bg-black/50 border-t border-white/10 px-6 py-5">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-14 h-14 rounded-2xl bg-white p-3 shrink-0 shadow-lg">
            <img
              src={project.powered}
              alt={project.poweredAlt}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-white text-xl font-semibold truncate">
              {project.title}
            </h3>

            <p className="text-sm text-gray-400">
              {project.category} • {project.poweredAlt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import { ArrowUpRight, Eye } from "lucide-react";
import projects from "@/data/projects";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const StorySection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section>
      <div className="max-w-7xl mx-auto md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-[#111]
                shadow-xl
                hover:-translate-y-2
                hover:shadow-primary/20
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Default Bottom Content */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                    transition-all
                    duration-500
                    group-hover:opacity-0
                    group-hover:translate-y-8
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
                    absolute inset-0
                    bg-black/75
                    backdrop-blur-md
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    flex
                    flex-col
                    justify-end
                    p-8
                  "
                >
                  <div
                    className="
                      translate-y-8
                      opacity-0
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                    "
                  >
                    <span className="inline-block rounded-full border border-white px-3 py-1 text-xs uppercase tracking-widest text-white">
                      {project.category}
                    </span>

                    <h3 className="mt-4 text-3xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-300 line-clamp-4">
                      {project.overview}
                    </p>

                    {project.technologies && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-3
                                py-1
                                text-xs
                                text-gray-300
                              "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-8 flex gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-primary
        px-5
        py-3
        text-sm
        font-medium
        text-white
        hover:scale-105
        transition
    "
                      >
                        <Eye size={18} />
                        Case Study
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          text-white
                          transition
                          hover:bg-white
                          hover:text-black
                        "
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    bg-gradient-to-br
                    from-primary/20
                    via-transparent
                    to-transparent
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default StorySection;

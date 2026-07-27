import React, { useState } from "react";
import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";
import { ArrowUpRight, Globe, Eye } from "lucide-react";
import projects from "@/data/projects";
import ProjectModal from "../portfolio-blocks/ProjectModal";
import ProjectCard from "../ProjectCard";

const HomeProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="relative pb-32 overflow-hidden">
        <div className="max-w-7xl px-6 mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <SplittingText text="My Works" aria-hidden="true" />
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-20">
            <a
              href="/portfolio"
              className="
                group
                relative
                overflow-hidden
                px-10
                py-5
                rounded-2xl
                bg-black
                text-white
                border border-white/10
                text-lg font-medium
                transition-all duration-300
                hover:bg-primary
                hover:border-primary
                hover:scale-105
                shadow-lg shadow-black/20
              "
            >
              <span className="relative z-10 flex items-center gap-3">
                Check More Projects
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default HomeProjects;

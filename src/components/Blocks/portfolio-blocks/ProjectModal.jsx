import { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  // Close on Escape + lock background scroll while open
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="
      fixed inset-0 z-[999]
      bg-black/80
      backdrop-blur-xl
      overflow-y-auto
      animate-fadeIn
      "
    >
      <div className="max-w-7xl mx-auto py-20 px-8">
        {/* Header */}

        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-white uppercase tracking-[.4em] text-sm">
              {project.category}
            </p>

            <h1 className="md:text-6xl text-2xl font-bold text-white mt-3">
              {project.title}
            </h1>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-white p-4 hover:bg-primary transition"
          >
            <X />
          </button>
        </div>

        {/* Hero */}

        <img
          src={project.image}
          alt={project.title}
          className="rounded-3xl w-full md:h-[600px] h-[200px] object-cover"
        />

        {/* Stats */}

        <div className="my-14">
          <p className="text-white uppercase">Powered By</p>

          {project.poweredBlack ? (
            <img
              src={project.poweredBlack}
              alt={`${project.title} powered by`}
              className="h-10 mt-3 object-contain"
            />
          ) : (
            <img
              src={project.powered}
              alt={`${project.title} powered by`}
              className="h-10 mt-3 object-contain"
            />
          )}
        </div>

        {/* Overview */}

        {project.overview && (
          <Section title="Overview" text={project.overview} />
        )}

        {project.challenge && (
          <Section title="Challenge" text={project.challenge} />
        )}

        {project.solution && (
          <Section title="Solution" text={project.solution} />
        )}
        {/* Tech */}

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-16">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                      px-5 py-3
                      rounded-full
                      bg-primary/10
                      border border-primary/30
                      text-white
                      "
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}

        {project.liveUrl && (
          <div className="mt-20">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-primary
                  px-8
                  py-4
                  text-white
                  "
            >
              Visit Website
              <ArrowUpRight />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Info = ({ title, value }) => (
  <div>
    <p className="text-gray-500 uppercase">{title}</p>

    <h3 className="text-white text-xl mt-2">{value || "—"}</h3>
  </div>
);

const Section = ({ title, text }) => (
  <div className="my-14">
    <h2 className="text-3xl text-white mb-5">{title}</h2>

    <p className="text-gray-300 leading-8">{text}</p>
  </div>
);

export default ProjectModal;

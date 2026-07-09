import { useToc } from "@/context/UI/useToc";
import { projects } from "@/data/projects";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Project() {
  const { setVisible, setLinks } = useToc();
  const { projectName } = useParams();
  const currentIndex = projects.findIndex(
    (p) =>
      p.title.toLowerCase() === projectName?.replaceAll("-", " ").toLowerCase(),
  );

  const project = projects[currentIndex];

  useEffect(() => {
    setLinks(project.tableOfContents);

    setVisible(true);

    return () => {
      setVisible(false);
      setLinks([]);
    };
  }, [setVisible, setLinks, project.tableOfContents]);

  if (!project) return null;
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const { projectDetails } = project;

  return (
    <div className="lg:border-x [&_p,li]:tracking-[-0.5px] [&_section]:space-y-4 no-scrollbar -mx-4 overflow-y-auto px-4 lg:px-6 [&_img]:rounded-md [&_h2,h3]:mb-1 [&_h2,h3]:text-2xl [&_h2,h3]:font-medium pt-25 [&_section]:mb-12 [&_section]:first:pt-0 [&_section]:pt-0! [&_img]:shadow-sm [&_figcaption]:mt-1 *:last:pb-60">

      {projectDetails}

      <div className="space-y-1">
        {project.links.livePage && (
          <Link
            target="_blank"
            className="inline-link justify-self-end"
            to={project.links.livePage}
          >
            Visit Website
            <ChevronRight aria-hidden />
          </Link>
        )}
        <Link
          className="inline-link justify-self-end"
          to={`/projects/${nextProject.title.replaceAll(" ", "-")}`}
        >
          See next project <ChevronRight aria-hidden />
        </Link>
        <Link
          className="inline-link justify-self-end"
          to="/"
        >
          Home <ChevronRight aria-hidden />
        </Link>
      </div>
    </div>
  );
}

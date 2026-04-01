import caseStudies from "@/data/caseStudies";
import { ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function CaseStudy() {
  const { studyId } = useParams();
  const studyIndex = caseStudies.findIndex((s) => s.id === studyId);
  const study = caseStudies[studyIndex];
  const nextStudy =
    caseStudies.length > 1
      ? caseStudies[(studyIndex + 1) % caseStudies.length]
      : null;

  return (
    <div className="[&_p,li]:tracking-[-0.5px] [&_section]:space-y-4 no-scrollbar -mx-4 overflow-y-auto px-4 [&_img]:rounded-md [&_h2,h3]:mb-1 [&_h2]:text-3xl [&_h2,h3]:font-medium pt-25 [&_section]:mb-8 [&_section]:first:pt-0 [&_section]:pt-0! [&_img]:shadow-sm [&_figcaption]:mt-1 *:last:pb-60 dark:[&_p]:text-muted-foreground">
      <h1 className="text-pretty">{study?.title}</h1>
      {study?.content}

      <div>
        {nextStudy && (
          <Link
            className="inline-link justify-self-end"
            to={`/study/${nextStudy.id}`}
          >
            Next Study
            <ChevronRight aria-hidden />
          </Link>
        )}
        <Link
          className="inline-link justify-self-end"
          to="/"
        >
          Home
          <ChevronRight aria-hidden />
        </Link>
      </div>
    </div>
  );
}

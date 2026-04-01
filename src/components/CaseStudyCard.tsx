import type caseStudies from "@/data/caseStudies";
import { useNavigate } from "react-router-dom";

type CaseStudyCardProps = {
  study: (typeof caseStudies)[number];
};

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/study/${study.id}`)}
      className="border border-muted flex p-0 overflow-hidden max-w-150 mx-auto hover:cursor-pointer hover:bg-muted/20 transition-colors"
    >
      {study.previewImg}
      <div className="p-4 text-start">
        {study.title}
        <p className="text-sm dark:text-muted-foreground">{study.description}</p>
      </div>
    </button>
  );
}

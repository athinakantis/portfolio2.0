import { Code, Figma, GlobeIcon } from "lucide-react";
import Tag from "./Tag";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  summary: string;
  techUsed: string[];
  links: {
    sourceCode?: string;
    figma?: string;
    livePage: string;
  };
  media?: {
    type: "video" | "img";
    src: string;
    fallback: string;
  };
};

function ProjectPreview({
  media,
}: {
  media: ProjectCardProps["media"];
}) {
  if (!media) return <div className="w-full border-b border-border-md h-50" />;

  const { type, src, fallback } = media;
  if (type === "video")
    return (
      <video muted autoPlay loop className="h-50 object-cover w-full object-top">
        <source src={src} type="video/webm" />
        <source src={fallback} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  else return <img src={src} />;
}

export default function ProjectCard({ props, className }: { props: ProjectCardProps, className?: string }) {
  const {
    title,
    summary,
    techUsed,
    links: { sourceCode, livePage, figma },
    media,
  } = props;
  return (
    <motion.div
      className={cn("rounded-md border border-border min-w-[300px] flex-1 overflow-hidden max-w-[410px] h-full", className)}
      initial={{ filter: "blur(3px)" }}
      whileInView={{ filter: "blur(0px)" }}
      viewport={{ amount: 0.5 }}
    >
      <ProjectPreview media={media} />

      <div className="p-3 space-y-2 h-[calc(100%-200px)]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{summary}</p>

        <div className="flex gap-2 flex-wrap text-sm mt-4">
          {techUsed.map((t) => (
            <Tag
              title={t}
              key={`tech-used-${title}-${t}`}
              className="text-xs/3"
            />
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <a
            href={livePage}
            target="_blank"
            className="flex gap-1 items-center text-sm py-1 px-2"
          >
            <GlobeIcon className="w-3 h-3" />
            Website
          </a>
          {sourceCode && (
            <a
              href={sourceCode}
              target="_blank"
              className="flex gap-1 items-center text-sm py-1 px-2"
            >
              <Code className="w-3 h-3" />
              Source Code
            </a>
          )}
          {figma && (
            <a
              href={figma}
              target="_blank"
              className="flex gap-1 items-center text-sm py-1 px-2"
            >
              <Figma className="w-3 h-3" />
              Design
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

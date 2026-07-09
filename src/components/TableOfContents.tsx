import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type TableOfContentsProps = {
  links: {
    label: string;
    link: string;
    className?: string;
  }[];
};

export default function TableOfContents({ links }: TableOfContentsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="hidden xl:block fixed lg:top-20 bg-background p-4 border rounded-md transform-[translateX(calc(-100%-48px))] max-w-55 w-full z-10"
    >
      <h2 className="text-2xl">On This Page</h2>
      <ul className="flex flex-col text-sm gap-px">
        {links.map((link) => (
          <a
            href={link.link}
            className={cn(
              "text-muted-foreground no-underline hover:text-foreground",
              link?.className,
            )}
          >
            {link.label}
          </a>
        ))}
      </ul>
    </motion.div>
  );
}

import { useIsMobile } from "@/hooks/useScreenSize";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

type TableOfContentsProps = {
  links: {
    label: string;
    link: string;
    className?: string;
  }[];
};

export default function TableOfContents({ links }: TableOfContentsProps) {
  const { isMobile, isTablet } = useIsMobile();
  const [showMore, setShowMore] = useState(false);

  if (isMobile || isTablet)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed bg-background shadow-md px-4 py-2 border rounded-md max-w-55 w-full z-10 right-6 bottom-6"
      >
        <motion.button
          onClick={() => setShowMore((prev) => !prev)}
          className="flex justify-between w-full p-0"
        >
          <h2 className="text-xl">On This Page</h2>
          <ChevronUp
            style={{
              transform: showMore ? "rotate(180deg)" : "rotate(0deg)",
            }}
            size={30}
            aria-hidden
          />
        </motion.button>

        <AnimatePresence>
          {showMore && (
            <motion.ul
              className="flex flex-col gap-px"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ overflow: "hidden" }}
            >
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
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="hidden xl:block fixed lg:top-20 bg-background p-4 border rounded-md transform-[translateX(calc(-100%-42px))] max-w-55 w-full z-10"
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

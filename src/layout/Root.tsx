import Menu from "@/components/MenuDock";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect, useState, type ReactNode } from "react";
import { Outlet } from "react-router-dom";

type RootProps = {
  children?: ReactNode;
}

export default function Root(props: RootProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { children } = props;

  // Intersection observer
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-section]"),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find entries that are at least 50% visible.
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          const name = section.dataset.section ?? null;
          if (entry.intersectionRatio >= 0.5 && name) {
            setActiveSection(name);
          }
        });
      },
      { threshold: [0.5] },
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Scroll To Section Function - Used In Menu // MenuDock
  function scrollTo(section: string) {
    if (!section || typeof window === "undefined") return;
    const el = document.querySelector<HTMLElement>(
      `section[data-section="${section}"]`,
    );
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  return (
    <main>
      <Menu
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrollTo={scrollTo}
      />
      <ScrollToTop />

      <div className="pb-30 px-5 lg:px-0 [&_section]:pt-25 relative max-w-[800px] mx-auto min-h-svh">
        {children}
        <Outlet />
      </div>
    </main>
  );
}

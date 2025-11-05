import profilepic from "@/assets/me.png";
import SectionHeader from "./components/SectionHeader";
import { tech } from "./data/tech";
import Tag from "./components/Tag";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import Menu from "./components/MenuDock";
import { experience } from "./data/experience";
import ExperienceCard from "./components/ExperienceCard";
import { studies } from "./data/studies";
import StudiesCard from "./components/StudiesCard";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import { CopyButton } from "./components/ui/shadcn-io/copy-button";

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Intersection observer
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-section]")
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
      { threshold: [0.5] }
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
      `section[data-section="${section}"]`
    );
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="pb-30 px-5 lg:px-0 [&_section]:pt-25 relative">
      {/* <div className="fixed top-0 h-30 inset-0 bg-[rgb(0_0_0_/_0)] backdrop-blur-[20px] [mask:linear-gradient(180deg,rgb(0_0_0/_1),rgb(0_0_0/_0))] z-1 content-['']"></div> */}

      <Menu
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrollTo={scrollTo}
      />

      {/* INTRO / HOME / ABOUT */}
      <section data-section="home">
        <motion.div
          className="flex gap-4 flex-col-reverse md:flex-row"
          whileInView={{ filter: "blur(0px)" }}
          initial={{ filter: "blur(3px)" }}
          viewport={{ amount: 0.5 }}
        >
          <div className="flex flex-col space-y-2 text-center md:text-start">
            <h1>Hello! I'm Athina</h1>
            <p className="text-2xl font-semibold text-balance">
              Full-Stack Developer & UX/UI Designer
            </p>

            <p className="text-muted-foreground">
              I’m a design-minded developer who enjoys building websites that
              not only work well but <i>feel</i> great to use. With a background
              in both web development and art & design, I bring an eye for
              detail and a user-first mindset to every project. I’m passionate
              about creating digital experiences that are functional,
              accessible, and visually appealing — and I love learning new
              technologies that help me do just that.
            </p>
          </div>

          <img
            className="rounded-full md:h-full h-50 w-50 md:w-auto mx-auto"
            src={profilepic}
            alt=""
          />
        </motion.div>
        <motion.div
          whileInView={{ filter: "blur(0px)" }}
          initial={{ filter: "blur(3px)" }}
          viewport={{ amount: 1 }}
          id="tech-container"
          className="flex gap-2 flex-wrap mt-20 justify-center"
        >
          {tech.map((t) => (
            <Tag
              title={t}
              key={`tech-${t}`}
              className="text-sm/4 capitalize tracking-normal"
            />
          ))}
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section
        data-section="projects"
        className="space-y-8"
      >
        <SectionHeader
          tag="projects"
          title="Projects and Work"
        />

        <div
          id="project-container"
          className="grid grid-rows-1 md:grid-cols-[repeat(2,minmax(220px,420px))] grid-rows-[repeat(minmax(0, fit-content))] gap-4 place-items-center"
        >
          {projects.map((p, index) => (
            <ProjectCard
              key={`project-${index}`}
              props={p}
              className={
                // If projects are an uneven number, the last project takes up two cols.
                !(projects.length % 2 === 0) && index === projects.length - 1
                  ? "md:col-span-2"
                  : ""
              }
            />
          ))}
        </div>
      </section>

      {/* STUDIES */}
      <section
        data-section="education"
        className="space-y-8"
      >
        <SectionHeader
          tag="education"
          title="Education & Studies"
        />

        {studies.map((exp, index) => (
          <StudiesCard
            key={`studies-${index}`}
            props={{ ...exp, index: index + 1, count: experience.length }}
          />
        ))}
      </section>

      {/* EXPERIENCE */}
      <section
        data-section="experience"
        className="space-y-8"
      >
        <SectionHeader
          tag="experience"
          title="Experience & Work History"
        />

        {experience.map((exp, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            props={{ ...exp, index: index + 1, count: experience.length }}
          />
        ))}
      </section>

      {/* CONTACT */}
      <section
        data-section="contact"
        className="space-y-8 pb-100"
      >
        <SectionHeader
          tag="contact"
          title="Let's Connect!"
        />

        <p className="text-center">
          My preferred communication channel is email.
          <br /> Feel free to send me one at athina.kantis@gmail.com
          <CopyButton
            variant="secondary"
            className="ml-1 !p-1"
            aria-label="Copy email"
            content="athina.kantis@gmail.com"
          />
        </p>

        <div className="text-center space-y-2">
          <p>And if you wish, you can follow my socials!</p>

          <div className="flex gap-2 [&_a]:p-2 justify-center">
            <a
              href="https://github.com/athinakantis"
              target="_blank"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/athina-kantis/"
              target="_blank"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

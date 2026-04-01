import profilepicWebp from "@/assets/me.webp";
import profilepicJpg from "@/assets/me.jpg";
import SectionHeader from "@/components/SectionHeader";
import { tech } from "@/data/tech";
import Tag from "@/components/Tag";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
// import { experience } from "@/data/experience";
import { studies } from "@/data/studies";
import StudiesCard from "@/components/StudiesCard";
import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import { CopyButton } from "@/components/ui/shadcn-io/copy-button";
import { useNavigate } from "react-router-dom";
import caseStudies from "@/data/caseStudies";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* INTRO / HOME / ABOUT */}
      <section data-section="home" id="home">
        <motion.div
          className="flex gap-4 flex-col-reverse md:flex-row"
          whileInView={{ filter: "blur(0px)" }}
          initial={{ filter: "blur(3px)" }}
          viewport={{ amount: 0.5 }}
        >
          <div className="flex flex-col space-y-2 text-center md:text-start">
            <h1 className="sm:text-[4.5rem] sm:leading-[0.8]">Athina Kantis</h1>
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

          <picture>
            <source src={profilepicWebp} />
            <img
              className="rounded-full h-50 w-50 mx-auto min-w-50"
              src={profilepicJpg}
              alt=""
            />
          </picture>
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
        id="projects"
        data-section="projects"
        className="space-y-8"
      >
        <SectionHeader
          tag="projects"
          title="Work & Case Studies"
        />

        <div
          id="project-container"
          className="grid grid-rows-1 md:grid-cols-[repeat(2,minmax(220px,420px))] grid-rows-[repeat(minmax(0, fit-content))] gap-4 place-items-center"
        >
          {projects.map((p, index) => (
            <ProjectCard
              onClick={() =>
                navigate(`/projects/${p.title.replaceAll(" ", "-")}`)
              }
              key={`project-${index}`}
              project={p}
              className={
                // If projects are an uneven number, the last project takes up two cols.
                !(projects.length % 2 === 0) && index === projects.length - 1
                  ? "md:col-span-2"
                  : ""
              }
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl mb-2 font-semibold">Case Studies</h3>
          {caseStudies.map(cs => <CaseStudyCard study={cs} />)}
        </div>
      </section>

      {/* STUDIES */}
      <section
        id="education"
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
            props={{ ...exp, index: index + 1, count: studies.length }}
          />
        ))}
      </section>

      {/* EXPERIENCE
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
      </section> */}

      {/* CONTACT */}
      <section
        id="contact"
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
            className="ml-1 p-1!"
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
    </>
  );
}

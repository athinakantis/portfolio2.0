import arccraftPreview from "@/assets/arccraft_1.mp4";
import pancakePreview from "@/assets/pancakeCo.mp4";
import harakkaPreview from "@/assets/harakka.mp4";

type Media = "video" | "img";

export const projects = [
  {
    title: "Harrakka",
    summary:
      "Helped design and develop Harakka Storage Solutions, a web app for LARP organizer Con2. Built features for browsing and booking inventory, plus an admin panel with role-based access control for managing users, items, and bookings.",
    techUsed: ["Nest.JS", "Postgres", "TypeScript", "React", "Tailwind"],
    links: {
      sourceCode:
        "https://github.com/Con2StorageOrg/FullStack_Storage_and_Booking_App",
      livePage: "https://harakka.con2.fi",
    },
    media: {
      type: "video" as Media,
      src: harakkaPreview,
    },
  },
  {
    title: "ArcCraft",
    summary:
      "Designed and developed the website for ArcCraft, a Swedish manufacturer of next-generation gardening tools, including the patented ArcWeeder.",
    techUsed: ["Next.JS", "i18n", "CSS", "TypeScript", "React"],
    links: {
      livePage: "https://arccraft.eu",
    },
    media: {
      type: "video" as Media,
      src: arccraftPreview,
    },
  },
  {
    title: "Pancake Co.",
    summary:
      "As a beginner project, I completed the task of creating a store-front for a pancake parlor. Made with basic HTML, JS and CSS, this SPA has dynamic pricing, multiple interfaces and a well thought-out design.",
    techUsed: ["JavaScript", "CSS"],
    links: {
      sourceCode: "https://github.com/athinakantis/pancakeCo",
      livePage: "https://athinakantis.github.io/pancakeCo/",
      figma:
        "https://www.figma.com/design/ytmJ9blLohUMTD7UlsRpTo/Pancake-Co-Style-Guide---Wireframe?m=auto&t=Le38RgMwdZGDHBGj-1",
    },
    media: {
      type: "video" as Media,
      src: pancakePreview,
    },
  },
];

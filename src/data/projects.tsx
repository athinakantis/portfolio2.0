// WEBM Main imports
import arccraftPreview from "@/assets/arccraft_1.webm";
import pancakePreview from "@/assets/pancakeCo.webm";
import harakkaPreview from "@/assets/harakka.webm";

// MP4 "Fallback" imports
import arccraftPreviewMP4 from "@/assets/arccraft_1.mp4";
import pancakePreviewMP4 from "@/assets/pancakeCo.mp4";
import harakkaPreviewMP4 from "@/assets/harakka.mp4";

import harakkaAdminDashboard from "@/assets/harakka-admin-dashboard.webp"
import harakkaDashboardPhone from "@/assets/harakka-dashboard-phone.webp"
import harakkaOrgContext from "@/assets/harakka-org-switch.webp"
import harakkaHome from "@/assets/harakka-home.webp"

import pancakeHome from "@/assets/pancakeco-home.webp"
import pancakeHomePhone from "@/assets/pancakeco-home-phone.webp"
import pancakeOriginal from "@/assets/pancakeco-original-design.webp"

import arccraftHome from "@/assets/arccraft-home.webp"
import arccraftHomePhone from "@/assets/arccraft-home-phone.webp"

type Media = "video" | "img";

export const projects = [
  {
    title: "Harakka",
    summary:
      "Helped design and develop Harakka Storage Solutions, a web app for LARP organizer Con2. Built features for browsing and booking inventory, plus an admin panel with role-based access control for managing users, items, and bookings.",
    techUsed: ["Nest.JS", "Postgres", "TypeScript", "React", "Tailwind", "Redux"],
    links: {
      sourceCode:
        "https://github.com/Con2StorageOrg/FullStack_Storage_and_Booking_App",
    },
    media: {
      type: "video" as Media,
      src: harakkaPreview,
      fallback: harakkaPreviewMP4
    },
    features: "Authentication",
    projectDetails: (
      <>
        <section>
          <h1>Harakka</h1>
          <p>Harakka is a web application designed for Con2, an event-organizer managing shared physical assets. I worked across UX, design, and full-stack development to create an inventory browsing and booking system, along with an admin interface for managing users, items, and bookings using role-based access control.</p>

          <figure>
            <img src={harakkaHome} />
            <figcaption>Harakka’s home page. I sourced the hero image myself from a member of the Finnish LARP community, making it both authentic while also helping to create a sense of anticipation and excitement.</figcaption>
          </figure>

          <p>During this project, we faced several challenges. One of the most significant was introducing multi-tenancy to the application. Originally, the app was planned for use by a single organization, but this changed a few months into the project, after many systems were already in place.</p>

          <p>To support this shift, we first reviewed the existing database schema and identified what changes were required at each level of the application. The most complex part of this process was updating the booking system and its related table relationships.</p>
        </section>

        <section>
          <h2>Improving the User Experience</h2>

          <p>With the introduction of multi-tenancy, we faced an important UX decision: how should the application behave for users who are administrators in multiple organizations? Specifically, how could we reduce cognitive load while allowing them to manage several organizations effectively?</p>

          <p>We explored two options:<br />
            A) Allow users to see and manage data from all organizations at once<br />
            B) Allow users to act on behalf of one organization at a time</p>

          <p>We chose the latter approach. To make this experience clear and user-friendly, we introduced a few key design changes:</p>

          <ul>
            <li>A subtext below the username indicating which organization the user is currently acting on, allowing them to quickly confirm context by glancing at the navigation.</li>
            <li>An intuitive and seamless way to switch organizational context when needed.</li>
          </ul>

          <img src={harakkaOrgContext} className="max-w-[500px] w-full h-80 sm:h:full object-cover mx-auto mb-12" />

          <p>To further improve the user experience, we focused on making navigation and workflows as smooth and predictable as possible. When logging in as an administrator, users are redirected directly to the admin dashboard, where they can view key information such as recently created bookings and access common actions quickly.</p>

          <figure>
            <picture>
              <source srcSet={harakkaDashboardPhone} media="(width < 600px)" className="mx-auto" type="image/webp" />
              <img src={harakkaAdminDashboard} className="mx-auto " />
            </picture><figcaption className="text-end text-sm text-muted-foreground">A screenshot of the Harakka admin dashboard</figcaption>
          </figure>
        </section>

        <section>
          <h2>Reflection</h2>
          <p>Overall, this project reinforced the importance of staying agile in times of constant or drastic change. It also influenced how I approach admin tools, particularly the role clarity plays in creating a confident and low-friction user experience.</p>

          <p>I also got the opportunity to work with a fantastic team. Thank you to Vladimir, Steffi, Maria and Jon. I'm grateful to have studied alongside you all!</p>
        </section>
      </>
    ),
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
      fallback: arccraftPreviewMP4,
    },
    features: "responsive design",
    projectDetails: (
      <>
        <section>
          <h1>ArcCraft</h1>

          <p>ArcCraft is a Swedish start-up in the gardening sector, developing innovative gardening solutions. Their flagship product, ArcWeeder, represents a new approach to weed control.</p>

          <p>My responsibilities on this project included designing and developing the company website, where potential customers and interested visitors could learn more about the product and the company, as well as get in touch. I was also responsible for designing the product packaging.</p>

          <picture>
            <source srcSet={arccraftHomePhone} media="(width < 600px)" className="mx-auto" type="image/webp" />
            <source srcSet={arccraftHomePhone} media="(width < 600px)" className="mx-auto" type="image/webp" />
            <img src={arccraftHome} className="mx-auto" />
          </picture>
        </section>

        <section>
          <h2>Creating the Website</h2>
          <p>For the website, I was provided with a clear page structure: a home page, an about page, a product page, and a contact page, with the option to add an online shop in the future.</p>

          <p>From a technical perspective, my initial goal was to keep the setup lightweight using basic HTML and TypeScript. However, in anticipation of a future e-commerce component, I decided to use a more scalable approach. The final solution was a full-stack implementation built with Next.js and React, allowing for greater flexibility as the product and brand evolves.</p>

          <p>To engage and intrigue visitors, we chose a high-impact hero banner featuring a product showcase video alongside the company slogan. As users scroll, they are gradually introduced to more context about the company before reaching the product section, where they can learn more about the product and what sets it apart from alternative solutions.</p>

          <p>The current result is a high-performing, intuitive, and multilingual site that attracted over 100 unique visitors within the first month, serving as a strong foundation for future development.</p>
        </section>

        <section>
          <h2>Creating the Product Packaging</h2>
          <p>Despite having several years of experience in design, I had not previously had the opportunity to design product packaging. I therefore started at step one: research. I explored which tools would be most suitable for this type of work and, more importantly, what the packaging should communicate.</p>

          <p>During this phase, I noticed clear similarities between product packaging design and web design—particularly in how users scan information and look for answers to key questions, such as:</p>

          <ul>
            <li>What is the product name? / What page am I on?</li>
            <li>What does the product do? / What can I do here?</li>
            <li>Who made the product? / Who is behind this page?</li>
            <li>Why choose this product over an alternative? / Why should I stay here instead of going elsewhere?</li>
          </ul>
          <p>Recognizing these parallels made it easier to move into the next step: sketching and exploring ideas. To clearly and universally communicate that ArcWeeder is a form of weed control, I chose to use a bold graphic of a crossed-out dandelion, paired with a strong headline. The front of the packaging also includes key statements highlighting  why ArcWeeder is a compelling alternative, along with a QR code that allows users to see the product in action.</p>

          <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%" }} width="800" height="450" src="https://embed.figma.com/design/UErI9WE4qUNg6bB0yVp0Ax/Arccraft-packaging?node-id=0-1&embed-host=share" allowFullScreen></iframe>
        </section>

        <section>
          <h2>Reflection</h2>
          <p>This work reinforced the value of an iterative, feedback-driven process and designing with future growth in mind. It also strengthened my approach to product-focused design, where visual clarity, usability, and technical decisions are closely aligned.</p>
        </section>
      </>
    )
  },
  {
    title: "Pancake Co.",
    summary:
      "As a beginner project, I completed the task of creating a store-front for a pancake parlor. Made with basic HTML, JS and CSS, this SPA has dynamic pricing, multiple interfaces and a well thought-out design.",
    techUsed: ["JavaScript", "CSS", "HTML"],
    links: {
      sourceCode: "https://github.com/athinakantis/pancakeCo",
      livePage: "https://athinakantis.github.io/pancakeCo/",
      figma:
        "https://www.figma.com/design/ytmJ9blLohUMTD7UlsRpTo/Pancake-Co-Style-Guide---Wireframe?m=auto&t=Le38RgMwdZGDHBGj-1",
    },
    media: {
      type: "video" as Media,
      src: pancakePreview,
      fallback: pancakePreviewMP4,
    },
    projectDetails: (
      <>
        <section>
          <h1>Pancake Co</h1>

          <p>This project is an exercise in building a simple storefront for a pancake parlor using vanilla HTML, CSS, and JavaScript. Designed as a single-page application, it includes dynamic pricing and multiple interface states, with a focus on clear structure, interaction feedback, and visual hierarchy.
          </p>

          <picture>
            <source srcSet={pancakeHomePhone} media="(width < 600px)" className="mx-auto" type="image/webp" />
            <img src={pancakeHome} className="mx-auto" />
          </picture>
        </section>

        <section>
          <h2>Constraints</h2>
          <p>We were provided with a starter template that included the initial HTML and CSS. The scope of the task was to implement the JavaScript needed to make the pancake customization and pricing fully interactive, updating the total cost dynamically based on user selections.</p>

          <figure>
            <img src={pancakeOriginal} alt="" />
            <figcaption>A screenshot of the original template design</figcaption>
          </figure>
        </section>

        <section>
          <h2>Creating a Brand Identity</h2>
          <p>Besides expanding my knowledge of JavaScript, HTML, and CSS, I also saw this project as an opportunity to focus on design. Inspired by some of my favourite cafés, I knew early on that I wanted the brand to feel playful, so I began by experimenting with colors, fonts, and shapes in Figma.</p>

          <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: '100%' }} width="800" height="450" src="https://embed.figma.com/design/ytmJ9blLohUMTD7UlsRpTo/Pancake-Co-Style-Guide---Wireframe?node-id=0-1&embed-host=share" allowFullScreen></iframe>


          <p>I chose bright orange as a complementary color to create a fun, energetic accent, paired with bright blue and navy for balance. Instead of using pure black, I opted for a very dark grey, and included softer beige tones for the background to keep the overall look approachable. The heading typeface is a display-style font—appropriately named Permanent Marker—to evoke the feel of a café sign, while the body text uses a monospaced font for clarity.</p>

          <p>I also took the time to create a custom background pattern for the website. Using Adobe Illustrator and the Pen tool, I designed a set of baking-related elements to support the overall visual identity.</p>

          <div className="bg-[url(assets/pancakeco-pattern.webp)] sm:h-50 h-70 w-full bg-left rounded-md shadow-sm" />
        </section>

        <section>
          <h2>Reflection</h2>
          <p>This exercise was a valuable opportunity to practice core HTML, CSS, and JavaScript skills. It helped refine my approach as a designer, deepen my understanding of the DOM, and strengthen my grasp of responsive design principles.</p>
        </section>
      </>
    )
  },
];

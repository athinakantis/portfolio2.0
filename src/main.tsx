import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./theme/ThemeProvider.tsx";
import { Analytics } from "@vercel/analytics/react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import { TocProvider } from "./context/UI/TableOfContents.Provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <ThemeProvider>
      <TocProvider>
        <RouterProvider router={router}></RouterProvider>
      </TocProvider>
    </ThemeProvider>
  </StrictMode>,
);

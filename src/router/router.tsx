import Root from "@/layout/Root";
import CaseStudy from "@/pages/CaseStudy";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Project from "@/pages/Project";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  ErrorBoundary: Error,
  children: [{
    path: "/",
    element: <Home />,
  }, {
    path: "/projects/:projectName",
    element: <Project />
  },
  {
    path: "/study/:studyId",
    element: <CaseStudy />
  }]
}])

export default router;
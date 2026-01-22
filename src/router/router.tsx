import Root from "@/layout/Root";
import Home from "@/pages/Home";
import Project from "@/pages/Project";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [{
    path: "/",
    element: <Home />,
  }, {
    path: "/projects/:projectName",
    element: <Project />
  }]
}])

export default router;
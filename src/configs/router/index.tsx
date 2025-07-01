import { createBrowserRouter } from "react-router";

import { Home, ExploreTopics, University, Program, Paths } from "@/pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore-topics",
    element: <ExploreTopics />,
  },
  {
    path: "/university",
    element: <University />,
  },
  {
    path: "/program",
    element: <Program />,
  },
  {
    path: "/paths",
    element: <Paths />,
  },
]);

export default routes;

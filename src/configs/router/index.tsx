import { createBrowserRouter } from "react-router";

import { Home, ExploreTopics, University } from "@/pages";

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
]);

export default routes;

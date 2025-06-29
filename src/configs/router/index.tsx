import { createBrowserRouter } from "react-router";

import { Home, ExploreTopics } from "@/pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore-topics",
    element: <ExploreTopics />,
  },
]);

export default routes;

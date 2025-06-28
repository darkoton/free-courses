import { createBrowserRouter } from "react-router";

import { Home } from "@/pages";

const routes = createBrowserRouter([{
    path: '/',
    element: <Home/>
}])

export default routes
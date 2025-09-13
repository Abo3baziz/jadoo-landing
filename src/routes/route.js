import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    children: [{ index: true, Component: Home }],
  },
]);

export default router;

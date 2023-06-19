import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Station from "./pages/Station";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/station/:id",
    element: <Station />,
  },
]);

export default router;

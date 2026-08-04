import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Myaccount from "../pages/Myaccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/my-account",
        element: <Myaccount />
      }
    ],
  },
]);

export default router;

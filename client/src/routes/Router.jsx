import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Category from "../pages/Category";
import NotFound from "../pages/NotFound";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />
      },
      {
        path: "checkout",
        element: <Checkout />
      }
    ],
  },
]);

export default router;

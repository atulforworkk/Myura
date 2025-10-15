import { Navigate, createBrowserRouter } from "react-router-dom";

// Layouts
import HomePageLayout from "@/views/layout/HomePageLayout";
import PreAuthLayout from "@/views/layout/PreAuthLayout";
// Common
import PageNotFound from "@/components/pageNotFound/PageNotFound";
// import PrivateRoute from "./PrivateRoute";

// Auth Pages
import Login from "@/views/pages/login/Login";
import Register from "@/views/pages/register/Register";

// Store Pages
import Home from "@/views/pages/home/Home";
import ProductListing from "@/views/pages/productListing/ProductListing";
import ProductDetails from "@/views/pages/productDetails/ProductDetails";
import Cart from "@/views/pages/cart/Cart";
import Checkout from "@/views/pages/checkout/Checkout";

const router = createBrowserRouter([
  // 🏠 Home + Store Routes (Protected)
  {
    path: "/",
    element: (
        <HomePageLayout />
    ),
    children: [
      {
        index: true, // 👈 means this will load at "/"
        element: <Home />, // 👈 Home page visible at "/"
      },
      {
        path: "shop",
        element: <ProductListing />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/auth",
    element: <PreAuthLayout />,
    children: [
      // { path: "login", element: <Login /> },
      // { path: "register", element: <Register /> },
    ],
  },

  { path: "*", element: <PageNotFound /> },
]);

export default router;

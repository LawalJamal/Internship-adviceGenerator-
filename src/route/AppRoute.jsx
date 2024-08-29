import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import RootLayout from "../layouts/RootLayout";

export default function AppRoute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

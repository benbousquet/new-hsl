import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/routes/home";
import Root from "@/routes/root";
import ErrorPage from "@/routes/errorPage";
import Classes from "@/routes/classes";
import Register from "@/routes/register";
import FSCalendar from "@/routes/fscalendar";
import Live from "@/routes/live";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/live",
        element: <Live />,
      },
    ],
  },
  {
    path: "/fscalendar",
    element: <FSCalendar />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

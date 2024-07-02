import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import UserProfil from "./pages/UserProfil.tsx";
import UserActivity from "./pages/UserActivity.tsx";
import UserSession from "./pages/UserSession.tsx";
import UserPerformance from "./pages/UserPerformance.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "user/:id", element: <UserProfil /> },
      { path: "user/:id/activity", element: <UserActivity /> },
      { path: "user/:id/average-sessions", element: <UserSession /> },
      { path: "user/:id/performance", element: <UserPerformance /> },
    ],
  },
]);

export default router;
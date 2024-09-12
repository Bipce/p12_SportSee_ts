import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import UserProfil from "./pages/UserProfil.tsx";
import ErrorLayout from "./pages/ErrorLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "user/:id", element: <UserProfil /> },
    ],
  },
]);

export default router;
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import "./styles/main.scss";
import { UserContextProvider } from "./contexts/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
);

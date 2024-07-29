import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import "./styles/main.scss";
import { MockProviderContext } from "./contexts/MockContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MockProviderContext>
      <RouterProvider router={router} />
    </MockProviderContext>
  </React.StrictMode>,
);

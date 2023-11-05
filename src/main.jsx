import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Router from "./Routs/Routs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto">
    <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={Router}></RouterProvider>
    </NextUIProvider>
  </React.StrictMode>
  </div>
);

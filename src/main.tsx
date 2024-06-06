import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "@redux/AppProvider/AppProvider";
import { App } from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

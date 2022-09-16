import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PageDataProvider } from "./providers/pageProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageDataProvider>
      <App />
    </PageDataProvider>
  </React.StrictMode>
);

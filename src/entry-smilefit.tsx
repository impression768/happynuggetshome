import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SmileFitPage } from "./pages/SmileFitPage";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmileFitPage />
  </StrictMode>,
);

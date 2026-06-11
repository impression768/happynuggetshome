import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NuggetsPage } from "./pages/NuggetsPage";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NuggetsPage />
  </StrictMode>,
);

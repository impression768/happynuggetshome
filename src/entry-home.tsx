import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PortfolioHomePage } from "./pages/PortfolioHomePage";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortfolioHomePage />
  </StrictMode>,
);

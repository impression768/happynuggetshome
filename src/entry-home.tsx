import { StrictMode } from "react";
import { mountPage } from "./lib/mountPage";
import { PortfolioHomePage } from "./pages/PortfolioHomePage";
import "./styles/global.css";

mountPage(
  <StrictMode>
    <PortfolioHomePage />
  </StrictMode>,
);

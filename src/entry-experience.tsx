// Hydrate the public experience page while supporting normal Vite development.
import { StrictMode } from "react";
import { mountPage } from "./lib/mountPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import "./styles/global.css";

mountPage(<StrictMode><ExperiencePage /></StrictMode>);

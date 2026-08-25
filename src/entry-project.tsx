import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { getProject } from "./data/projects";
import { ProjectPage } from "./pages/ProjectPage";
import "./styles/global.css";

const projectId = document.documentElement.dataset.projectId;
const project = projectId ? getProject(projectId) : undefined;

if (!project) throw new Error("Project page is missing a known project id.");

createRoot(document.getElementById("root")!).render(<StrictMode><ProjectPage project={project} /></StrictMode>);

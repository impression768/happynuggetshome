import { StrictMode } from "react";
import { mountPage } from "./lib/mountPage";
import { getProject } from "./data/projects";
import { ProjectPage } from "./pages/ProjectPage";
import "./styles/global.css";

const projectId = document.documentElement.dataset.projectId;
const project = projectId ? getProject(projectId) : undefined;

if (!project) throw new Error("Project page is missing a known project id.");

mountPage(<StrictMode><ProjectPage project={project} /></StrictMode>);

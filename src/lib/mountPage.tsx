// Attach interactions to built HTML, while retaining client rendering during development.
import type { ReactNode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

export function mountPage(page: ReactNode) {
  const container = document.getElementById("root");
  if (!container) throw new Error("Page is missing its root container.");

  // Build output already contains the same component tree; development starts empty.
  if (container.hasChildNodes()) {
    hydrateRoot(container, page);
  } else {
    createRoot(container).render(page);
  }
}

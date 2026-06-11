import { useEffect } from "react";

// React renders after the browser's native anchor jump, so re-scroll to the
// #hash target once the content actually exists.
export function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
  }, []);
}

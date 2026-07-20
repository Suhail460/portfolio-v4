"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Returns the id of the active section. Efficient: one observer, no polling,
 * no layout reads on scroll.
 */
export function useScrollSpy(ids: string[], rootMargin = "-45% 0px -50% 0px"): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }
        if (visible.size > 0) {
          // Pick the most visible section to avoid flicker between two.
          let best = activeId;
          let bestRatio = -1;
          for (const [id, ratio] of visible) {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = id;
            }
          }
          setActiveId(best);
        }
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(","), rootMargin]);

  return activeId;
}

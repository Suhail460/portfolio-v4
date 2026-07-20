import type { Transition } from "framer-motion";

/** Shared motion preset — keeps easing/timing consistent across sections.
 *  Mirrors --ease-standard / --duration-base tokens; safe under reduced motion
 *  because each usage gates `initial` with useReducedMotion. */
export const revealTransition: Transition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1],
};

export const revealOffset = 16;

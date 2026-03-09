/**
 * Smooth scroll to a section by its element ID.
 */
export function scrollTo(id: string): void {
  const el = document.getElementById(id.replace("#", ""));
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Get the current scroll progress (0–1) for a given element.
 */
export function getScrollProgress(el: HTMLElement): number {
  const rect = el.getBoundingClientRect();
  const wh = window.innerHeight;
  return Math.min(1, Math.max(0, (wh - rect.top) / (wh + rect.height)));
}

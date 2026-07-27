// src/lib/clickTracker.js
//
// Fire-and-forget click tracker backed by MockAPI.
// Never throws, never blocks the UI — a failed network call should never
// break navigation or a project click.

const API_BASE = "https://64f03e748a8b66ecf77955b1.mockapi.io";
const RESOURCE = "clicks";

/**
 * Record a click event.
 * @param {"project" | "nav"} type
 * @param {string} label - project name, or nav item label (e.g. "About", "Contact")
 * @param {"home" | "portfolio" | null} [source] - only relevant for type === "project"
 */
export function trackClick(type, label, source = null) {
  const payload = {
    type,
    label,
    source: source || "",
    timestamp: new Date().toISOString(),
  };

  // Don't await, don't let a failure surface to the caller.
  fetch(`${API_BASE}/${RESOURCE}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch((err) => {
    // Swallow errors — analytics should never break the site.
    if (import.meta.env?.DEV) {
      console.warn("[clickTracker] failed to record click:", err);
    }
  });
}

/**
 * Fetch all recorded click events. Used by the admin page.
 */
export async function fetchClicks() {
  const res = await fetch(`${API_BASE}/${RESOURCE}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch clicks: ${res.status}`);
  }
  return res.json();
}

/**
 * Delete a single click record by id. Used by the admin page's reset controls.
 */
export async function deleteClick(id) {
  const res = await fetch(`${API_BASE}/${RESOURCE}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error(`Failed to delete click ${id}: ${res.status}`);
  }
  return res.json();
}

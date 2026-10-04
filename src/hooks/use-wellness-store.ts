import { useCallback, useEffect, useState } from "react";

const FAVORITES_KEY = "sattva-favorites";
const RECENTS_KEY = "sattva-recents";

function readList(key: string): string[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(window.localStorage.getItem(key) ?? "[]") as string[]; } catch { return []; }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(readList(FAVORITES_KEY));
  }, []);

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((current) => {
      const next = current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [slug, ...current];

      if (typeof window !== "undefined") {
        try {
          window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
        } catch (e) {
          console.error("Failed to save favorites to localStorage:", e);
        }
        // Notify other listeners asynchronously on next tick so it never collides with ongoing React render
        setTimeout(() => {
          window.dispatchEvent(new Event("wellness-store"));
        }, 0);
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const sync = () => {
      setFavorites(readList(FAVORITES_KEY));
    };
    window.addEventListener("wellness-store", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("wellness-store", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return { favorites, toggleFavorite };
}

export function useRecents() {
  const [recents, setRecents] = useState<string[]>([]);
  useEffect(() => setRecents(readList(RECENTS_KEY)), []);
  return recents;
}

export function addRecent(slug: string) {
  if (typeof window === "undefined") return;
  const next = [slug, ...readList(RECENTS_KEY).filter((item) => item !== slug)].slice(0, 6);
  window.localStorage.setItem(RECENTS_KEY, JSON.stringify(next));
}

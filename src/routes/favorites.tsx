import { createFileRoute } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { Library } from "../components/Library";
export const Route = createFileRoute("/favorites")({
  head: () => ({ meta: [
    { title: "Saved Guides — Sattva" }, { name: "description", content: "Return to your saved natural wellness guides." },
    { property: "og:title", content: "Saved Guides — Sattva" }, { property: "og:description", content: "Your personal collection of complementary wellness guides." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: FavoritesPage,
});
function FavoritesPage() { return <div className="mx-auto min-h-[70vh] max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><span className="grid size-12 place-items-center rounded-full bg-secondary text-primary"><Bookmark/></span><h1 className="mt-5 font-display text-4xl font-semibold sm:text-6xl">Your saved guides</h1><p className="mt-3 max-w-xl text-muted-foreground">Keep useful wellness topics close at hand. Your bookmarks stay on this device.</p><div className="mt-10"><Library initialFavorites /></div></div>; }

import { createFileRoute } from "@tanstack/react-router";
import { Library } from "../components/Library";
import { isCategory } from "../data/conditions";

export const Route = createFileRoute("/conditions")({
  validateSearch: (search: Record<string, unknown>) => isCategory(search["category"]) ? { category: search["category"] } : {},
  head: () => ({ meta: [
    { title: "Conditions Library — Sattva" }, { name: "description", content: "Search complementary wellness guidance for 49 common health conditions." },
    { property: "og:title", content: "Conditions Library — Sattva" }, { property: "og:description", content: "Explore safety-first natural wellness guidance by condition." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ConditionsPage,
});
function ConditionsPage() {
  const { category } = Route.useSearch();
  return <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><p className="text-xs font-bold uppercase tracking-widest text-primary">Wellness library</p><h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold sm:text-6xl">Explore support for everyday health concerns</h1><p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">Concise, responsible guidance rooted in traditional wellness and modern safety. Browse the full collection of educational guides.</p><div className="mt-10"><Library {...(category ? { initialCategory: category } : {})} /></div></div>;
}

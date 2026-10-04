import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, conditions, type Category, type Condition } from "../data/conditions";
import { useFavorites } from "../hooks/use-wellness-store";
import { ConditionCard } from "./ConditionCard";
import { ConditionDetailModal } from "./ConditionDetailModal";

export function Library({ initialFavorites = false, initialCategory, compact = false }: { initialFavorites?: boolean; initialCategory?: Category; compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>(initialCategory ?? "All");
  const { favorites, toggleFavorite } = useFavorites();

  const handleCategorySelect = (item: (typeof categories)[number]) => {
    setCategory(item);
    const target = document.getElementById("conditions-library-top");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const visible = useMemo(() => conditions.filter((item) => {
    const matchesSearch = `${item.name} ${item.summary} ${item.category} ${item.herbalRemedyTips?.join(" ") || ""} ${item.herbs?.map((h) => h.name).join(" ") || ""}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    const matchesSaved = !initialFavorites || favorites.includes(item.slug);
    return matchesSearch && matchesCategory && matchesSaved;
  }), [query, category, initialFavorites, favorites]);

  const list = compact ? visible.slice(0, 8) : visible;

  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);

  return (
    <div id="conditions-library-top" className="scroll-mt-20 sm:scroll-mt-24">
      <div className="sticky top-16 z-30 -mx-4 border-y border-border/60 bg-background/85 px-4 py-3.5 backdrop-blur-xl sm:static sm:mx-0 sm:rounded-2xl sm:border sm:bg-card sm:p-3 sm:shadow-card">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={19} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search conditions, herbs (e.g. Triphala, Ashwagandha)..."
            aria-label="Search conditions"
            className="h-12 w-full rounded-full border border-border/80 bg-background pl-11 pr-10 text-sm sm:text-base outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-xs text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" aria-label="Filter conditions">
        <span className="mr-1 flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <SlidersHorizontal size={13} /> Filter
        </span>
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => handleCategorySelect(item)}
            className={`min-h-9 shrink-0 rounded-full border px-4 text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95 ${
              category === item
                ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                : "border-border/80 bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {item === "Women" ? "Women’s" : item === "Men" ? "Men’s" : item}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((condition) => (
          <ConditionCard
            key={condition.slug}
            condition={condition}
            saved={favorites.includes(condition.slug)}
            onToggle={toggleFavorite}
            onExplore={(cond) => setSelectedCondition(cond)}
          />
        ))}
      </div>

      {list.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-secondary text-2xl">🌿</span>
          <h3 className="mt-4 font-display text-2xl font-semibold">Nothing found yet</h3>
          <p className="mt-2 text-sm text-muted-foreground">Try another search or explore a different category.</p>
        </div>
      )}

      <ConditionDetailModal
        condition={selectedCondition}
        onClose={() => setSelectedCondition(null)}
        saved={selectedCondition ? favorites.includes(selectedCondition.slug) : false}
        onToggleBookmark={toggleFavorite}
      />
    </div>
  );
}

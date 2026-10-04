import { ChevronLeft, ChevronRight, Search, Sparkles, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/language-context";
import type { Category, Condition } from "../data/conditions";
import { ConditionCard } from "./ConditionCard";

interface ConditionSliderProps {
  conditions: Condition[];
  onExplore: (condition: Condition) => void;
  savedSlugs?: string[] | undefined;
  onToggleSave?: ((slug: string) => void) | undefined;
}

const CATEGORIES: ("All" | Category)[] = [
  "All",
  "Digestive",
  "Respiratory",
  "Lifestyle",
  "Skin",
  "Pain",
  "Women",
  "Men",
  "Mental",
  "General",
];

export function ConditionSlider({
  conditions,
  onExplore,
  savedSlugs = [],
  onToggleSave,
}: ConditionSliderProps) {
  const { t } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<"All" | Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const categoryMap: Record<string, string> = {
    All: t("cat_all"),
    Digestive: t("cat_digestive"),
    Respiratory: t("cat_respiratory"),
    Lifestyle: t("cat_lifestyle"),
    Skin: t("cat_skin"),
    Pain: t("cat_pain"),
    Women: t("cat_women"),
    Men: t("cat_men"),
    Mental: t("cat_mental"),
    General: t("cat_general"),
  };

  // Filter conditions by category and search term
  const filteredConditions = conditions.filter((c) => {
    const matchesCategory = selectedCategory === "All" || c.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase().trim();
    return (
      c.name.toLowerCase().includes(query) ||
      c.summary.toLowerCase().includes(query) ||
      c.category.toLowerCase().includes(query) ||
      c.herbs?.some((h) => h.name.toLowerCase().includes(query)) ||
      c.herbalRemedyTips?.some((t) => t.toLowerCase().includes(query))
    );
  });

  // Check scroll positions
  const updateScrollState = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const maxScroll = scrollWidth - clientWidth;
    setScrollProgress(maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    updateScrollState();
    slider.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      slider.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, filteredConditions]);

  // Smooth scroll left/right with delay/smooth behavior
  const scroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Scroll by width of one card plus gap
    const cardWidth = slider.querySelector("article")?.clientWidth || 360;
    const distance = cardWidth + 20; // 20px gap

    slider.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  // Keyboard navigation when hovering or focusing the slider
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scroll("left");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scroll("right");
    }
  };

  const handleCategoryChange = (cat: "All" | Category) => {
    setSelectedCategory(cat);
    // Smooth reset to start
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative flex flex-col gap-6"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Ayurvedic condition flash cards carousel"
    >
      {/* Slider Header: Titles & Navigation Arrow Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-lg bg-primary/10 text-primary">
              <Sparkles size={14} />
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              {t("slider_badge")}
            </p>
          </div>
          <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t("slider_title")}
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            {t("slider_desc")} ({filteredConditions.length} {t("guides_count")})
          </p>
        </div>

        {/* Arrow Navigation Buttons */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="hidden sm:block text-xs font-semibold text-muted-foreground">
            {filteredConditions.length} {filteredConditions.length === 1 ? t("guide_count") : t("guides_count")}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`grid size-11 place-items-center rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground active:scale-95 disabled:pointer-events-none disabled:opacity-30 ${
                !canScrollLeft ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`grid size-11 place-items-center rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground active:scale-95 disabled:pointer-events-none disabled:opacity-30 ${
                !canScrollRight ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search input */}
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("search_condition_placeholder")}
            className="w-full rounded-2xl border border-border/80 bg-card/80 py-2 pl-10 pr-9 text-xs sm:text-sm text-foreground shadow-sm backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Category Pills (horizontally scrollable on mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                    : "border border-border/70 bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {categoryMap[cat] || cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Horizontal Slider Track */}
      {filteredConditions.length === 0 ? (
        <div className="flex min-h-[260px] flex-col items-center justify-center rounded-3xl border border-dashed border-border/80 p-8 text-center bg-card/30">
          <p className="font-display text-lg font-semibold text-foreground">{t("no_conditions_found")}</p>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            {t("no_conditions_desc")}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-4 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            {t("clear_filters")}
          </button>
        </div>
      ) : (
        <div className="relative group">
          {/* Edge fade gradients for polished visual depth */}
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent transition-opacity duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Cards Track */}
          <div
            ref={sliderRef}
            tabIndex={0}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-border/80 hover:scrollbar-thumb-primary/50 focus:outline-none"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {filteredConditions.map((condition) => (
              <div
                key={condition.slug}
                className="w-[84vw] max-w-[340px] sm:w-[350px] md:w-[380px] shrink-0 snap-start transition-transform duration-300"
              >
                <ConditionCard
                  condition={condition}
                  saved={savedSlugs.includes(condition.slug)}
                  onToggle={onToggleSave}
                  onExplore={onExplore}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Progress Bar & Keyboard Helper */}
      <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="hidden sm:flex items-center gap-2">
          <kbd className="rounded-md border border-border/70 bg-card px-2 py-0.5 text-[10px] font-mono font-semibold shadow-xs">
            ←
          </kbd>
          <kbd className="rounded-md border border-border/70 bg-card px-2 py-0.5 text-[10px] font-mono font-semibold shadow-xs">
            →
          </kbd>
          <span className="text-[11px]">{t("keyboard_scroll_hint")}</span>
        </div>

        {/* Scroll Progress Bar */}
        <div className="flex-1 sm:max-w-xs">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary/50">
            <div
              className="h-full rounded-full bg-primary transition-all duration-200"
              style={{ width: `${Math.max(8, scrollProgress)}%` }}
            />
          </div>
        </div>

        <span className="text-[11px] font-medium text-foreground/80 sm:hidden">
          {t("swipe_sideways")}
        </span>
      </div>
    </div>
  );
}

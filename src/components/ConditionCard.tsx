import { ArrowUpRight, Bookmark, Sparkles } from "lucide-react";
import { conditionTranslations, useLanguage } from "../context/language-context";
import type { Condition } from "../data/conditions";
import { getDiseaseVisual } from "../lib/disease-visuals";

export function ConditionCard({
  condition,
  saved,
  onToggle,
  onExplore,
}: {
  condition: Condition;
  saved?: boolean | undefined;
  onToggle?: ((slug: string) => void) | undefined;
  onExplore: (condition: Condition) => void;
}) {
  const { language, t } = useLanguage();
  const visual = getDiseaseVisual(condition.slug);
  const Icon = visual.icon;

  const translation = language !== "en" ? conditionTranslations[condition.slug]?.[language] : null;
  const displayName = translation?.name || condition.name;
  const displaySummary = translation?.summary || condition.summary;

  const categoryMap: Record<string, string> = {
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
  const categoryLabel = categoryMap[condition.category] || condition.category;

  return (
    <article
      onClick={() => onExplore(condition)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onExplore(condition);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Explore herbal remedies for ${displayName}`}
      className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-3xl border border-border/80 bg-card p-5 text-left shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Top Visual Emblem & Category */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${visual.gradient} text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg`}
          >
            <Icon size={22} className="drop-shadow-sm" />
          </span>
          <div>
            <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${visual.badgeBg} ${visual.textColor}`}>
              {categoryLabel}
            </span>
            {condition.serious && (
              <span className="ml-1.5 inline-block rounded-full bg-red-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                {t("notice_badge")}
              </span>
            )}
          </div>
        </div>

        {onToggle && (
          <button
            type="button"
            aria-label={saved ? `Remove ${displayName} from favorites` : `Save ${displayName} to favorites`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggle(condition.slug);
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className={`relative z-30 grid size-9 sm:size-10 place-items-center rounded-2xl border transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer ${
              saved
                ? "border-amber-400 bg-amber-500/15 text-amber-500 dark:text-amber-400 shadow-sm shadow-amber-500/20"
                : "border-border/70 bg-card/80 text-muted-foreground hover:border-primary/50 hover:bg-card hover:text-primary"
            }`}
          >
            <Bookmark
              size={17}
              fill={saved ? "currentColor" : "none"}
              className={`transition-all duration-200 ${saved ? "scale-110 text-amber-500 dark:text-amber-400" : ""}`}
            />
          </button>
        )}
      </div>

      {/* Disease Name & Summary */}
      <div className="mt-4">
        <h3 className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
          {displayName}
        </h3>
        <p className="mt-2 line-clamp-3 text-xs sm:text-sm leading-5 sm:leading-6 text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">
          {displaySummary}
        </p>
      </div>

      {/* 3 Featured Herbs Preview Pills */}
      {condition.herbs && condition.herbs.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {condition.herbs.slice(0, 3).map((herb) => (
            <span
              key={herb.name}
              className="rounded-lg border border-border/60 bg-secondary/40 px-2 py-1 text-[11px] font-medium text-foreground/85 transition-colors group-hover:border-primary/30 group-hover:bg-primary/5"
            >
              🌿 {herb.name.split(" ")[0]}
            </span>
          ))}
        </div>
      )}

      {/* Interactive Explore Guide Button */}
      <div className="mt-auto pt-5">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onExplore(condition);
          }}
          className="flex w-full items-center justify-between rounded-2xl bg-secondary/70 px-4 py-2.5 text-xs font-bold text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/20 active:scale-95 cursor-pointer"
        >
          <span className="flex items-center gap-1.5">
            <Sparkles size={14} className="transition-transform duration-300 group-hover:rotate-12" />
            <span>{t("explore_guide_btn")}</span>
          </span>
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </article>
  );
}

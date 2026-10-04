import { Bookmark, CheckCircle2, Clock, Leaf, ShieldAlert, Sparkles, X } from "lucide-react";
import { useEffect } from "react";
import { conditionTranslations, useLanguage } from "../context/language-context";
import type { Condition } from "../data/conditions";
import {
  categoryPerspectivesI18n,
  categorySafetyI18n,
  evidenceI18n,
  warningsI18n,
  conditionDetailsI18n,
} from "../data/condition-details-i18n";
import { getDiseaseVisual } from "../lib/disease-visuals";

export function ConditionDetailModal({
  condition,
  onClose,
  saved,
  onToggleBookmark,
}: {
  condition: Condition | null;
  onClose: () => void;
  saved?: boolean | undefined;
  onToggleBookmark?: ((slug: string) => void) | undefined;
}) {
  const { language, t } = useLanguage();

  useEffect(() => {
    if (!condition) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [condition, onClose]);

  if (!condition) return null;

  const visual = getDiseaseVisual(condition.slug);
  const Icon = visual.icon;

  const translation = language !== "en" ? conditionTranslations[condition.slug]?.[language] : null;
  const displayName = translation?.name || condition.name;
  const displaySummary = translation?.summary || condition.summary;

  const categoryKeyMap: Record<string, string> = {
    Digestive: "cat_digestive",
    Respiratory: "cat_respiratory",
    Lifestyle: "cat_lifestyle",
    Skin: "cat_skin",
    Pain: "cat_pain",
    Women: "cat_women",
    Men: "cat_men",
    Mental: "cat_mental",
    General: "cat_general",
  };
  const displayCategory = t(categoryKeyMap[condition.category] || "cat_general");
  const displayEvidence = evidenceI18n[language]?.[condition.evidence] || condition.evidence;

  const detailI18n = language !== "en" ? conditionDetailsI18n[condition.slug]?.[language] : null;
  const displayPerspective =
    detailI18n?.perspective ||
    categoryPerspectivesI18n[language]?.[condition.category] ||
    condition.perspective;
  const displaySafety =
    detailI18n?.safety ||
    categorySafetyI18n[language]?.[condition.category] ||
    condition.safety;
  const displayHerbalTips = detailI18n?.herbalRemedyTips || condition.herbalRemedyTips || [];
  const displayHerbs = detailI18n?.herbs || condition.herbs || [];
  const displayWarnings = condition.warnings.map((w) => warningsI18n[language]?.[w] || w);

  const tipStyles = [
    {
      badge: t("tip_1_title"),
      bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
      border: "border-emerald-500/30",
      accent: "bg-emerald-500 text-white",
      text: "text-emerald-900 dark:text-emerald-100",
      icon: Leaf,
    },
    {
      badge: t("tip_2_title"),
      bg: "bg-amber-500/10 dark:bg-amber-500/15",
      border: "border-amber-500/30",
      accent: "bg-amber-500 text-white",
      text: "text-amber-900 dark:text-amber-100",
      icon: Clock,
    },
    {
      badge: t("tip_3_title"),
      bg: "bg-purple-500/10 dark:bg-purple-500/15",
      border: "border-purple-500/30",
      accent: "bg-purple-500 text-white",
      text: "text-purple-900 dark:text-purple-100",
      icon: Sparkles,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-condition-title"
    >
      <div
        className="relative my-auto w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/20 bg-card text-foreground shadow-2xl transition-all duration-300 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Colorful Gradient Header Banner */}
        <div className={`relative overflow-hidden bg-gradient-to-r ${visual.gradient} px-6 py-8 text-white`}>
          <div className="absolute -right-8 -top-8 size-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute right-12 bottom-0 size-28 rounded-full bg-black/10 blur-xl pointer-events-none" />

          {/* Top-Right Header Actions: Bookmark & Close */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
            {onToggleBookmark && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggleBookmark(condition.slug);
                }}
                aria-label={saved ? "Remove from saved favorites" : "Save guide to favorites"}
                className={`grid size-10 place-items-center rounded-full backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 border cursor-pointer ${
                  saved
                    ? "bg-amber-400 text-amber-950 border-amber-300 shadow-md ring-2 ring-white/30"
                    : "bg-black/25 text-white border-white/20 hover:bg-black/40"
                }`}
              >
                <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close guide modal"
              className="grid size-10 place-items-center rounded-full bg-black/25 text-white backdrop-blur-md transition-all duration-200 hover:rotate-90 hover:bg-black/40 hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
            >
              <X size={19} />
            </button>
          </div>

          <div className="flex items-start gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-md text-white border border-white/30">
              <Icon size={30} className="drop-shadow-sm" />
            </span>
            <div className="pr-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-black/25 px-3 py-0.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  {displayCategory}
                </span>
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-medium backdrop-blur-sm">
                  {displayEvidence}
                </span>
                {condition.serious && (
                  <span className="rounded-full bg-red-600/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    {t("notice_badge")}
                  </span>
                )}
              </div>
              <h2 id="modal-condition-title" className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                {displayName}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-7">
          {/* Summary Box */}
          <div className="rounded-2xl border border-border/70 bg-secondary/30 p-4 sm:p-5">
            <p className="text-sm sm:text-base leading-6 sm:leading-7 text-foreground/90 font-medium">
              {displaySummary}
            </p>
            <p className="mt-2.5 text-xs sm:text-sm leading-6 text-muted-foreground border-t border-border/50 pt-2.5">
              <span className="font-semibold text-foreground/80">{t("traditional_concept")} </span>
              {displayPerspective}
            </p>
          </div>

          {/* Fancy Colourful Herbal Remedial Tips Widget */}
          {displayHerbalTips && displayHerbalTips.length > 0 && (
            <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                  <Leaf size={16} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                    {t("herbal_tips_title")}
                  </h3>
                  <p className="text-xs text-muted-foreground">{t("home_remedies_for")} {displayName}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-3.5">
                {displayHerbalTips.map((tip, idx) => {
                  const style = tipStyles[idx % tipStyles.length]!;
                  const TipIcon = style.icon;
                  return (
                    <div
                      key={idx}
                      className={`relative overflow-hidden rounded-2xl border ${style.border} ${style.bg} p-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-md`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full ${style.accent} text-xs font-bold shadow-sm`}>
                          <TipIcon size={14} />
                        </span>
                        <div className="flex-1">
                          <span className="inline-block text-[11px] font-bold uppercase tracking-wider opacity-80 mb-1">
                            {style.badge}
                          </span>
                          <p className={`text-xs sm:text-sm leading-6 font-medium ${style.text}`}>
                            {tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Key Ayurvedic Herbs & Preparations */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="grid size-7 place-items-center rounded-xl bg-secondary text-primary">
                <Sparkles size={15} />
              </span>
              <h3 className="font-display text-lg font-bold text-foreground">
                {t("key_herbs_title")}
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {displayHerbs.map((herb, herbIdx) => (
                <div
                  key={herb.name || herbIdx}
                  className="rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md"
                >
                  <h4 className="font-semibold text-sm text-foreground">{herb.name}</h4>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{herb.use}</p>
                  <div className="mt-2.5 pt-2 border-t border-border/40 space-y-1.5 text-[11px]">
                    <p className="leading-4 text-foreground/80">
                      <strong className="text-primary font-semibold">{t("method_label")} </strong>
                      {herb.preparation}
                    </p>
                    <p className="leading-4 text-amber-600 dark:text-amber-400">
                      <strong className="font-semibold">{t("safety_label")} </strong>
                      {herb.safety}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety & Warning Callout */}
          <div className="rounded-2xl border border-warning/35 bg-warning-soft/60 p-4 text-xs leading-5 text-foreground/85">
            <div className="flex items-start gap-2.5">
              <ShieldAlert size={18} className="shrink-0 text-warning mt-0.5" />
              <div>
                <strong className="font-semibold text-warning-foreground">{t("safety_considerations")} </strong>
                {displaySafety}
                <ul className="mt-2 list-disc list-inside space-y-0.5 text-muted-foreground">
                  {displayWarnings.map((w, wIdx) => (
                    <li key={wIdx}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border/60">
            {onToggleBookmark && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggleBookmark(condition.slug);
                }}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
                  saved
                    ? "border-amber-400 bg-amber-500/15 text-amber-600 dark:text-amber-400 shadow-sm"
                    : "border-border/80 bg-card text-foreground hover:border-primary/50 hover:bg-accent"
                }`}
              >
                <Bookmark
                  size={16}
                  fill={saved ? "currentColor" : "none"}
                  className={saved ? "text-amber-500 dark:text-amber-400 scale-110" : "text-muted-foreground"}
                />
                <span>{saved ? t("saved_in_bookmarks") : t("save_guide_btn")}</span>
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="ml-auto inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <CheckCircle2 size={16} />
              {t("done_btn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

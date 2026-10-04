import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  Flame,
  Leaf,
  LoaderCircle,
  Search,
  ShieldAlert,
  Sparkles,
  Sun,
  X,
  XCircle,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  commonQueriesI18n,
  conditionTranslations,
  useLanguage,
} from "../context/language-context";
import { searchWellness, type SearchResult } from "../lib/ai-wellness-plan";

interface CommonQuery {
  label: string;
  query: string;
  category: "Mind & Sleep" | "Digestion" | "Pain & Mobility" | "Immunity & Skin";
  icon: string;
}

const COMMON_QUERIES: CommonQuery[] = [
  { label: "Better Sleep & Insomnia", query: "Better sleep and insomnia remedies", category: "Mind & Sleep", icon: "😴" },
  { label: "Acidity & Heartburn", query: "Acidity, heartburn and acid reflux relief", category: "Digestion", icon: "🔥" },
  { label: "Stress & Anxiety Calm", query: "Stress, anxiety and mental calm", category: "Mind & Sleep", icon: "🧠" },
  { label: "Ashwagandha Uses", query: "Ashwagandha benefits, use and safety", category: "Mind & Sleep", icon: "🌿" },
  { label: "Triphala & Digestion", query: "Triphala for constipation and digestion", category: "Digestion", icon: "🍵" },
  { label: "Joint Pain & Arthritis", query: "Joint pain, knee swelling and arthritis", category: "Pain & Mobility", icon: "🦴" },
  { label: "Gas & Bloating", query: "Sluggish digestion, bloating and gas", category: "Digestion", icon: "🍃" },
  { label: "Cough & Cold Relief", query: "Cough, common cold and seasonal allergy", category: "Immunity & Skin", icon: "🫁" },
  { label: "Clear Skin & Eczema", query: "Eczema, glowing skin and blood detox", category: "Immunity & Skin", icon: "✨" },
  { label: "Low Energy & Fatigue", query: "Chronic fatigue and vitality rejuvenation", category: "Mind & Sleep", icon: "⚡" },
  { label: "Neck & Back Stiffness", query: "Neck stiffness and lower back pain", category: "Pain & Mobility", icon: "💆" },
  { label: "Headache & Migraine", query: "Migraine and tension headache relief", category: "Mind & Sleep", icon: "🤯" },
];

export function AiWellnessSearch({
  onExploreCondition,
}: {
  onExploreCondition?: (slug: string) => void;
}) {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const resultRef = useRef<HTMLDivElement>(null);

  const executeSearch = async (searchQuery: string) => {
    if (!searchQuery.trim() || pending) return;
    setQuery(searchQuery);
    setResult(null);
    setError("");
    setPending(true);

    try {
      const res = await searchWellness({ data: { query: searchQuery } });
      setResult(res);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to search right now. Please try again.");
    } finally {
      setPending(false);
    }
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await executeSearch(query);
  }

  const categoryFilters = [
    { key: "All", label: t("filter_all") },
    { key: "Mind & Sleep", label: t("filter_mind_sleep") },
    { key: "Digestion", label: t("filter_digestion") },
    { key: "Pain & Mobility", label: t("filter_pain_mobility") },
    { key: "Immunity & Skin", label: t("filter_immunity_skin") },
  ] as const;

  const filteredQueries =
    activeCategory === "All"
      ? COMMON_QUERIES
      : COMMON_QUERIES.filter((item) => item.category === activeCategory);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8" aria-labelledby="ai-search-heading">
      <div className="rounded-3xl border border-border/80 bg-card/70 p-6 sm:p-8 shadow-sm backdrop-blur-md">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-xl bg-primary text-primary-foreground shadow-xs">
              <Sparkles size={15} />
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              {t("search_badge")}
            </p>
          </div>
          <h2 id="ai-search-heading" className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            {t("search_heading")}
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-muted-foreground">
            {t("search_desc")}
          </p>
        </div>

        {/* Input Bar */}
        <form className="mt-6 flex flex-col gap-2.5 sm:flex-row" onSubmit={handleSubmit} role="search">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <input
              id="ai-wellness-query"
              type="search"
              required
              minLength={2}
              maxLength={500}
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
              placeholder={t("search_placeholder")}
              className="h-13 w-full rounded-2xl border border-border/80 bg-background/90 pl-12 pr-10 text-sm sm:text-base outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                aria-label={t("clear_query")}
              >
                <X size={16} />
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={pending || !query.trim()}
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-primary px-7 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            {pending ? <LoaderCircle size={18} className="animate-spin" /> : <Sparkles size={18} />}
            <span>{pending ? t("search_button_loading") : t("search_button")}</span>
          </button>
        </form>

        {/* Commonly-Used Search Queries Section */}
        <div className="mt-6 border-t border-border/60 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {t("common_queries_title")}
            </span>

            {/* Quick category filter tags */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none text-[11px]">
              {categoryFilters.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`rounded-lg px-2.5 py-1 font-semibold transition-all cursor-pointer ${
                    activeCategory === cat.key
                      ? "bg-secondary text-primary border border-primary/30"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search chips */}
          <div className="flex flex-wrap gap-2">
            {filteredQueries.map((item) => {
              const localizedLabel =
                commonQueriesI18n[language]?.[item.label] || item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => executeSearch(item.query)}
                  disabled={pending}
                  className="group inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/90 px-3.5 py-2 text-xs font-semibold text-foreground/90 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5 hover:text-primary active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  <span>{item.icon}</span>
                  <span>{localizedLabel}</span>
                  <ArrowRight size={12} className="opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ERROR STATE */}
      {error && (
        <div className="mt-4 rounded-3xl border border-destructive/30 bg-destructive/10 p-5 text-sm text-destructive" role="alert">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="mt-0.5 shrink-0" size={18} />
            <div>
              <p className="font-semibold">{t("unable_to_search")}</p>
              <p className="mt-1 text-xs opacity-90">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* PERSONALIZED REMEDIAL INSIGHTS DASHBOARD */}
      {result && (
        <div ref={resultRef} className="mt-6 space-y-6 animate-in fade-in-50 duration-300" aria-live="polite">
          {result.guidance ? (() => {
            const guidance = result.guidance;
            const locGuidance = guidance.i18n?.[language];

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

            const displayTitle =
              locGuidance?.title ||
              (guidance.conditionSlug ? conditionTranslations[guidance.conditionSlug]?.[language]?.name : undefined) ||
              guidance.title;

            const displayCategory =
              locGuidance?.category ||
              (guidance.isCustomAi
                ? (language === "hi" ? "AI समग्र आयुर्वेदिक विश्लेषण" : language === "gu" ? "AI સમગ્ર આયુર્વેદિક વિશ્લેષણ" : "AI Holistic Synthesis")
                : t(categoryKeyMap[guidance.category] || "cat_general"));

            const displayDosha = locGuidance?.doshaFocus || guidance.doshaFocus;
            const displayThermal = locGuidance?.thermalNature || guidance.thermalNature;
            const displayPerspective = locGuidance?.perspective || guidance.traditionalPerspective;
            const displayRemedyTips = locGuidance?.remedyTips || guidance.remedyTips;
            const displayDinacharya = locGuidance?.dinacharya || guidance.dinacharya;
            const displayDietary = locGuidance?.dietary || guidance.dietaryGuidance;
            const displaySafety = locGuidance?.safety || guidance.safetyNotice;

            return (
              <div className="overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-lg shadow-primary/5">
                {/* Personalized Header Banner */}
                <div className="border-b border-border/70 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      🎯 {displayDosha}
                    </span>
                    <span className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold text-foreground/90">
                      🌡️ {displayThermal}
                    </span>
                    <span className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold text-muted-foreground">
                      📂 {displayCategory}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                        {t("guidance_for")}: {displayTitle}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                        {t("guidance_sub")}
                      </p>
                    </div>

                    {onExploreCondition && !guidance.isCustomAi && Boolean(guidance.conditionSlug) && (
                      <button
                        type="button"
                        onClick={() => onExploreCondition(guidance.conditionSlug)}
                        className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 cursor-pointer sm:self-auto"
                      >
                        <span>{t("explore_full_guide")}</span>
                        <ArrowRight size={14} />
                      </button>
                    )}
                  </div>

                  {/* Perspective & Root Cause */}
                  <div className="mt-5 rounded-2xl border border-border/60 bg-card/80 p-4 sm:p-5">
                    <p className="text-xs sm:text-sm leading-6 text-foreground/90">
                      <strong className="text-primary font-semibold">{t("traditional_concept")} </strong>
                      {displayPerspective}
                    </p>
                  </div>
                </div>

                {/* Comprehensive 4-Column Matrix */}
                <div className="p-6 sm:p-8 space-y-8">
                  {/* 1. Targeted Herbal Remedies */}
                  {displayRemedyTips.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="grid size-7 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                          <Leaf size={16} />
                        </span>
                        <h4 className="font-display text-lg font-bold text-foreground">
                          {t("herbal_formulations_title")}
                        </h4>
                      </div>

                      <div className="grid gap-3.5 sm:grid-cols-3">
                        {displayRemedyTips.map((tip, idx) => (
                          <div
                            key={idx}
                            className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-4.5 transition-all hover:border-emerald-500/50 hover:shadow-xs"
                          >
                            <span className="inline-block rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-2">
                              {t("remedy_tag")} #{idx + 1}
                            </span>
                            <p className="text-xs sm:text-sm leading-5 font-medium text-foreground/90">
                              {tip}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 2. Personalized Daily Dinacharya & Routine */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="grid size-7 place-items-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                        <Clock size={16} />
                      </span>
                      <h4 className="font-display text-lg font-bold text-foreground">
                        {t("dinacharya_title")}
                      </h4>
                    </div>

                    <div className="grid gap-3.5 sm:grid-cols-3">
                      <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-4.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 mb-2">
                          <Sun size={15} />
                          <span>{t("morning_protocol")}</span>
                        </div>
                        <p className="text-xs leading-5 text-foreground/85">
                          {displayDinacharya.morning}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-orange-500/25 bg-orange-500/5 p-4.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-orange-700 dark:text-orange-400 mb-2">
                          <Flame size={15} />
                          <span>{t("midday_protocol")}</span>
                        </div>
                        <p className="text-xs leading-5 text-foreground/85">
                          {displayDinacharya.midday}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-indigo-500/25 bg-indigo-500/5 p-4.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-400 mb-2">
                          <Clock size={15} />
                          <span>{t("evening_protocol")}</span>
                        </div>
                        <p className="text-xs leading-5 text-foreground/85">
                          {displayDinacharya.evening}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3. Dietary Guidance: Foods to Favor vs Avoid */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="grid size-7 place-items-center rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400">
                        <Compass size={16} />
                      </span>
                      <h4 className="font-display text-lg font-bold text-foreground">
                        {t("dietary_title")}
                      </h4>
                    </div>

                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4.5">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2.5">
                          <CheckCircle2 size={16} />
                          <span>{t("foods_to_favor")}</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-foreground/85">
                          {displayDietary.favor.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-4.5">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-2.5">
                          <XCircle size={16} />
                          <span>{t("foods_to_avoid")}</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-foreground/85">
                          {displayDietary.avoid.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-rose-500 font-bold">✕</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 4. Safety & Clinical Precautions */}
                  <div className="rounded-2xl border border-warning/35 bg-warning-soft/60 p-4 text-xs leading-5 text-foreground/85">
                    <div className="flex items-start gap-2.5">
                      <ShieldAlert size={18} className="shrink-0 text-warning mt-0.5" />
                      <div>
                        <strong className="font-semibold text-warning-foreground">{t("safety_considerations")} </strong>
                        <span>{displaySafety}</span>
                        {guidance.isSerious && (
                          <p className="mt-1 font-semibold text-red-600 dark:text-red-400">
                            {t("serious_notice")}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Related Condition Flash Cards */}
                  {result.relatedConditions.length > 0 && (
                    <div className="border-t border-border/60 pt-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                        {t("explore_related_guides")}
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {result.relatedConditions.map((cond) => {
                          const localizedCondName =
                            conditionTranslations[cond.slug]?.[language]?.name || cond.name;
                          return (
                            <button
                              key={cond.slug}
                              type="button"
                              onClick={() => onExploreCondition?.(cond.slug)}
                              className="group inline-flex items-center gap-2 rounded-xl border border-border/80 bg-secondary/50 px-4 py-2 text-xs font-semibold text-primary transition-all hover:border-primary/60 hover:bg-primary/10 hover:scale-105 active:scale-95 cursor-pointer"
                            >
                              <span>🌿 {localizedCondName}</span>
                              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })() : (
            /* Fallback Plain Answer */
            <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="grid size-7 place-items-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                  <Sparkles size={14} />
                </span>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {t("guidance_insights_fallback")}
                </h3>
              </div>
              <div className="whitespace-pre-wrap text-xs sm:text-sm leading-6 text-foreground/90 rounded-2xl bg-secondary/20 p-5">
                {result.answer}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
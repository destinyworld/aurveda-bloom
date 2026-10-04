import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowDown,
  ArrowRight,
  Bookmark,
  Clock,
  Compass,
  Flame,
  Leaf,
  ShieldCheck,
  Sparkles,
  Sun,
  Wind,
} from "lucide-react";
import { useState } from "react";
import { AiWellnessSearch } from "../components/AiWellnessSearch";
import { ConditionCard } from "../components/ConditionCard";
import { ConditionDetailModal } from "../components/ConditionDetailModal";
import { ConditionSlider } from "../components/ConditionSlider";
import { ModalityDetailModal } from "../components/ModalityDetailModal";
import {
  dailyTipsI18n,
  dinacharyaStepsI18n,
  doshasI18n,
  useLanguage,
} from "../context/language-context";
import { conditions, type Condition } from "../data/conditions";
import { modalitiesData, type ModalityItem } from "../data/modalities";
import { useFavorites } from "../hooks/use-wellness-store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sattva — Ayurvedic & Natural Wellness Guide" },
      {
        name: "description",
        content:
          "Explore Ayurveda, herbs, nutrition, yoga, and complementary wellness guidance with responsible safety information.",
      },
      { property: "og:title", content: "Sattva — Ayurvedic & Natural Wellness Guide" },
      {
        property: "og:description",
        content: "A calming, safety-first single page guide to Ayurveda and complementary wellness.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const dinacharyaVisuals = [
  { icon: Sun, color: "text-amber-500", bg: "bg-amber-500/10 border-amber-500/30" },
  { icon: Flame, color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/30" },
  { icon: Clock, color: "text-indigo-500", bg: "bg-indigo-500/10 border-indigo-500/30" },
];

const doshaVisuals = [
  { icon: Wind, color: "from-blue-500/20 to-teal-500/20 border-teal-500/30 text-teal-700 dark:text-teal-300" },
  { icon: Flame, color: "from-amber-500/20 to-rose-500/20 border-rose-500/30 text-rose-700 dark:text-rose-300" },
  { icon: Leaf, color: "from-emerald-500/20 to-lime-500/20 border-emerald-500/30 text-emerald-700 dark:text-emerald-300" },
];

function HomePage() {
  const { language, t } = useLanguage();
  const { favorites, toggleFavorite } = useFavorites();
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [selectedModality, setSelectedModality] = useState<ModalityItem | null>(null);

  const day = Math.floor(Date.now() / 86400000);
  const currentTips = dailyTipsI18n[language] || dailyTipsI18n.en;
  const tip = currentTips[day % currentTips.length];
  const currentDinacharya = (dinacharyaStepsI18n[language] || dinacharyaStepsI18n.en).map((step, idx) => ({
    ...step,
    ...dinacharyaVisuals[idx],
  }));
  const currentDoshas = (doshasI18n[language] || doshasI18n.en).map((dosha, idx) => ({
    ...dosha,
    ...doshaVisuals[idx],
  }));

  const savedConditions = conditions.filter((c) => favorites.includes(c.slug));

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* SECTION 1: HOME (Dashboard, Daily Note, Ayurvedic Smart Search) */}
      <section id="home" className="scroll-mt-20 mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Sattva · {t("brand_subtitle")}</p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              {t("hero_title")}
            </h1>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-6 text-muted-foreground">
            {t("hero_desc")}
          </p>
        </div>

        {/* Quick jump navigation pills */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <button
            type="button"
            onClick={() => scrollToSection("conditions")}
            className="group flex min-h-16 items-center gap-3.5 rounded-2xl border border-border/80 bg-card px-5 text-left text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5 active:scale-[0.99] cursor-pointer"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowDown size={18} />
            </span>
            <div className="flex flex-col">
              <span className="text-foreground transition-colors group-hover:text-primary">
                {t("quick_conditions_title")}
              </span>
              <span className="text-[11px] font-normal text-muted-foreground">
                {t("quick_conditions_sub")}
              </span>
            </div>
            <ArrowRight className="ml-auto text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" size={17} />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("wellness")}
            className="group flex min-h-16 items-center gap-3.5 rounded-2xl border border-border/80 bg-card px-5 text-left text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5 active:scale-[0.99] cursor-pointer"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              <Sparkles size={18} />
            </span>
            <div className="flex flex-col">
              <span className="text-foreground transition-colors group-hover:text-primary">
                {t("quick_wellness_title")}
              </span>
              <span className="text-[11px] font-normal text-muted-foreground">
                {t("quick_wellness_sub")}
              </span>
            </div>
            <ArrowRight className="ml-auto text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" size={17} />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("bookmarks")}
            className="group flex min-h-16 items-center gap-3.5 rounded-2xl border border-border/80 bg-card px-5 text-left text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5 active:scale-[0.99] cursor-pointer"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white">
              <Bookmark size={18} />
            </span>
            <div className="flex flex-col">
              <span className="text-foreground transition-colors group-hover:text-primary">
                {t("quick_bookmarks_title")} ({favorites.length})
              </span>
              <span className="text-[11px] font-normal text-muted-foreground">
                {t("quick_bookmarks_sub")}
              </span>
            </div>
            <ArrowRight className="ml-auto text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" size={17} />
          </button>
        </div>

        {/* Daily Ayurvedic Note */}
        <div className="mt-4 flex items-start gap-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary/90 px-5 py-4 text-primary-foreground shadow-md shadow-primary/10 transition-transform duration-300 hover:scale-[1.005]">
          <Sun className="mt-0.5 shrink-0 animate-pulse text-amber-200" size={20} />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary-foreground/80">{t("daily_note_title")}</p>
            <p className="mt-1 text-sm sm:text-base leading-6 text-primary-foreground/95">{tip}</p>
          </div>
        </div>
      </section>

      {/* Ayurvedic Smart Search with Pop-up Integration */}
      <AiWellnessSearch
        onExploreCondition={(slug) => {
          const matched = conditions.find((c) => c.slug === slug);
          if (matched) setSelectedCondition(matched);
        }}
      />

      {/* SECTION 2: CONDITIONS (Smooth-delay horizontal slider panel with arrow keys & colorful pop-up modal) */}
      <section id="conditions" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ConditionSlider
          conditions={conditions}
          onExplore={(condition) => setSelectedCondition(condition)}
          savedSlugs={favorites}
          onToggleSave={toggleFavorite}
        />
      </section>

      {/* SECTION 3: RE-DEFINED WELLNESS (16 Holistic Modalities, Dinacharya Daily Routines, Tridosha Balance) */}
      <section id="wellness" className="scroll-mt-20 bg-surface-deep/30 py-12 sm:py-16 lg:py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. Modalities Section */}
          <div>
            <div className="mb-8 text-left">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Compass size={14} />
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{t("wellness_traditions_badge")}</p>
              </div>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {t("wellness_modalities_title")}
              </h2>
              <p className="mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground">
                {t("wellness_modalities_desc")}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {modalitiesData.map((item) => {
                const content = item.content[language] || item.content.en;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedModality(item)}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.99] cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="grid size-12 place-items-center rounded-2xl bg-secondary/80 text-2xl transition-transform duration-300 group-hover:scale-110 shadow-xs">
                          {item.icon}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[10px] font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <span>{t("explore_tradition_innovation")}</span>
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                        {content.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-semibold text-primary/90 line-clamp-1">
                        {content.tagline}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground line-clamp-2">
                        {content.shortDesc}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-[11px] font-semibold text-muted-foreground group-hover:text-foreground">
                      <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                        <Sparkles size={12} />
                        <span>Tradition & Innovation</span>
                      </span>
                      <ArrowRight size={13} className="opacity-40 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Dinacharya: Daily Ayurvedic Routine */}
          <div>
            <div className="mb-8 text-left">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Clock size={14} />
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{t("dinacharya_flow_badge")}</p>
              </div>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                {t("dinacharya_heading")}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {t("dinacharya_subheading")}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {currentDinacharya.map((step) => {
                const StepIcon = step.icon ?? Sun;
                return (
                  <div
                    key={step.phase}
                    className={`rounded-3xl border p-6 bg-card transition-all duration-300 hover:shadow-md ${step.bg}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`grid size-10 place-items-center rounded-2xl bg-card shadow-xs ${step.color}`}>
                        <StepIcon size={20} />
                      </span>
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {step.phase}
                      </h3>
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {step.tips.map((tipText, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm leading-5 text-muted-foreground">
                          <span className="mt-1 text-primary">•</span>
                          <span>{tipText}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. The Three Doshas: Vata, Pitta, Kapha */}
          <div>
            <div className="mb-8 text-left">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Leaf size={14} />
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{t("tridosha_badge")}</p>
              </div>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                {t("tridosha_heading")}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {t("tridosha_subheading")}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {currentDoshas.map((d) => {
                const DoshaIcon = d.icon ?? Wind;
                return (
                  <div
                    key={d.name}
                    className={`rounded-3xl border p-6 bg-gradient-to-br bg-card transition-all duration-300 hover:shadow-md ${d.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-2xl bg-card/90 shadow-xs">
                        <DoshaIcon size={20} />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {d.name}
                        </h3>
                        <span className="text-[11px] font-medium opacity-80">{d.element}</span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3 text-xs sm:text-sm leading-5">
                      <p className="text-foreground/90 font-medium">
                        {d.characteristics}
                      </p>
                      <div className="rounded-xl bg-card/60 p-3 border border-border/40">
                        <strong className="text-foreground block mb-1">{t("out_of_balance")}</strong>
                        <span className="text-muted-foreground text-xs">{d.imbalance}</span>
                      </div>
                      <div className="rounded-xl bg-card/60 p-3 border border-border/40">
                        <strong className="text-primary block mb-1">{t("how_to_balance")}</strong>
                        <span className="text-muted-foreground text-xs">{d.balancing}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Safety & Coordinated Care Banner */}
          <div className="grid gap-4 rounded-3xl bg-gradient-to-r from-primary to-primary/90 p-6 text-primary-foreground shadow-lg shadow-primary/10 sm:grid-cols-[auto_1fr] sm:p-8">
            <ShieldCheck className="mt-1 text-amber-200" size={30} />
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold">{t("integrative_safety_title")}</h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 opacity-95">
                {t("integrative_safety_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DEDICATED BOOKMARKS SECTION */}
      <section id="bookmarks" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 border-t border-border/60">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Bookmark size={14} />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">{t("bookmarks_badge")}</p>
            </div>
            <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              {t("bookmarks_title")}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              {savedConditions.length === 0
                ? t("no_saved_guides_sub")
                : `${savedConditions.length} ${savedConditions.length === 1 ? t("guide_count") : t("guides_count")}`}
            </p>
          </div>

          {savedConditions.length > 0 && (
            <button
              type="button"
              onClick={() => scrollToSection("conditions")}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:underline cursor-pointer"
            >
              <span>{t("explore_all_guides_btn")}</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>

        {savedConditions.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {savedConditions.map((condition) => (
              <ConditionCard
                key={condition.slug}
                condition={condition}
                saved={true}
                onToggle={toggleFavorite}
                onExplore={(c) => setSelectedCondition(c)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border/80 bg-card/40 p-10 text-center">
            <span className="grid size-14 place-items-center rounded-2xl bg-amber-500/10 text-amber-500 dark:text-amber-400 shadow-sm mb-4">
              <Bookmark size={28} />
            </span>
            <h3 className="font-display text-xl font-semibold text-foreground">{t("bookmarks_empty_title")}</h3>
            <p className="mt-2 max-w-md text-xs sm:text-sm text-muted-foreground">
              {t("bookmarks_empty_desc")}
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("conditions")}
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{t("browse_cards_btn")}</span>
              <ArrowDown size={16} />
            </button>
          </div>
        )}
      </section>

      {/* Fancy Colourful Pop-up Modal for Herbal Tips & Guides */}
      <ConditionDetailModal
        condition={selectedCondition}
        onClose={() => setSelectedCondition(null)}
        saved={selectedCondition ? favorites.includes(selectedCondition.slug) : false}
        onToggleBookmark={toggleFavorite}
      />

      {/* Colorful Fancy Pop-up Modal for 16 Wellness Modalities Traditions & Innovations */}
      <ModalityDetailModal
        modality={selectedModality}
        onClose={() => setSelectedModality(null)}
      />
    </>
  );
}

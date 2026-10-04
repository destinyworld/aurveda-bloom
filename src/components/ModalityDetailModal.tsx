import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Flame,
  Globe,
  HeartPulse,
  Leaf,
  Lightbulb,
  ShieldAlert,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "../context/language-context";
import type { ModalityItem } from "../data/modalities";

export function ModalityDetailModal({
  modality,
  onClose,
}: {
  modality: ModalityItem | null;
  onClose: () => void;
}) {
  const { language, t } = useLanguage();

  useEffect(() => {
    if (!modality) return;

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
  }, [modality, onClose]);

  if (!modality) return null;

  const data = modality.content[language] || modality.content.en;

  const modalUiLabels = {
    en: {
      modality_badge: "Holistic Wellness Modality",
      overview_title: "Overview & Significance in Human Life",
      traditions_badge: "Ancient Roots & Classical Heritage",
      innovations_badge: "Modern Science & Clinical Breakthroughs",
      relevance_badge: "Daily Relevance & Practical Application",
      how_to_apply: "How to Apply in Daily Life:",
      safety_heading: "Clinical Boundaries & Safety:",
      done_btn: "Done",
      tap_to_explore: "Explore Tradition & Innovation ↗",
    },
    hi: {
      modality_badge: "समग्र स्वास्थ्य पद्धति",
      overview_title: "परिचय एवं मानव जीवन में महत्व",
      traditions_badge: "प्राचीन औषधीय परंपराएं एवं शास्त्रीय विरासत",
      innovations_badge: "आधुनिक विज्ञान एवं क्लिनिकल अनुसंधान",
      relevance_badge: "दैनिक जीवन में प्रासंगिकता एवं उपयोग",
      how_to_apply: "दैनिक जीवन में कैसे अपनाएं:",
      safety_heading: "चिकित्सीय सीमाएं एवं सुरक्षा:",
      done_btn: "पूर्ण",
      tap_to_explore: "परंपरा और नवाचार देखें ↗",
    },
    gu: {
      modality_badge: "સમગ્ર સ્વાસ્થ્ય પદ્ધતિ",
      overview_title: "પરિચય અને માનવ જીવનમાં મહત્વ",
      traditions_badge: "પ્રાચીન ઔષધીય પરંપરાઓ અને શાસ્ત્રીય વારસો",
      innovations_badge: "આધુનિક વિજ્ઞાન અને ક્લિનિકલ સંશોધન",
      relevance_badge: "રોજિંદા જીવનમાં ઉપયોગિતા અને મહત્વ",
      how_to_apply: "રોજિંદા જીવનમાં કેવી રીતે અપનાવવું:",
      safety_heading: "તબીબી મર્યાદાઓ અને સાવચેતી:",
      done_btn: "પૂર્ણ",
      tap_to_explore: "પરંપરા અને આધુનિકતા જુઓ ↗",
    },
  }[language];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-modality-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/20 bg-card text-foreground shadow-2xl transition-all duration-300 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dynamic Vibrant Header Banner */}
        <div className={`relative overflow-hidden bg-gradient-to-r ${modality.gradient} px-6 py-8 sm:px-8 sm:py-10 text-white shadow-md`}>
          {/* Ambient Glow Orbs */}
          <div className="absolute -right-8 -top-8 size-48 rounded-full bg-white/15 blur-2xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-8 size-40 rounded-full bg-black/20 blur-xl pointer-events-none" />

          {/* Close Button */}
          <div className="absolute top-4 right-4 z-20">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modality modal"
              className="grid size-10 place-items-center rounded-full bg-black/25 text-white backdrop-blur-md transition-all duration-200 hover:rotate-90 hover:bg-black/45 hover:scale-105 active:scale-95 border border-white/25 cursor-pointer"
            >
              <X size={19} />
            </button>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pr-8">
            <span className="grid size-16 sm:size-20 shrink-0 place-items-center rounded-2xl bg-white/20 text-3xl sm:text-4xl shadow-lg backdrop-blur-md border border-white/30 transition-transform hover:scale-105">
              {modality.icon}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-black/30 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/15">
                  {modalUiLabels.modality_badge}
                </span>
              </div>
              <h2
                id="modal-modality-title"
                className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-sm"
              >
                {data.name}
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-white/90 leading-snug drop-shadow-xs max-w-xl">
                {data.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-7">
          {/* 1. Overview & Human Significance Card */}
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5 sm:p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="grid size-7 place-items-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                <HeartPulse size={16} />
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                {modalUiLabels.overview_title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm leading-6 text-foreground/90 font-medium">
              {data.overview}
            </p>
          </div>

          {/* 2. Ancient Medicinal Traditions Card */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 sm:p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="grid size-7 place-items-center rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300">
                <BookOpen size={16} />
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                {data.traditionsTitle}
              </h3>
            </div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3">
              🏛️ {modalUiLabels.traditions_badge}
            </span>
            <p className="text-xs sm:text-sm leading-6 text-foreground/85 mb-4">
              {data.traditionsDesc}
            </p>

            <div className="grid gap-2 sm:grid-cols-2">
              {data.traditionsKeys.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl border border-amber-500/20 bg-card/70 p-3 text-xs leading-5 text-foreground/90 shadow-2xs"
                >
                  <span className="mt-0.5 text-amber-600 dark:text-amber-400 font-bold shrink-0">✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Latest Scientific & Clinical Innovations Card */}
          <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-5 sm:p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="grid size-7 place-items-center rounded-xl bg-indigo-500/20 text-indigo-700 dark:text-indigo-300">
                <Cpu size={16} />
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                {data.innovationsTitle}
              </h3>
            </div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-3">
              🔬 {modalUiLabels.innovations_badge}
            </span>
            <p className="text-xs sm:text-sm leading-6 text-foreground/85 mb-4">
              {data.innovationsDesc}
            </p>

            <div className="grid gap-2 sm:grid-cols-2">
              {data.innovationsKeys.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl border border-indigo-500/20 bg-card/70 p-3 text-xs leading-5 text-foreground/90 shadow-2xs"
                >
                  <span className="mt-0.5 text-indigo-600 dark:text-indigo-400 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Relevance & Modern Practical Use Card */}
          <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-5 sm:p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="grid size-7 place-items-center rounded-xl bg-teal-500/20 text-teal-700 dark:text-teal-300">
                <Lightbulb size={16} />
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                {data.relevanceTitle}
              </h3>
            </div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-3">
              💡 {modalUiLabels.relevance_badge}
            </span>

            <div className="space-y-3">
              <div className="rounded-xl border border-teal-500/20 bg-card/70 p-3.5 text-xs sm:text-sm leading-6 text-foreground/90">
                <p className="text-foreground/90">
                  {data.relevanceSignificance}
                </p>
              </div>

              <div className="rounded-xl border border-teal-500/30 bg-teal-500/10 p-4">
                <strong className="block text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-1.5">
                  {modalUiLabels.how_to_apply}
                </strong>
                <p className="text-xs sm:text-sm leading-6 text-foreground/90 font-medium">
                  {data.relevanceDailyUse}
                </p>
              </div>
            </div>
          </div>

          {/* 5. Safety & Evidence Considerations */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs leading-5 text-foreground/85">
            <div className="flex items-start gap-2.5">
              <ShieldAlert size={18} className="shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <strong className="font-semibold text-amber-800 dark:text-amber-300">
                  {modalUiLabels.safety_heading}{" "}
                </strong>
                <span>{data.safetyNote}</span>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="flex items-center justify-end pt-3 border-t border-border/60">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-2.5 text-xs font-bold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <CheckCircle2 size={16} />
              <span>{modalUiLabels.done_btn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

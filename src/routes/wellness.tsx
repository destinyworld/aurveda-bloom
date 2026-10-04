import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, Clock, Compass, Flame, Leaf, ShieldCheck, Sun, Wind } from "lucide-react";

export const Route = createFileRoute("/wellness")({
  head: () => ({
    meta: [
      { title: "Holistic Wellness Practices — Sattva" },
      {
        name: "description",
        content: "Explore Ayurveda, yoga, mindfulness, nutrition, herbal traditions, and other complementary approaches.",
      },
      { property: "og:title", content: "Holistic Wellness Practices — Sattva" },
      {
        property: "og:description",
        content: "Understand complementary wellness approaches, their uses, and their limits.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WellnessPage,
});

const approaches = [
  ["🌿", "Ayurveda", "A traditional Indian system emphasizing individualized routines, food, movement, and balance.", "Evidence varies by practice; traditional concepts are not medical diagnoses."],
  ["🍵", "Herbal traditions", "Plants and spices are used across cultures as foods, teas, and preparations.", "Quality and evidence vary. Herbs can interact with medicines."],
  ["🧘", "Yoga", "Postures and mindful movement may support mobility, balance, and stress management.", "Adapt practice for pain, pregnancy, injury, or medical conditions."],
  ["🪷", "Meditation", "Attention practices may help some people manage stress and build awareness.", "Not a substitute for mental health treatment or crisis support."],
  ["🌬️", "Breathing exercises", "Slow, comfortable breathing can offer a brief relaxation practice.", "Stop with dizziness; avoid forceful breath holding without guidance."],
  ["🥗", "Nutrition", "A varied eating pattern can support broad health needs.", "Needs differ with allergies, culture, medicines, and medical conditions."],
  ["💧", "Hydration", "Regular fluid intake supports normal body functions.", "Some heart or kidney conditions require individualized fluid limits."],
  ["😴", "Sleep & recovery", "Consistent timing and a calm routine can support restorative sleep.", "Persistent insomnia or daytime sleepiness deserves assessment."],
  ["🏃", "Exercise & movement", "Regular, suitable movement supports physical and mental wellbeing.", "Build gradually and seek advice for new or concerning symptoms."],
  ["🌱", "Naturopathy", "A broad approach often focused on lifestyle and non-drug therapies.", "Training and evidence vary; it should complement qualified care."],
  ["🌸", "Aromatherapy", "Some people use aromas as part of relaxation rituals.", "Do not ingest essential oils; diluted products can still cause reactions."],
  ["💆", "Massage", "Touch and soft-tissue work may offer short-term relaxation or comfort.", "Avoid over injuries, clots, infections, or when medically contraindicated."],
  ["👐", "Acupressure", "Pressure at specific points is used in several traditional practices.", "Evidence is mixed and it is not appropriate over injured tissue."],
  ["☯️", "Traditional Chinese Medicine", "Includes traditional frameworks, movement, acupuncture, and herbal practice.", "Seek appropriately credentialed care; herbal interactions are possible."],
  ["🛀", "Hydrotherapy", "Warm or cool water may be used for comfort and recovery.", "Avoid unsafe temperatures, especially with reduced sensation."],
  ["🌞", "Lifestyle & sunlight", "Daily rhythm, outdoor time, connection, and movement can support wellbeing.", "Protect skin and consider heat, medications, and individual risk."],
];

const dinacharyaSteps = [
  {
    phase: "Morning Ritual (Brahma Muhurta · 6:00 AM – 10:00 AM)",
    icon: Sun,
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/30",
    tips: [
      "Awaken near dawn before 6 AM to absorb Sattvic lightness.",
      "Scrape tongue gently with copper/steel and drink 1-2 cups of warm water with lemon or ginger to ignite Agni.",
      "Practice 15 minutes of gentle Surya Namaskar (Sun Salutations) followed by Nadi Shodhana (Alternate Nostril Breath).",
    ],
  },
  {
    phase: "Midday Rhythm (Peak Agni · 10:00 AM – 2:00 PM)",
    icon: Flame,
    color: "text-orange-500",
    bg: "bg-orange-500/10 border-orange-500/30",
    tips: [
      "Digestive fire is at its peak; make lunch the most nourishing and substantial meal of your day.",
      "Eat mindfully without screens; favor cooked, spiced, vibrant vegetables and grains.",
      "Take a peaceful 100-step stroll after eating to encourage optimal assimilation and prevent lethargy.",
    ],
  },
  {
    phase: "Evening & Wind Down (Restorative · 6:00 PM – 10:00 PM)",
    icon: Clock,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10 border-indigo-500/30",
    tips: [
      "Enjoy a light, easily digestible dinner at least 3 hours before sleep (by 7:00 PM).",
      "Digital sunset: disconnect from screens 1 hour before bed to allow melatonin production.",
      "Sip warm chamomile or golden milk with a pinch of nutmeg, and sleep before 10:00 PM to protect Vata.",
    ],
  },
];

const doshas = [
  {
    name: "Vata (Air & Space)",
    element: "Wind & Ether",
    icon: Wind,
    color: "from-blue-500/20 to-teal-500/20 border-teal-500/30 text-teal-700 dark:text-teal-300",
    characteristics: "Governs movement, circulation, and nerve impulses. Quick, creative, and enthusiastic.",
    imbalance: "Anxiety, dry skin, constipation, racing thoughts, and sleep disturbance.",
    balancing: "Warm, oily, grounding cooked meals (soups, stews, root vegetables), warm sesame oil massage, and soothing routine.",
  },
  {
    name: "Pitta (Fire & Water)",
    element: "Fire & Water",
    icon: Flame,
    color: "from-amber-500/20 to-rose-500/20 border-rose-500/30 text-rose-700 dark:text-rose-300",
    characteristics: "Governs digestion, metabolism, body temperature, and intellect. Sharp, purposeful, and ambitious.",
    imbalance: "Acidity, heartburn, skin inflammation, irritability, and impatience.",
    balancing: "Cooling foods (cucumber, coconut, sweet fruits), moderate exercise, fresh air, coriander water, and meditation.",
  },
  {
    name: "Kapha (Earth & Water)",
    element: "Earth & Water",
    icon: Leaf,
    color: "from-emerald-500/20 to-lime-500/20 border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
    characteristics: "Governs body structure, lubrication, immunity, and stamina. Calm, loving, patient, and grounded.",
    imbalance: "Sluggishness, weight gain, congestion, attachment, and lethargy.",
    balancing: "Light, dry, warm spiced foods (ginger, black pepper), vigorous physical exercise, variety, and avoiding heavy sweets.",
  },
];

function WellnessPage() {
  return (
    <>
      <section className="bg-surface-deep py-14 text-surface-foreground sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-lg bg-gold/15 text-gold">
              <Compass size={14} />
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Holistic Support</p>
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
            Many paths. One thoughtful guide.
          </h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base leading-7 text-surface-muted">
            Explore complementary traditions with clear clinical context about what is known, what is uncertain, and when to seek professional medical care.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-16">
        {/* Modalities */}
        <div>
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Complementary Traditions</p>
            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              16 Holistic Modalities Explained
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {approaches.map(([icon, name, desc, note]) => (
              <article
                key={name}
                className="group rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.99]"
              >
                <span className="inline-block text-3xl transition-transform duration-300 group-hover:scale-110">{icon}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {name}
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{desc}</p>
                <div className="mt-4 flex gap-2 border-t border-border/50 pt-3 text-[11px] leading-4 text-muted-foreground">
                  <AlertCircle className="mt-0.5 shrink-0 text-amber-500" size={13} />
                  <span>{note}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dinacharya */}
        <div>
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded-lg bg-primary/10 text-primary">
                <Clock size={14} />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Ayurvedic Daily Flow</p>
            </div>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Dinacharya · Circadian Wellness Rhythm
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {dinacharyaSteps.map((step) => {
              const StepIcon = step.icon;
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

        {/* Tridosha */}
        <div>
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded-lg bg-primary/10 text-primary">
                <Leaf size={14} />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Constitutional Archetypes</p>
            </div>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Understanding Your Dosha Balance
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {doshas.map((d) => {
              const DoshaIcon = d.icon;
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
                      <strong className="text-foreground block mb-1">When Out of Balance:</strong>
                      <span className="text-muted-foreground text-xs">{d.imbalance}</span>
                    </div>
                    <div className="rounded-xl bg-card/60 p-3 border border-border/40">
                      <strong className="text-primary block mb-1">How to Restore Balance:</strong>
                      <span className="text-muted-foreground text-xs">{d.balancing}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Safety */}
        <div className="mt-12 grid gap-4 rounded-3xl bg-gradient-to-r from-primary to-primary/90 p-6 text-primary-foreground shadow-lg shadow-primary/10 sm:grid-cols-[auto_1fr] sm:p-8">
          <ShieldCheck className="mt-1 text-amber-200" size={30} />
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-semibold">Integrative Wellness & Medical Safety</h3>
            <p className="mt-2 text-xs sm:text-sm leading-6 opacity-95">
              Always inform your healthcare team about herbs, dietary supplements, and alternative therapies you use. This prevents drug-herb interactions and ensures safe, coordinated healthcare.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

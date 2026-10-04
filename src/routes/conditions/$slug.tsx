import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Bookmark, Leaf, ShieldAlert } from "lucide-react";
import { useEffect } from "react";
import { Button } from "../../components/Button";
import { getCondition } from "../../data/conditions";
import { addRecent, useFavorites } from "../../hooks/use-wellness-store";

export const Route = createFileRoute("/conditions/$slug")({
  head: ({ params }) => {
    const condition = getCondition(params.slug);
    return { meta: [{ title: condition ? `${condition.name} Wellness Guide — Sattva` : "Guide Not Found — Sattva" }] };
  },
  component: ConditionPage,
});

function ConditionPage() {
  const { slug } = Route.useParams();
  const condition = getCondition(slug);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => addRecent(slug), [slug]);

  if (!condition) {
    return <div className="mx-auto max-w-3xl px-5 py-20 text-center"><h1 className="font-display text-4xl font-semibold">Guide not found</h1><Link to="/conditions" className="mt-5 inline-flex text-primary">Browse all guides</Link></div>;
  }

  const saved = favorites.includes(condition.slug);
  return (
    <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-14">
      <Link
        to="/conditions"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 hover:-translate-x-1 hover:text-primary/80"
      >
        <ArrowLeft size={17} /> All condition guides
      </Link>

      <header className="mt-6 flex flex-wrap items-start justify-between gap-5 sm:mt-8">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-secondary/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              {condition.category}
            </span>
            <span className="rounded-full border border-border/80 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {condition.evidence}
            </span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            {condition.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
            {condition.summary}
          </p>
        </div>
        <Button
          variant="secondary"
          onClick={() => toggleFavorite(condition.slug)}
          className="rounded-full border border-border/80 px-4 py-2 text-sm font-semibold shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label={saved ? "Remove from saved guides" : "Save guide"}
        >
          <Bookmark size={17} fill={saved ? "currentColor" : "none"} className={saved ? "text-primary" : ""} />
          {saved ? "Saved" : "Save guide"}
        </Button>
      </header>

      <section className="mt-8 rounded-2xl border border-warning/35 bg-warning-soft/70 p-5 sm:p-6 shadow-sm">
        <div className="flex items-start gap-3.5">
          <ShieldAlert className="mt-0.5 shrink-0 text-warning" size={22} />
          <div>
            <h2 className="font-semibold text-warning-foreground">Safety comes first</h2>
            <p className="mt-1.5 text-sm leading-6 text-foreground/80">{condition.safety}</p>
            <ul className="mt-3 list-inside list-disc space-y-1.5 text-xs sm:text-sm leading-6 text-foreground/85">
              {condition.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {condition.herbalRemedyTips && condition.herbalRemedyTips.length > 0 && (
        <section className="mt-10 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent p-5 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/25">
              <Leaf size={18} />
            </span>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl text-foreground">Herbal Remedial Tips</h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Actionable herbal recipes and traditional home preparation methods for {condition.name.toLowerCase()}:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {condition.herbalRemedyTips.map((tip, idx) => (
              <div
                key={idx}
                className="group flex gap-3.5 rounded-2xl border border-border/80 bg-card p-4.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm leading-6 text-foreground/90 transition-colors group-hover:text-foreground">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">A traditional perspective</h2>
        <p className="mt-3 text-sm sm:text-base leading-7 text-muted-foreground">{condition.perspective}</p>
      </section>

      <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2">
        <GuideList title="Try today" items={condition.tryToday} />
        <GuideList title="Foods to consider" items={condition.foods} />
        <GuideList title="Practices" items={condition.practices} />
        <GuideList title="Limit or use caution" items={condition.limit} />
      </div>

      <section className="mt-10">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">Herbal traditions</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {condition.herbs.map((herb) => (
            <article
              key={herb.name}
              className="group rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
            >
              <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">{herb.name}</h3>
              <p className="mt-2 text-xs sm:text-sm leading-6 text-muted-foreground">{herb.use}</p>
              <div className="mt-3.5 border-t border-border/50 pt-3">
                <p className="text-xs sm:text-sm leading-6">
                  <strong className="text-foreground">Preparation:</strong> <span className="text-muted-foreground">{herb.preparation}</span>
                </p>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-warning-foreground">
                  <strong>Safety:</strong> {herb.safety}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <p className="mt-12 border-t border-border/60 pt-6 text-xs sm:text-sm leading-6 text-muted-foreground">
        Educational information only. This guide does not diagnose or treat illness and is not a substitute for clinical care from a qualified healthcare professional.
      </p>
    </article>
  );
}

function GuideList({ title, items }: { title: string; items: string[] }) {
  return <section><h2 className="font-display text-2xl font-semibold">{title}</h2><ul className="mt-3 space-y-2">{items.map((item) => <li key={item} className="border-l-2 border-primary/35 py-1 pl-3 text-sm leading-6 text-muted-foreground">{item}</li>)}</ul></section>;
}
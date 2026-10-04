import { useNavigate, useRouterState } from "@tanstack/react-router";
import { ArrowUp, Bookmark, Globe, Home, Leaf, Menu, Moon, Search, Sparkles, Sun, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useLanguage, type Language } from "../context/language-context";
import { useFavorites } from "../hooks/use-wellness-store";
import { Button } from "./Button";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigate = useNavigate();
  const { favorites } = useFavorites();
  const { language, setLanguage, t } = useLanguage();
  const bookmarkCount = favorites.length;

  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navItems = [
    { id: "home", label: t("home"), icon: Home },
    { id: "conditions", label: t("conditions"), icon: Search },
    { id: "wellness", label: t("wellness"), icon: Sparkles },
    { id: "bookmarks", label: t("bookmarks"), icon: Bookmark },
  ] as const;

  useEffect(() => {
    const shouldUseDark = window.localStorage.getItem("sattva-theme") === "dark";
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);

      // Section scroll spy for single page app
      const sections = ["bookmarks", "wellness", "conditions", "home"] as const;
      const scrollPosition = window.scrollY + 180;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Handle initial hash jump
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("sattva-theme", next ? "dark" : "light");
  };

  const smoothScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);

    if (pathname === "/") {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${sectionId}`);
        setActiveSection(sectionId);
      } else {
        smoothScrollToTop();
      }
    } else {
      // If navigating from another route, jump to home route with anchor hash
      navigate({ to: `/#${sectionId}` });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 pt-[env(safe-area-inset-top)] backdrop-blur-xl transition-colors duration-200">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:h-18 sm:px-6 lg:px-8">
          {/* Brand Logo - clicks jump to top / #home */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="group flex min-w-0 items-center gap-2 sm:gap-2.5 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Sattva home"
          >
            <span className="grid size-9 sm:size-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm shadow-primary/20 transition-all duration-300 group-hover:rotate-12 group-hover:shadow-md">
              <Leaf size={19} className="transition-transform duration-300" />
            </span>
            <div className="flex flex-col text-left">
              <span className="truncate font-display text-lg sm:text-2xl font-semibold tracking-tight text-foreground">
                Sattva
              </span>
              <span className="hidden sm:block text-[10px] font-bold uppercase tracking-wider text-primary -mt-1">
                {t("brand_subtitle")}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 rounded-full border border-border/50 bg-secondary/30 p-1 backdrop-blur-md lg:flex" aria-label="Main navigation">
            {navItems.map(({ id, label, icon: Icon }) => {
              const isActive = activeSection === id;
              const isBookmark = id === "bookmarks";
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleNavClick(id)}
                  className={`flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                  {isBookmark && bookmarkCount > 0 && (
                    <span
                      className={`grid min-w-5 h-5 px-1 place-items-center rounded-full text-[10px] font-bold ${
                        isActive
                          ? "bg-primary-foreground text-primary"
                          : "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                      }`}
                    >
                      {bookmarkCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Top-Right Corner Controls: 3 Language Switchers + Theme Toggle + Mobile Menu */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* 3 Languages Switcher Buttons */}
            <div
              className="flex items-center rounded-2xl border border-border/70 bg-secondary/50 p-0.5 sm:p-1 backdrop-blur-md shadow-xs"
              role="group"
              aria-label="Language selection"
            >
              {(
                [
                  { code: "en" as Language, labelShort: "EN", labelFull: "English" },
                  { code: "hi" as Language, labelShort: "हिन्दी", labelFull: "हिन्दी" },
                  { code: "gu" as Language, labelShort: "ગુજરાતી", labelFull: "ગુજરાતી" },
                ] as const
              ).map(({ code, labelShort, labelFull }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  aria-pressed={language === code}
                  title={`Switch language to ${labelFull}`}
                  className={`rounded-xl px-2 sm:px-3 py-1 text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer ${
                    language === code
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-[1.02]"
                      : "text-muted-foreground hover:bg-card/60 hover:text-foreground"
                  }`}
                >
                  <span className="sm:hidden">{labelShort}</span>
                  <span className="hidden sm:inline">{labelFull}</span>
                </button>
              ))}
            </div>

            {/* Dark / Light Theme Toggle */}
            <Button
              variant="icon"
              aria-label="Toggle color theme"
              onClick={toggleTheme}
              className="size-9 sm:size-10 rounded-full border border-border/50 bg-secondary/40 text-foreground transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              {dark ? <Sun size={17} className="transition-transform rotate-0 duration-300" /> : <Moon size={17} className="transition-transform -rotate-12 duration-300" />}
            </Button>

            {/* Mobile Menu Hamburger */}
            <Button
              variant="icon"
              className="size-9 sm:size-10 rounded-full border border-border/50 bg-secondary/40 text-foreground lg:hidden"
              aria-label="Open menu"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="border-t border-border/60 bg-background/95 px-4 py-3 backdrop-blur-xl transition-all duration-300 lg:hidden" aria-label="Mobile menu">
            <div className="flex flex-col gap-1">
              {navItems.map(({ id, label, icon: Icon }) => {
                const isActive = activeSection === id;
                const isBookmark = id === "bookmarks";
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleNavClick(id)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all cursor-pointer active:scale-[0.99] ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className={isActive ? "text-primary-foreground" : "text-primary"} />
                      <span>{label}</span>
                    </div>
                    {isBookmark && bookmarkCount > 0 && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                          isActive
                            ? "bg-primary-foreground text-primary"
                            : "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                        }`}
                      >
                        {bookmarkCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      <main className="pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:pb-12">{children}</main>

      {/* Floating Scroll to Top button */}
      <button
        type="button"
        onClick={smoothScrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-[calc(env(safe-area-inset-bottom)+5.25rem)] right-4 z-40 grid size-10 place-items-center rounded-full border border-border/70 bg-card/90 text-primary shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground lg:bottom-8 lg:right-8 ${
          showScrollTop ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp size={18} />
      </button>

      {/* Bottom Floating Navigation (Mobile & Tablet) */}
      <nav
        className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-50 mx-auto grid max-w-md grid-cols-4 rounded-2xl border border-border/70 bg-background/90 p-1.5 shadow-lift backdrop-blur-2xl lg:hidden"
        aria-label="Bottom navigation"
      >
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          const isBookmark = id === "bookmarks";
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              className={`relative flex min-w-0 flex-col items-center gap-1 rounded-xl px-1.5 py-2 text-[11px] font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                isActive ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="relative">
                <Icon size={18} className={isActive ? "scale-110 transition-transform" : ""} />
                {isBookmark && bookmarkCount > 0 && (
                  <span className="absolute -top-1 -right-2 flex size-3.5 items-center justify-center rounded-full bg-amber-500 text-[8px] font-bold text-white shadow-xs">
                    {bookmarkCount}
                  </span>
                )}
              </div>
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

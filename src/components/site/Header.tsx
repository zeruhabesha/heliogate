import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowRight, Menu, X } from "lucide-react";

export const Header = () => {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/platform", label: t("nav.platform") },
    { to: "/sectors", label: t("nav.sectors") },
    { to: "/corridors", label: t("nav.corridors") },
    { to: "/why-heliogate", label: "Why" },
    { to: "/insights", label: t("nav.insights") },
    { to: "/engage", label: t("nav.engage") },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-hairline" : "bg-transparent"}`}>
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Logo />

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-mono-tag text-[11px] uppercase tracking-[0.22em] transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <ThemeToggle />
          <LangSwitcher />
          <NavLink
            to="/engage"
            className="group inline-flex items-center gap-2 font-mono-tag text-[11px] uppercase tracking-[0.22em] border border-foreground/40 hover:border-foreground hover:bg-foreground hover:text-primary-foreground transition-all px-4 py-2.5"
          >
            {t("nav.cta")}
            <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
          </NavLink>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex h-10 w-10 items-center justify-center border border-hairline text-foreground transition-colors hover:border-foreground"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[70] bg-background md:hidden animate-fade-in">
          <div className="flex h-full flex-col">
          <div className="container-wide flex h-20 items-center justify-between border-b border-hairline">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center border border-hairline text-foreground transition-colors hover:border-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="container-wide flex min-h-0 flex-1 flex-col overflow-y-auto py-8">
            <nav className="border-t border-hairline">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center justify-between gap-5 border-b border-hairline py-5 transition-colors ${
                      isActive ? "text-foreground" : "text-foreground hover:text-signal"
                    }`
                  }
                >
                  <span className="font-serif-display text-[34px] leading-none tracking-tight">
                    {item.label}
                  </span>
                  <span className="font-mono-tag text-[10px] text-muted-foreground">
                    0{index + 1}
                  </span>
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <div className="border-t border-hairline pt-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <LangSwitcher />
                    <ThemeToggle />
                  </div>
                  <span className="eyebrow text-[10px]">Menu</span>
                </div>
                <NavLink
                  to="/engage"
                  onClick={() => setOpen(false)}
                  className="group flex min-h-12 w-full items-center justify-between border border-foreground px-5 py-4 font-mono-tag text-[11px] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-primary-foreground"
                >
                  <span>{t("nav.cta")}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </NavLink>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
    </header>
  );
};

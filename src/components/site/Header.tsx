import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowRight, Menu, X } from "lucide-react";

export const Header = () => {
  const { t, lang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navCopy = {
    en: { platform: "Platform", services: "Services", sectors: "Sectors", method: "Method", insights: "Insights", network: "Network", engage: "Engage", menu: "Menu" },
    fr: { platform: "Plateforme", services: "Services", sectors: "Secteurs", method: "Methode", insights: "Analyses", network: "Reseau", engage: "Engagement", menu: "Menu" },
    zh: { platform: "平台", services: "服务", sectors: "行业", method: "方法", insights: "洞察", network: "网络", engage: "联系", menu: "菜单" },
    ar: { platform: "المنصة", services: "الخدمات", sectors: "القطاعات", method: "المنهجية", insights: "الرؤى", network: "الشبكة", engage: "التواصل", menu: "القائمة" },
  }[lang];

  const navItems = [
    { to: "/platform", label: navCopy.platform },
    { to: "/services", label: navCopy.services },
    { to: "/sectors", label: navCopy.sectors },
    { to: "/methodology", label: navCopy.method },
    { to: "/insights", label: navCopy.insights },
    { to: "/network", label: navCopy.network },
    { to: "/engage", label: navCopy.engage },
  ];

  return (
    <>
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${scrolled || open ? "bg-background/95 backdrop-blur-md border-b border-hairline" : "bg-transparent"}`}>
      <div className="container-wide flex h-16 items-center justify-between gap-3 md:h-20">
        <Logo />

        <nav className="hidden xl:flex items-center gap-7">
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

        <div className="hidden xl:flex items-center gap-6">
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
          onClick={() => setOpen((value) => !value)}
          className="xl:hidden flex h-10 w-10 items-center justify-center border border-hairline text-foreground transition-colors hover:border-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </header>

    {/* Mobile drawer */}
    {open && (
      <div
        id="mobile-navigation"
        className="fixed inset-x-0 bottom-0 top-16 md:top-20 z-[60] bg-background xl:hidden"
      >
        <div className="container-wide flex h-full min-h-0 flex-col overflow-y-auto py-5">
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
                  <span className="font-serif-display text-[clamp(2rem,10vw,3rem)] leading-none tracking-tight">
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
                    <LangSwitcher mobile />
                    <ThemeToggle />
                  </div>
                  <span className="eyebrow text-[10px]">{navCopy.menu}</span>
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
    )}
    </>
  );
};

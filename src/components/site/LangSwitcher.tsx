import { useState, useRef, useEffect } from "react";
import { LANGS } from "@/i18n/translations";
import { useI18n } from "@/i18n/I18nProvider";
import { Globe, Check } from "lucide-react";

export const LangSwitcher = () => {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGS.find(l => l.code === lang)!;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 font-mono-tag text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Select language"
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{current.native}</span>
      </button>
      {open && (
        <div className="absolute right-0 ltr:right-0 rtl:left-0 rtl:right-auto top-full mt-3 min-w-[180px] bg-card border border-hairline z-50 animate-fade-in">
          {LANGS.map(l => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-accent transition-colors text-left rtl:text-right"
            >
              <span>{l.label}</span>
              {l.code === lang && <Check className="w-3.5 h-3.5 text-muted-foreground" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

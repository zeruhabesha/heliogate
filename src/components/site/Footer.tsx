import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline mt-32">
      {/* Footer CTA strip */}
      <div className="border-b border-hairline">
        <div className="container-wide py-16 md:py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4">— {t("foot.cta.d")}</p>
            <h2 className="font-serif-display text-4xl md:text-5xl tracking-tight leading-[1.05]">{t("foot.cta.t")}</h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            <Link to="/engage" className="btn-primary group">
              <span>{t("nav.cta")}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-6 text-sm text-muted-foreground max-w-xs leading-relaxed">{t("foot.desc")}</p>
            <div className="mt-8 flex items-center gap-3">
              <span className="signal-dot" />
              <p className="eyebrow text-foreground">By qualified engagement only</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">{t("foot.explore")}</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/platform" className="text-muted-foreground hover:text-foreground transition">{t("nav.platform")}</Link></li>
              <li><Link to="/sectors" className="text-muted-foreground hover:text-foreground transition">{t("nav.sectors")}</Link></li>
              <li><Link to="/corridors" className="text-muted-foreground hover:text-foreground transition">{t("nav.corridors")}</Link></li>
              <li><Link to="/insights" className="text-muted-foreground hover:text-foreground transition">{t("nav.insights")}</Link></li>
              <li><Link to="/engage" className="text-muted-foreground hover:text-foreground transition">{t("nav.engage")}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">{t("foot.contact")}</p>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-xs text-muted-foreground mb-0.5">{t("eng.contact.partnership")}</span>
                <a href="mailto:inquiries@heliogate.com" className="hover:text-signal transition">inquiries@heliogate.com</a>
              </li>
              <li>
                <span className="block text-xs text-muted-foreground mb-0.5">{t("eng.contact.ir")}</span>
                <a href="mailto:ir@heliogate.com" className="hover:text-signal transition">ir@heliogate.com</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5">{t("foot.lang")}</p>
            <LangSwitcher />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-hairline flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
          <p>© {year} {t("foot.tag")}. {t("foot.rights")}</p>
          <div className="flex gap-6 font-mono-tag uppercase tracking-[0.18em] text-[10px]">
            <a href="#" className="hover:text-foreground transition">{t("foot.privacy")}</a>
            <a href="#" className="hover:text-foreground transition">{t("foot.terms")}</a>
            <a href="#" className="hover:text-foreground transition">{t("foot.disclosure")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

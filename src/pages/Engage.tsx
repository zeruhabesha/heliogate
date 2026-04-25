import { useState, FormEvent } from "react";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { useI18n } from "@/i18n/I18nProvider";
import { toast } from "sonner";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import room from "@/assets/engage-room.jpg";

const Engage = () => {
  const { t } = useI18n();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(t("eng.form.success"));
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  const fast = [
    { t: t("eng.fast.partner"), d: t("eng.fast.partner.d"), tag: "01" },
    { t: t("eng.fast.brief"), d: t("eng.fast.brief.d"), tag: "02" },
    { t: t("eng.fast.media"), d: t("eng.fast.media.d"), tag: "03" },
  ];

  const faqs = [1, 2, 3, 4].map((i) => ({ q: t(`eng.faq.q${i}`), a: t(`eng.faq.a${i}`) }));

  return (
    <Layout>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-hairline overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 md:bg-fixed"
          style={{ backgroundImage: `url(${room})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        </div>
        <div className="relative container-wide">
          <p className="eyebrow mb-6">— Selective engagement</p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-4xl">
            {t("eng.title")}
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t("eng.intro")}</p>
        </div>
      </section>

      {/* Fast routes */}
      <Section>
        <SectionEyebrow>{t("eng.fast.t")}</SectionEyebrow>
        <div className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline mt-6">
          {fast.map((c, i) => (
            <a
              key={i}
              href="#form"
              className="bg-background p-8 group hover:bg-card transition-colors"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono-tag text-[10px] text-muted-foreground">{c.tag}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="font-serif-display text-2xl mb-3 tracking-tight">{c.t}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section id="form" className="border-t border-hairline">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Contact */}
          <div className="lg:col-span-4">
            <SectionEyebrow>{t("eng.contact.t")}</SectionEyebrow>
            <div className="space-y-10 mt-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-2">
                  {t("eng.contact.partnership")}
                </p>
                <a
                  href="mailto:inquiries@heliogate.com"
                  className="font-serif-display text-2xl hover:text-signal transition"
                >
                  inquiries@heliogate.com
                </a>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-2">{t("eng.contact.ir")}</p>
                <a
                  href="mailto:ir@heliogate.com"
                  className="font-serif-display text-2xl hover:text-signal transition"
                >
                  ir@heliogate.com
                </a>
              </div>
              <div className="pt-8 border-t border-hairline">
                <p className="eyebrow">— Execution-dependent access</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <SectionEyebrow>{t("eng.form.t")}</SectionEyebrow>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-2xl">{t("eng.form.lead")}</p>

            <form onSubmit={onSubmit} className="space-y-px">
              <div className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
                <Field label={t("eng.form.name")} name="name" required />
                <Field label={t("eng.form.org")} name="organization" required />
                <Field label={t("eng.form.email")} name="email" type="email" required />
                <Field label={t("eng.form.role")} name="role" />
              </div>
              <div className="border border-hairline border-t-0">
                <Field label={t("eng.form.interest")} name="interest" />
              </div>
              <div className="border border-hairline border-t-0">
                <FieldArea label={t("eng.form.message")} name="message" required />
              </div>

              <div className="!mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <p className="text-xs text-muted-foreground italic">{t("eng.form.note")}</p>
                <button type="submit" disabled={submitting} className="btn-primary group disabled:opacity-50">
                  <span>{submitting ? "..." : t("eng.form.submit")}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-hairline">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <p className="font-serif-display text-3xl md:text-4xl tracking-tight">{t("eng.faq.t")}</p>
          </div>
          <div className="md:col-span-8">
            <ul className="border-t border-hairline">
              {faqs.map((f, i) => (
                <li key={i} className="py-7 border-b border-hairline group">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono-tag text-[10px] text-muted-foreground w-8">0{i + 1}</span>
                    <div className="flex-1">
                      <p className="font-serif-display text-xl md:text-2xl mb-3 tracking-tight">{f.q}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <label className="bg-background p-5 block group focus-within:bg-card transition-colors relative">
    <span className="block font-mono-tag text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
      {label}
      {required && " *"}
    </span>
    <input
      name={name}
      type={type}
      required={required}
      className="w-full bg-transparent border-0 outline-none text-base placeholder:text-muted-foreground/40"
    />
    <span className="absolute left-0 bottom-0 h-px w-0 bg-signal transition-all duration-300 group-focus-within:w-full" />
  </label>
);

const FieldArea = ({ label, name, required = false }: { label: string; name: string; required?: boolean }) => (
  <label className="bg-background p-5 block group focus-within:bg-card transition-colors relative">
    <span className="block font-mono-tag text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
      {label}
      {required && " *"}
    </span>
    <textarea
      name={name}
      rows={5}
      required={required}
      className="w-full bg-transparent border-0 outline-none text-base placeholder:text-muted-foreground/40 resize-none"
    />
    <span className="absolute left-0 bottom-0 h-px w-0 bg-signal transition-all duration-300 group-focus-within:w-full" />
  </label>
);

export default Engage;

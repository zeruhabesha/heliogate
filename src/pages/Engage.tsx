import { useState, FormEvent } from "react";
import { Layout } from "@/components/site/Layout";
import { Section, SectionEyebrow } from "@/components/site/Section";
import { useI18n } from "@/i18n/I18nProvider";
import { toast } from "sonner";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const room = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";
const corridorMap = "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1600&q=80";
const intelligenceDesk = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80";
const briefingCall = "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1600&q=80";
const strategyRoom = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80";

const Engage = () => {
  const { t, lang } = useI18n();
  const [submitting, setSubmitting] = useState(false);
  const copy = {
    en: {
      eyebrow: "Selective engagement",
      access: "Execution-dependent access",
      faq: "FAQ",
      fastTitle: "Direct routes",
      fast: [
        ["Partner with HelioGate", "For operators, buyers, and capital partners aligned to active corridors."],
        ["Request a corridor brief", "Structured visibility into a defined corridor released on qualification."],
        ["Press & disclosures", "Selective communications. Disclosures available on request."],
      ],
      faqs: [
        ["Do you publish deal information?", "No. Opportunities are not circulated. Briefs are released only to qualified counterparties on alignment."],
        ["How long does qualification take?", "Initial review: 5 business days. Full counterparty alignment: corridor-dependent."],
        ["Do you work with introducers or brokers?", "We do not run a brokerage model. Direct counterparty engagement only."],
        ["Where are you based?", "HelioGate operates across multiple jurisdictions. Engagement is corridor-defined, not geography-defined."],
      ],
    },
    fr: {
      eyebrow: "Engagement selectif",
      access: "Acces dependant de l'execution",
      faq: "FAQ",
      fastTitle: "Routes directes",
      fast: [["Devenir partenaire", "Pour operateurs, acheteurs et capitaux alignes aux corridors actifs."], ["Demander une note corridor", "Visibilite structuree sur un corridor defini, diffusee apres qualification."], ["Presse et divulgations", "Communications selectives. Divulgations disponibles sur demande."]],
      faqs: [["Publiez-vous les informations de transaction ?", "Non. Les opportunites ne sont pas diffusees. Les notes sont reservees aux contreparties qualifiees."], ["Combien de temps prend la qualification ?", "Revue initiale : 5 jours ouvrables. Alignement complet : selon le corridor."], ["Travaillez-vous avec des introducteurs ?", "Nous n'operons pas un modele de courtage. Engagement direct uniquement."], ["Ou etes-vous bases ?", "HelioGate opere dans plusieurs juridictions. L'engagement est defini par corridor."]],
    },
    zh: {
      eyebrow: "选择性合作",
      access: "取决于执行的访问",
      faq: "常见问题",
      fastTitle: "直接路径",
      fast: [["与HelioGate合作", "面向与活跃通道对齐的运营方、买方和资本伙伴。"], ["申请通道简报", "在资格确认后提供特定通道的结构化可见性。"], ["媒体与披露", "选择性沟通。披露内容可按请求提供。"]],
      faqs: [["你们会发布交易信息吗？", "不会。机会不会公开流转。简报仅向对齐的合格交易方发布。"], ["资格审核需要多久？", "初步审核为5个工作日。完整交易方对齐取决于通道。"], ["你们与介绍人或经纪人合作吗？", "我们不采用经纪模式。仅进行直接交易方合作。"], ["你们在哪里运营？", "HelioGate跨多个司法辖区运营。合作按通道定义，而不是按地理位置定义。"]],
    },
    ar: {
      eyebrow: "تواصل انتقائي",
      access: "وصول مرتبط بالتنفيذ",
      faq: "الأسئلة الشائعة",
      fastTitle: "مسارات مباشرة",
      fast: [["الشراكة مع HelioGate", "للمشغلين والمشترين وشركاء رأس المال المتوافقين مع الممرات النشطة."], ["طلب موجز ممر", "رؤية منظمة لممر محدد تصدر بعد التأهيل."], ["الصحافة والإفصاحات", "تواصل انتقائي. الإفصاحات متاحة عند الطلب."]],
      faqs: [["هل تنشرون معلومات الصفقات؟", "لا. لا يتم تداول الفرص. تصدر الموجزات فقط للأطراف المؤهلة والمتوافقة."], ["كم يستغرق التأهيل؟", "المراجعة الأولية: 5 أيام عمل. المواءمة الكاملة تعتمد على الممر."], ["هل تعملون مع الوسطاء؟", "لا نتبع نموذج وساطة. التواصل مباشر مع الأطراف فقط."], ["أين يقع عملكم؟", "تعمل HelioGate عبر عدة ولايات. التواصل معرف بالممر وليس بالجغرافيا."]],
    },
  }[lang];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(t("eng.form.success"));
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  const fast = copy.fast.map(([title, description], index) => ({
    t: title,
    d: description,
    tag: `0${index + 1}`,
  }));

  const faqs = copy.faqs.map(([q, a]) => ({ q, a }));

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
          <p className="eyebrow mb-6">- {copy.eyebrow}</p>
          <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight max-w-4xl">
            {t("eng.title")}
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t("eng.intro")}</p>
        </div>
      </section>

      {/* Fast routes */}
      <Section>
        <div className="mb-10 grid gap-4 sm:grid-cols-4">
          <div className="img-frame aspect-[16/10] border border-hairline">
            <img src={corridorMap} alt="" loading="lazy" className="h-full w-full object-cover saturate-125 contrast-105" />
          </div>
          <div className="img-frame aspect-[16/10] border border-hairline">
            <img src={intelligenceDesk} alt="" loading="lazy" className="h-full w-full object-cover saturate-125 contrast-105" />
          </div>
          <div className="img-frame aspect-[16/10] border border-hairline">
            <img src={briefingCall} alt="" loading="lazy" className="h-full w-full object-cover saturate-125 contrast-105" />
          </div>
          <div className="img-frame aspect-[16/10] border border-hairline">
            <img src={strategyRoom} alt="" loading="lazy" className="h-full w-full object-cover saturate-125 contrast-105" />
          </div>
        </div>
        <SectionEyebrow>{copy.fastTitle}</SectionEyebrow>
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
                  href="mailto:info@heliogategroup.com"
                  className="font-serif-display text-2xl hover:text-signal transition"
                >
                  info@heliogategroup.com
                </a>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-2">{t("eng.contact.ir")}</p>
                <a
                  href="mailto:support@heliogategroup.com"
                  className="font-serif-display text-2xl hover:text-signal transition"
                >
                  support@heliogategroup.com
                </a>
              </div>
              <div className="pt-8 border-t border-hairline">
                <p className="eyebrow">- {copy.access}</p>
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
            <SectionEyebrow>{copy.faq}</SectionEyebrow>
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

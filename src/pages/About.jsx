import { Link } from 'react-router-dom';
import { stats, languages, whyUsPoints, steps, ui } from '../data/content';
import { useLang, t } from '../context/LanguageContext';
import SectionReveal from '../components/SectionReveal';
import StatCounter from '../components/StatCounter';

export default function AboutPage() {
  const { lang } = useLang();
  const u = ui[lang];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.06),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{u.aboutTag}</div>
                <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                  {u.aboutTitle}
                </h1>
                <p className="mt-6 text-lg leading-8 text-neutral-600">{u.aboutDesc1}</p>
                <p className="mt-4 text-lg leading-8 text-neutral-600">{u.aboutDesc2}</p>
              </div>
              <div className="rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-neutral-100 to-neutral-50 p-10">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat) => (
                    <StatCounter key={t(stat.label, lang)} {...stat} />
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{u.aboutValuesTag}</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">{u.aboutValuesTitle}</h2>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUsPoints.map((item, i) => (
              <SectionReveal key={t(item.title, lang)} delay={i * 80}>
                <div className="group rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-lg font-bold text-amber-700 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{t(item.title, lang)}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{t(item.text, lang)}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="rounded-[2rem] bg-neutral-900 p-10 text-white lg:p-14">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">{u.aboutLangTag}</div>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight">{u.aboutLangTitle}</h2>
                  <p className="mt-4 text-neutral-400 leading-7">{u.aboutLangDesc}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {languages.map((l) => (
                    <div
                      key={l}
                      className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-center text-lg font-semibold backdrop-blur transition-all hover:bg-white/20"
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{u.aboutProcessTag}</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">{u.aboutProcessTitle}</h2>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {steps.map((step, i) => (
              <SectionReveal key={step.number} delay={i * 100}>
                <div className="group relative rounded-[1.75rem] border border-neutral-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-amber-200 hover:shadow-md">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-lg font-bold text-amber-700 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                    {step.number}
                  </div>
                  <div className="mt-4 font-semibold">{t(step.title, lang)}</div>
                  <p className="mt-2 text-sm text-neutral-500">{t(step.text, lang)}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold tracking-tight">{u.aboutCtaTitle}</h2>
            <p className="mt-4 text-neutral-600">{u.aboutCtaDesc}</p>
            <Link
              to="/kontakt"
              className="mt-8 inline-flex rounded-2xl bg-neutral-900 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              {u.aboutCtaBtn}
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

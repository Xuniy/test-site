import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services, projects, steps, stats, highlights, whyUsPoints, partners, ui } from '../data/content';
import { useLang, t } from '../context/LanguageContext';
import SectionReveal from '../components/SectionReveal';
import StatCounter from '../components/StatCounter';

export default function Home() {
  const { lang } = useLang();
  const u = ui[lang];

  const slides = [
    { image: 'linear-gradient(135deg, #374151 0%, #1f2937 50%, #111827 100%)', label: 'Résidence Schelde — Oudenaarde' },
    { image: 'linear-gradient(135deg, #1f2937 0%, #4b5563 100%)', label: 'Kantoorgebouw Centrum — Destelbergen' },
    { image: 'linear-gradient(135deg, #292524 0%, #78716c 100%)', label: 'Logistiek Park — Gent' },
    { image: 'linear-gradient(135deg, #1c1917 0%, #57534e 100%)', label: 'Schoolgebouw Sint-Jan — Leuven' },
    { image: 'linear-gradient(135deg, #18181b 0%, #52525b 100%)', label: 'Appartementenblok Zuid — Aalst' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(241,89,34,0.06),transparent_60%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:py-32">

          {/* LEFT — Text content (slides in from the left) */}
          <div className="animate-slide-in-left relative z-10 flex flex-col justify-center">
            <div className="animate-slide-in-left mb-6 inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent" style={{ animationDelay: '150ms' }}>
              {u.heroBadge}
            </div>
            <h1 className="animate-slide-in-left text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: '250ms' }}>
              {u.heroTitle1}
              <span className="text-accent">
                {u.heroTitleHighlight}
              </span>
              {u.heroTitle2}
            </h1>
            <p className="animate-slide-in-left mt-6 max-w-xl text-lg leading-8 text-neutral-600" style={{ animationDelay: '400ms' }}>
              {u.heroDesc}
            </p>
            <div className="animate-slide-in-left mt-10 flex flex-wrap gap-4" style={{ animationDelay: '550ms' }}>
              <Link
                to="/kontakt"
                className="rounded-2xl bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                {u.heroCta1}
              </Link>
              <Link
                to="/realizacje"
                className="rounded-2xl border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-all hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-md"
              >
                {u.heroCta2}
              </Link>
            </div>
            <div className="animate-slide-in-left mt-12 grid gap-3 sm:grid-cols-2" style={{ animationDelay: '700ms' }}>
              {(highlights[lang] || highlights.fr).map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50/80 px-4 py-3 text-sm text-neutral-700">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image slider (slides in from the right) */}
          <div className="animate-slide-in-right relative hidden lg:flex lg:items-center" style={{ animationDelay: '300ms' }}>
            <div className="relative w-full">
              {/* Orange offset frame */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-accent" />

              {/* Slider container */}
              <div className="relative h-[28rem] w-full overflow-hidden rounded-[2rem] shadow-2xl">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-700"
                    style={{
                      background: slide.image,
                      opacity: i === currentSlide ? 1 : 0,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                ))}

                {/* Label */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                  <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-neutral-800 backdrop-blur">
                    {slides[currentSlide].label}
                  </span>
                </div>

                {/* Dots */}
                <div className="absolute bottom-6 right-6 z-10 flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === currentSlide ? 'w-8 bg-accent' : 'w-2.5 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter key={t(stat.label, lang)} {...stat} />
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{u.servicesTag}</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{u.servicesTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-neutral-600">{u.servicesDesc}</p>
            </div>
          </SectionReveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => (
              <SectionReveal key={service.slug} delay={i * 80}>
                <Link
                  to={`/uslugi/${service.slug}`}
                  className="group block rounded-[1.75rem] border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50"
                >
                  <div className="text-3xl">{service.icon}</div>
                  <div className="mt-4 text-xl font-bold tracking-tight group-hover:text-amber-600">{t(service.title, lang)}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-400">{t(service.subtitle, lang)}</div>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{t(service.text, lang)}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-amber-600">
                    {u.servicesMore}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionReveal>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{u.whyUsTag}</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{u.whyUsTitle}</h2>
              <div className="mt-8 space-y-4">
                {whyUsPoints.map((item, i) => (
                  <div key={t(item.title, lang)} className="group flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition-all hover:border-amber-200 hover:bg-amber-50/30">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-sm font-bold text-amber-700">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">{t(item.title, lang)}</div>
                      <div className="mt-1 text-sm text-neutral-600">{t(item.text, lang)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl lg:p-10">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">{u.impactTag}</div>
                <h3 className="mt-3 text-2xl font-bold">{u.impactTitle}</h3>
                <div className="mt-8 space-y-5">
                  {u.impactItems.map((item) => (
                    <div key={item.main} className="rounded-2xl bg-white/10 p-5 backdrop-blur transition-all hover:bg-white/15">
                      <div className="text-sm text-neutral-400">{item.sub}</div>
                      <div className="mt-1 text-lg font-semibold">{item.main}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{u.projectsTag}</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{u.projectsTitle}</h2>
              </div>
              <Link
                to="/realizacje"
                className="w-fit rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {u.projectsAll}
              </Link>
            </div>
          </SectionReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <SectionReveal key={project.id} delay={i * 100}>
                <div className="group overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className="h-56 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: project.image }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold tracking-tight">{project.name}</div>
                      <div className="text-sm text-neutral-400">{project.year}</div>
                    </div>
                    <div className="mt-2 text-sm text-neutral-500">{project.place}</div>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">{t(project.description, lang)}</p>
                    <div className="mt-4 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-200">
                      {project.type}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{u.processTag}</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{u.processTitle}</h2>
            </div>
          </SectionReveal>
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent md:block" />
            <div className="grid gap-6 md:grid-cols-5">
              {steps.map((step, i) => (
                <SectionReveal key={step.number} delay={i * 120}>
                  <div className="group relative rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-amber-200 hover:bg-white hover:shadow-md">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-lg font-bold text-amber-700 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                      {step.number}
                    </div>
                    <div className="mt-4 font-semibold text-neutral-900">{t(step.title, lang)}</div>
                    <p className="mt-2 text-sm leading-6 text-neutral-500">{t(step.text, lang)}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              {u.partnersTag}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 md:grid-cols-6">
              {partners.map((p) => (
                <div key={p} className="flex h-20 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-sm font-medium text-neutral-400 transition-all hover:border-amber-200 hover:text-amber-600">
                  {p}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{u.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">{u.ctaDesc}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/kontakt"
                className="rounded-2xl bg-amber-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl"
              >
                {u.ctaCta1}
              </Link>
              <Link
                to="/uslugi"
                className="rounded-2xl border border-neutral-700 px-8 py-4 text-sm font-semibold text-neutral-300 transition-all hover:-translate-y-0.5 hover:border-neutral-500 hover:text-white"
              >
                {u.ctaCta2}
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

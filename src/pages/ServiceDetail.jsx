import { useParams, Link, Navigate } from 'react-router-dom';
import { services, ui } from '../data/content';
import { useLang, t } from '../context/LanguageContext';
import SectionReveal from '../components/SectionReveal';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { lang } = useLang();
  const u = ui[lang];
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/uslugi" replace />;

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <Link
              to="/uslugi"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-amber-600"
            >
              &larr; {u.serviceDetailBack}
            </Link>
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="text-5xl">{service.icon}</div>
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                  {t(service.title, lang)}
                </h1>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-amber-600">
                  {t(service.subtitle, lang)}
                </div>
                <p className="mt-8 text-lg leading-8 text-neutral-600">
                  {t(service.fullText, lang)}
                </p>
                <Link
                  to="/kontakt"
                  className="mt-10 inline-flex rounded-2xl bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {u.serviceDetailCta} {t(service.title, lang).toLowerCase()}
                </Link>
              </div>

              <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-500">
                  {u.serviceDetailWhat}
                </div>
                <div className="mt-6 space-y-3">
                  {(service.features[lang] || service.features.fr).map((feature, i) => (
                    <div
                      key={feature}
                      className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-xs font-bold text-amber-700">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span className="text-sm font-medium text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <h2 className="text-2xl font-bold tracking-tight">{u.serviceDetailOthers}</h2>
          </SectionReveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {otherServices.map((s, i) => (
              <SectionReveal key={s.slug} delay={i * 60}>
                <Link
                  to={`/uslugi/${s.slug}`}
                  className="group block rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md"
                >
                  <div className="text-2xl">{s.icon}</div>
                  <div className="mt-3 text-sm font-semibold transition-colors group-hover:text-amber-600">{t(s.title, lang)}</div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

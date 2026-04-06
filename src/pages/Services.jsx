import { Link } from 'react-router-dom';
import { services, ui } from '../data/content';
import { useLang, t } from '../context/LanguageContext';
import SectionReveal from '../components/SectionReveal';

export default function ServicesPage() {
  const { lang } = useLang();
  const u = ui[lang];

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{u.servicesTag}</div>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {u.servicesPageTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              {u.servicesPageDesc}
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, i) => (
              <SectionReveal key={service.slug} delay={i * 80}>
                <Link
                  to={`/uslugi/${service.slug}`}
                  className="group flex h-full flex-col rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{service.icon}</div>
                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500 transition-colors group-hover:bg-amber-50 group-hover:text-amber-700">
                      {t(service.subtitle, lang)}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-bold tracking-tight transition-colors group-hover:text-amber-600">
                    {t(service.title, lang)}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600">{t(service.text, lang)}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {(service.features[lang] || service.features.fr).map((f) => (
                      <span key={f} className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-600">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-amber-600">
                    {u.servicesDetail}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{u.servicesCta}</h2>
          <p className="mt-4 text-neutral-400">{u.servicesCtaDesc}</p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex rounded-2xl bg-amber-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-amber-400"
          >
            {u.servicesCtaBtn}
          </Link>
        </div>
      </section>
    </>
  );
}

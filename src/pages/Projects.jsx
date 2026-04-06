import { useState } from 'react';
import { projects, ui } from '../data/content';
import { useLang, t } from '../context/LanguageContext';
import SectionReveal from '../components/SectionReveal';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const { lang } = useLang();
  const u = ui[lang];

  const types = ['all', ...new Set(projects.map((p) => p.type))];
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{u.projectsTag}</div>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {u.projectsPageTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              {u.projectsPageDesc}
            </p>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    filter === type
                      ? 'bg-neutral-900 text-white shadow-md'
                      : 'border border-neutral-200 bg-white text-neutral-600 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700'
                  }`}
                >
                  {type === 'all' ? u.projectsFilterAll : type}
                </button>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <SectionReveal key={project.id} delay={i * 80}>
                <div className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <div
                      className="h-60 transition-transform duration-700 group-hover:scale-110"
                      style={{ background: project.image }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-700 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="text-xl font-bold tracking-tight">{project.name}</div>
                    <div className="mt-1 flex items-center gap-2 text-sm text-neutral-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {project.place}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-neutral-600">{t(project.description, lang)}</p>
                    <div className="mt-5 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-200">
                      {project.type}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-neutral-500">
              {u.projectsEmpty}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

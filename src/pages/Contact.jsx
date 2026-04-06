import { useState } from 'react';
import { services, ui } from '../data/content';
import { useLang, t } from '../context/LanguageContext';
import SectionReveal from '../components/SectionReveal';

export default function ContactPage() {
  const { lang } = useLang();
  const u = ui[lang];

  const [form, setForm] = useState({
    company: '',
    fullName: '',
    email: '',
    phone: '',
    location: '',
    startDate: '',
    workType: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-white">
        <div className="mx-auto max-w-lg px-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
            ✓
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight">{u.contactSuccessTitle}</h1>
          <p className="mt-4 text-lg text-neutral-600">{u.contactSuccessDesc}</p>
          <button
            onClick={() => { setSubmitted(false); setForm({ company: '', fullName: '', email: '', phone: '', location: '', startDate: '', workType: '', description: '' }); }}
            className="mt-8 rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            {u.contactSuccessBtn}
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{u.contactTag}</div>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{u.contactTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{u.contactDesc}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionReveal>
              <div className="sticky top-28 space-y-6">
                <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm">
                  <div className="text-lg font-bold">{u.contactDocsTitle}</div>
                  <p className="mt-2 text-sm text-neutral-500">{u.contactDocsDesc}</p>
                  <ul className="mt-5 space-y-3">
                    {u.contactDocs.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                        <div className="h-2 w-2 rounded-full bg-amber-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] bg-neutral-900 p-8 text-white">
                  <div className="text-lg font-bold">{u.contactDirectTitle}</div>
                  <div className="mt-5 space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <span className="text-neutral-300">info@thbouw.be</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <span className="text-neutral-300">+32 (0)9 000 00 00</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <span className="text-neutral-300">{lang === 'fr' ? 'Belgique' : 'België'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={150}>
              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-xl lg:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700">{u.contactCompany}</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                      placeholder={u.contactPlaceholderCompany}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700">{u.contactName}</label>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                      placeholder={u.contactPlaceholderName}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700">{u.contactEmail}</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                      placeholder={u.contactPlaceholderEmail}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700">{u.contactPhone}</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                      placeholder={u.contactPlaceholderPhone}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700">{u.contactLocation}</label>
                    <input
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                      placeholder={u.contactPlaceholderLocation}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700">{u.contactStartDate}</label>
                    <input
                      name="startDate"
                      type="date"
                      value={form.startDate}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-neutral-700">{u.contactWorkType}</label>
                    <select
                      name="workType"
                      value={form.workType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                    >
                      <option value="">{u.contactWorkTypeDefault}</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>{t(s.title, lang)} — {t(s.subtitle, lang)}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-neutral-700">{u.contactDescription}</label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                      placeholder={u.contactPlaceholderDesc}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-neutral-700">{u.contactFiles}</label>
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={(e) => { e.preventDefault(); setDragOver(false); }}
                      className={`flex h-32 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed transition-all ${
                        dragOver
                          ? 'border-amber-400 bg-amber-50 text-amber-700'
                          : 'border-neutral-300 bg-neutral-50 text-neutral-500 hover:border-amber-300 hover:bg-amber-50/50'
                      }`}
                    >
                      <div className="text-center text-sm">
                        <div className="font-medium">{u.contactDragDrop}</div>
                        <div className="mt-1 text-xs text-neutral-400">{u.contactFileTypes}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full rounded-2xl bg-neutral-900 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-neutral-900/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-neutral-900/30 active:translate-y-0"
                >
                  {u.contactSubmit}
                </button>
                <p className="mt-4 text-center text-xs text-neutral-400">{u.contactNote}</p>
              </form>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}

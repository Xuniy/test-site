import { Link } from 'react-router-dom';
import { navLinks, languages, ui } from '../data/content';
import { useLang, t } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLang();
  const u = ui[lang];

  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="text-2xl font-bold text-white">TH BOUW</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Construction B2B — {lang === 'fr' ? 'Belgique' : 'België'}
            </div>
            <p className="mt-4 text-sm leading-7 text-neutral-400">{u.footerDesc}</p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-500">{u.footerNav}</div>
            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  {t(link.label, lang)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-500">{u.footerContact}</div>
            <div className="mt-4 space-y-3 text-sm text-neutral-400">
              <div>info@thbouw.be</div>
              <div>+32 (0)9 000 00 00</div>
              <div>{lang === 'fr' ? 'Belgique' : 'België'}</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {languages.map((l) => (
                <span key={l} className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-500">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 text-xs text-neutral-600 md:flex-row">
          <div>&copy; {new Date().getFullYear()} TH BOUW. {u.footerRights}</div>
          <div>{u.footerSub}</div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/content';
import { useLang, t } from '../context/LanguageContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, toggle } = useLang();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className="sticky top-0 z-50 bg-primary transition-all duration-300"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group">
          <img
            src={`${process.env.PUBLIC_URL}/logo_construkton.png`}
            alt="TH BOUW"
            className="h-16 w-auto object-contain transition-opacity group-hover:opacity-80"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.filter((l) => l.to !== '/kontakt').map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                location.pathname === link.to
                  ? 'bg-accent text-white'
                  : 'text-neutral-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {t(link.label, lang)}
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="ml-3 flex items-center gap-1 rounded-xl border border-neutral-500 px-3 py-2 text-sm font-semibold transition-all hover:border-accent hover:bg-white/10"
          >
            <span className={lang === 'nl' ? 'text-accent' : 'text-neutral-400'}>NL</span>
            <span className="text-neutral-300">/</span>
            <span className={lang === 'fr' ? 'text-accent' : 'text-neutral-400'}>FR</span>
          </button>

          {/* Devis Gratuit CTA */}
          <Link
            to="/kontakt"
            className="ml-3 rounded-2xl bg-accent px-6 py-3 text-base font-bold text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            {t(navLinks.find((l) => l.to === '/kontakt').label, lang)}
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1 rounded-xl border border-neutral-500 px-3 py-2 text-sm font-semibold transition-all hover:border-accent hover:bg-white/10"
          >
            <span className={lang === 'nl' ? 'text-accent' : 'text-neutral-400'}>NL</span>
            <span className="text-neutral-300">/</span>
            <span className={lang === 'fr' ? 'text-accent' : 'text-neutral-400'}>FR</span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl transition-colors hover:bg-white/10"
            aria-label="Menu"
          >
            <span
              className={`h-0.5 w-5 rounded bg-white transition-all duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-white transition-all duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-2xl px-8 py-4 text-2xl font-semibold transition-all duration-500 ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${
                location.pathname === link.to
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
            >
              {t(link.label, lang)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

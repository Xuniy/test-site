import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';
import { useLang, t } from '../context/LanguageContext';

export default function StatCounter({ value, suffix, label }) {
  const [ref, isVisible] = useScrollReveal(0.3);
  const count = useCountUp(value, 2000, isVisible);
  const { lang } = useLang();

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
        {count}{suffix}
      </div>
      <div className="mt-2 text-sm text-neutral-500">{t(label, lang)}</div>
    </div>
  );
}

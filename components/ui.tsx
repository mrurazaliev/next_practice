// Маленькие компоненты, которые повторяются на всех страницах.
// Один раз написали — используем везде через пропсы.

import Link from 'next/link';

/* Надпись над заголовком: "— CHAPTER II · THE ARTISANS" */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
      <span className="h-px w-8 bg-gold" />
      {children}
    </p>
  );
}

/* Заголовок раздела: надпись + большой заголовок + описание справа */
type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
      <div className="flex flex-col gap-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-serif text-4xl leading-tight md:text-6xl">{title}</h2>
      </div>
      {description && <p className="max-w-md text-sm leading-relaxed text-muted">{description}</p>}
    </div>
  );
}

/* Карточка с цифрой: "3,200 — Vintage cellar" */
type StatCardProps = { value: string; label: string; note?: string };

export function StatCard({ value, label, note }: StatCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-line bg-panel p-6">
      <span className="font-serif text-4xl text-gold">{value}</span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">{label}</span>
      {note && <span className="text-sm text-muted">{note}</span>}
    </div>
  );
}

/* Кнопки-ссылки: золотая (главная) и контурная (второстепенная) */
type ButtonLinkProps = { href: string; children: React.ReactNode; variant?: 'primary' | 'outline' };

export function ButtonLink({ href, children, variant = 'primary' }: ButtonLinkProps) {
  const styles =
    variant === 'primary'
      ? 'bg-gold text-ink hover:bg-cream'
      : 'border border-line text-cream hover:border-gold';

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-4 text-xs font-semibold uppercase tracking-widest transition ${styles}`}
    >
      {children}
    </Link>
  );
}

/* Баннер с призывом в конце страницы */
type CtaBannerProps = {
  eyebrow: string;
  title: string;
  text: string;
  light?: boolean;
};

export function CtaBanner({ eyebrow, title, text, light = false }: CtaBannerProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div
        className={`flex flex-wrap items-center justify-between gap-8 rounded-lg p-10 md:p-14 ${
          light ? 'bg-cream text-ink' : 'border border-line bg-panel'
        }`}
      >
        <div className="flex max-w-xl flex-col gap-4">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.25em] ${light ? 'text-ink/60' : 'text-gold'}`}>
            {eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">{title}</h2>
          <p className={`text-sm leading-relaxed ${light ? 'text-ink/70' : 'text-muted'}`}>{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/reservation"
            className={`rounded-full px-7 py-4 text-xs font-semibold uppercase tracking-widest ${
              light ? 'bg-ink text-cream' : 'bg-gold text-ink'
            }`}
          >
            Reserve online
          </Link>
          <Link
            href="/menu"
            className={`rounded-full border px-7 py-4 text-xs font-semibold uppercase tracking-widest ${
              light ? 'border-ink/30' : 'border-line'
            }`}
          >
            View the menu
          </Link>
        </div>
      </div>
    </section>
  );
}

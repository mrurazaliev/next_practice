'use client'; // нужны хуки: usePathname (активная ссылка) и useState (мобильное меню)

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/reservation', label: 'Reservation' },
  { href: '/about', label: 'About & Gallery' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="font-serif text-2xl tracking-[0.2em]">
          AURELIA
        </Link>

        <nav aria-label="Main" className="hidden gap-8 text-xs uppercase tracking-[0.15em] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'text-gold' : 'text-muted transition hover:text-cream'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/reservation"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-ink sm:block"
          >
            Book a table
          </Link>

          {/* Бургер только на телефоне */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
          >
            <span className="text-lg">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="flex flex-col border-t border-line px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-3 font-serif text-2xl ${pathname === link.href ? 'text-gold' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

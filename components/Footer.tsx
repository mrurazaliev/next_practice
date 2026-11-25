import Link from 'next/link';

// Серверный компонент: здесь нет кликов и хуков, поэтому 'use client' не нужен
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl tracking-[0.2em]">AURELIA</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            A multi-course tasting sanctuary celebrating rare terroir, artisanal precision and quiet
            luxury in the heart of Mayfair.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-gold">Service hours</p>
          <p className="text-sm leading-relaxed text-muted">
            Degustation dinner
            <br />
            Tue – Sun · 17:30 – 23:00
            <br />
            Closed Mondays
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-gold">Location</p>
          <p className="text-sm leading-relaxed text-muted">
            42 Curzon Street
            <br />
            Mayfair, London
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-gold">The tasting ledger</p>
          <p className="mb-4 text-sm text-muted">Invitations to cellar dinners and seasonal previews.</p>
          <form className="flex border border-line">
            <label htmlFor="footer-email" className="sr-only">Email</label>
            <input
              id="footer-email"
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted"
            />
            <button type="submit" className="px-4 text-gold" aria-label="Subscribe">→</button>
          </form>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-line px-6 py-6 text-xs text-muted">
        <div className="flex gap-6">
          <Link href="/menu">Menu</Link>
          <Link href="/reservation">Reservation</Link>
          <Link href="/about">About</Link>
        </div>
        <p>© {new Date().getFullYear()} Aurelia. Study project.</p>
      </div>
    </footer>
  );
}

import Image from 'next/image';
import type { Metadata } from 'next';
import ReservationForm from './ReservationForm';
import { Eyebrow, SectionHeading } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Reservation',
  description: 'Book the Main Dining Room, the Chef’s Counter or the Garden Conservatory.',
};

export default function ReservationPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-20">
        <Eyebrow>Curzon Street · Degustation salon</Eyebrow>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">Reservations &amp; Tasting Rites</h1>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
            <span className="text-gold">●</span> Cellar reserve open
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-8 px-6 pb-24 lg:grid-cols-[2fr_3fr]">
        <aside className="flex flex-col gap-6 lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-lg border border-line bg-panel">
            <div className="relative aspect-4/3">
              <Image src="/images/guests-toast.jpg" alt="Guests raising glasses in the dining room" fill className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-panel via-transparent to-transparent" />
            </div>
            <div className="flex flex-col gap-4 p-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">The dining room</p>
              <h2 className="font-serif text-3xl">An Intimate Table in Mayfair</h2>
              <p className="text-sm leading-relaxed text-muted">
                Every table is reserved exclusively for the entire evening. We craft a single, unhurried
                progression through ten courses.
              </p>
              <dl className="grid grid-cols-2 gap-4 border-t border-line pt-4 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">Dress code</dt>
                  <dd>Smart casual &amp; black tie</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">Seatings</dt>
                  <dd>17:30 · 19:00 · 20:30</dd>
                </div>
              </dl>
              <p className="text-xs text-muted">✓ Complimentary cancellation up to 48 hours before service</p>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-panel p-6">
            <h3 className="font-serif text-2xl">Grand Cru Pairings</h3>
            <p className="mt-2 text-sm text-muted">
              Cellar allocations can be arranged at confirmation or curated live with our Head Sommelier.
            </p>
          </div>
        </aside>

        <ReservationForm />
      </section>


      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Bespoke salons & buyouts"
          title="The Aurelia Vault & Salons"
          description="Secluded chambers for intimate celebrations, diplomatic dinners and private retreats from 10 to 46 guests."
        />

        <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
          <div className="relative min-h-96 overflow-hidden rounded-lg">
            <Image src="/images/wine-vault.jpg" alt="Private wine vault" fill className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <span className="rounded-full border border-line bg-ink/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                Capacity · up to 22 guests
              </span>
              <h3 className="mt-4 font-serif text-4xl">The Sommelier’s Secret Vault</h3>
              <p className="mt-2 max-w-md text-sm text-muted">
                Encased in acoustic fluted mahogany with a private rear entrance and a dedicated culinary team.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-lg bg-cream p-8 text-ink">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/60">VIP protocol</p>
            <h3 className="font-serif text-3xl">Uncompromising Discretion &amp; Service</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li><strong>Chauffeur staging &amp; valet</strong><br /><span className="text-ink/70">Private North Gate access.</span></li>
              <li><strong>Personal sommelier flight</strong><br /><span className="text-ink/70">Bespoke vintage uncorking.</span></li>
              <li><strong>Private event menu</strong><br /><span className="text-ink/70">Designed with the Chef Patron.</span></li>
            </ul>
            <a href="mailto:events@example.com" className="mt-auto rounded-full bg-ink px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-cream">
              Inquire for private events
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

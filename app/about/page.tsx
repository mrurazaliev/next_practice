import Image from 'next/image';
import type { Metadata } from 'next';
import GalleryGrid from './GalleryGrid';
import { artisans, principles } from '@/lib/data';
import { CtaBanner, Eyebrow, SectionHeading, StatCard } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About & Gallery',
  description: 'The people, farms and rooms behind Aurelia.',
};

export default function AboutPage() {
  return (
    <>
      {/* ───── Глава I: история ───── */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20">
        <Eyebrow>Chapter I · Provenance &amp; vision</Eyebrow>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Born from <em className="text-gold">Embers</em>, Earth &amp; Craft
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Founded in Mayfair by Chef Patron Julian Vance and restaurateur Clara Mercier, Aurelia
            centres on primal woodfire gastronomy paired with hyper-local regenerative agriculture.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <figure className="relative min-h-[520px] overflow-hidden rounded-lg">
            <Image src="/images/about-candle.jpg" alt="Candlelit table with wine" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
            <figcaption className="absolute bottom-0 max-w-lg p-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold">Our founding philosophy</span>
              <p className="mt-3 font-serif text-2xl italic leading-snug">
                “Fire is not merely heat; it is an untamed ingredient with memory, season and wild breath.”
              </p>
            </figcaption>
          </figure>

          <div className="grid gap-4">
            <StatCard value="3" label="Michelin stars" note="Placeholder: use only real awards" />
            <StatCard value="100%" label="Regenerative sourcing" note="Zero commercial distributors." />
            <StatCard value="3,200" label="Vintage cellar" note="Biodynamic and grand cru labels." />
            <StatCard value="24" label="Artisan partners" note="Farmers, fishers and ceramicists." />
          </div>
        </div>
      </section>

      {/* ───── Глава II: люди ───── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Chapter II · Culinary artisans"
          title="The Artisans of Aurelia"
          description="An unhurried collective uniting decades of European culinary heritage with quiet discipline and reverence for wild flora."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {artisans.map((person) => (
            <article key={person.name} className="flex flex-col overflow-hidden rounded-lg border border-line bg-panel">
              <div className="relative aspect-4/5">
                <Image src={person.image} alt={person.name} fill className="object-cover grayscale-[30%]" />
                <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
                  {person.role}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-serif text-3xl">{person.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{person.bio}</p>
                <p className="mt-auto border-t border-line pt-4 font-serif italic">“{person.quote}”</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ───── Глава III: партнёры ───── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Chapter III · Stewardship"
          title="Rooted in Regenerative Harmony"
          description="We honour direct lineage between soil, sea, hand and table."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <article key={p.title} className="flex flex-col gap-4 rounded-lg border border-line bg-panel p-8">
              <span className="font-serif text-4xl text-gold">0{i + 1}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted">{p.label}</span>
              <h3 className="font-serif text-2xl">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ───── Глава IV: галерея (клиентский островок с фильтром) ───── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Chapter IV · Visual directory" title="Moments in Mayfair" />
        <GalleryGrid />
      </section>

      {/* Светлый баннер — пауза после тёмных разделов */}
      <CtaBanner
        light
        eyebrow="Private reserve allocation"
        title="Experience the Multi-Course Degustation"
        text="Reservations open precisely at 09:00 GMT on the first of each month. For private salon bookings, contact our concierge."
      />
    </>
  );
}

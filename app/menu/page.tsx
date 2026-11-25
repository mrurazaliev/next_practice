import Image from 'next/image';
import type { Metadata } from 'next';
import { alaCarte, tastingActs, wines } from '@/lib/data';
import { CtaBanner, Eyebrow, SectionHeading, StatCard } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Menu', 
  description: 'Seasonal tasting menu, à la carte and grand cru wines by the glass.',
};

const tabs = [
  { href: '#tasting', label: "✦ Chef's tasting" },
  { href: '#starters', label: 'Starters' },
  { href: '#mains', label: 'Main courses' },
  { href: '#hearth', label: 'Wood-fired hearth' },
  { href: '#wine', label: 'Sommelier cellar list' },
];

export default function MenuPage() {
  return (
    <>
      
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-20">
        <Eyebrow>Gastronomy · Seasonal repertoire</Eyebrow>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Seasonal Tasting <em className="text-gold">&amp;</em> À La Carte
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Rooted in the micro-seasons of the British Isles and Brittany coast. Each preparation
            celebrates primal wood-fired heat and coastal brine.
          </p>
        </div>

        <nav aria-label="Menu sections" className="mt-10 flex gap-3 overflow-x-auto pb-2">
          {tabs.map((tab, i) => (
            <a
              key={tab.href}
              href={tab.href}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] transition ${
                i === 0 ? 'border-gold bg-gold text-ink' : 'border-line text-muted hover:text-cream'
              }`}
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </section>

  
      <section id="tasting" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-10">
        <div className="rounded-lg border border-line bg-panel p-8 md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
                Grand degustation
              </span>
              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Winter Solstice: <em className="text-gold">The Ten Acts of Earth &amp; Sea</em>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                A non-linear journey charting native British wild flora, tidal harvests from the Celtic
                Sea and ember-roasted game.
              </p>
            </div>
            <div className="text-right">
              <p className="font-serif text-5xl text-gold">£245</p>
              <p className="text-xs text-muted">per guest, excluding wine</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_3fr]">
            <div className="relative min-h-80 overflow-hidden rounded-lg">
              <Image src="/images/dish-venison.jpg" alt="Ember-charred venison" fill className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink to-transparent p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Act VII · Signature</p>
                <p className="font-serif text-2xl">Ember-Charred Rhug Estate Venison</p>
              </div>
            </div>

            <div className="rounded-lg border border-line p-6">
              <div className="mb-4 flex justify-between text-[10px] uppercase tracking-[0.2em] text-muted">
                <span>Curated sequence of acts</span>
                <span>Duration · 3.5 hours</span>
              </div>
              <ol className="flex flex-col">
                {tastingActs.map((item) => (
                  <li key={item.act} className="flex items-baseline gap-4 border-t border-line py-4">
                    <span className="w-14 shrink-0 text-[11px] font-semibold uppercase text-gold">{item.act}</span>
                    <span className="flex-1">{item.name}</span>
                    <span className="hidden text-[10px] uppercase tracking-[0.15em] text-muted sm:block">{item.note}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="The full repertoire"
          title="Curated À La Carte"
          description="We recommend two starters followed by a wood-hearth centrepiece and a botanical confection."
        />

        <div className="grid gap-14 lg:grid-cols-2">
          {alaCarte.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-24">
              <div className="mb-2 flex items-baseline justify-between border-b border-line pb-4">
                <h3 className="font-serif text-2xl">
                  <span className="text-gold">●</span> {group.title}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted">{group.note}</span>
              </div>

              {group.items.map((item) => (
                <div key={item.name} className="border-b border-line py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-xl">
                      {item.name}
                      {item.tags?.map((tag) => (
                        <span key={tag} className="ml-2 rounded border border-line px-1.5 py-0.5 align-middle font-sans text-[10px] text-muted">
                          {tag}
                        </span>
                      ))}
                    </h4>
                    <span className="font-serif text-xl text-gold">{item.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted/70">⌖ {item.origin}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="hearth" className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-14 px-6 py-20 lg:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-lg">
          <Image src="/images/dish-fire.jpg" alt="Dish finished over wood fire" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-6">
          <Eyebrow>The art of ember &amp; smoke</Eyebrow>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Controlled by Breath, <br />
            <em className="text-gold">Ignited by Heritage</em>
          </h2>
          <p className="leading-relaxed text-muted">
            Our kitchen departs from the clinical hum of induction. We cook exclusively over bespoke
            dual-elevation hearths stoked with English timber.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard value="870°C" label="Peak hearth" />
            <StatCard value="60 days" label="Dry-aged" />
            <StatCard value="100%" label="Wood-fired" />
          </div>
        </div>
      </section>

      <section id="wine" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <SectionHeading eyebrow="From the subterranean cellar" title="Curated Grand Cru by the Glass" />

        <div className="grid gap-6 md:grid-cols-3">
          {wines.map((wine) => (
            <article key={wine.name} className="flex flex-col gap-4 rounded-lg border border-line bg-panel p-6">
              <div className="flex justify-between text-[10px] uppercase tracking-[0.15em] text-gold">
                <span>{wine.region}</span>
                <span>{wine.year}</span>
              </div>
              <h3 className="font-serif text-2xl">{wine.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{wine.note}</p>
              <div className="mt-auto flex items-baseline justify-between border-t border-line pt-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted">Coravin 125ml</span>
                <span className="font-serif text-2xl text-gold">{wine.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        eyebrow="Private reservations"
        title="Reserve Your Table at Aurelia"
        text="Reservations are released on the first day of each month at 09:00 GMT for the following two months."
      />
    </>
  );
}

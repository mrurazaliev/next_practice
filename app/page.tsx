import Image from 'next/image';
import Link from 'next/link';
import { signatureDishes } from '@/lib/data';
import { ButtonLink, CtaBanner, Eyebrow, SectionHeading, StatCard } from '@/components/ui';

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-end overflow-hidden">
        <Image src="/images/hero.jpg" alt="Wagyu plated over open fire" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/60 to-ink/10" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
            ★★★ Three Michelin Stars · Mayfair London
          </p>
          <h1 className="max-w-3xl font-serif text-6xl leading-[1.02] md:text-8xl">
            Taste the Art of <br />
            <em className="text-gold">Fire &amp; Season</em>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            An avant-garde gastronomic journey crafted from heritage wild botanicals, ember-forged
            proteins and an archival 3,200-bottle subterranean cellar.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/reservation">Reserve a table</ButtonLink>
            <ButtonLink href="/menu" variant="outline">Explore seasonal menu</ButtonLink>
          </div>

          <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
            <span><span className="text-gold">●</span> Winter tasting menu · 12 acts of earth &amp; ocean</span>
            <span>Scroll to discover ↓</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-12">
          <Eyebrow>The culinary manifesto</Eyebrow>
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <blockquote className="rounded-lg border border-line bg-panel p-10">
              <p className="font-serif text-3xl italic leading-snug">
                “Cooking is not the transformation of nature, but its quietest surrender to fire.”
              </p>
              <footer className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
                <span className="text-cream">Julian Vance</span> · Executive Chef &amp; Co-Founder
              </footer>
            </blockquote>

            <div className="flex flex-col gap-4 leading-relaxed text-muted">
              <p>
                In our Mayfair sanctuary every evening unfolds as a choreographed meditation on
                provenance. We bypass industrial distribution and work directly with tidal foragers,
                biodynamic orchards and artisanal ceramicists.
              </p>
              <p>
                Every element on your plate has touched live ember, seasoned English applewood or
                high-mountain binchotan charcoal.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <StatCard value="No. 7" label="World's 50 Best" />
              <StatCard value="100%" label="Biodynamic micro-terroir" />
              <StatCard value="3,200" label="Subterranean vintages" />
            </div>
          </div>

          <figure className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-lg">
              <Image src="/images/chef-plating.jpg" alt="Chef plating with tweezers" fill className="object-cover" />
            </div>
            <figcaption className="absolute -bottom-6 left-6 right-6 rounded-lg border border-line bg-panel/95 p-5 text-sm text-muted backdrop-blur">
              <span className="block text-[11px] uppercase tracking-[0.2em] text-gold">Porcelain craft</span>
              Hand-forged ceramics, custom-fired in St Ives for each course.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="The degustation folio"
          title="The Gastronomic Repertoire"
          description="Selected movements from our twelve-course seasonal narrative, pairing ancient wood-hearth traditions with botanical nuance."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {signatureDishes.map((dish) => (
            <article key={dish.name} className="flex flex-col overflow-hidden rounded-lg border border-line bg-panel">
              <div className="relative aspect-4/3">
                <Image src={dish.image} alt={dish.name} fill className="object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
                  {dish.act}
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-ink/70 px-3 py-1 text-xs backdrop-blur">
                  {dish.price} · {dish.format}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-serif text-2xl leading-snug">{dish.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{dish.description}</p>
                <div className="mt-auto rounded-md border border-line p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Sommelier pairing</p>
                  <p className="mt-1 text-sm">{dish.pairing}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-line px-6 py-5 text-sm text-muted">
          <p>The full twelve-course degustation is £245 per guest. Sommelier pairings from £140.</p>
          <Link href="/menu" className="text-[11px] uppercase tracking-[0.2em] text-gold">View full menu →</Link>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">
        <Image src="/images/dining-room.jpg" alt="" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-transparent" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6">
          <figure className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Press</p>
            <blockquote className="mt-6 font-serif text-4xl italic leading-snug md:text-5xl">
              “Aurelia elevates gastronomy to sublime theatre: visceral, romantic and unquestionably
              peerless.”
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
              [PUBLICATION NAME], [YEAR]
            </figcaption>
          </figure>

          <div className="max-w-xl rounded-lg border border-line bg-panel/90 p-8 backdrop-blur">
            <h3 className="font-serif text-3xl">The Mayfair Subterranean Vault</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Over 3,200 biodynamic and grand cru vintages curated by our Head Sommelier, housed four
              metres beneath Curzon Street in a climate-sealed Victorian limestone cellar.
            </p>
            <div className="mt-6">
              <ButtonLink href="/reservation">Discover private cellar</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Winter & spring allocations"
        title="An Unhurried Table Awaits"
        text="Due to our twelve-seat main room and dedicated service brigade, bookings are released strictly on the first of each calendar month."
      />
    </>
  );
}

'use client'; // фильтр по кнопкам = состояние = клиентский компонент

import { useState } from 'react';
import Image from 'next/image';
import { gallery, type GalleryCategory } from '@/lib/data';

const filters: ('All' | GalleryCategory)[] = ['All', 'Cuisine', 'Interior', 'Cellar'];

export default function GalleryGrid() {
  const [active, setActive] = useState<'All' | GalleryCategory>('All');

  const photos = active === 'All' ? gallery : gallery.filter((p) => p.category === active);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`rounded-full border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] transition ${
              active === f ? 'border-gold bg-gold text-ink' : 'border-line text-muted hover:text-cream'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid auto-rows-[260px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className={`group relative overflow-hidden rounded-lg ${photo.wide ? 'lg:col-span-2' : ''}`}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 p-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold">{photo.category}</span>
              <p className="font-serif text-xl">{photo.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

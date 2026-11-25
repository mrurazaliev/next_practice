'use client';

import { useActionState, useEffect, useState } from 'react';
import { createReservation, type ReservationState } from './actions';
import { occasions, salons, timeSlots } from '@/lib/data';

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function toKey(d: Date) {
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${month}-${day}`;
}


function getNextDays(count: number) {
  const today = new Date();
  return Array.from({ length: count }, (_, i) =>
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + i),
  );
}

export default function ReservationForm() {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState<string | null>(null);
  const [salonId, setSalonId] = useState('counter');
  const [time, setTime] = useState('19:30');

  const [state, formAction, isPending] = useActionState<ReservationState, FormData>(createReservation, null);

  const [days, setDays] = useState<Date[]>([]);
  useEffect(() => {
    setDays(getNextDays(28));
  }, []);
  const offset = days.length ? (days[0].getDay() + 6) % 7 : 0; 

  const salon = salons.find((s) => s.id === salonId)!;
  const total = salon.price * guests;

  const chip = (active: boolean) =>
    `rounded-md border px-4 py-3 text-sm transition ${
      active ? 'border-gold bg-gold font-semibold text-ink' : 'border-line hover:border-muted'
    }`;

  if (state?.ok) {
    return (
      <div className="flex flex-col items-start gap-6 rounded-lg border border-gold bg-panel p-10">
        <span className="text-4xl text-gold">✓</span>
        <h2 className="font-serif text-4xl">Your table is requested</h2>
        <p className="text-muted">{state.message} Our concierge will confirm by phone within 24 hours.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-10 rounded-lg border border-line bg-panel p-6 md:p-10">
      <input type="hidden" name="guests" value={guests} />
      <input type="hidden" name="date" value={date ?? ''} />
      <input type="hidden" name="salon" value={salon.name} />
      <input type="hidden" name="time" value={time} />

      <ol className="flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.15em] text-muted">
        <li className="text-gold">① Party &amp; date</li>
        <li className={date ? 'text-gold' : ''}>② Time &amp; salon</li>
        <li>③ Confirmation</li>
      </ol>

      <fieldset className="flex flex-col gap-4">
        <legend className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]">1. Number of guests</legend>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <button key={n} type="button" onClick={() => setGuests(n)} aria-pressed={guests === n} className={chip(guests === n)}>
              {n === 8 ? '8+' : n}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]">2. Select tasting date</legend>
        <div className="grid grid-cols-7 gap-2 text-center">
          {WEEKDAYS.map((d) => (
            <span key={d} className="pb-2 text-[10px] uppercase tracking-[0.15em] text-muted">{d}</span>
          ))}
          {Array.from({ length: offset }).map((_, i) => (
            <span key={`empty-${i}`} />
          ))}
          {days.map((d) => {
            const key = toKey(d);
            const closed = d.getDay() === 1; 
            const active = key === date;
            return (
              <button
                key={key}
                type="button"
                disabled={closed}
                onClick={() => setDate(key)}
                aria-pressed={active}
                aria-label={d.toDateString()}
                className={`flex h-14 flex-col items-center justify-center rounded-md border text-sm transition ${
                  closed
                    ? 'cursor-not-allowed border-transparent text-muted/40'
                    : active
                      ? 'border-gold bg-gold font-semibold text-ink'
                      : 'border-line hover:border-muted'
                }`}
              >
                {d.getDate()}
                {!closed && !active && <span className="h-1 w-1 rounded-full bg-gold" />}
              </button>
            );
          })}
        </div>
        <p className="mt-4 flex gap-6 text-[11px] text-muted">
          <span><span className="text-gold">●</span> Available</span>
          <span>Mondays closed for sourcing</span>
        </p>
      </fieldset>

   
      <fieldset>
        <legend className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]">3. Choose your seating</legend>
        <div className="grid gap-3 md:grid-cols-3">
          {salons.map((s) => {
            const active = s.id === salonId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSalonId(s.id)}
                aria-pressed={active}
                className={`relative flex flex-col gap-3 rounded-lg border p-5 text-left transition ${
                  active ? 'border-gold bg-gold/10' : 'border-line hover:border-muted'
                }`}
              >
                {s.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-gold px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-ink">
                    Featured
                  </span>
                )}
                <span className="text-xs text-muted">£{s.price} / guest</span>
                <span className="font-serif text-2xl leading-tight">{s.name}</span>
                <span className="text-sm text-muted">{s.description}</span>
                <span className="mt-auto text-[10px] uppercase tracking-[0.2em] text-gold">{s.courses}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]">4. Seating time</legend>
        <div className="flex flex-col gap-3">
          {timeSlots.map((slot) => (
            <div key={slot.period} className="flex items-center gap-3">
              <span className="w-16 text-[10px] uppercase tracking-[0.2em] text-muted">{slot.period}</span>
              {slot.times.map((t) => (
                <button key={t} type="button" onClick={() => setTime(t)} aria-pressed={time === t} className={chip(time === t)}>
                  {t}
                </button>
              ))}
            </div>
          ))}
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]">5. Notes &amp; contact</legend>
        <div className="flex flex-wrap gap-3">
          {occasions.map((o) => (
            <label key={o} className="flex cursor-pointer items-center gap-2 rounded-md border border-line px-3 py-2 text-[11px] uppercase tracking-[0.1em]">
              <input type="checkbox" name="occasions" value={o} className="accent-gold" />
              {o}
            </label>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" placeholder="Full name" className="rounded-md border border-line bg-ink px-4 py-3 outline-none focus:border-gold" />
          <input name="phone" type="tel" placeholder="Phone" className="rounded-md border border-line bg-ink px-4 py-3 outline-none focus:border-gold" />
        </div>
        <textarea
          name="notes"
          rows={3}
          placeholder="Food allergies or dietary requirements"
          className="rounded-md border border-line bg-ink px-4 py-3 outline-none focus:border-gold"
        />
      </fieldset>

      {state && !state.ok && <p className="rounded-md border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200">{state.message}</p>}

     
      <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line pt-6">
        <div className="text-sm">
          <p className="font-semibold">
            {date ?? 'Choose a date'} · {time}
          </p>
          <p className="text-muted">
            {guests} {guests === 1 ? 'guest' : 'guests'} · {salon.name} · £{total} total
          </p>
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-ink transition hover:bg-cream disabled:opacity-60"
        >
          {isPending ? 'Sending…' : 'Confirm reservation →'}
        </button>
      </div>
    </form>
  );
}

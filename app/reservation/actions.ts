'use server'; 

export type ReservationState = { ok: boolean; message: string } | null;


export async function createReservation(
  _prevState: ReservationState,
  formData: FormData,
): Promise<ReservationState> {
  const name = String(formData.get('name') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const date = String(formData.get('date') ?? '');
  const time = String(formData.get('time') ?? '');

  if (!date || !time) {
    return { ok: false, message: 'Please choose a date and a seating time.' };
  }
  if (name.length < 2 || phone.length < 6) {
    return { ok: false, message: 'Please enter your name and a phone number.' };
  }

  console.log('New reservation:', Object.fromEntries(formData));

  await new Promise((resolve) => setTimeout(resolve, 800)); 

  return { ok: true, message: `Thank you, ${name}. Your table on ${date} at ${time} is requested.` };
}

# Aurelia — учебный проект на Next.js

## Как запустить
```bash
cd aurelia-nextjs
npm install
npm run dev
```
Открой http://localhost:3000

## Фото
В `public/images/` лежат тёмные заглушки с подписью. Замени их своими фото с теми же именами
(бесплатно: unsplash.com, pexels.com). Лучше горизонтальные, от 1600 px по ширине.

## Что где
- `app/layout.tsx` — шрифты, шапка, подвал
- `app/globals.css` — цвета (дизайн-токены)
- `lib/data.ts` — все данные: блюда, меню, вина, люди, галерея, залы
- `components/ui.tsx` — повторяющиеся куски: заголовки, кнопки, карточки, баннер
- `app/page.tsx` — главная
- `app/menu/page.tsx` — меню
- `app/reservation/` — бронь: страница + форма (клиент) + Server Action
- `app/about/` — о нас + галерея с фильтром (клиент)

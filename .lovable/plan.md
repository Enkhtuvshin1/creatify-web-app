# Creatify — Landing Page Plan

Pinecone маягийн minimal, technical-clean дизайнтай landing page (hero + features + CTA + footer). Монгол хэл дээр, mobile-responsive, production-ready.

## Дизайн систем (Pinecone-аас сэдэвлэсэн)

- **Палитра**: цэвэр цагаан background (`#FAFAF9` / `#FFFFFF`), хар текст (`#0A0A0A`), accent цэнхэр (`#1E40FF` орчим), сааралтсан muted текст. Dark mode-той (хар background + ижил цэнхэр accent).
- **Typography**: sans-serif (Inter эсвэл сонгомол neo-grotesque), маш том bold heading (display), tracking-tight. Eyebrow label нь uppercase, жижиг, цэнхэр.
- **Layout**: full-width sections, нарийн grid lines (тогтсон ширхэгтэй tick marks хэлбэрийн border decorations), generous whitespace, зүүн тийш зэрэгцсэн hero.
- **Mood**: minimal, technical, trustworthy. Decorative dots/particles баруун талд subtle.

## Бүтэц

Зөвхөн нэг route — `/` (landing). Бусад цэс (Бүтээгчид, Зарууд, Нэвтрэх, Бүртгүүлэх) header дотор link байна, тус бүр өөрийн route file болгож үүсгэнэ (`creators.tsx`, `jobs.tsx`, `login.tsx`, `register.tsx`) ингэснээр SSR/SEO зөв ажиллана. Dashboard/admin хэсгүүд энэ турнэд бүтээгдэхгүй — зөвхөн marketing landing.

### Route файлууд
- `src/routes/index.tsx` — landing
- `src/routes/creators.tsx` — placeholder hero + "Тун удахгүй"
- `src/routes/jobs.tsx` — placeholder
- `src/routes/login.tsx` — энгийн форм skeleton
- `src/routes/register.tsx` — Брэнд / Бүтээгч сонголттой skeleton

### Дахин ашиглах компонентүүд (`src/components/`)
- `SiteHeader.tsx` — лого, цэс, Contact, "Эхлэх" CTA, theme toggle, нэвтрээгүй state
- `SiteFooter.tsx` — лого, баганатай линкүүд, copyright
- `Hero.tsx` — eyebrow "БҮТЭЭГЧ × БРЭНД", display heading "Зөв брэнд, зөв бүтээгчтэй <accent>товчхон</accent> уулзана.", subcopy, 2 CTA (Эхлэх / Демо үзэх), баруун талд subtle particle decoration
- `LogoMarquee.tsx` — "Итгэж буй брэндүүд" — текст лого жагсаалт
- `RoleTabs.tsx` — "ЭХЛҮҮЛЭХ" tab block: `{Бүтээгчид}` / `{Брэндүүд}` — Pinecone-ын код tab маягтай, сонгосон рольд багц давуу талуудыг харуулна
- `Features.tsx` — 6 card grid: Профайл, Зар хайх/нийтлэх, Хүсэлт & чат, Escrow төлбөр, Контент баталгаажуулалт, Аналитик. Иконтой (lucide).
- `Workflow.tsx` — хоёр баганатай: "Бүтээгч" болон "Брэнд" — алхам алхмаар (numbered steps)
- `CtaBanner.tsx` — Pinecone-ын footer-ийн дээрх CTA маяг: "Өнөөдрөөс Creatify дээр эхэл" + 2 товч
- `ThemeProvider` + toggle (`next-themes` хэв маяг, энгийн class-based)

### Design tokens (`src/styles.css`)
- `--background`, `--foreground`, `--primary` (цэнхэр), `--muted`, `--border` — light + dark
- `--font-display`, `--font-sans` — Inter (Google Fonts link in `__root.tsx`)
- Утилит: tick-mark border decoration (CSS pseudo-elements эсвэл SVG)

### Head / SEO
- `index.tsx` head: title "Creatify — Зөв брэнд, зөв бүтээгчтэй товчхон уулзана", description, og:title/description
- Дотоод route бүр өөрийн head meta-тай

## Хэрэгжүүлэх дараалал

1. Tokens + fonts-ыг `styles.css` болон `__root.tsx`-д нэмэх; theme toggle setup
2. `SiteHeader`, `SiteFooter` — `__root.tsx`-д wrap (layout болгож)
3. Landing хэсгүүд: Hero → LogoMarquee → RoleTabs → Features → Workflow → CtaBanner
4. Бусад route файлуудыг minimal placeholder-аар үүсгэх (link-үүд эвдрэхгүйн тулд)
5. Mobile responsive шалгах (header → hamburger, hero stack, grids → 1 col)

## Хамрахгүй зүйлс
- Auth backend, dashboard, admin, чат, escrow — зөвхөн frontend marketing landing
- Lovable Cloud асаахгүй (backend хэрэггүй)

Зөвшөөрвөл "Implement plan" дарна уу.

# Raport actualizare psiholog-alina.ro — octombrie 2026

Branch: `chore/update-oct-2026` · Data: 21.10.2026

## 1. Rezumat

| Fază | Rezultat |
|---|---|
| 1. Locația cabinetului | Puncte de reper și transport în comun actualizate pe /contact; diacritice corectate pe Home („Zona Moșilor”). |
| 2. Dependințe | Toate pachetele erau deja la ultima versiune compatibilă. Am aliniat `eslint-config-next` la 15.5.28, am rezolvat vulnerabilitatea PostCSS fără major (override), am setat Node 22.x și am adăugat `package-lock.json` în repo. **0 vulnerabilități în producție.** 7 upgrade-uri major amânate. |
| 3. Design | 63 de clase Tailwind interpolate (o parte nu se generau deloc) → `colorMap`; 17 butoane cu text alb pe fundal alb; 21 de CTA-uri cu contrast 2,4:1; lipsa totală a suportului `prefers-reduced-motion`; overflow orizontal pe mobil/tabletă; focus și target-uri tactile. |
| 4. SEO | Probleme cu impact mare: **canonical-ul tuturor paginilor indică spre Home**, JSON-LD cu adresă/telefon fictive și rating inventat, imaginea OG lipsește, telefon placeholder în 14 locuri, lipsesc `sitemap`/`robots`, 7 linkuri interne duc la 404. |

Build-ul e verde după fiecare fază (`npm run lint`, `npx tsc --noEmit`, `npm run build`, 16 pagini statice).

**Notă despre scop:** proiectul **nu are blog markdown** și nici pagină separată „locație”. Verificările de blog din task sunt marcate N/A. Secțiunea „Locația Cabinetului” se află în `src/app/contact/page.tsx`.

---

## 2. Modificări făcute

### Faza 1 — Locația cabinetului (commit `8f92351`)

| Fișier | Ce | De ce |
|---|---|---|
| `src/app/contact/page.tsx` | `officeInfo.nearbyLandmarks` → „Parcul Izvorul Rece”, „Zona Moșilor” | Cerință. Datele vechi (metrou Aviatorilor, Piața Victoriei, Herăstrău) erau placeholder-e greșite pentru Str. Lunei 7 și au fost înlocuite (confirmat). |
| `src/app/contact/page.tsx` | `officeInfo.publicTransport` → „Tramvaiul 21” (icon `TramFront`), „Troleibuzele 66, 69, 85, 90, 92” (icon `Bus`); rândul despre parcare a fost scos | Cerință; iconițe lucide existente |
| `src/app/contact/page.tsx` | Eticheta „Transport:” → „Transport în comun:”; listă semantică `<ul>/<li>`; iconițe `aria-hidden` și `shrink-0` | Coerență cu lista „Puncte de reper”, accesibilitate, aliniere corectă pe mobil |
| `src/app/page.tsx` | „Zona Mosilor” → „Zona Moșilor” | Diacritice (confirmat) |

JSON-LD-ul nu a fost modificat (vezi auditul SEO, punctul S2).

### Faza 2 — Dependințe (commit `db34441`)

| Fișier | Ce |
|---|---|
| `package.json` | `eslint-config-next` 15.3.3 → ^15.5.28 (aliniat cu `next` 15.5.28) |
| `package.json` | `overrides.next.postcss = 8.5.31` (next fixează intern postcss 8.4.31, vulnerabil) |
| `package.json` | `engines.node = "22.x"` |
| `package-lock.json` | adăugat în git (era nesalvat, deci Vercel rezolva versiunile la fiecare deploy) |

Detalii în secțiunea 3.

### Faza 3 — Design și accesibilitate (commit `7c52b6e`)

Metodă: review de cod plus verificare automată cu Playwright (Chromium headless, rulat din afara proiectului) pe 12 pagini × 3 lățimi (375 / 768 / 1440 px). Am verificat overflow orizontal, conținut ascuns, număr de H1, `alt` la imagini, înălțimea target-urilor tactile (375 px, emulare touch) și contrastul textului pe fundaluri solide. Am verificat vizual secțiunile modificate prin screenshot-uri.

| Fișier | Ce | De ce |
|---|---|---|
| `src/lib/colorMap.ts` (nou) | `colorMap: Record<BrandColor, ColorClasses>` cu clase literale complete, `hoverBgMap`, helper `colorClasses()` | Convenția proiectului. Tailwind generează doar clasele scrise literal, deci multe dintre `bg-${color}-100` etc. **nu existau în CSS**: carduri fără culoare pe servicii, FAQ, testimoniale, contact. |
| 9 pagini din `src/app/**` | 63 de interpolări → `colorClasses(x.color).bg100` etc. Pe Home, `hover:bg-${service.color}/90` producea `hover:bg-bg-therapeutic/90` (invalid) → `hoverBgMap` | Idem. Efect vizibil: culorile de brand apar acum unde erau intenționate. |
| 17 butoane `variant="outline"` din hero (servicii, FAQ, testimoniale, despre) | adăugat `bg-transparent` | Varianta outline are `bg-background` (alb), iar butoanele aveau `text-white` → **text alb pe alb, invizibil** (contrast 1:1) |
| 21 de CTA-uri `bg-warm` | `text-warm-900` → `text-white` | Contrast 2,4:1 → ~7:1 (WCAG AA cere 4,5:1) |
| `servicii/logopedie`, `servicii/psihologie-sportiva` | `text-green-600` → `text-green-700` („Economii … RON”) | Contrast 3,2:1 → peste 4,5:1 |
| `Footer.tsx` | Textul SEO din subsol: `text-gray-500` → `text-gray-400` | Contrast 3,7:1 pe `gray-900` → peste 4,5:1 |
| `globals.css` | Regulă globală `@media (prefers-reduced-motion: reduce)` | Regula exista doar în `src/styles/design-system.css`, **care nu e importat nicăieri**, deci site-ul nu respecta deloc preferința |
| `AnimatedSection.tsx` | `opacity-0` → `motion-safe:opacity-0`, plus `motion-reduce:transition-none` | Cu miscare redusă, conținutul nu mai e ascuns până la scroll |
| `Header.tsx`, `Footer.tsx` | `<MotionConfig reducedMotion="user">` | framer-motion respectă preferința (scale la logo, meniul mobil, intrarea „achievements”) |
| `ScrollToTop.tsx` | Scroll `auto` la miscare redusă; `focus` → `focus-visible`; `hover:scale` doar `motion-safe`; minim 44×44 | Accesibilitate |
| `globals.css` | Focus vizibil global (`a`, `button`, `[role=button]`, `summary`): outline `--therapeutic-500` + inel `--background` | `--ring` era gri deschis (~2,3:1, sub 3:1). Noul indicator e vizibil pe fundal deschis și închis. |
| `globals.css` | `@utility focus-ring` | Clasa era folosită în Header, dar nedefinită |
| `Header.tsx` | Butonul de meniu mobil: 44×44, `aria-expanded`, `aria-controls`; linkuri mobile `py-3`; tel/email `min-h-11`; meniu `overflow-hidden` la animație | Target-uri tactile, stare accesibilă a meniului |
| `button.tsx` | `pointer-coarse:min-h-11` în clasa de bază | Toate butoanele au cel puțin 44 px **doar pe ecrane tactile**; desktopul rămâne neschimbat |
| `Footer.tsx` | Linkuri din liste: `flex min-h-11` (fără `space-y-3`, densitate similară); tel/email/legal `min-h-11` | Target-urile aveau 26–28 px |
| `page.tsx` (Home), `contact/page.tsx` | Email/telefon din carduri: `wrap-anywhere`, `min-h-11` | Adresa de email lungă lărgea cardurile: **overflow orizontal** la 768 px pe Home (813 px) și la 375 px pe Contact (385 px) |

Rezultat după fixuri: 0 overflow orizontal, 0 conținut ascuns, exact un H1 pe pagină, toate imaginile au `alt` și folosesc `next/image`, 0 probleme de contrast pe fundaluri solide. Singurele excepții raportate de scanare sunt badge-urile de durată video, fals pozitive (alb pe negru 70%).

---

## 3. Dependințe

### 3.1 `npm outdated` (înainte)

```
Package              Current    Wanted   Latest
@types/node         20.19.43  20.19.43   26.6.5
eslint                9.39.5    9.39.5  10.13.0
eslint-config-next    15.3.3    15.3.3   16.4.2
framer-motion        12.43.0   12.43.0   14.5.0
lucide-react         0.515.0   0.515.0   1.61.0
next                 15.5.28   15.5.28   16.4.2
typescript             5.9.3     5.9.3    7.0.2
```

Restul pachetelor erau deja la ultima versiune din range: `@radix-ui/react-slot` 1.5.0, `tailwindcss` / `@tailwindcss/postcss` 4.3.3, `tw-animate-css` 1.4.0, `tailwind-merge` 3.7.0, `class-variance-authority` 0.7.1, `clsx` 2.1.1, `react` / `react-dom` 19.3.1. `npm update` nu a schimbat nimic. Singura actualizare minor posibilă a fost `eslint-config-next` 15.3.3 → 15.5.28, care era fixat la versiunea exactă. Proiectul nu are librării de markdown.

### 3.2 `npm audit`

| | Înainte | După |
|---|---|---|
| Total | 7 (lanț `braces` ×5, `postcss` + `next`) | 5 (lanț `braces`) |
| Producție (`--omit=dev`) | 2 (postcss via next, high) | **0** |

- **postcss ≤ 8.5.22** (GHSA-qx2v-qp2m-jg93, GHSA-6g55-p6wh-862q, GHSA-fxqj-rqcc-2cmp, GHSA-r28c-9q8g-f849): `npm audit fix` propunea next@16 (major). **Rezolvat** cu `overrides.next.postcss = 8.5.31`, un bump minor al dependenței tranzitive. Build-ul a fost verificat. Override-ul trebuie scos la upgrade-ul de Next 16.
- **braces** (GHSA-vfj7-8cjw-p6xm, DoS) via `micromatch` → `fast-glob` → `@next/eslint-plugin-next` → `eslint-config-next`: advisory-ul acoperă toate versiunile (`*`), deci nu există fix. `npm audit fix --force` ar face un **downgrade** la eslint-config-next 14. Rămâne deschis. Riscul e foarte mic: e doar unealtă de dezvoltare (lint) și nu ajunge în bundle sau pe server.

### 3.3 Compatibilitate Vercel
- `engines.node = "22.x"`, Node 22 LTS, aceeași versiune ca local (22.23). **De verificat în Vercel → Project Settings → Node.js Version** să fie tot 22.x. Vercel folosește `engines` cu prioritate și afișează un avertisment dacă diferă.
- `next.config.ts` e deja ES module, fără `experimental.appDir` și fără `swcMinify`.
- `vercel.json` adaugă `noindex` pe `psiholog-alina.vercel.app`. E corect, dar vezi S1: canonical-ul are fallback chiar pe acest domeniu.

### 3.4 Upgrade-uri major amânate

| Pachet | Curent → nou | Breaking changes relevante pentru proiect | Efort | Recomandare |
|---|---|---|---|---|
| **next** + **eslint-config-next** | 15.5.28 → 16.4.2 | `next lint` eliminat → script `eslint .`; Turbopack implicit la `dev`/`build`; acces sincron la `params`/`cookies`/`headers` eliminat (proiectul nu le folosește); `middleware` → `proxy` (nu e cazul); schimbări de default la `next/image` (`qualities`, `minimumCacheTTL`, `priority` → `preload`); Node minim 20.9 | **Mic–mediu (2–4 h)**: site 100% static, fără rute dinamice | **Da, în următorul sprint.** Rezolvă nativ vulnerabilitatea postcss (scoatem override-ul) și elimină avertismentul de deprecare `next lint`. De făcut împreună cu ESLint 10. |
| **eslint** | 9.39.5 → 10.13.0 | Doar flat config; `eslint.config.mjs` folosește `FlatCompat` (`@eslint/eslintrc`), care trebuie înlocuit cu config-ul flat nativ din `eslint-config-next` 16 | Mic (30 min), împreună cu Next 16 | Da, odată cu Next 16 |
| **framer-motion** | 12.43.0 → 14.5.0 | Două versiuni major; changelog-ul trebuie verificat la upgrade (API-urile de animație/variants). Uz limitat: Header, Footer, `src/components/motion/*` (componentele din `motion/*` nu sunt importate de nicio pagină). | Mic (1–2 h) | Amânat. Alternativă: dacă `motion/*` rămâne nefolosit, framer-motion poate fi înlocuit cu CSS (mai puțin JS pe client pe toate paginile; economia trebuie măsurată). Vezi D6. |
| **lucide-react** | 0.515.0 → 1.61.0 | Iconițe redenumite/eliminate (ex. iconițele de brand); importurile trebuie verificate. Nu folosim iconițe de brand active. | Mic (1 h) | Da, oricând. Riscul e mic, iar `tsc` prinde importurile inexistente. |
| **typescript** | 5.9.3 → 7.0.2 | Compilator nativ (tsgo), opțiuni vechi eliminate. `tsconfig` are `target: ES2017` și `moduleResolution: bundler`, compatibile. Suportul oficial în Next trebuie confirmat. | Mic, dar risc de tooling | **Așteptăm** până când Next declară explicit suport pentru TS 7 |
| **@types/node** | 20.x → 26.x | Ar trebui să urmeze runtime-ul, nu „latest” | Trivial | Treceți la `@types/node@^22` (aliniat cu `engines` 22.x), **nu** la 26 |

---

## 4. Propuneri de design neimplementate

| # | Propunere | Motivație |
|---|---|---|
| D1 | **Ștergeți `src/styles/design-system.css`** (fișier mort) sau mutați în `globals.css` doar ce e necesar (`bg-therapeutic-gradient`, `animate-float`, `animate-blob`, `animate-breathe`) | Nu e importat nicăieri. Definește o paletă diferită (albastru „sky”) față de cea reală (mov oklch) și face `@import` de Google Fonts, redundant cu `next/font`. Clasele `bg-therapeutic-gradient` (logo în Header/Footer), `animate-float`, `animate-blob` și `animate-breathe` (decorurile din hero) sunt folosite, dar **nu au efect**. Logo-ul din header apare ca inimă simplă, fără cercul gradient. Repararea schimbă aspectul vizibil, deci e decizie de brand. |
| D2 | Dark mode: fie îl activați complet (toggle sau `prefers-color-scheme`), fie scoateți variabilele `.dark` | Există variabile `.dark` și `themeColor` pentru dark, dar nimic nu aplică clasa `.dark`. Paginile folosesc multe culori fixe (`bg-white`, `text-gray-600`), deci dark mode-ul complet ar cere un audit de culori. |
| D3 | Header pe mobil: subtitlul „Specialist psihologie clinica si psihoterapie” ocupă 3 rânduri la 375 px | Ascundeți subtitlul sub `sm` sau micșorați logo-ul. E schimbare de layout. |
| D4 | Uniformizați denumirea și sloganul (Header: „Psiholog Patru Alina / Specialist psihologie clinica…”; Footer: „Psiholog Alina / Specialist Terapie Autism”) | Coerență de brand și NAP (vezi S5). Implică text. |
| D5 | Texte de interfață în engleză sau fără diacritice: `aria-label="Toggle menu"`, `"Scroll to top"`, titlul hero „Informatii contact”, pagina terapie-senzorială fără diacritice | Coerență; cititoarele de ecran citesc eticheta în engleză. Implică text, deci nu le-am modificat. |
| D6 | `src/lib/animations.ts` și `src/components/motion/*` nu sunt folosite de pagini | Fie le refactorizați după convenție (`animationDuration`, `animationEasing`, `animationDelays`, `animationKeyframes`, `animationPresets` cu `Record<>` explicit), fie le eliminați. Codul mort îngreunează întreținerea. |
| D7 | `AnimatedSection` ascunde conținutul (`opacity-0`) până la hidratare și scroll, inclusiv imaginea hero cu `priority` | Întârzie LCP și face conținutul invizibil fără JS. Recomand animație doar CSS (`@starting-style` / `animation-timeline: view()`) sau excluderea secțiunii hero din `AnimatedSection`. Schimbă comportamentul animațiilor, deci e doar propunere. |
| D8 | Linkuri text în carduri sub 44 px („Află detalii”, „Detalii”) | Trec WCAG AA (24 px), dar nu ținta de 44 px. Pot fi transformate în butoane `size="sm"` (schimbare de componentă). |

---

## 5. Audit SEO

Legendă: impact **Mare / Medie / Mică** · efort **S** (< 1 h), **M** (1–4 h), **L** (> 4 h).

### Prioritate mare

| # | Problemă | Dovadă | Propunere | Efort |
|---|---|---|---|---|
| S1 | **Toate paginile au canonical către Home** | `layout.tsx`: `alternates.canonical: '/'` se moștenește. Toate paginile randate au `<link rel="canonical" href="…/">`. Google poate ignora subpaginile ca duplicate. | Scoateți `canonical` din layout. Pe fiecare pagină: `alternates: { canonical: '/servicii/psihoterapie' }` etc. | S |
| S2 | **JSON-LD cu date fictive** | `@type: MedicalBusiness`, adresă „Strada Exemplu nr. 123”, cod 010101, telefon +40722123456, email `contact@psiholog-alina.ro`, geo 44.4268/26.1025 (centrul orașului), program cu sâmbătă (site-ul spune „Luni–Vineri / Online”), `aggregateRating` 4.9/147 fără recenzii pe site | Înlocuiți cu `@type: ["Psychologist", "MedicalBusiness"]`: Str. Lunei 7, Sector 2, București, cod poștal 023995, `+40724172996`, email-ul real, geo **44.43743, 26.11554** (din linkul Google Maps), program real (`openingHoursSpecification`), `areaServed` (Sectorul 2, Sectorul 3, București, online), `hasMap`. **Scoateți `aggregateRating`** dacă nu provine din recenzii reale vizibile pe pagină: încalcă ghidurile Google și poate aduce acțiune manuală. | S |
| S3 | **Telefon și email placeholder** | `+40722123456` / `+40 722 123 456` apare de **17 ori** (butoane `tel:` pe paginile de servicii, FAQ-ul de pe /contact, JSON-LD); `contact@psiholog-alina.ro` de 3 ori; `email@exemplu.ro` o dată. Butoanele „Discută confidențial”, „Sună pentru detalii” etc. sună la un număr greșit. | Înlocuiți peste tot cu +40 724 172 996 și cu emailul real. Ideal, constantele NAP stau într-un singur fișier (`src/lib/site.ts`) folosit de Header, Footer, Contact și JSON-LD. | S |
| S4 | **Imaginea OG lipsește** | `/images/psiholog-alina-cabinet.jpg` → 404. Share-urile pe Facebook/WhatsApp apar fără imagine. | Adăugați `src/app/opengraph-image.jpg` (1200×630) sau generați cu `opengraph-image.tsx`; aceeași pentru Twitter | S |
| S5 | **NAP inconsecvent** | Header: „Str. Lunei ,nr.7,sector 2, București sau Online”; Footer: „Strada Lunei nr. 7 / Sector 2, București”; Home: „Str. Lunei, Nr.7”; JSON-LD: „Strada Exemplu”. Numele variază între „Psiholog Alina”, „Psiholog Patru Alina”, „Psiholog Alina Patru”, „Cabinet Individual de Psihologie Alina”. | Un singur format, identic cu **Google Business Profile**: ex. „Cabinet Individual de Psihologie Patru Alina, Str. Lunei nr. 7, Sector 2, București 023995, +40 724 172 996” | S |
| S6 | **Lipsesc `sitemap.xml` și `robots.txt`** | Ambele dau 404 | `src/app/sitemap.ts` cu cele 12 rute (cu `lastModified`) și `src/app/robots.ts` cu link la sitemap. Trimiteți sitemap-ul în Search Console. | S |
| S7 | **Linkuri interne către 404** | `/programare` (×2), `/servicii/terapie-autism`, `/confidentialitate`, `/termeni`, `/cookies`, `/gdpr`, `/cod-deontologic` (footer legal) | Redirecționați `/programare` → `/contact` și `/servicii/terapie-autism` → `/servicii/interventie-recuperare` (sau pagina potrivită), prin `redirects()` în `next.config.ts`. Creați paginile legale. **Politica de confidențialitate/GDPR e obligatorie** fiindcă site-ul are Google Analytics. | M |
| S8 | **`<title>` dublu** | `layout.tsx` are `<title>Psiholog Alina</title>` hardcodat în `<head>`, iar fiecare pagină are două `<title>` | Ștergeți tag-ul manual; Metadata API se ocupă de titlu | S |
| S9 | **`metadataBase` și `url` cu fallback pe vercel.app** | `process.env.NEXT_PUBLIC_SITE_URL \|\| 'https://psiholog-alina.vercel.app'` | Verificați că `NEXT_PUBLIC_SITE_URL=https://psiholog-alina.ro` e setat în Vercel **Production**; altfel canonical-ul, OG și JSON-LD indică domeniul cu `noindex`. Mai sigur: hardcodați domeniul de producție. | S |

### Prioritate medie

| # | Problemă | Propunere | Efort |
|---|---|---|---|
| S10 | /faq e `'use client'`, deci metadata e comentată și pagina primește titlul și descrierea implicite | Mutați logica interactivă (accordion) într-o componentă client; pagina rămâne server și exportă `metadata` | S |
| S11 | Home nu exportă `metadata` proprie | Title și description cu cuvinte cheie locale: „Psiholog Sector 2 București – Patru Alina \| Izvorul Rece, Moșilor” | S |
| S12 | FAQ fără date structurate | `FAQPage` JSON-LD pe /faq (și pe secțiunea FAQ de pe /contact). Google afișează rich results FAQ limitat pentru site-uri de sănătate, dar ajută la AI/answer engines. | S |
| S13 | Fără `BreadcrumbList` | Breadcrumb vizibil plus JSON-LD pe `/servicii/*` (Acasă › Servicii › Psihoterapie) | M |
| S14 | Open Graph per pagină | Fiecare pagină de serviciu cu `openGraph.title/description` proprii (acum moștenesc pe cele de pe Home) | S |
| S15 | Cuvinte cheie locale | Layout-ul are `psiholog sector 1/2/3`, dar paginile nu folosesc în text „Izvorul Rece”, „Moșilor”, „Sector 2/3”. Adăugați un paragraf despre zonă pe /contact și Home (acum există parțial prin reperele noi) și pagini/secțiuni pentru „psiholog sector 3”, „psiholog Izvorul Rece”, „psiholog Moșilor”. `keywords` meta nu e folosit de Google; nu merită optimizat. | M |
| S16 | Google Business Profile | Creați sau revendicați profilul cu NAP identic, categoria „Psiholog”, link spre site, programul real; adăugați `sameAs` în JSON-LD | M (în afara codului) |
| S17 | Interlinking | Paginile de servicii trimit aproape doar la `/contact` și `/servicii`. Adăugați „Servicii conexe” între ele (ex. logopedie ↔ terapie senzorială ↔ intervenție-recuperare) și link din /despre-mine spre fiecare serviciu. /testimoniale nu e în meniu. | M |
| S18 | Google Analytics | Script `<script>` simplu cu `NEXT_PUBLIC_GA_ID` (randat și când variabila lipsește), fără consimțământ cookie | `@next/third-parties/google` sau `next/script` cu `strategy="afterInteractive"`; banner de consimțământ (GDPR / Consent Mode v2) | M |

### Prioritate mică

| # | Problemă | Propunere | Efort |
|---|---|---|---|
| S19 | Core Web Vitals: LCP | Imaginea hero are `priority`, dar e într-un `AnimatedSection` cu `opacity-0` până la hidratare (D7). Fonturile folosesc corect `next/font` cu `display: swap`; preconnect-urile manuale la `fonts.googleapis.com` sunt inutile (next/font găzduiește local) și pot fi scoase. | S |
| S20 | CLS | Nu am observat layout shift: imaginile au `width`/`height` | — |
| S21 | INP / JS pe client | First Load JS 103–126 kB. `framer-motion` e încărcat în Header și Footer doar pentru două animații mici, deci înlocuirea cu CSS reduce JS-ul pe toate paginile (D6). | M |
| S22 | Imagini neutilizate în `public/images` (`WhatsApp Image …jpeg`, nume cu spații) | Ștergeți sau redenumiți (`cabinet-psihologie-sector-2.jpg`); numele de fișier contează puțin pentru Google Images | S |
| S23 | `lang="ro"` | Prezent | — |
| S24 | Un singur H1 per pagină | Verificat pe toate cele 12 pagini | — |
| S25 | Alt-uri | Prezente, descriptive | — |
| S26 | Testimoniale | Verificați că sunt reale și publicate cu acordul clienților, conform Codului deontologic al psihologilor. Nu le marcați cu `Review` schema dacă nu sunt verificabile. | — |

### Blog (N/A acum; pentru când va fi adăugat)
- `src/app/blog/[slug]/page.tsx` cu `generateStaticParams` și `generateMetadata` (title, description, canonical, OG cu imaginea articolului).
- Frontmatter: `title`, `description`, `date`, `updated`, `author`, `image`, `tags`, `services` (pentru interlinking automat spre pagina de serviciu).
- JSON-LD `BlogPosting` (headline, datePublished, dateModified, author `Person` cu link la /despre-mine, image), plus `BreadcrumbList`.
- Slug-uri scurte, fără diacritice (`/blog/semne-autism-copii`); intrarea în `sitemap.ts` cu `lastModified` din `updated`.
- Autor vizibil, cu acreditarea CPR. Pentru subiecte de sănătate (YMYL), E-E-A-T contează mult.

---

## 6. Ordine recomandată pentru pașii următori
1. **S1, S2, S3, S5, S8, S9**: corecturi rapide (~2 h) cu impact mare pe indexare și pe încredere; elimină datele false.
2. **S4, S6, S7, S10, S11**: OG, sitemap/robots, redirecturi, paginile legale, metadata lipsă.
3. **Upgrade Next 16 + ESLint 10** (secțiunea 3.4).
4. **D1 / D7** (decizii de design), apoi S12–S18.

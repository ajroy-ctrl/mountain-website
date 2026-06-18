# Mountain Group — Design System

Brand and product design system for **Mountain Group**, a driver-qualification and recruiting partner for trucking/freight fleets. Tagline: **"We Recruit. You Operate."** Mountain Group runs the full driver pipeline — sourcing, screening, FCRA-compliant background checks, drug tests, and DOT physicals — so fleets can hire road-ready drivers without running their own recruiting operation.

This system spans **two distinct but related surfaces**:

1. **Marketing website** (mountaingroup) — a confident, dark, photography-led brand site. Heavy display type, royal-blue CTAs, freight imagery.
2. **Recruiter Portal** (mountainrecruiting.com) — an internal CRM where recruiters manage driver candidates: screening status, ratings, resumes, and "send to client" workflow. Functional, dense, light-UI.

The design language stretches to serve both: a shared color/type/spacing foundation, with a **soft, generous** treatment on marketing and a **tight, utilitarian** treatment in the portal.

## Sources provided
No codebase or Figma was attached. This system was reconstructed from:
- `uploads/Screenshot 2026-06-18 at 12.43.49 PM.png` — marketing homepage hero.
- `uploads/Screenshot 2026-06-18 at 12.45.36 PM.png` — Recruiter Portal "Driver Candidates" list.
- Logo PNGs (mark + "MOUNTAIN" lockup in black/grey/white/indigo/lavender), now in `assets/logos/`.

Colors were sampled directly from those screenshots. **Fonts were NOT provided** — see the substitution note below.

---

## CONTENT FUNDAMENTALS — how Mountain writes

**Voice:** direct, confident, operator-to-operator. Mountain talks like a partner who does the unglamorous work so you don't have to. Short declarative sentences. No fluff, no hype words.

**Person:** addresses the customer as **"you"**, refers to the company as **"we"** / "Mountain Group". The core promise is literally split across the two pronouns: *"We Recruit. You Operate."*

**Casing:**
- Marketing headlines use **Title Case with periods** as rhythmic full stops — *"We Recruit. You Operate."* — sentences as design.
- Eyebrows / overlines / table headers are **UPPERCASE** with wide tracking — *"YOUR RECRUITING PARTNER"*, *"CANDIDATE NAME"*, *"FCRA COMPLIANT, EVERY TIME"*.
- Body copy is sentence case.
- Status labels are UPPERCASE (`PASS`, `FAIL`, `SENT`, `RESUME`).

**Tone specifics:**
- Leads with **proof / numbers**: "500+ clients served", "100k+ candidates processed", "2,000+ jobs filled", "100% FCRA compliant".
- **Compliance is a selling point, not fine print** — surfaced confidently ("100% FCRA Compliant, Every Time").
- Em dashes to append the operating detail — *"…drug tests, and physicals. You hire; we handle everything else."*
- Action labels are plain and outcome-oriented: *"Book a Free Consultation"*, *"See How It Works"*, *"Get Started"*, *"Send to Client"*.

**Emoji:** none in the brand voice. (The portal screenshot shows a few utility emoji on toolbar buttons; this system replaces them with line icons — see ICONOGRAPHY.)

**Vibe:** dependable, no-nonsense, slightly rugged (mountain/freight), but modern and tech-forward. Think logistics SaaS, not a trade-show banner.

---

## VISUAL FOUNDATIONS

**Color.** Two anchors: a near-black navy **ink** (`--ink-900` #0a0c15, the marketing canvas) and a vivid **royal blue** (`--blue-600` #1d5fe8, the single primary action color). The portal chrome uses a deeper desaturated **navy** (`--navy-800` #1e2d5a) for headers and table heads. Logo accents add **indigo** (#4f53c0) and **lavender** (#b18cff), used sparingly (avatars, logo lockups). Neutrals are cool/blue-tinted greys. Semantic status colors are reserved for the portal: green PASS, red FAIL, amber pending — plus red doubles as the destructive/logout color.

**Typography.** Two families:
- **Display** = a heavy geometric sans (Clash Display substitute) — big, tight (`-0.02em`), used only for marketing headlines and large stat numbers. Low contrast, rounded, confident.
- **Text/UI** = a clean grotesk (Satoshi substitute) — all body copy, all portal UI, labels, tables. Weights 400/500/700; 700 carries most emphasis.
- Numerics (phones, IDs, ZIPs) lean monospace in the portal for scannability.

**Spacing & layout.** 4px base grid. Marketing is airy — `96px` section padding, 1280px max width, generous whitespace around the hero copy. The portal is dense — `12–14px` table cells, compact filter rows, full-width data tables. Marketing layouts are split/asymmetric (copy left, full-bleed photo right with a left-to-transparent ink gradient).

**Backgrounds & imagery.** Marketing is **photography-led**: warm-cool freight photography (trucks, highways at dusk — teal shadows, warm highlights) bleeding off the right edge, anchored by the solid ink field on the left. A directional **protection gradient** (ink → transparent, left to right) keeps headline text legible over photos. No busy patterns or textures. The portal has **no imagery** — flat light-grey page (`--grey-50`), white cards/tables.

**Corner radii.** Tiered by surface: portal buttons/inputs/pills are tight (`6px`), cards `10px`, marketing cards/media soft (`16px`), big CTA blocks `24px`, and badges/status pills are fully rounded (`pill`).

**Cards.** White, `1px` cool-grey border, soft **navy-tinted** shadow (never pure black) — `--shadow-sm` at rest, lifting to `--shadow-lg` with a `-2px` translate on hover for interactive marketing cards. Dark "navy" card variant for feature blocks on the ink background uses a translucent white fill + hairline border.

**Shadows.** All shadows are tinted with navy (`rgba(16,24,56,…)`), cool not warm, low-spread. Elevation ladder xs → sm → md → lg. Focus uses a `3px` blue ring (`--shadow-focus`).

**Borders.** Hairline `1px` in cool grey (`--grey-200`) on light; `rgba(255,255,255,0.1)` on dark. Outlined buttons on dark use a `rgba(255,255,255,0.45)` border ("See How It Works").

**Transparency & blur.** Used for the sticky marketing nav (`rgba(10,12,21,0.82)` + `backdrop-filter: blur(10px)`) and for translucent feature cards over the ink hero. Not used in the portal.

**Motion.** Restrained and functional. Fast (`120ms`) button press = `translateY(1px)` + slight `brightness(0.94)`; hover = brightness/background shift. Cards ease up `180ms`. Standard easing `cubic-bezier(0.2,0.7,0.2,1)`. No bounces, no decorative looping animation. Respect reduced-motion.

**Hover / press states.**
- Buttons: hover darkens (brightness 0.94) or shifts to `--blue-700`; press nudges down 1px.
- Table rows: hover fills `--grey-50`.
- Links/nav: inactive at ~70% white, active/hover at full white + bold.

**Status & rating system (portal).** Screening status is a colored **pill** (green/red/amber/grey). Candidate quality is a **colored ring** numbered 1–10: red ≤4, amber 5–7, green 8+. These two motifs are the portal's signature.

---

## ICONOGRAPHY

- **Style:** thin, rounded line icons — **Lucide** (MIT), 24×24, `stroke-width: 2`, `currentColor`, rounded caps/joins. This matches the portal's lightweight functional look and the marketing site's clean modernity.
- **Delivery:** a curated subset is inlined in `ui_kits/*/Icons.jsx` as an `<Icon name="…" />` component (so kits and cards stay self-contained with no CDN dependency). Names in use: `search, plus, calendar, archive, box, star, x, fileText, arrowRight, chevronDown, check, shield, users, clipboard, truck, phone, mapPin, menu`. To extend, copy more paths from [lucide.dev](https://lucide.dev) into the `MOUNTAIN_ICONS` map.
- **Logo mark** (the **M** monogram — two overlapping peaks) is the only bespoke "icon"; available as PNG in `assets/logos/` in ink/white/grey. Use the white mark on the ink hero and portal navy header, ink mark on light.
- **Emoji:** not part of the brand. The portal screenshot used a few utility emoji on toolbar buttons; this system intentionally replaces them with Lucide line icons. Do **not** introduce emoji.
- **Unicode** arrows (`→`) appear inline in CTAs ("Weekly Tips →") and the rating/status dots are simple filled circles.

---

## VISUAL ASSETS (`assets/`)
- `logos/mountain-mark-ink.png`, `…-white.png`, `…-grey.png`, `…-black.png` — the M monogram.
- `logos/mountain-lockup-black.png`, `…-blue.png`, `…-purple.png` — stacked "MOUNTAIN" wordmark.
- `images/hero-highway.jpg` — freight-truck highway photo used in the marketing hero (cropped from the brand's own site screenshot). Treat as a placeholder for a licensed hero photo if higher resolution is needed.

---

## ⚠️ Font substitution (action needed)
The real Mountain brand fonts were not supplied. Current best-match free webfonts (served from Fontshare via `tokens/fonts.css`):
- **Display** → **Clash Display** (heavy geometric — matches the "We Recruit." headline closely).
- **Text/UI** → **Satoshi** (clean grotesk for body + portal).

If you have the licensed brand fonts, drop the files in `assets/fonts/`, add `@font-face` rules, and update `--font-display` / `--font-sans` in `tokens/typography.css`. **Please confirm or send the real fonts.**

---

## INDEX — what's in this project

**Foundation (root)**
- `styles.css` — single entry point; `@import`s every token + font file. Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.

**Specimen cards** (`guidelines/`, shown in the Design System tab)
- Colors: Ink & Navy · Royal Blue · Indigo & Lavender · Neutrals · Status
- Type: Display · Headings & Body · Overline & Mono
- Spacing: Scale · Radius · Shadows
- Brand: Logo Mark · Logo Lockup

**Components** (`components/`, bundled to `window.MountainDesignSystem_859ae4`)
- `buttons/` — `Button`, `IconButton`
- `forms/` — `Input`, `Select`
- `data-display/` — `StatusPill`, `RatingBadge`, `Avatar`, `Badge`, `Stat`, `Card`
- Each dir has a `.card.html` specimen; each component has `.d.ts` + `.prompt.md`.

**UI kits** (`ui_kits/`)
- `recruiter-portal/` — interactive driver-candidate CRM (login → filter → screen → send to client → add candidate). Files: `index.html`, `PortalHeader.jsx`, `PortalLogin.jsx`, `CandidateList.jsx`, `Icons.jsx`.
- `website/` — marketing homepage (nav, hero, how-it-works, compliance, CTA, footer). Files: `index.html`, `SiteNav.jsx`, `Hero.jsx`, `Sections.jsx`, `Icons.jsx`.

**Starting points:** Button, StatusPill, the Recruiter Portal screen, and the Marketing Homepage are tagged as seeds for consuming projects.

> The compiler generates `_ds_bundle.js`, `_ds_manifest.json`, and `_adherence.oxlintrc.json` — do not edit those.

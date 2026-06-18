---
name: mountain-design
description: Use this skill to generate well-branded interfaces and assets for Mountain Group (driver-qualification & recruiting), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the marketing website and the Recruiter Portal CRM.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick orientation:
- `styles.css` is the single CSS entry point — it `@import`s all tokens (`tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`). Link it and use the CSS custom properties (`--blue-600`, `--ink-900`, `--navy-800`, `--font-display`, `--radius-pill`, `--shadow-sm`, …).
- Two surfaces: a dark, photography-led **marketing** look and a light, dense **Recruiter Portal** look. Match the one you're building.
- Components live in `components/` (React, bundled to `window.MountainDesignSystem_859ae4`): Button, IconButton, Input, Select, StatusPill, RatingBadge, Avatar, Badge, Stat, Card. Read each `.prompt.md` for usage.
- Full reference screens are in `ui_kits/website/` and `ui_kits/recruiter-portal/`.
- Logos + hero imagery are in `assets/`. Icons are Lucide line icons (see `ui_kits/*/Icons.jsx`); never use emoji.
- Voice: direct, confident, "we recruit / you operate", proof-driven, compliance-forward. UPPERCASE eyebrows & labels; Title Case headlines with periods.
- ⚠️ Brand fonts are best-match substitutes (Clash Display + Satoshi). Flag this if the user needs pixel-exact brand type.

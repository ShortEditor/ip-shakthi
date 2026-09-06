---
name: Calm Kinetic
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#424844'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#466554'
  primary: '#082719'
  on-primary: '#ffffff'
  primary-container: '#1f3d2e'
  on-primary-container: '#87a894'
  inverse-primary: '#adceba'
  secondary: '#835400'
  on-secondary: '#ffffff'
  secondary-container: '#feb64e'
  on-secondary-container: '#714800'
  tertiary: '#262217'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b372c'
  on-tertiary-container: '#a7a091'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8ebd5'
  primary-fixed-dim: '#adceba'
  on-primary-fixed: '#022113'
  on-primary-fixed-variant: '#2f4d3d'
  secondary-fixed: '#ffddb5'
  secondary-fixed-dim: '#ffb956'
  on-secondary-fixed: '#2a1800'
  on-secondary-fixed-variant: '#643f00'
  tertiary-fixed: '#ebe1d1'
  tertiary-fixed-dim: '#cec6b6'
  on-tertiary-fixed: '#1f1b11'
  on-tertiary-fixed-variant: '#4b463a'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  display:
    fontFamily: manrope
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: manrope
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: manrope
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: manrope
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: plusJakartaSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: plusJakartaSans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 25px
    letterSpacing: 0em
  label-md:
    fontFamily: inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 2.5rem
  space-3xl: 3rem
  space-4xl: 4rem
  gutter-desktop: 2rem
  margin-desktop: 3rem
  gutter-tablet: 1.5rem
  margin-tablet: 2rem
  gutter-mobile: 1rem
  margin-mobile: 1.25rem
---

## Brand & Style
This design system marries the precision of modern developer/fintech tooling (Linear, Stripe) with the serene, organic clarity of editorial health-tech (Notion, Superhuman). It targets professionals operating in high-stakes environments who demand instant comprehension, low cognitive fatigue, and deliberate focus.

The visual direction is grounded in an editorial Minimalist-Tactile philosophy:
- **Quiet Authority**: Generous negative space balances deep, grounded botanical tones against warm paper-like surfaces.
- **Singular Focus**: Every view enforces a strict visual hierarchy featuring only one primary intention or action point at any single moment.
- **Organic Precision**: Natural warm paper undertones replace sterile cool grays, creating an atmosphere that feels restorative, disciplined, and trustworthy.

## Colors
The palette is built around an organic, high-contrast, low-strain tonal framework.

- **Primary (`#1F3D2E`)**: Deep Forest Green. Serves as the bedrock of visual agency. Applied to key interactive controls, primary CTAs, active segmented tabs, and anchor marks.
- **Secondary / Accent (`#E8A33D`)**: Warm Amber. Reserved strictly for singular attention states, status flags, notifications, and critical threshold indicators. It is intentionally omitted from decorative treatments to preserve urgency and contrast.
- **Tertiary / Text Secondary (`#6B6558`)**: Warm Slate Umber. Provides lower-contrast legibility for captions, metadata, table headers, and supporting descriptions without dropping into cold synthetic grays.
- **Neutral Canvas (`#FAFAF8`)**: Soft Off-White. The root background tone mimicking premium uncoated paper stock, reducing screen glare across long working sessions.
- **Surface / Card (`#FFFFFF`)**: Pure White. Layered on the canvas to create subtle plane differentiation.
- **Borders & Dividers (`#EFEFE9`)**: Low-contrast neutral rule to establish structural zones without hard visual boundaries.
- **Text Primary (`#1A1A1A`)**: Deep Ink Black. Calibrated for maximum edge sharpness on typography while remaining softer than pure `#000000`.

## Typography
Typography is constrained to three distinct optical planes per screen view to prevent visual fragmentation:
1. **The Lead**: Display / Headline (Manrope) for authoritative framing and context.
2. **The Narrative**: Open Body (Plus Jakarta Sans) set at 15–16px with a generous 1.6+ line-height for comfortable reading of financial logs, medical timelines, and metrics.
3. **The Utility**: Crisp Data/Labels (Inter) configured in medium and semibold weights for navigational items, numerical badges, micro-labels, and metadata.

Rules of execution:
- Never combine more than 3 type sizes in a single viewport container or card.
- Maintain wide leading on running body copy (`lineHeight` ≥ 1.6x) to preserve the airy, unhurried reading cadence.
- Use tabular figures for financial, quantitative, and biometric data tables.

## Layout & Spacing
The layout follows a fluid 12-column grid system anchored by a disciplined baseline grid:
- **Base Rhythm**: Rooted in 8px increments, with 32px (`space-xl`) serving as the primary separation barrier between unrelated modules and cards.
- **Desktop (1024px+)**: Max content container capped at 1280px. Employs 12 columns with 32px gutters and 48px margins. Views are sparse, maintaining breathing room around core data charts.
- **Tablet (768px - 1023px)**: 8-column layout with 24px gutters and 32px margins. Secondary utility sidebars collapse into overlay sheets or horizontal segmented bars.
- **Mobile (< 768px)**: 4-column layout with 16px gutters and 20px margins. Multicolumn card layouts fold into single vertical stacks. Card padding drops from 32px to 20px.

## Elevation & Depth
Depth is created through ambient light dispersion rather than sharp architectural drop-shadows.

- **Canvas Foundation**: The base background (`#FAFAF8`) sits at the ground layer (Elevation 0).
- **Floating Surfaces (Elevation 1)**: Pure white cards (`#FFFFFF`) rest on top of the canvas, defined by a 1px soft hairline stroke (`#EFEFE9`) paired with a wide, diffused shadow: `box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05)`.
- **Raised Interactive / Menus (Elevation 2)**: Popovers, context dropdowns, and date pickers use a compound ambient shadow: `box-shadow: 0 8px 30px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)`.
- **Modals / Overlays (Elevation 3)**: Center stage sheets sit above an atmospheric backdrop blur (`backdrop-filter: blur(8px); background: rgba(250, 250, 248, 0.75)`), bound with `box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.12)`.

## Shapes
The structural geometry balances modern software tactility with organic calm:
- **Cards and Containers**: Enforced at `14px` to `16px` radius (`rounded-lg`), softening rectangular viewport weight while preserving information density.
- **Buttons and Input Fields**: Set at `8px` to `10px` radius, giving interactive targets a structured, precise profile.
- **Badges, Tags, and Avatars**: Fully rounded pill shapes (`9999px`) provide contrast against rectangular surface structures.
- **Border Treatments**: Outer card borders never exceed 1px and must blend into the `#EFEFE9` tone without visible visual friction.

## Components

### Buttons
- **Primary**: Background `#1F3D2E`, text `#FFFFFF`, border none, border-radius 8px. Hover state shifts to `rgba(31, 61, 46, 0.9)` with subtle vertical compression (`transform: translateY(-1px)`). Height: 40px (desktop), padding: 0 16px.
- **Secondary**: Background `#FFFFFF`, text `#1A1A1A`, 1px border `#EFEFE9`. Hover state applies background `#FAFAF8`.
- **Tertiary / Ghost**: Transparent background, text `#6B6558`, hover background `rgba(31, 61, 46, 0.05)`, text `#1F3D2E`.

### Cards & Panels
- Constructed from `#FFFFFF` resting on `#FAFAF8`.
- Default inner padding is 28px to 32px on desktop; 20px on mobile.
- Cards feature a subtle 1px border `#EFEFE9` combined with the standard ambient drop-shadow. No dense dividing lines inside cards—use 24px+ whitespace to separate sub-sections.

### Input Fields & Controls
- **Inputs**: Pure white background, 40px height, 8px radius, 1px solid border `#EFEFE9`. Active focus transitions border to `#1F3D2E` with a soft outer ring: `box-shadow: 0 0 0 3px rgba(31, 61, 46, 0.1)`. Placeholder text in `#6B6558` at 60% opacity.
- **Checkboxes & Radios**: 18px dimensions, 4px radius for checkboxes, full circle for radios. Unchecked: 1.5px border `#EFEFE9`. Checked: solid `#1F3D2E` fill with white checkmark icon.
- **Switches / Toggles**: 44px width, 24px height, full pill shape. Inactive background: `#EFEFE9`. Active background: `#1F3D2E`. Thumb: `#FFFFFF` with standard 1px ambient elevation.

### Chips & Badges
- **Status Badges**: Pill-shaped (`rounded-full`), height 22px, padding 2px 10px, typography `label-sm`.
- **Amber Flag / Warning**: Background `rgba(232, 163, 61, 0.12)`, text `#996515` (accessible contrast variant of `#E8A33D`).
- **Neutral / Metric Tag**: Background `#FAFAF8`, text `#6B6558`, border 1px solid `#EFEFE9`.

### Data Lists & Row Items
- Zero hard borders between rows; rows are separated by 1px `#EFEFE9` dividers or an alternating hover background of `#FAFAF8`.
- List item height 56px with generous horizontal padding (16px), aligning numerical data right and primary attributes left.

### Empty States & Singular Focus Prompts
- Large center-aligned iconography in muted `#1F3D2E` (10% tint).
- Maximum 1 primary action button per empty state, accompanied by one line of subhead text in `#6B6558`.
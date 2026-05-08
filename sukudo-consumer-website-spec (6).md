# Sukudo Consumer Products — Website Design Specification

**Version:** 0.1 (working document)
**Status:** Strategic direction locked; visual system locked; Sukudo parent home page mocked. Brand-specific systems (AAMLO, Clumzy) and full page-level wireframes pending.
**Owner:** Sukudo Consumer Products
**Stack:** Next.js + GSAP/Framer Motion + headless CMS, deployed on Vercel.

---

## 0. How to use this document

This is the single source of truth for the Sukudo Consumer Products website project. Anyone — designer, developer, or AI assistant — should be able to read this document and understand:

1. What the company is and what it's trying to do
2. What's been decided and locked
3. What visual and structural rules everything must follow
4. What's still open and needs to be designed

Sections marked **[LOCKED]** are settled and should not be re-litigated without explicit approval. Sections marked **[OPEN]** are the active design surface. Sections marked **[REF]** are reference material — not rules, but informative.

If you're picking this up mid-project, read sections 1–3 in full before doing anything. They establish the spine. Then go to section 4 for whatever page you're working on.

---

## 1. Project context

### 1.1 The company

**Sukudo Consumer Products** is a non-alcoholic beverage company operating two distinct brands under one umbrella. It sits as a sister entity to Sukudo Studios (media production / brand development) and Sukudo Analytica — but should be presented and treated as its own consumer-products business with its own visual identity.

The website's job is **not** e-commerce. It is a **display and lead-generation site** — a credible storefront for the company and its brands, and a structured intake for distributors, franchisees, suppliers, and investors.

### 1.2 The brands

The company houses two beverage brands, deliberately positioned at different price points and personalities so they don't cannibalize each other:

#### AAMLO — the ₹10 mass-market carbonated drink

- **Format:** small plastic bottle, single-serve
- **Price:** ₹10 — competing in India's most price-sensitive beverage tier
- **First flavor:** mango (product name: **MANGOLO**)
- **Roadmap flavors:** **LEECHILO** (litchi), **ORANGELO** (orange), **JEERALO** (jeera/cumin), and others to be decided
- **Direct competitors:** Lahori Jeera, Aroor Lemon
- **Vibe:** loud, fun, mass-market, Bollywood-energy, Hinglish-friendly
- **Audience:** street-level consumers, kirana stores, small retail
- **Reference site:** https://lahorizeera.com/

#### CLUMZY — the ₹40 premium goli-soda

- **Format:** glass bottle (goli-soda traditional design)
- **Price:** ₹40 — competing in the premium nostalgic / craft-beverage tier
- **Flavors:** Blueberry, Pina Colada, others TBD
- **Direct competitors:** Goli Soda, Kaalaiyan
- **Vibe:** cinematic, premium, crafted, story-led
- **Audience:** urban consumers, modern retail, cafés, premium grocery
- **Reference site:** https://kaalaiyan.in/

### 1.3 Goals of the website

In priority order:

1. **Establish Sukudo Consumer Products as a credible operator** — for distributors, investors, regulators, and journalists. The parent must feel like a real, well-run beverage company.
2. **Showcase both brands with distinct personalities** without flattening either or letting them clash.
3. **Capture distributor and partner leads** through a structured, segmented intake form.
4. **Look modern, dynamic, and aesthetically refined** — it should not feel like a typical Indian FMCG site. The bar is set against companies like Recess, Liquid Death, Olipop, and the modern wave of beverage brands that treat web presence as a brand asset.

### 1.4 Audiences (in order of importance for this site)

1. **Distributors and franchise partners** — the people who will physically move and sell the product. They are looking for credibility, scale signals, and a clear way to enquire.
2. **Investors and brand-side stakeholders** — looking for vision, manufacturing capability, and ambition.
3. **Suppliers, regulators, journalists** — looking for legitimacy and contactable points of accountability.
4. **End consumers** — discovering the brands. They are not the primary buying audience here (the site is not e-commerce), but they may visit, and they should leave with a strong brand memory.

---

## 2. Strategic decisions [LOCKED]

### 2.1 Site architecture

**One website: sukudoconsumer.com.** Both brands live as deep, immersive sections inside it. AAMLO and Clumzy domains (myclumzy.com, myclumzy.in, plus AAMLO equivalents to be registered) are held defensively as redirects to the relevant brand page, but no separate brand sites are built at this stage.

**Why one site, not three:** the company is just starting; building and maintaining three sites is unjustified overhead. The parent site must be excellent enough to do all three jobs (corporate + AAMLO + Clumzy). If a brand later grows large enough to warrant its own site, it can be split off without rebuilding the parent.

### 2.2 Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14+** (App Router) | Server components for performance, video-heavy pages need image/video optimization, mature ecosystem |
| Animation | **GSAP** + **Framer Motion** | GSAP for scroll choreography (ScrollTrigger), Framer Motion for component-level interactions |
| 3D (optional) | **react-three-fiber** | Reserved for bottle interactions or product rotators if needed |
| CMS | **Sanity** (preferred) or **Payload** | Headless CMS so non-developers can update product info, distributor testimonials, news |
| Hosting | **Vercel** | Edge network, automatic image/video optimization, native Next.js support |
| Forms | **HubSpot** or **Formspark**, with Zapier/native routing to one inbox | All distributor/partner leads land in one place regardless of segment |
| Email | Google Workspace (already in use across Sukudo entities) | DKIM/SPF/DMARC must be configured at launch |
| Analytics | **Plausible** or **Google Analytics 4** | Plausible preferred for cleaner UX; GA4 if marketing wants deep funnels |

**Open-source font hosting:** Use Fontsource (`@fontsource/instrument-serif`, `@fontsource/inter`) so fonts are self-hosted and don't depend on Google Fonts CDN.

### 2.3 Information architecture

Six top-level areas:

1. **Home** — cinematic intro to Sukudo, two-doors handoff to brands, operator credibility band, partner CTA
2. **Clumzy** — full immersive brand page (cinematic, story-led)
3. **AAMLO** — full immersive brand page (Bollywood-filmy, loud)
4. **About / The Company** — Sukudo Consumer Products as operator: vision, manufacturing, team, infrastructure
5. **Partner With Us** — segmented distributor / franchise / supplier / investor lead capture
6. **Contact** — corporate / press / general

**Navigation:** consistent across the site. Visual theme of the nav subtly shifts when inside a brand page (header colors, accent treatments) — but the structure is identical, so the visitor never feels lost.

**Optional later:** News/Press, Careers, Sustainability. Not in v1.

### 2.4 Home page concept — "Lobby / Two Doors"

Locked direction: the home is a *lobby*. It establishes Sukudo as the parent, then explicitly hands off to one of two brand worlds.

This was chosen over two alternatives:

- **"Anthology Film"** — fully cinematic chapter-by-chapter intro to both brands. Beautiful but slow for distributors who want quick info.
- **"Split Universe"** — vertical screen split with parallel brand storytelling. Visually adventurous but fragile on mobile and expensive to build right.

The Lobby approach was chosen because **distributor lead-gen is a real goal** alongside brand storytelling, and the Lobby pattern gives business-audience visitors the fastest path while still letting the home set tone.

---

## 3. Visual system — Sukudo parent [LOCKED]

This system applies to: **home, About, Partner With Us, Contact, all corporate pages, navigation, footer.**

It does **not** apply inside the AAMLO or Clumzy brand pages, which will have their own systems (defined separately in section 4).

### 3.1 Design philosophy

The Sukudo parent must feel like a confident, modern operator that **makes things with care.** It should be:

- **Premium enough** to credibly parent Clumzy
- **Warm enough** not to feel like cold corporate
- **Neutral enough** that AAMLO and Clumzy can each push hard into their own worlds without clashing
- **Cinematic** rather than transactional — closer to a film than to a SaaS app

Reference vibe: *Apple's product-film moments, Hermès workshop films, A24 cold opens, the way modern Indian brands like Bombay Sweet Shop or Forest Essentials present themselves but with a beverage edge.*

Anti-reference: typical Indian FMCG corporate websites (cluttered grids, clip-art, multi-color rainbows, heavy sliders, stock photography).

### 3.2 Typography

**Display: Instrument Serif** (open source, via Fontsource)
**Body / UI: Inter** (open source, via Fontsource)

Why this pair:
- Instrument Serif carries cinematic-craft tone for hero lines and section titles. Has personality without being decorative.
- Inter is the most refined open-source modern grotesque. Clean, neutral, deeply legible at every size.
- Together: signals "modern company that takes craft seriously" — neither tech-bro nor heritage-FMCG.

#### Type scale (default — desktop)

| Role | Font | Size | Weight | Line-height | Use |
|---|---|---|---|---|---|
| Display XL | Instrument Serif | 96px / 6rem | 400 | 1.0 | Reserved — hero on landing only |
| Display L | Instrument Serif | 72px / 4.5rem | 400 | 1.05 | Section heroes |
| Display M | Instrument Serif | 56px / 3.5rem | 400 | 1.1 | Brand panel labels (AAMLO / CLUMZY at home) |
| Display S | Instrument Serif | 40px / 2.5rem | 400 | 1.2 | Page titles |
| H1 | Inter | 32px / 2rem | 500 | 1.25 | Primary section heads on dense pages |
| H2 | Inter | 24px / 1.5rem | 500 | 1.3 | Sub-section heads |
| H3 | Inter | 18px / 1.125rem | 500 | 1.4 | Card titles |
| Body L | Inter | 18px / 1.125rem | 400 | 1.6 | Lead paragraphs |
| Body | Inter | 16px / 1rem | 400 | 1.6 | Default body |
| Body S | Inter | 14px / 0.875rem | 400 | 1.5 | Secondary copy, captions |
| Caption | Inter | 12px / 0.75rem | 500 | 1.4, letter-spacing 0.08em | Eyebrow labels, metadata |
| Eyebrow | Inter | 11px / 0.6875rem | 500 | 1.4, letter-spacing 0.30em, uppercase | Pre-heading labels (e.g., "BRAND ONE · ₹10") |

**Italic:** Instrument Serif italic is allowed and encouraged for emphasis in display headlines (e.g., *Made to be loved*). Inter italic is rare — use only when absolutely necessary.

**Bronze accents on type:** display headlines may use Bronze for one phrase per heading to create emphasis. Never bold + colored together — pick one.

**Mobile:** all display sizes scale down by ~30%. Body sizes hold (16px minimum).

### 3.3 Color

```
INK         #0F0F0E    Primary dark surface, near-black with warmth
CREAM       #F5F1EA    Primary light surface, warm off-white
BRONZE      #9A6B3F    Single accent — CTAs, hover states, key dividers, italicized type emphasis

STONE-90    #2A2A26    Deepest neutral — used on Ink for divider lines
STONE-80    #444441    Body text on Cream when full Ink is too heavy
STONE-60    #5F5E5A    Secondary text
STONE-40    #888780    Tertiary text, muted captions
STONE-20    #B4B2A9    Borders on Cream
STONE-10    #D3D1C7    Subtle dividers on Cream
STONE-05    #EAE7DF    Faint surface variation on Cream
```

#### Usage rules

- **Default page surface:** alternates between sections of Cream and Ink. The site breathes by tonal shift, not by color injection.
- **Bronze is rare and deliberate.** Use for: primary CTA button, key italic phrases in display headlines, hover state on links, and one or two accent details per section. Never use Bronze as a section background. Never use Bronze for body text.
- **Never use pure black (#000) or pure white (#FFF).** Always Ink and Cream — the slight warmth is what keeps the system from feeling sterile.
- **Stone scale is for scaffolding** — body text, dividers, borders, secondary information. Never feature it.

#### Tonal pairings (use these — don't invent new ones)

| Surface | Display type | Body type | Accent |
|---|---|---|---|
| Cream `#F5F1EA` | Ink `#0F0F0E` | Stone-80 `#444441` | Bronze |
| Ink `#0F0F0E` | Cream `#F5F1EA` | Stone-40 `#888780` | Bronze |

#### Brand-color isolation

The brand panels on the home page are the **only** place AAMLO's or Clumzy's colors are allowed to appear inside the Sukudo parent system — and even there, only as a *wake* effect on hover/scroll. The Sukudo shell itself never adopts brand color.

### 3.4 Motion

The parent should never feel snappy, springy, or playful. It should feel **slow, intentional, and cinematic** — closer to a film cut than to a SaaS interaction.

#### Easing tokens

```
ease-cinematic    cubic-bezier(0.65, 0, 0.35, 1)    Default for major reveals
ease-soft         cubic-bezier(0.4, 0, 0.2, 1)      Default for micro-interactions
ease-emphatic     cubic-bezier(0.83, 0, 0.17, 1)    Reserved for hero entrances
```

**No spring animations** anywhere in the parent system. Springs are reserved for inside the AAMLO brand page (where playfulness is appropriate).

#### Duration tokens

```
duration-fast      200ms    Hover state changes, color shifts
duration-medium    400ms    Cards lifting, micro-reveals
duration-slow      700ms    Section reveals, page transitions
duration-cinematic 1100ms   Hero entrances, large image cross-fades
```

#### Motion principles

- **Type animates once on entry.** Body text never loops or wiggles. Display type may have a single character-by-character or word-by-word reveal on first view, then settles.
- **Video is the primary motion.** UI motion stays restrained around it.
- **Page transitions:** cross-dissolve or smooth scroll-handoff. Never slide-in, never flip. Duration ~700ms.
- **Scrolljacking is restricted.** Allowed only for the cinematic intro hero on the home page (one moment of anchored scroll). Never global. Never aggressive.
- **Hover states are subtle.** On links: underline grows in, or color shifts to Bronze. On panels: a tonal lightening, not a scale or shadow. Never bouncy.
- **Performance budget:** no animation should drop the page below 60fps on a mid-tier mobile device. Test on a 2022 Android mid-range, not just on a MacBook.

### 3.5 Photography & video direction

The parent's visual material is **macro craft, not wide industrial.**

#### Subject matter

- Tight, almost abstract fragments of the making process: light passing through glass, condensation forming on a chilled bottle, a goli dropping in slow motion, a label kissing a bottle's surface, liquid filling, a hand on a quality-control station.
- One human moment per intro maximum — the rest is product-and-craft.
- Never wide factory shots. Never people in lab coats smiling at the camera. Never assembly-line glamour shots.

#### Color grading

- Warm-neutral. Pulls toward Cream highlights and Ink shadows. Slight bronze cast in the midtones is acceptable.
- Never high-saturation. Never cool-blue (typical FMCG corporate cliché).
- Should not match either AAMLO's palette (warm yellows/oranges) or Clumzy's palette (deep blues/blacks) — the parent stays in its own tonal lane.

#### Editing & sound

- **Slow cuts.** Average shot length 3–5 seconds. No quick-cut energy.
- **Real ambient sound.** A hiss, a clink, a pop of pressure, a pour, ice settling. Music if used should be sparse and ambient — not driving.
- **Letterbox crop** for hero video (16:9 or 21:9 with deliberate masking) signals "cinema" rather than "video player".

#### References (in order of relevance)

1. Apple's product-introduction films (especially the manufacturing-focused segments)
2. Hermès workshop films (artisan-craft tone)
3. A24 cold opens (atmospheric restraint)
4. Olipop and Recess product films (modern beverage-craft tone)

#### Anti-references

- Slow-motion bottling line in cool-blue grading. This is the FMCG cliché we are explicitly avoiding.
- Drone shots of the factory exterior with sweeping music.
- Rapid-cut "energy" edits.

### 3.6 Logo

#### Current state

Sukudo has an existing monogram mark — two interlocking S-forms creating a four-petal/clover negative space at the center, originally inside a rounded-square container. The user has provided two versions:

1. **Container version:** outlined monogram inside a rounded square. Use this only when the logo is a standalone branded element on a non-Sukudo surface (e.g., partner deck, third-party listing).
2. **Symbol-only version:** monogram without the container, on a black plate. This is the preferred form for use on the website.

#### Refinement needed (one-day pass — pending)

The current mark has the right idea but is not yet built on a precise system. To do:

1. **Geometric precision** — outer corner radius and inner curves should relate mathematically (inner radius = outer radius minus stroke offset). Currently they read as drawn separately.
2. **Stroke-weight unification** — the four "letterforms" should share an identical stroke thickness aligned to a single grid unit.
3. **System completeness** — produce all of:
   - Outline mark (current style)
   - Solid/filled mark
   - Monogram alone (no container) — primary website use
   - Monogram in rounded square — secondary use
   - Wordmark lockup horizontal (mark + "SUKUDO CONSUMER" wordmark to its right)
   - Wordmark lockup stacked (mark above wordmark)
   - Wordmark alone (no mark — for tight horizontal contexts)
   - Minimum-size rules for each variant
   - Clear-space rules for each variant
   - Light-on-dark and dark-on-light versions

#### Wordmark direction

The "SUKUDO CONSUMER" wordmark should be set in a custom-tuned version of Instrument Serif (or a sister display face) — wide-tracked, all caps, weight 400. The wordmark is the only place the parent gets *expressive* — everywhere else, the system stays restrained.

#### Use rules in the website

- **Default in nav:** symbol-only mark (24px) + "SUKUDO CONSUMER" wordmark (10px, all caps, letter-spacing 0.20em), colored Cream on Ink or Ink on Cream.
- **Footer:** larger version of the same lockup, plus ©copyright line.
- **Hero/intro:** an opening "logo bumper" — symbol-only mark fades in on Ink for ~1.5s, then dissolves into the cinematic intro footage. This is the one cinematic flourish the logo gets.
- **Never tilt, animate, distort, or recolor the mark.** Never use it inside body copy. Never wrap text around it.

---

## 4. Page specifications

### 4.1 Home page [LOCKED structure, mocked]

The home is the most important page on the site. Every other page can be iterative; the home has to land on first visit.

#### Top-to-bottom anatomy

##### Section 1 — Logo bumper (optional, but recommended)
- Full-bleed Ink background.
- Sukudo monogram fades in centered, holds for ~1.2s, fades out.
- Total duration: ~2.5s.
- Skippable on scroll-down (ambient detection — if user scrolls in the first 1s, bumper accelerates to ~600ms then dissolves).
- Delivers the "this is a film, not a webpage" tone.

##### Section 2 — Atmospheric intro hero
- Full-bleed background: looping cinematic craft footage (per section 3.5). Muted by default with subtle ambient sound on user gesture.
- Centered overlay:
  - Display headline (Instrument Serif, ~72–96px desktop / scaled down on mobile). Working line: **"Built in India. *Made to be loved.*"** — italic phrase in Bronze.
  - Sub-line (~14px, Stone-40, max-width ~340px): a single sentence positioning Sukudo Consumer Products as the parent of AAMLO and Clumzy.
  - Scroll cue at bottom: "SCROLL ↓" eyebrow (Stone-80, letter-spacing 0.30em).
- Scrolljacking allowed here for ~one full viewport's worth — the hero footage should resolve cleanly into the two-doors moment.

##### Section 3 — The two doors
- 50/50 vertical split, full viewport height on desktop. **Stacks to 100/100 vertical on mobile** with each panel = 80vh.
- **Resting state:**
  - Both panels in Sukudo's tonal palette (Ink background, Cream type).
  - Eyebrow: "BRAND ONE · ₹10" (left) / "BRAND TWO · ₹40" (right).
  - Brand name in Display M Instrument Serif: AAMLO (left) / CLUMZY (right).
  - Tagline (Body S, Stone-40, two lines max): a one-sentence positioning per brand.
  - "ENTER →" CTA in Bronze, eyebrow style.
- **Hover/touch wake state:**
  - **AAMLO panel:** background tonally shifts toward warm orange/yellow (drawing from AAMLO's brand palette); ambient looped video of mango-burst footage fades in at low opacity behind the type; Bollywood-style hint without going full brand-page yet.
  - **CLUMZY panel:** background deepens to a richer cinematic tone; subtle blue-glass shimmer animates in the background; the "ENTER" CTA animates with a slow Bronze underline draw.
  - Wake transition: 700ms `ease-cinematic`. Reverse: 400ms `ease-soft`.
- **On click/tap:** crossfade page transition (~700ms) into the brand page.
- The dividing line between panels is a 0.5px Stone-90 vertical rule.

##### Section 4 — Sukudo as operator
- Surface: Cream.
- Purpose: B2B credibility for the distributor/investor visitor.
- Layout: editorial — left column has Display S Instrument Serif headline + 2-paragraph body. Right column has 3 stat cards stacked.
- Suggested copy framework (to be written by content):
  - Headline: "[Number] flavors. [Number] cities. One company that ships them all."
  - Body paragraph 1: who Sukudo Consumer Products is, what it makes, where.
  - Body paragraph 2: the manufacturing/quality story — incoming partnerships, scale signals, infrastructure.
  - Stat cards: "[Number]+ retail touchpoints", "[Number] flavors in production", "[Number] manufacturing partners" — exact numbers TBD by client.
- Below this: a strip of 4 macro craft images (per section 3.5) at full-width with no captions. Just texture.

##### Section 5 — Partner With Us teaser
- Surface: Ink.
- Purpose: route distributor/franchise/investor leads.
- Headline: "Want to work with us?" (Display S, Cream).
- Subtitle: short paragraph (Body, Stone-40) explaining who they partner with.
- 6 segment cards in a 3×2 grid: Distributor / Franchise / Shopkeeper / Supplier / Investor / Other.
  - Each card: 0.5px Stone-90 border, padding 24px, eyebrow + one-line description.
  - Hover: border shifts to Bronze, subtle Cream tint on background.
  - Click: routes to /partner with the segment pre-selected.
- Below the grid: a single Bronze CTA button — "GET IN TOUCH →" — that opens the same form with no segment pre-selected.

##### Section 6 — Footer
- Surface: Ink.
- Layout: 4 columns + bottom bar.
  - Col 1: Sukudo wordmark + tagline + ©2026.
  - Col 2: "Brands" — links to AAMLO page, Clumzy page, and outbound to brand domains (myclumzy.com, etc.) when those redirect.
  - Col 3: "Company" — About, Partner, Contact, Press.
  - Col 4: "Connect" — email (info@sukudoconsumer.com or similar), Instagram, LinkedIn, address.
- Bottom bar: 0.5px Stone-90 divider, then small print — Privacy, Terms, registered office address, GST/CIN if applicable.

#### Performance budget for home

- **Largest Contentful Paint (LCP):** under 2.5s on 4G mobile.
- **First video frame:** under 3s on 4G mobile (use poster image + lazy-load full video).
- **Total page weight:** under 4MB on initial load (defer below-fold video to scroll).
- **Lighthouse score:** 90+ on Performance, Accessibility, Best Practices.

### 4.2 AAMLO brand page [OPEN — direction set, full design pending]

#### Strategic direction

Bollywood-filmy, mass-market energy. Loud, fun, accessible, Hinglish-friendly. Should feel like the digital equivalent of a chatpata street drink — full personality, no apologies.

But: **we are not copying Lahori Zeera.** We elevate the genre with better craft. Imagine if a contemporary Indian visual director (Vasan Bala / Kanu Behl tone) made an FMCG website — same energy, much higher production value.

#### Visual system (to be designed in a separate session)

Working notes for that session:

- **Color:** saturated mango-yellows, sunset oranges, watermelon reds, deep bottle-greens for accent. Big, confident color blocks rather than gradients.
- **Typography:** keep Inter as the body face for legibility, but bring in a custom display face for headlines — something with Bollywood-poster energy. Possible directions: a contemporary script-meets-sans (think modern Devanagari-inspired Latin display), or a heavy condensed grotesque with custom tweaks.
- **Photography:** product hero shots that play with motion — bottles spinning, splashes, mango bursts. Hand-painted-feeling assets (real or rendered) for ingredient illustrations.
- **Copy register:** Hinglish allowed and encouraged. "Dhamakedaar mango." "Ekdum chilled." "Rs 10 mein puri party."
- **Animation:** can be playful — springs allowed, micro-bounces allowed, marquee scrolling text allowed. The energy should be high.

#### Page anatomy (placeholder)

- Hero with brand logo + tagline + flavor wheel (MANGOLO featured first).
- Flavor showcase — one section per flavor, each with its own dominant color.
- "How it's made" — quick, energetic. Different from the parent's slow craft direction; here it's playful.
- Where to find it — store locator or "coming soon" map.
- Distributor CTA — same Partner form, but themed in AAMLO's palette.
- Footer — site-wide footer (Sukudo system, not AAMLO-themed).

### 4.3 Clumzy brand page [OPEN — direction set, full design pending]

#### Strategic direction

Cinematic, premium, story-led. Closer in tone to the Kaalaiyan reference but **differentiated visually** — Kaalaiyan leans on Tamil cultural rooting and protest/legacy storytelling. Clumzy is contemporary, urban, and product-craft-focused. The story is the bottle, the goli mechanism, the flavor, the ritual of the pop.

#### Visual system (to be designed in a separate session)

Working notes for that session:

- **Color:** Ink as primary surface (so the parent and Clumzy share a dark mode language). Deep ocean-blue, premium glass-green, occasional soft cream for contrast. Bronze accents allowed as a bridge to the Sukudo parent.
- **Typography:** Instrument Serif inherits from the parent (continuity); display sizes can go larger and more dramatic. A second display face may be added for variety — possibly a more modern-cinematic serif like Migra or Reckless.
- **Photography:** hero glass-bottle photography with dramatic lighting. Liquid in motion. The goli mechanism close-up. The pop captured in slow motion. Strong cinematographic lighting (single key light, deep shadows).
- **Animation:** chapter-driven scroll narrative, similar in *structure* to Kaalaiyan but with our own visual language. Slow, deliberate, ScrollTrigger-driven.
- **Copy register:** literary, considered, slightly poetic. "The pop you remember. Reborn for the present." Avoid heavy nostalgia clichés.

#### Page anatomy (placeholder)

- Hero with logo + atmospheric bottle hero shot + one cinematic line.
- Chapter 1: "The bottle" — the goli mechanism, why glass, why this design.
- Chapter 2: "The flavors" — Blueberry and Pina Colada showcased one at a time.
- Chapter 3: "The ritual" — drinking Clumzy as an experience.
- Chapter 4: "Distribution / partner" — segmented CTA themed in Clumzy's palette.
- Footer — site-wide footer (Sukudo system, not Clumzy-themed).

### 4.4 About / Company [OPEN — outline only]

This page exists to satisfy the B2B audience that wants to *know more* than the home page band offers.

#### Sections (to design)

1. **Hero** — Display L Instrument Serif headline establishing Sukudo's mission. One sentence.
2. **The story** — 2–3 paragraphs editorial. Who founded Sukudo Consumer Products, why, what we believe about beverages and the Indian market.
3. **Manufacturing** — a real, tangible block. Where products are made, partner facilities, quality controls. Use real macro craft photography.
4. **The portfolio** — quick visual handoff to AAMLO and Clumzy (smaller version of the two-doors panel from home).
5. **Leadership** — names, titles, headshots. Kept simple — no bios in v1, but optional links to LinkedIn.
6. **Partner CTA strip** — same Partner With Us teaser as on the home page.

### 4.5 Partner With Us [OPEN — pattern locked, full design pending]

#### Pattern (locked)

Modeled on Kaalaiyan's segmented intake but visually elevated. The form is a *conversation*, not a database insert.

#### Flow

1. **Step 1 — Identify yourself.** Single screen with 6 large cards: Distributor, Franchise, Shopkeeper, Supplier, Investor, Other. User picks one.
2. **Step 2 — Tell us about you.** Form fields adapt to segment:
   - Distributor: name, company, city, region covered, currently distributes which categories, phone, email
   - Franchise: name, current business, location interest, investment range, phone, email
   - Shopkeeper: shop name, location, current beverage suppliers, monthly volume, phone
   - Supplier: company, what they supply, capacity, certifications, phone, email
   - Investor: name, firm (optional), investment thesis fit, ticket size range, phone, email
   - Other: free-text "tell us how you'd like to work with us" + name, email, phone
3. **Step 3 — Confirmation.** "Thank you. We'll be in touch within 2 working days." Plus a "While you wait, meet our brands" handoff to AAMLO and Clumzy.

#### Backend

All segments route to one inbox (e.g., partner@sukudoconsumer.com) with the segment as the email subject prefix. Internally, leads can be triaged from there. CRM integration (HubSpot, Pipedrive, or similar) recommended once volume justifies it.

#### Visual treatment

- Surface: Cream, with one full-bleed Ink hero strip at the top.
- Form inputs: Inter Body, 16px minimum. Bronze focus rings. Stone-20 borders.
- CTA buttons: Bronze background with Cream text. Single primary CTA per step.
- Progress indicator: thin top bar showing 1 / 2 / 3.

### 4.6 Contact [OPEN — outline only]

A simple page. Intentionally minimal because the Partner With Us page does most of the work.

#### Sections

- Hero: "Get in touch." Display S.
- Three cards: General enquiries, Press, Careers (later).
- Office address with map embed (small).
- Generic contact form (name, email, message). Routes to general inbox.

---

## 5. Component library & UI patterns

### 5.1 Navigation

- **Position:** sticky top, ~64px tall. Goes from transparent over hero to Ink-tinted with backdrop blur on scroll.
- **Left:** Sukudo monogram + "SUKUDO CONSUMER" wordmark.
- **Center/right:** 4 nav links — BRANDS / ABOUT / PARTNER / CONTACT — Inter 11px, letter-spacing 0.08em, Stone-40, hover Bronze.
- **Brand pages variant:** the navigation tints subtly to match the brand world (AAMLO: warm undertone; Clumzy: cool undertone) but the structure stays identical.
- **Mobile:** hamburger menu reveals a full-screen Ink overlay with the same links centered, Display M sizing.

### 5.2 Footer (already specified in 4.1, Section 6)

### 5.3 Buttons

| Variant | Background | Border | Type | Use |
|---|---|---|---|---|
| Primary | Bronze | none | Cream, Inter 14px 500 | Form submits, key CTAs |
| Secondary | transparent | 0.5px Stone-90 (on Ink) or Stone-20 (on Cream) | Inherits surface text color | Most CTAs |
| Eyebrow link | none | none | Bronze, 11px caps, letter-spacing 0.30em | "ENTER →" type micro-CTAs |

All buttons: 12px vertical padding, 24px horizontal padding, no border-radius (sharp corners — feels more cinematic / less SaaS).

Hover: 200ms `ease-soft`. Primary lightens to a slightly brighter Bronze. Secondary borders shift to Bronze.

### 5.4 Forms

- Input height: 48px on desktop, 52px on mobile.
- Inter Body 16px (mobile-safe — won't trigger iOS zoom).
- Border: 0.5px Stone-20 default → Bronze on focus (with 2px Bronze focus ring).
- Labels: Body S, Stone-60, above the input. Never inside (no floating labels — they're a SaaS pattern).
- Validation errors: red `#A32D2D` (matches the c-red 800 from the design system), small caption below the input.

### 5.5 Page transitions

- Default between any two pages: cross-dissolve, 700ms `ease-cinematic`.
- Home → brand page: a slight tonal pulse (the panel that was clicked briefly fills the screen at full opacity, then crossfades into the brand page). Total duration ~900ms.
- Brand page → home: standard cross-dissolve back.

### 5.6 Cards / sections

- **Editorial sections:** no card wrapper. Prose flows naturally with generous margin (96px+ vertical breathing room between sections on desktop, 56px on mobile).
- **Stat cards:** Cream surface, 0.5px Stone-20 border, 32px padding, no shadow. Display S number + Body S label below.
- **Segment cards (Partner page):** as above, but with a subtle hover lift (translateY -2px, 300ms).

---

## 6. Reference materials [REF]

### 6.1 Reference site analysis — Lahori Zeera (AAMLO benchmark)

**URL:** https://lahorizeera.com/

**What it does well:**
- Bollywood-energy color and motion. Clear visual personality.
- Hinglish copy. Doesn't apologize for the regional voice.
- Flavor-as-character-color coding.
- Heavy product photography — bottles always present.
- "Star-cast" framing for flavors — fun, ownable narrative.

**What we'll do differently for AAMLO:**
- Much higher production value. Lahori's site is loud but feels like a stock template forced to be loud. AAMLO should be loud and *crafted.*
- Cleaner typography hierarchy.
- Smarter scroll narrative — Lahori is a long scroll of stuff; AAMLO should have rhythm.
- Better photography — not stock-bottle-on-color-block; properly shot product imagery with movement.
- Cleaner distributor flow — Lahori's intake is buried.

### 6.2 Reference site analysis — Kaalaiyan (Clumzy benchmark)

**URL:** https://kaalaiyan.in/

**What it does well:**
- Cinematic chapter-driven scroll. Treats the site like a film.
- Strong cultural rooting (Tamil identity, Jallikattu, regional pride).
- Premium product photography — glass bottles shot like jewelry.
- **Distributor-first segmented intake.** This is the model for our Partner With Us page — borrow the structure, elevate the visual treatment.
- B2B testimonials (distributors, not end consumers) — smart for a brand whose buyers are stores, not shoppers.

**What we'll do differently for Clumzy:**
- Different cultural rooting. Clumzy is urban-contemporary, not regional-heritage.
- More restrained color use — Kaalaiyan leans heavy red; we want a more refined palette.
- Less protest-energy copy. Clumzy's voice is considered, not defiant.
- Tighter editorial pacing — Kaalaiyan can drag in places.

### 6.3 Aesthetic references (for the parent system)

**Visual / motion:**
- Apple product films (manufacturing segments)
- Hermès workshop films
- A24 cold opens
- Olipop website (modern beverage brand)
- Recess website
- Bombay Sweet Shop (Indian premium brand presentation)
- Forest Essentials (premium Indian brand storytelling)

**Typography systems:**
- Linear's typographic restraint
- Vercel's grotesque + display pairing
- Cursor's editorial use of serif

### 6.4 Anti-references

Avoid the typography, layout, and motion direction of:
- Most Indian FMCG corporate sites (Parle, Britannia, Dabur — all dated)
- Generic Bollywood entertainment sites (loud for loudness's sake)
- Corporate-blue-gradient SaaS aesthetics
- Awwwards-of-2018 parallax-heavy "creative agency" sites

---

## 7. Build phases / roadmap

### Phase 0 — Pre-build
- Logo refinement pass
- Brand visual systems for AAMLO and Clumzy designed and approved
- Photography/video shoot (parent craft footage) commissioned
- Domain and hosting setup
- CMS content model defined

### Phase 1 — Core build
- Sukudo home page (sections 1–6 of 4.1)
- About / Company page
- Partner With Us page with full segmented form
- Contact page
- Navigation, footer, page transitions
- CMS integration for editable content

### Phase 2 — Brand pages
- AAMLO brand page (full immersive build)
- Clumzy brand page (full immersive build)
- Brand domain redirects configured

### Phase 3 — Polish & launch
- Performance optimization pass
- Accessibility audit (WCAG AA minimum)
- Cross-browser/device QA
- Analytics setup
- SEO setup (per-page meta, OpenGraph, structured data for organization and brands)
- Email setup (DKIM, SPF, DMARC verified)
- Pre-launch security audit (security headers, no exposed admin routes)
- Soft launch → full launch

### Phase 4 — Post-launch (next 90 days)
- Monitor distributor lead volume; refine form if conversion is weak
- Add News/Press section if PR volume justifies
- Add testimonials/case studies once early distributor partnerships exist
- Iterate brand pages based on engagement data

---

## 8. Open decisions

These are the items that still need explicit calls before or during build:

1. **Logo refinement** — execute the precision pass and produce the full system (section 3.6).
2. **Hero copy** — "Built in India. Made to be loved." is the working line. Lock or replace before build.
3. **AAMLO visual system** — full design session to produce typography, color, and motion language for the AAMLO brand page (section 4.2).
4. **Clumzy visual system** — full design session to produce typography, color, and motion language for the Clumzy brand page (section 4.3).
5. **Photography & video production** — define shot list, commission shoot for parent craft footage. Roughly 8–12 hero loops, 20+ macro stills.
6. **Stats and numbers** for Sukudo-as-operator section — actual figures to use.
7. **Domain registrations** — confirm sukudoconsumer.com vs sukudoconsumer.in primary; register AAMLO domains (aamlo.com / aamlo.in availability check).
8. **CMS content model** — define schemas for Brand, Flavor, Distributor Testimonial, Press Item, Office Location, etc.
9. **Email infrastructure** — set up partner@, info@, press@ on Google Workspace; DNS records.
10. **Analytics platform** — Plausible vs GA4 final call.
11. **Logo bumper opening** — confirmed in this spec but should be re-validated against page-load performance once built.

---

## 9. Glossary

| Term | Meaning |
|---|---|
| **Parent** | Sukudo Consumer Products as a corporate entity and visual system. Applies to home, About, Partner, Contact. |
| **Brand page** | The dedicated immersive page for one of the brands (AAMLO or Clumzy), with its own visual system. |
| **Two doors** | The 50/50 home page section where AAMLO and Clumzy are both presented, side by side. |
| **Lobby** | The home page concept overall — Sukudo as the lobby that hands off to two brand worlds. |
| **House of Brands** | Strategic structure where one parent company holds multiple distinct brand identities (e.g., Coca-Cola Company → Coke / Sprite / Fanta). |
| **Wake state** | The hover/touch-activated state of a brand panel on the two-doors section, where the panel briefly previews its full brand world. |
| **Macro craft** | The photography/video direction for the parent — tight, abstract, beautiful fragments of the making process, vs. wide industrial factory shots. |
| **Stone scale** | The warm-gray family used for scaffolding (body text, dividers, borders). Stone-90 is darkest, Stone-05 lightest. |
| **Bronze** | The single accent color in the parent palette (#9A6B3F). Used sparingly. |

---

*End of document. Last updated: working draft, current session.*

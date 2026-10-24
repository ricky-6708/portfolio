Anti-Vibe Code rules

# PRODUCT DESIGNER PORTFOLIO - DESIGN SYSTEM & CODE DIRECTIVES

You are acting as a Senior Design Systems Engineer. You are building a minimalist, high-end Product Designer portfolio inspired by modern editorial design (e.g., Dieter Rams, Minimalist Swiss Typography, Luke Taylor) combined with the spacious, high-contrast visual architecture of **Rome Michal** (https://romemichal.pl/#portfolio) and the geometric **Satoshi** typography stack seen on **Joe Mallory-Skinner's design portfolio** (https://www.joemalloryskinner.design/).

## CRITICAL VISUAL DESIGN RULES (STRICTLY ENFORCED)

### 1. COLOUR & STYLING ANTI-PATTERNS (NEVER USE)
- NO GRADIENTS: Strictly forbidden. No linear, radial, or mesh gradients anywhere in backgrounds, text, or borders. Use solid 100% flat colours.
- NO PURPLE/VIOLET/NEON ACCENTS: Do not use neon colours, purple hero background glows, or high-saturation border highlights.
- NO GLOWING HOVER STATES: No `shadow-[0_0_20px_rgba(...)]`, drop-shadows with colored light, or ambient background halos.
- PALETTE: Use neutral monochrome (pure black `#000000`, white `#ffffff`, slate/zinc grays for borders). Accents must be monochromatic or ultra-restrained (e.g., a single mute gray or subtle high-contrast ink colour).

### 2. COMPONENT & LAYOUT ANTI-PATTERNS (NEVER USE)
- NO CARD FATIGUE: Do NOT wrap every section, text block, or metric in a rounded box or shadow card. Use clean white space, thin structural divider lines (`border-t border-zinc-200`), and typography hierarchy to separate content.
- NO EMOJIS AS ICONS: Never use emojis in navigation, headings, bullet points, or metadata tags. Use Lucide SVG icons sparingly or plain text labels.
- NO MEANINGLESS STATUS DOTS: Do NOT add green pulsing circles (`animate-ping`), status badges, or "available for work" green dots unless explicitly requested with functional state logic.
- NO FLOATING CHIPS/TABS FOR SIMPLE LISTS: Keep category labels as clean, flat uppercase typography tags (`text-xs font-medium tracking-wider text-zinc-500`), not pill-shaped buttons with rounded borders unless interactive.
- NO 45-DEGREE ANGLED ARROWS: Strictly forbidden. Do not use diagonal or 45-degree pointing external link arrows (e.g., ↗) on inline text links, buttons, or navigation items. Keep all typography and link indicators clean without decorative diagonal arrows.

### 3. TYPOGRAPHY & FONT DIRECTIVES (INSPIRED BY JOE MALLORY-SKINNER)
- **PRIMARY FONT (LOCAL)**: Use `Satoshi` as the primary sans-serif typeface for headlines, navigation, and body copy (referencing the clean aesthetic on `joemalloryskinner.design`).
  - Import path: `./public/fonts/satoshi/satoshi.css`
  - CSS variable / class name: `font-satoshi` or `font-sans: ['Satoshi', 'sans-serif']`
- **SECONDARY / ACCENT FONT (GOOGLE FONTS)**: Use Google Fonts as a fallback or secondary accent where specified (e.g., `Inter` or `Plus Jakarta Sans`).
  - Ensure Google Fonts are loaded via `@import` or `<link>` with optimal font-display performance (`font-display: swap`).
- **NO EXCESSIVE EM-DASHES**: Do not use `—` punctuation in generated titles or body text.
- **NO SERIF OVERUSE**: Stick strictly to a crisp, high-legibility geometric or neo-grotesque sans-serif font stack.
- **NO AI BUZZWORD COPY**: Avoid words like "delve", "seamless", "tapestry", "empower", or "user-centric ecosystem". Write like a pragmatic, data-focused Product Designer.

### 4. DEFAULT LAYOUT & SPACING STRUCTURE (INSPIRED BY ROME MICHAL)
- **Expansive Negative Space & Ample Padding**: Mirror the clean, spatial layout of `romemichal.pl/#portfolio`. Prioritise large open margins and generous vertical padding (`py-16` to `py-24` / `64px` to `96px`) to give content breathing room.
- **Rounded Corner Framing**: Apply consistent rounded corners across all image containers, cards, and interactive frames (`border-radius: 12px` to `16px` or `rounded-xl` / `rounded-2xl`).
- **Image Margins & Borders**: Every inline image or media showcase must feature smooth rounded corners, subtle neutral framing (`1px solid rgba(0,0,0,0.05)` or `border-zinc-200`), and clean bottom margin spacing (`mb-8` to `mb-12`).
- **Clean Typography Scale**: Prioritise clean typography scale (`text-4xl font-bold tracking-tight`, `text-base text-zinc-600 leading-relaxed`).
- **Subtle Structural Borders**: Borders must be thin, subtle, and neutral (`border-zinc-200` in light mode, `border-zinc-800` in dark mode).

Responsive Rules:

### 5. RESPONSIVE VIEWPORTS
- SET UP ROBUST BREAKPOINTS FOR ALL DEVICE TYPES: check your work across mobile, tablet and desktop to make sure the web design layout and interactions are fully responsive.

Interaction, Transition and Animation Rules:

### 6. SCROLL-DRIVEN REVEALS & NUMBER TICKERS
- IMPLEMENT VIEWPORT-BASED EXECUTION: Trigger all statistical number tickers, content blocks, images, and layout components only when they scroll into the active viewport using the Intersection Observer API or Scroll-Driven CSS. Off-screen components must delay execution, dynamic rendering, and opacity transitions until their boundary targets enter active viewport thresholds to optimise initial load times and overall performance.

### 7. STAGGERED & SPRING-BASED ENTRANCES
- IMPLEMENT STAGGERED SPRING-DRIVEN REVEALS: Apply smooth fade-in and slide-up entrance transitions to layout grids, text blocks, and cards. Utilise staggered delay offsets (e.g., 50ms increments) and spring-physics curves rather than linear timing to ensure a responsive, tactile UI entry on initial load or navigation.

### 8. HOVER STATES & COMPOUND INTERACTIONS
- ENFORCE FLUID MICRO-INTERACTIONS: Ensure interactive items respond to hovers with smooth, hardware-accelerated transformations (e.g., scale(1.02) or opacity shifts) using a unified transition baseline (e.g., 300ms cubic-bezier(0.4, 0, 0.2, 1)).
- CHAIN CHILD REACTIONS ON CARD TARGETS: Configure compound components (e.g., portfolio cards) to propagate state changes down to child elements. Hovering the parent frame must simultaneously scale background graphics, alter typography, and translate icons in a single synchronised interaction loop.

### 9. STICKY UI & ROUTE TRANSITIONS
- IMPLEMENT BOUNDED STRUCTURAL STICKINESS: Ensure top-level navigation arrays or vital context modules dock reliably against screen borders during vertical scrolling. These components must adapt background blur (e.g., `backdrop-filter: blur()`) or transparency factors based on relative layout parameters, anchoring navigation context safely without obstructing text fields.
- PREVENT HARD PAGE RELOADS VIA ROUTE INTERCEPTION: Drive all internal navigation asynchronously. Route links must intercept clicks, execute component exit animations, reset scroll coordinates to (0,0), and load replacement views without jarring full-page flashes.

Typography Rules:

## 10. SYNTAX TYPOGRAPHY STRUCTURE (SATOSHI TYPE SYSTEM)
| Element | Font Weight | Font Size | Line Height | Letter Spacing | Hex Color | Purpose / Best Practice |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | Black (`900`) | 90px | 100px | -2.5px (`-0.03em`) | `#000000` | Hero headlines & primary page titles |
| **H2** | Black (`900`) | 64px | 72px | -1.8px (`-0.025em`) | `#000000` | Major lifecycle & page section titles |
| **H3** | Black (`900`) | 48px | 56px | -1.2px (`-0.02em`) | `#000000` | Subsections, impact statements, large callouts |
| **H4** | Black (`900`) | 36px | 44px | -0.8px (`-0.015em`) | `#000000` | Feature headers, case study project cards |
| **H5** | Medium (`500`) | 28px | 36px | -0.4px (`-0.01em`) | `#000000` | Component block titles, testimonial quotes |
| **H6** | Medium (`500`) | 24px | 34px | 0px | `#000000` | Subsection subheadings, secondary card headers |
| **Intro** | Regular (`400`) | 24px | 34px | -0.2px | `#000000` | Executive summaries, lead intro paragraphs |
| **Body Sub-Heading** | Bold (`700`) | 18px | 28px | 0px | `#000000` | Primary body content, narrative text |
| **Body Copy** | Regular (`400`) | 18px | 28px | 0px | `#000000` | Primary body content, narrative text |
| **Quote** | Medium (`500`) | 28px | 38px | -0.4px | `#000000` | Key takeaways, pull quotes, testimonial bodies |
| **Main Nav Links (Default)** | Regular (`400`) | 20px | 30px | 0px | `#6B7280` | Main header nav items ('About', 'Work', 'Contact') default state (subtle gray, no underline) |
| **Main Nav Links (Hover)** | Regular (`400`) | 20px | 30px | 0px | `#6B7280` | Main header nav items hover state (subtle gray + underlined) |
| **Main Nav Links (Selected)**| Medium (`500`) | 20px | 30px | 0px | `#000000` | Main header nav items active/selected state (solid black, no underline) |
| **Sticky Menu Links (Default)** | Regular (`400`) | 16px | 24px | 0px | `#6B7280` | Left sticky menu lifecycle links default state (subtle gray, no underline) |
| **Sticky Menu Links (Hover)** | Regular (`400`) | 16px | 24px | 0px | `#6B7280` | Left sticky menu lifecycle links hover state (subtle gray + underlined) |
| **Sticky Menu Links (Selected)**| Medium (`500`) | 16px | 24px | 0px | `#000000` | Left sticky menu lifecycle links active/selected state (solid black, no underline) |
| **Captions** | Regular (`400`) | 14px | 22px | +0.4px (`+0.02em`)| `#6B7280` | Image captions, meta timestamps, role labels |
| **Chips / Tags** | Medium (`500`) | 14px | 20px | +0.4px (`+0.02em`)| `#4B5563` | Flat uppercase metadata tags (Role, Domain, Stack) |
| **Hyperlink** | Bold (`700`) | 18px | 28px | 0px | `#000000` | Inline text links in prose/body (always bold & underlined regardless of state) |

## 11. PORTFOLIO TAXONOMY & STRUCTURE DIRECTIVES
- **SINGLE SOURCE OF TRUTH**: Always reference the architecture and layout rules defined in `./config/taxonomy.ts` when building or updating pages.
- **CASE STUDY CONTENT COMPLIANCE**: 
  - **Strict Index File Adherence**: The individual case study `index.md` file located within each project directory must be strictly followed when writing, structuring, or building any case study page. This rule applies universally to all featured and past case studies without exception.
- **WORK LANDING PAGE & HERO SECTION**:
  - **Hero Heading (H1)**: 'A closer look at the work I’ve helped shape'
  - **Hero Paragraph**: 'Take a peek at my featured projects alongside select foundational work from my career. Explore rigorous user-centered processes and measurable business outcomes, accelerated with a thoughtful pinch of AI to push design velocity further.'
- **WORK LANDING PAGE LAYOUT & ENTRY POINT STRUCTURE**: 
  - **Layout Structure**: Each case study entry point must be structured in a 2-column layout where items #1, #2, and #3 are grouped on the left, and item #4 (the thumbnail) sits on the right:
    1. Client name (Caption style, uppercase tracking, `14px`, `#6B7280`)
    2. Heading (H3 Bold `48px`, `-1.2px` letter-spacing, `#000000`)
    3. Outcomes-led blurb of copy (Body copy style, `18px`, `28px` line-height, `#000000`)
    4. Thumbnail media frame (`rounded-2xl`, subtle border, clean image display)
  - **Top 5 Featured Case Studies** (Stacked vertically with explicit thumbnail paths and copywriting mappings):
    - **1. British Gas Billing App**
      - Client: British Gas
      - H3 Heading: Cutting 55,000 Inbound Calls with Streamlined App Billing
      - Blurb: Cut paperless billing calls by 20% in three months, preventing 55,000 inbound enquiries and saving £220,000.
      - Thumbnail Path: `content/case-studies/bg-billing-app/images/billing-thumbnail.jpg`
    - **2. British Gas Join Journey Revamp**
      - Client: British Gas
      - H3 Heading: Streamlining a 16-Step Acquisition Flow into 7 Steps
      - Blurb: Cut a 16-step quote journey down to 7, raising sales conversion from 6% to 8% (33% more customers acquired on the same traffic) and reducing quote time from 3m 26s to 1m 10s.
      - Thumbnail Path: `content/case-studies/bg-join-revamp/images/join-thumbnail.jpg`
    - **3. EE Saved Payment Cards**
      - Client: EE
      - H3 Heading: Shipping an MVP in Three Weeks to Lift Checkout Conversion
      - Blurb: Shipped an MVP in three weeks, lifting checkout conversion from 4.2% to 4.62% and reducing inbound support calls by 20%.
      - Thumbnail Path: `content/case-studies/ee_saved-payment-cards/images/saved-cards-thumbnail.jpg`
    - **4. EE Cyber Security**
      - Client: EE
      - H3 Heading: Reaching 11.2% Sales Conversion on Paid Antivirus Plans
      - Blurb: Reached an 11.2% sales conversion to paid antivirus plans among qualified ID Checker users, outperforming targets by 3.5% with user satisfaction scores of 6.8/7.
      - Thumbnail Path: `content/case-studies/ee_cyber-security/images/cs-thumbnail.jpg`
    - **5. British Gas Merge & OAM**
      - Client: British Gas
      - H3 Heading: Unifying Account Management & Operational Portals
      - Blurb: Streamlined multi-product account handling to eliminate friction points, successfully reducing customer churn drivers and simplifying self-service meter submissions.
      - Thumbnail Path: `content/case-studies/bg-merge-oam/images/merged-thumbnail.jpg`
  - **Bottom 6 Past Projects** (Formatted as a horizontal scroll scroller with explicit Left and Right scroll control buttons):
    - `orange-tv` -> Thumbnail: `content/case-studies/orange-tv/images/recycle-thumbnail.jpg`
    - `jw-website` -> Thumbnail: `content/case-studies/jw-website/images/jw-thumbnail.jpg`
    - `orange-recycling` -> Thumbnail: `content/case-studies/orange-recycling/images/recycle-thumbnail.jpg`
    - `orange-livescreen` -> Thumbnail: `content/case-studies/orange-livescreen/images/ls-thumbnail.jpg`
    - `orange-app-tv` -> Thumbnail: `content/case-studies/orange-app-tv/images/actv-thumbnail.jpg`
    - `orange-on-demand-care` -> Thumbnail: `content/case-studies/orange-on-demand-care/images/ocs-thumbnail.jpg`
- **CASE STUDY TEMPLATE**: All full case study pages must use the 2-column grid (1:3 ratio) layout. 
- **STICKY MENU & CONTENTS STRUCTURE**: 
  - The left column sticky menu must feature an upper-case `CONTENTS` heading.
  - Mandatory lifecycle steps must be numbered: `01 Discovery`, `02 Define`, `03 Ideation`, `04 Design`, `05 Testing`, and `06 Outcomes`.
  - A subtle horizontal divider line must separate the lifecycle steps from external links.
  - A separate `Back to homepage` navigation link must sit below the divider line to return to the Work landing page, styled using caption typography specifications (`14px` size, `22px` line-height, `+0.4px` letter-spacing, `#6B7280` default color) and following the standard text link states (Default: Regular `#6B7280` without underline, Hover: Regular `#6B7280` with underline, Selected: Medium `#000000` without underline).
  - **Text Link & Navigation Size Differentiation**: Main top navigation links ('About', 'Work', 'Contact') are sized at `20px` (`text-xl`), whereas left column sticky menu lifecycle links ('Discovery' through 'Outcomes') are sized smaller at `16px` (`text-base`). Both follow the identical state behavior pattern: Default (`Satoshi Regular #6B7280`, no underline), Hover (`Satoshi Regular #6B7280`, underlined), Selected (`Satoshi Medium #000000`, no underline).
- **GLOBAL CONTROLS**: Render a floating "Back to top" button in the bottom right corner with smooth-scroll execution.
- **OPTIONAL SECTIONS**: Note that `Customer type` is optional and may be omitted in certain case studies, but all six main lifecycle stages (Discovery through Outcomes) remain strictly mandatory.
- **GITHUB PAGES DEPLOYMENT RULE**: Always use relative paths (e.g., `./` or relative file links) for all asset references, images, fonts, and internal navigation. Never use leading slashes (e.g., `/images/...`) because GitHub Pages hosts project sites under a subpath repository URL.

## 12. ABOUT PAGE LAYOUT & TESTIMONIAL SPECIFICATIONS
- **ABOUT HERO SECTION (1:2 COLUMN GRID)**:
  - The hero section must use a 2-column grid layout (1:2 ratio).
  - **Left Column**: Displays the bio headline and full background summary copy.
  - **Right Column**: Displays the `about-ricky.jpg` profile image. The image must be sized prominently and must not appear too small.
- **SKILLS CATEGORIES SECTION**:
  - Must be laid out in a **2-column grid** with widths split evenly (50/50 distribution) across categories like design methods, leadership, collaboration, tools, and skills.
- **TESTIMONIAL CARDS (JOE MALLORY-SKINNER PATTERN)**:
  - **Dimensions**: All testimonial cards must maintain fixed height and width dimensions.
  - **Layout**: Clean flat containers featuring thin neutral borders (`border-zinc-200`) and soft rounded corners (`rounded-xl` / `rounded-2xl`).
  - **Components**: Client logo image, quote body text in `Satoshi` (`leading-relaxed`), recommender name, role attribution, uppercase company metadata, and author avatar.
  - **Horizontal Scroller & Controls**: The testimonial cards must be arranged in a horizontal scroll container equipped with functional **Left and Right arrow buttons** for seamless navigation.
  - **Expandable Interaction**: Each card must support a "Read more" text link that smoothly expands the card vertically to reveal full quote copy when clicked.

  ## 13. CONTACT PAGE LAYOUT SPECIFICATIONS
- **LAYOUT & SPACING**: The Contact page must use a minimalist layout featuring generous vertical negative space and clean vertical alignment.
- **HEADER & INTRO**: 
  - Headline: "Let's talk"
  - Intro copy outlining product design challenges, end-to-end journey leadership, and AI workflow transformations.
- **CONTACT CARDS GRID**: 
  - **Equal-Width 2-Column Grid**: The email card and LinkedIn card must sit side-by-side in a 2-column grid with even width distribution.
  - **Components**: Each card must include its respective asset icon (`contact-email-icon.png` and `contact-linkedin-icon.png`), clear labels, and action values (`rickympatel5@gmail.com` and "Connect on LinkedIn").

  ## 14. RESPONSIVE DATA TABLES
- **HORIZONTAL SCROLL & FLUID SCALING**: All data tables embedded within case studies (such as competitor analysis grids) must be wrapped in a container that enables horizontal scrolling on narrow viewports (`overflow-x-auto`) rather than awkwardly compressing or breaking the screen width.
- **TYPOGRAPHY & PADDING**: Table cells must maintain legible typography scale (`text-sm` / `text-base`), crisp neutral borders (`border-zinc-200`), and clean padding (`px-4 py-3`) to preserve a polished editorial aesthetic across mobile, tablet, and desktop viewports.

  ## 15. GLOBAL FOOTER SPECIFICATION (INSPIRED BY JOE MALLORY-SKINNER)
- **LAYOUT & SPACING**: The footer must span full-width with a clean, generous vertical padding (`py-12` to `py-16`) separated from the main page content by a subtle, neutral border (`border-t border-zinc-200`).
- **ELEMENTS INCLUDED**:
  - **Name / Brand Label**: Left-aligned minimalist text displaying your name ("Ricky Patel").
  - **Footer Navigation**: Quick links matching your global taxonomy (`About`, `Work`, `Contact`).
  - **Social Links**: Clean, text-based or minimal icon links (e.g., LinkedIn).
  - **Copyright & Timestamp**: Right-aligned or stacked small caption text (`text-xs text-zinc-500`) displaying the current year and copyright notice (e.g., `© 2026 Ricky Patel. All rights reserved.`).
- **TYPOGRAPHY**: Set entirely in the local `Satoshi` font using caption scale (`13px` / `text-xs`) and tracking-wider uppercase styling where appropriate.
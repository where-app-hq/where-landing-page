# where.app Landing Page

---

## The Soul of Where App

> This section is the single source of truth for what Where App is, who it is for, and how it should speak. Every copy decision, design decision, and product decision on this page flows from here. Read this before changing anything.

---

### What Where App Is

Where App is a free iOS app that turns every trip you take into a wayline — your personal, private memory of everywhere you went. Press record, go live your life, and the app traces your route, marks your stops, and saves it all. Only you can see it. It lives on your phone, encrypted, not on anyone else's server.

Six months later you open the app and you are transported right back.

---

### The Three Pillars

Every word on this page must serve at least one of these three:

**1. Frictionless**
The magic is that you do nothing. Press record. That is it. The app does the rest. You live the trip. You do not log it, annotate it, or think about it. This is the core differentiator. No other app disappears this completely and still captures everything.

**2. Private**
Your location history is one of the most personal things that exists. Where App stores it on your device, encrypted. Not on our servers unless you choose to sync. Not sold. Not shared. Not visible to big tech. This is framed as ownership ("only you can see it"), not as fear. We do not say "protect yourself from Google." We say "it belongs to you."

**3. Forever Memories**
The emotional payoff is nostalgia. It is the feeling of opening your phone and being transported back to a specific place and moment. The route you took. The side street you found. The stop you almost skipped. These are the things that get forgotten. Where App makes them permanent without asking you to do anything to preserve them.

---

### The Ideal Customer Profile

| Attribute | Detail |
|---|---|
| Age | 25 to 35 |
| Type | Social media creator, lifestyle documenter |
| Platform | iPhone (iOS primary, TestFlight beta) |
| Traffic source | TikTok, Instagram — warm traffic, already aware of the app |
| First open trigger | They want to remember a specific trip they are on or just finished |
| Core pain | They forget places, routes, and moments faster than they expect |
| Privacy stance | Cares about privacy but does not want to think about it — wants it handled |
| Relationship with nostalgia | Strong. They look back at old photos, rewatch trip videos, want to relive experiences |
| Attention span on landing | 3 seconds to decide. They are on mobile. They scroll fast. |

---

### The Problem (never stated directly — always implied)

You go places. You have experiences. But your location history lives on someone else's server, in a format you did not choose, accessible to companies you do not control. And even if you wanted it, you could not get it back in any meaningful way. The memories fade. The route you took, the stops you made, the places you found — gone.

---

### The Solution

Where App gives that history back to you. It builds up automatically, in the background, trip by trip. Private. Encrypted. Yours. And when you want to go back, it is all there — not a list of coordinates but a living map of your life.

---

### The Emotional Promise

The joy of opening your phone six months later and being transported right back to exactly where you were. The route you took. The stop you almost did not make. The place you found by accident and cannot find again. That memory belongs to you.

---

### Brand Voice

| Principle | What it means in practice |
|---|---|
| Slightly aspirational | Makes you feel like your life is worth remembering. Not clinical or feature-heavy. |
| Plain language | 8th-grade reading level. No jargon until "wayline" is defined inline. |
| Benefit-led | Lead with what you get, not what the app does. |
| Specific | Real numbers. Real names. Real places. "6 countries" beats "many trips." |
| Ownership framing | Privacy = "only you can see it" not "we protect you from big tech." |
| Warm but confident | Sounds like a person, not a startup. No exclamation abuse. |

---

### Copy Rules (non-negotiable)

- No em dashes anywhere on the page
- No "travel" — use "trip," "journey," or "experience"
- No hardcoded waitlist numbers — always use `WAITLIST_CURRENT`
- No "Make Money" language anywhere
- No App Store badges until the app is publicly live
- No generic superlatives ("Amazing app!") — every claim must be specific and provable
- "wayline" must be defined inline on first use: "a wayline, your personal memory of that trip"
- "Free" must appear early — in hero description and CTA
- Privacy is ownership, not fear

---

### The Puffcount Standard

Puffcount is the reference for how to communicate a focused app simply and directly.

Their formula:
1. Name the app. State the single purpose. Mention free.
2. Say exactly how it works in one sentence.

Our formula (applied):
> "Where App is a free app that turns every trip into a wayline, your personal memory of everywhere you went. Press record, go live your life, and six months later open your phone to be transported right back."

Every section should feel this clear. No section should require the user to figure out what it means.

---

### What This Page Is Not

- It is not a feature list. Features serve the three pillars or they are cut.
- It is not an explainer. Visitors from TikTok already know what the app does roughly. The page converts, it does not educate.
- It is not a brochure. It has one job: get the email.

---

## TODO

### Content & Assets
- [ ] **Loops welcome email** — Create a Loop in app.loops.so: trigger = Contact Created, filter source = landing-page, send welcome email immediately.
- [ ] **OG image** — Create `public/og-image.png` (1200x630px) for social share previews. Brand gradient on dark bg, Where App wordmark, headline "Remember Every Place You've Ever Been."
- [ ] **Favicon** — Add `app/favicon.ico` and define it in `layout.tsx` metadata.
- [ ] **About team photo** — Replace placeholder with real team photo when available.
- [ ] **Ron founder photo** — Add headshot to the Ron founder card in `/about`.

### Technical SEO
- [x] **Sitemap** — `app/sitemap.ts` covers `/`, `/about`, `/privacy`, `/terms`, `/faq`.
- [x] **robots.txt** — `app/robots.ts` allows all crawlers including AI bots (`*`).
- [x] **Social links** — Instagram, TikTok, X all linked with real URLs in `Footer.tsx`.
- [ ] **Organization schema** — Add to `app/layout.tsx` alongside existing MobileApplication schema. Include `name`, `url`, `logo`, `sameAs` array pointing to Instagram/TikTok/X. This is the primary signal AI engines use to identify the brand.
- [ ] **BreadcrumbList schema** — Add to `/about`, `/privacy`, `/terms`, `/faq` page files.
- [ ] **Speakable schema** — Mark hero description and FAQ answers as `speakable` for voice assistants.
- [ ] **"Last updated" timestamps** — Add visible "Last updated: [date]" to `/privacy`, `/terms`, `/faq`. AI engines weight recency.
- [ ] **Core Web Vitals** — Run PageSpeed Insights on `where.app`. Fix any INP/LCP issues. Netlify does not auto-optimize images like Vercel.
- [ ] **Submit subpages to Google Search Console** — URL Inspection tool: submit `/about`, `/privacy`, `/terms`, `/faq` individually.
- [ ] **Bing Webmaster Tools** — Bing powers Copilot. Verify site at bing.com/webmasters. Worth 10 minutes for Copilot citation coverage.

### GEO / AEO (AI Engine Visibility)
- [x] **FAQPage JSON-LD** — Live on `/faq`. Covers 9 questions. Submitted to GSC.
- [ ] **llms.txt** — Add `public/llms.txt`. Emerging standard: a plain-text file telling AI crawlers what the site is about and which pages to prioritize. Similar to `robots.txt` but for LLMs.
- [ ] **AEO answer block on `/faq`** — Add a 40-60 word plain-text summary above the accordion. AI engines scrape the visible text, not the accordion contents. e.g. "Where App is a free iPhone app that privately records every trip as a wayline, an encrypted map stored on your device. No tapping required. Only you can see it."
- [ ] **Blog / guides** — Even 2-3 articles ("how to remember your trips", "why your location data belongs to you") gives AI engines original content to cite. FAQ is good; original articles are better for citation share.
- [ ] **Monitor AI citation share** — Monthly: search "best private location tracking app for iPhone" on Perplexity, ChatGPT, and Google AI Overview. Track whether Where App appears and how it is described.

---

## Current State (as built)

### Stack
- Next.js 14 (App Router), Tailwind CSS, `next-themes` for dark/light mode
- Deployed on Netlify, auto-deploys on push to `main`
- Live at: `where.app`
- Dev: `npm run dev` from `landing-page/`
- Email capture: Loops via `/api/subscribe`

### Page Order (homepage)
1. `AnnouncementBar` — beta slot count + progress bar, links to `#signup`
2. `Nav` — sticky, theme toggle, hamburger on mobile
3. `Hero` — H1, subhead, CTA, 3-phone stacked mockup
4. `TrustBar` — 3 stats
5. `Features` — 3-card grid
6. `WhereBot` — 2 chat bubble scenarios
7. `Testimonials` — swipeable carousel, randomized on load
8. `SignUp` — email form, progress bar
9. `Footer` — links, copyright

### Subpages
| Route | Component | Notes |
|---|---|---|
| `/about` | `app/about/page.tsx` | Founder story, team photo, inline `MiniSignUp` |
| `/privacy` | `app/privacy/page.tsx` | Privacy Policy, AZ, team@where.app |
| `/terms` | `app/terms/page.tsx` | Terms of Service, AZ governing law |
| `/faq` | `app/faq/page.tsx` | FAQ accordion, FAQPage JSON-LD schema for GEO |

All subpages use `LegalLayout` (Nav + Footer + `max-w-3xl` prose container).

### Key Files
| File | Purpose |
|---|---|
| `lib/waitlist.ts` | Organic accelerating waitlist growth — deterministic noise, no DB |
| `components/Nav.tsx` | Sticky nav, `usePathname` for subpage anchor prefixing, theme toggle |
| `components/ThemeProvider.tsx` | next-themes wrapper, `defaultTheme="light"` |
| `components/ThemeToggle.tsx` | Sun/moon toggle with mounted guard |
| `components/LegalLayout.tsx` | Shared wrapper for subpages |
| `components/MiniSignUp.tsx` | Compact email form, same Loops endpoint as main SignUp |
| `components/AnnouncementBar.tsx` | Top bar, `.announcement-bg` CSS class for theme-aware bg |
| `components/SignUp.tsx` | Full email form with progress bar, `displayCount` increments on success |
| `app/globals.css` | Tailwind + `.dark` overrides for complex multi-layer backgrounds |

### Design Tokens
| Token | Light | Dark |
|---|---|---|
| Background | `#F5F5F5` | `#0c0c0c` |
| Card | `#ffffff` | `#1a1a1a` |
| Text primary | `#0c0c0c` | `#E2E2E2` |
| Text muted | `#555555` | `#aaaaaa` |
| Accent pink | `#EC008C` | `#EC008C` |
| Accent amber | `#FCB250` | `#FCB250` |
| Brand gradient | `135deg, #FCB250 → #EC008C` | same |
| Font | Nunito (Google Fonts) | same |

### Waitlist Variables (`lib/waitlist.ts`)
- `WAITLIST_TOTAL` = 10,000
- `WAITLIST_CURRENT` = deterministic accelerating growth from 5,241 (Mar 7 2026) to ~9,600 (Jun 5 2026)
- Daily increment = `(18 + 32 * day/90) * noise(day)` — accelerates + organic variance
- `force-dynamic` on `page.tsx` ensures server recalculates on every request
- `SignUp` receives `current` as prop; increments client-side by 1 on successful submit

### Nav Links
| Label | Anchor |
|---|---|
| How It Works | `#features` (prefixed `/#features` on subpages) |
| WhereBot | `#wherebot` |
| Reviews | `#reviews` |
| Get Beta Access | `#signup` |

---

## Situation

The live landing page at [where.app](https://where.app) was built in Framer. Access to the Framer project has been lost. DNS for `where.app` is still under our control.

**Plan**: Rebuild the landing page as a Next.js app, deploy to Vercel, and point DNS there.

---

## Current Page (Reference)

The original Framer export is preserved at `where app html.htm` in this directory. It is not directly editable (420KB minified bundle) but serves as a content and design reference.

### Sections & Copy (extracted)

| Section | Content |
|---|---|
| Nav | Beta Test, Blog, About |
| Announcement bar | "Support our Kickstarter Campaign — Join 2,000+ users today" |
| Hero | "Track Your Adventures. Make Money Everytime You Leave The House." |
| Hero CTA | "Join Today" |
| Testimonials | Cameron S. (Lifestyle Influencer, AZ State), Paras U. (Journalist, LA), Anna M. (Student, UCSB) |
| Sign-up CTA | "Join Where App Today — Get exclusive early access..." |
| Footer | © 2025 Where, LLC. All Rights Reserved | Privacy Policy |

### Design Tokens (from Framer export)

- **Background**: `#000` / `#0a0a0a`
- **Accent**: `#ec008c` (pink/magenta)
- **Text**: `#ffffff`, `#cccccc`
- **Fonts**: DM Sans, Inter
- **Style**: Dark, minimal, bold typography, gradient accents

---

## Rebuild Plan

### Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Email capture**: Loops (via API route `/api/subscribe`, env var `LOOPS_API_KEY`)

### Project Structure

```
landing-page/
  app/
    layout.tsx          <- Root layout, fonts, metadata
    page.tsx            <- Composes all sections
    globals.css         <- Tailwind base + custom tokens
    api/
      subscribe/
        route.ts        <- Mailchimp form submission
  components/
    Nav.tsx
    Hero.tsx
    Features.tsx
    Testimonials.tsx
    SignUp.tsx
    Footer.tsx
  public/               <- Static assets (images, logo)
  .env.example          <- Mailchimp env var template
  next.config.js
  tailwind.config.ts
  tsconfig.json
  package.json
```

### Content Direction

| Section | Action |
|---|---|
| Nav | Keep structure, update links |
| Hero | Rewrite headline + subhead |
| Features | Rewrite — add 3-4 feature cards (track, share, monetize) |
| Testimonials | Rewrite / refresh quotes |
| Sign-up CTA | Rewrite — connect to Mailchimp |
| Footer | Keep structure |

Assets are placeholders for now — swap in real screenshots and logo when ready.

### Loops Setup

Set this env var in Netlify dashboard before going live:

```
LOOPS_API_KEY=   # from app.loops.so → Settings → API Keys
```

To set up the welcome email in Loops: app.loops.so → **Loops** → **Create Loop** → trigger: Contact Created, filter: `source = landing-page`.

---

## Deployment

**Platform:** Netlify (free tier — watch build minutes)
**Repo:** https://github.com/where-app-hq/where-landing-page (public)
**Live URL:** https://where.app
**Netlify preview:** https://dreamy-malasada-dd14ae.netlify.app/
**DNS:** Porkbun, A record `@` → `75.2.60.5` (Netlify load balancer)

### How deploys work
Every push to `main` triggers an automatic Netlify redeploy. No manual steps needed.

### Environment variables (set in Netlify dashboard)
| Key | Description |
|---|---|
| `LOOPS_API_KEY` | Loops API key for email capture |

### To add a custom domain
1. Netlify dashboard → **Domain management** → **Add domain** → `where.app`
2. Update DNS at registrar:
   - `@` A record → Netlify's load balancer IP (shown in Netlify UI)
   - `www` CNAME → `dreamy-malasada-dd14ae.netlify.app`
3. Netlify auto-provisions SSL

### Local development
```bash
npm install
npm run dev     # localhost:3000
npm run build   # verify production build before pushing
```

### Why Netlify over Vercel
Vercel requires a paid plan ($20/mo) to access GitHub org repos. Netlify allows free access to public org repos. For a landing page the performance difference is negligible.

---

## Notes

- The `.htm` file is kept as a historical reference and should not be deleted.
- The Framer site may still be serving `where.app` until DNS is cut over — no downtime risk during build phase.

---

## Best Practices & Research

Research compiled before building. Sources: puffcount.com, TyrAds, adsmcp.com, Lovable.dev, Demand Curve, Unbounce, Landingi, Google/Fermat mobile data.

### The Core Mental Model

Visitors from TikTok and Instagram are **WARM traffic** — they already know about the app. The page's job is NOT to educate. It's a conveyor belt toward one action: email capture.

Every section must answer one question in the user's mind before they'll scroll to the next:

| Section | Question it answers |
|---|---|
| Announcement bar | "Is something happening right now?" (FOMO + momentum) |
| Hero | "Is this for me?" |
| Trust bar | "Is this legit?" |
| Features | "What does it actually do?" |
| Testimonials | "Do real people use this?" |
| Sign-up form | "Okay, I'll do it." |

### Traffic Source (TikTok / Social)

- Users have 3-second attention windows. They expect instant gratification.
- Design must feel native to mobile — single column, thumb-friendly, fast.
- 67% mobile bounce rate if page loads slower than 3 seconds (Google).
- Optimized TikTok landing pages convert at 8–12% vs 2.3% baseline.
- Match CTA "temperature" to traffic temperature: warm traffic → direct CTA ("Get Early Access", not "Learn More").

### Hero Section Rules

- H1, subhead, CTA, and social proof number must ALL be visible above the fold at 390px without scrolling.
- Content above the fold receives 84% more attention than below the fold (Nielsen Norman).
- H1 must answer "What's in it for me?" in under 10 words.
- Subhead answers the "how" — not more than 2 sentences.
- One CTA only. "Get Early Access" > "Sign Up" (lowers perceived commitment).
- "It's Free" + "No credit card required" on/below every CTA — handle objections before they're voiced.
- Static image > video/gif on mobile (load speed). No autoplay video on mobile.

### CTA Strategy

- One primary action per page. Repeat it 3×: nav, hero, bottom section.
- Changing CTA from "Sign up" to "Trial for free" caused a 104% lift in one A/B test (Lovable.dev).
- Loss aversion outperforms gain framing: "Don't miss founding member benefits" > "Join to get benefits".
- Place a secondary scroll-link ("↓ See how it works") just below the hero button for users not ready to convert yet.

### Social Proof Placement

- Sprinkle throughout the page — not just one dedicated section.
- Trust bar (quick stats) immediately below the hero catches skeptics before they bounce.
- Testimonials go AFTER features, BEFORE the final CTA — clinch the decision at the moment of action.
- Place social proof immediately after any bold claim that might trigger skepticism.
- Use specific numbers: "2,000+" beats "thousands". Named people beat anonymous quotes.
- Testimonials should reference concrete outcomes, not vague praise.

### Copy Principles

- 8th-grade reading level. Max 15–20 word sentences.
- Benefits before features in every section.
- Objection handling belongs near CTAs: "Free. No credit card. Cancel anytime."
- Avoid generic superlatives ("Amazing app!"). Every claim should be specific and provable.
- FOMO: "Join 2,000+ already on the waitlist" — repeat 2–3 times across the page.
- For pre-launch or undefined features: keep copy aspirational, not specific. Never overpromise.

### Mobile Performance

- Target under 3 seconds load time. 53% of users abandon at >3s (Google).
- 0.1s improvement in load time = 8–10% conversion lift.
- Compress all images aggressively. Use `next/image` for automatic optimization.
- No autoplay video on mobile. Fine on desktop only (muted, looping).
- Minimum 48×48px tap targets, 8dp spacing between interactive elements.

### What NOT to Build

- No video hero on mobile
- No parallax or heavy scroll animations
- No multiple competing CTAs on the same screen
- No navigation links that pull users away from the page mid-journey
- No generic copy ("Amazing app for everyone!")
- No App Store badges until the app is publicly live on the stores

### Reference: puffcount.com Patterns

- **Repeat the CTA** — Never make users scroll back up. CTA appears in hero, mid-page, and footer.
- **Lead with a bold, unambiguous H1** — "The #1 Quit Vaping App" leaves no ambiguity.
- **Anchor with specific stats** — "300,000 Quitters", "99M puffs counted". Real numbers, not vague claims.
- **Short feature blocks** — Headline + 1 sentence + graphic. No walls of text.
- **Named testimonials** — Role + location builds instant credibility over anonymous quotes.

---

## Messaging

> **Source of truth for all landing page copy.** Components are not changed until copy here is approved. Use the `WAITLIST_CURRENT` variable (currently `4,854`) everywhere a waitlist count appears — never hardcode it.

---

### Messaging Framework

**The Problem** (implied, never stated directly)
You go places. You have experiences. But your location history lives on someone else's server, in a format you didn't choose, accessible to companies you don't control.

**The Solution**
Where App builds a personal map of your trips, stored encrypted on your phone. Yours to revisit whenever you want. Yours to share only when you choose.

**The Emotional Promise**
The joy of opening your phone six months later and reliving exactly where you were — the route you took, the stops you made, the places you discovered. That memory belongs to you.

---

### Announcement Bar

> "Now in beta. Your trips, your privacy. Join {WAITLIST_CURRENT} travelers on the waitlist."

---

### Hero

**Eyebrow chip:**
> "Private. Local. Yours."

**H1:**
> "Remember Every Place You've Ever Been."

**Subhead:**
> "Where App builds a private map of your trips, stored encrypted on your phone. Not on big tech's servers. Not shared without your permission. Just yours."

**CTA button:**
> "Save Your First Trip. It's Free."

**Micro-copy below button:**
> "Join {WAITLIST_CURRENT} travelers. No account required to get started."

---

### Trust Bar

| Stat | Label |
|---|---|
| {WAITLIST_CURRENT} | Travelers Joined |
| 100% | Stored on Your Device |
| Encrypted | Always, By Default |

---

### Features

**Section headline:**
> "Your trips. Finally remembered the right way."

**Section subhead:**
> "A wayline is your personal record of a trip — the route you took, the stops you made, the places you found. Here's what Where App does with it."

*(Note: "wayline" is defined here — its first appearance on the page.)*

**Card 1 — Remember**
- Icon: map / route
- Title: **"Capture Every Trip Automatically"**
- Body: "Open Where App and go. As you move, it traces your route and marks your stops into a wayline — a personal record of exactly where you were. No tapping. No logging. Just living."

**Card 2 — Private**
- Icon: lock / shield
- Title: **"Stored on Your Phone, Not Theirs"**
- Body: "Your waylines live on your device, encrypted. Big tech doesn't have it. We don't store it on our servers unless you choose to sync. Your location history belongs to you."

**Card 3 — Share**
- Icon: share
- Title: **"Share Only What You Want"**
- Body: "Found a great route? Share your wayline with friends. Discovered somewhere special? Keep it to yourself. You decide what gets shared and what stays private."

---

### Testimonials

**Section headline:**
> "People are already remembering."

**Section subhead:**
> "Early users are building their private map of the world with Where App."

**Card 1 — Cameron S., Lifestyle Influencer, Arizona State**
> "I visited 6 countries last year and Where App has every single trip saved exactly how I experienced it. It's like a photo album but for places."

**Card 2 — Paras U., Journalist, Los Angeles CA**
> "I move around a lot for work. Where App is the only record of everywhere I've been that I actually own. That matters to me."

**Card 3 — Anna M., Student, UCSB**
> "I looked back at my spring break waylines from last year and remembered things I had completely forgotten. It's kind of magical."

---

### Sign-Up Section

**Headline:**
> "Start remembering. It's free."

**Subhead:**
> "Join the waitlist for early access. Your first trip is waiting to be saved."

**CTA button:**
> "Join the Waitlist"

**Progress bar label:**
> "Waitlist spots filled" → {WAITLIST_CURRENT} / {WAITLIST_GOAL}

**Micro-copy:**
> "Encrypted. Local-first. Free to join."

---

### Copy Checklist (verify before shipping)

- [ ] No "Make Money" language anywhere on the page
- [ ] `WAITLIST_CURRENT` variable used everywhere a count appears — not hardcoded
- [ ] "wayline" is defined inline on first use (Features section subhead)
- [ ] Each section answers its scroll-depth question (see Core Mental Model above)
  - Announcement bar: "Is something happening?" — yes, beta + privacy + waitlist count
  - Hero: "Is this for me?" — yes, if you travel and care about your data
  - Trust bar: "Is this legit?" — yes, real numbers + encryption claim
  - Features: "What does it do?" — capture, private, share
  - Testimonials: "Do real people use it?" — specific quotes, roles, locations
  - Sign-up: "OK I'll do it" — clear CTA + progress bar urgency

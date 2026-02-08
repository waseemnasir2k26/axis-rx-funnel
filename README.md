# AXIS RX — Medical Funnel Website

Premium GLP-1 therapy funnel for AXIS RX: Semaglutide & Tirzepatide in Mexico (Cancún & Tijuana) at 70% below US prices.

## Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — styling (custom palette, Satoshi font)
- **Framer Motion** — scroll and micro-interactions
- **React Router DOM** — routing
- **React Hook Form** + **Zod** — checkout form validation
- **Lucide React** — icons

## Design

- **Colors**: Navy `#11112e`, Off-white `#e1e7e0`, Royal blue `#2c51a3`, Accent silver `#d4d4d4`
- **Font**: Satoshi (Fontshare CDN)
- **Style**: Clean, high-contrast, premium (Hims/Ro-inspired)

## Scripts

```bash
# Install
npm install

# Dev (with HMR)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── layout/     # Header, Footer
│   ├── sections/   # Hero, ValueStack, RiskReversal, ProcessSteps, FAQ, Testimonials, FinalCTA
│   ├── forms/      # BookingForm, OrderBumps, OrderSummary
│   └── ui/         # Button, Card, Badge, Modal
├── pages/          # LandingPage, CheckoutPage, ThankYouPage
├── lib/            # checkoutSchema (Zod)
├── index.css       # Tailwind + design tokens
└── App.tsx         # Router and routes
```

## Routes

- `/` — Landing (hero, value stack, process, FAQ, CTA)
- `/checkout` — Patient form + order bumps + sticky summary
- `/thank-you` — Confirmation and next steps (intake scheduling, WhatsApp)

## Integrations (placeholders)

- **Payments**: `BookingForm` submits and navigates to thank-you; replace with Stripe/GoHighLevel API in `onSubmit`.
- **WhatsApp**: Thank-you page opens `wa.me` with pre-filled message; set `phoneNumber` in `ThankYouPage.tsx`.
- **Analytics**: Optional `gtag('event', 'begin_checkout', ...)` in form submit; add GA4/Meta pixel in `index.html` as needed.

## Environment

No env vars required for run/build. For production, configure:

- `VITE_STRIPE_PUBLIC_KEY` or payment API base URL if you add real payment flow.
- Replace placeholder WhatsApp number in `ThankYouPage.tsx`.

## Deployment

Build output is in `dist/`. Deploy to Vercel, Netlify, or any static host:

- **Vercel**: `vercel` or connect repo (build: `npm run build`, output: `dist`)
- **Netlify**: Build command `npm run build`, publish directory `dist`

Single-page app: ensure redirects for client-side routing (e.g. `/* /index.html`).

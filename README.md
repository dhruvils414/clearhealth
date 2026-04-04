# ClearPath Health - Landing Pages

A unicorn-level landing page experience built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🎯 Pages

| Route | Audience | Tagline |
|-------|----------|---------|
| `/` | Patients | "One home for your health." |
| `/providers` | Providers | "Practice medicine. Not paperwork." |

---

## 📁 Project Structure

```
clearpath-health/
├── app/
│   ├── globals.css          # Global styles & design tokens
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Patient landing page
│   └── providers/
│       └── page.tsx         # Provider landing page
├── components/
│   ├── Navigation.tsx       # Shared nav (switches colors by route)
│   ├── patient/
│   │   ├── Hero.tsx         # Gradient mesh, 88px headlines
│   │   ├── Stats.tsx        # Floating stat cards (overlapping hero)
│   │   ├── Journey.tsx      # Join → Plan → Thrive → Grow (AI integrated!)
│   │   ├── Services.tsx     # Bento grid
│   │   ├── Pricing.tsx      # Glassmorphism cards
│   │   ├── Family.tsx       # Overlapping avatars
│   │   ├── Testimonial.tsx  # 44px giant quote
│   │   └── CTA.tsx          # 72px headline with glow
│   ├── provider/
│   │   ├── Hero.tsx         # Blue/green gradient mesh
│   │   ├── Stats.tsx        # 0 forms, AI-powered, etc
│   │   ├── HowItWorks.tsx   # 4 steps + AI features integrated
│   │   ├── Benefits.tsx     # 6 benefit cards
│   │   ├── Types.tsx        # 4 provider types
│   │   ├── Comparison.tsx   # Traditional vs ClearPath
│   │   ├── Testimonial.tsx  # Dr. Sarah Chen quote
│   │   └── CTA.tsx          # Apply to join
│   └── shared/
│       └── Footer.tsx       # Dynamic footer
└── tailwind.config.ts       # Custom design system
```

---

## 🎨 Design System

### Patient Colors (Green/Purple/Orange/Pink)
| Color | Hex | Usage |
|-------|-----|-------|
| Green | `#4ADE80` | Primary CTA, AI badge |
| Purple | `#A78BFA` | Secondary accent |
| Orange | `#FB923C` | Energy, physical wellness |
| Pink | `#F472B6` | Care, family |

### Provider Colors (Blue/Teal/Purple/Amber)
| Color | Hex | Usage |
|-------|-----|-------|
| Blue | `#3B82F6` | Primary accent |
| Teal | `#10B981` | Primary CTA |
| Purple | `#8B5CF6` | Secondary accent |
| Amber | `#F59E0B` | Highlights |

### Typography
| Element | Size | Weight | Letter-spacing |
|---------|------|--------|----------------|
| Hero headline | 88px (patient) / 80px (provider) | 800 | -5px / -4px |
| Section title | 56-64px | 800 | -3px |
| Testimonial | 44px | 700 | -1.5px |
| Final CTA | 72px | 800 | -3px |

### Signature Elements
- Gradient mesh backgrounds (3-4 radial layers)
- Noise texture overlay (0.4 opacity)
- Floating stat cards (-180px overlap)
- 48px border radius throughout
- Glassmorphism on dark backgrounds
- Gradient text (multi-stop)
- Glow effects on CTAs (box-shadow: 0 0 100px)

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit:
- Patient page: `http://localhost:3000`
- Provider page: `http://localhost:3000/providers`

---

## 📦 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Manual
```bash
npm run build
npm start
```

---

## 🤖 AI Features (Integrated into Journey)

### Patient Journey
AI powers each step of the health journey:
- **Join** - Create family profile
- **Plan** - AI Pre-Visit Prep gathers symptoms beforehand
- **Thrive** - AI Follow-up checks in, Health Insights tracks progress
- **Grow** - AI Preventive Nudges remind you of vaccinations & screenings

### Provider Workflow
AI is integrated into the "See patients" step:
1. **AI Intake Summary** - Structured patient info before visit
2. **Pre-Visit Summary** - Last visit + trends + care due
3. **Patient Messaging AI** - Draft responses with one-tap approval

---

## 📄 License

Proprietary - ClearPath Health

---

Built with ❤️ for ClearPath Health

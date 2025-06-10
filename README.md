# Full Stack AI Fianace Platform with Next JS, Supabase, Tailwind, Prisma, Inngest, ArcJet, Shadcn  🔥🔥

<img width="1470" alt="Screenshot 2024-12-10 at 9 45 45 AM" src="https://github.com/user-attachments/assets/1bc50b85-b421-4122-8ba4-ae68b2b61432">


## 🧠 Features

- 🧾 **AI-based Receipt Scanning** – Automate expense entry using Gemini Vision.
- 🧠 **Smart Categorization** – Classify expenses using AI.
- 🔔 **Budget Alerts** – Get notified when you overspend.
- 📊 **Real-time Dashboard** – Track spending and trends instantly.
- 🔐 **Authentication** – Clerk-based secure sign-up/sign-in.
- ⏱ **Event-driven Workflows** – Handle events with Inngest.
- 🛡 **Rate Limiting + Security** – Secured via ArcJet.
- 📩 **Email Notifications** – Powered by Resend API.
- 🎨 **Beautiful UI** – Built with Tailwind CSS + Shadcn UI.
- ⚙️ **Backend** – Next.js 15 (App Router), Prisma ORM, Supabase DB.

---

## 🛠 Tech Stack

- **Frontend:** React 19, Next.js 15 (App Router)
- **Styling:** Tailwind CSS, Shadcn UI
- **Backend:** Next.js API Routes, Prisma, Supabase
- **Auth:** Clerk
- **AI:** Gemini API (Google's Generative AI)
- **Infra:** Inngest (background jobs), ArcJet (rate limiting)
- **Email:** Resend API

---

## ⚙️ Environment Variables

Create a `.env` file in your root and add the following:

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=
RESEND_API_KEY=
ARCJET_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```

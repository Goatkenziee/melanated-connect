"use client";

import * as React from "react";
import {
  Heart,
  Sparkles,
  Shield,
  Users,
  ChevronRight,
  Menu,
  X,
  Star,
} from "lucide-react";

/* ─── Navigation ─── */
function NavBar() {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <Heart className="h-6 w-6 fill-primary text-primary" />
          <span className="font-display text-foreground">
            Melanated <span className="text-primary">Connect</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#community" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Community
          </a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Stories
          </a>
          <a
            href="#signup"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:brightness-110"
          >
            Join Free <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-background px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#features" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">
              Features
            </a>
            <a href="#community" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">
              Community
            </a>
            <a href="#testimonials" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">
              Stories
            </a>
            <a
              href="#signup"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
            >
              Join Free <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-background to-background" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Made for us. By us.
          </div>

          <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Find Love That
            <br />
            <span className="text-primary">Celebrates You</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Melanated Connect is the premium dating space where Black singles
            find meaningful connections rooted in culture, community, and
            shared experience.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#signup"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:brightness-110 sm:w-auto"
            >
              Create Your Profile <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href="#features"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-8 text-base font-semibold text-foreground transition-all hover:bg-muted sm:w-auto"
            >
              See How It Works
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["/avatar-1.jpg", "/avatar-2.jpg", "/avatar-3.jpg"].map(
                  (src, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/40 to-accent"
                    />
                  )
                )}
              </div>
              <span>
                <strong className="text-foreground">10K+</strong> singles joined
              </span>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              ))}
              <span className="ml-1">4.9 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─── */
const features = [
  {
    icon: Heart,
    title: "Culture-First Matching",
    desc: "Our algorithm considers shared cultural values, traditions, and experiences — not just surface-level preferences.",
  },
  {
    icon: Shield,
    title: "Safe & Authentic",
    desc: "Verified profiles, photo moderation, and built-in safety features so you can connect with confidence.",
  },
  {
    icon: Users,
    title: "Community Events",
    desc: "Virtual and in-person events designed to bring the community together — from speed dating to cultural mixers.",
  },
  {
    icon: Sparkles,
    title: "Intentional Dating",
    desc: "Designed for those seeking real relationships. Thoughtful prompts and deeper profiles lead to better connections.",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Built for <span className="text-primary">Real Connection</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every feature is designed to help you find someone who truly gets you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="group animate-fade-up rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Community Stats ─── */
function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            A Growing <span className="text-primary">Community</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Thousands of Black singles have already found their match. Join the movement.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
          {[
            { label: "Active Members", value: "10,000+" },
            { label: "Matches Made", value: "25,000+" },
            { label: "Cities", value: "50+" },
            { label: "Success Stories", value: "2,000+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="animate-fade-up rounded-2xl border border-border/60 bg-card/80 p-6 text-center backdrop-blur-sm"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
const testimonials = [
  {
    quote:
      "I met my partner on Melanated Connect three months ago. Finally, a space where I didn't have to explain my culture — it was understood.",
    author: "Amara T.",
    role: "Member since 2024",
  },
  {
    quote:
      "The community events are incredible. I've met more like-minded people in one virtual mixer than a year on other apps.",
    author: "David K.",
    role: "Member since 2023",
  },
  {
    quote:
      "Knowing every profile is verified gives me so much peace of mind. This is how dating should feel — safe and intentional.",
    author: "Jasmine R.",
    role: "Member since 2024",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Real Stories from <span className="text-primary">Real People</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hear from members who found love and community on Melanated Connect.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="animate-fade-up rounded-2xl border border-border bg-card p-6"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="text-sm font-semibold">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Signup / CTA ─── */
function SignupCTA() {
  return (
    <section id="signup" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-xl sm:p-12">
          <Heart className="mx-auto h-10 w-10 fill-primary text-primary" />
          <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
            Ready to Find Love?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Join thousands of Black singles looking for real connection. It&apos;s free to create your profile.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm outline-none ring-primary/30 transition-all focus:ring-2"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:brightness-110"
            >
              Get Started <ChevronRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-4 text-xs text-muted-foreground">
            Free to join. No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-lg font-bold">
            <Heart className="h-5 w-5 fill-primary text-primary" />
            <span className="font-display">
              Melanated <span className="text-primary">Connect</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Safety</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Melanated Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Community />
      <Testimonials />
      <SignupCTA />
      <Footer />
    </>
  );
}

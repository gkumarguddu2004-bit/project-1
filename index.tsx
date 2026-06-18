import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Compass, Cpu, TrendingUp,
  Check, X, Globe, Workflow, Bot, LineChart, Quote, Award, Star,
} from "lucide-react";
import heroOrb from "@/assets/hero-orb.jpg";
import ctaPortal from "@/assets/cta-portal.jpg";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GK Weber — Growth Architecture Firm" },
      { name: "description", content: "We architect digital ecosystems that transform how modern businesses operate, scale, and dominate their market." },
      { property: "og:title", content: "GK Weber — Growth Architecture Firm" },
      { property: "og:description", content: "Business transformation through technology." },
    ],
  }),
  component: Home,
});

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, seen };
}

function Counter({ to, suffix = "", duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-full glass-panel flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[var(--gradient-electric)] opacity-30 group-hover:opacity-60 transition-opacity" />
            <span className="text-display text-base relative z-10">GK</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-medium tracking-wide">GK Weber</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Growth Architecture</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <a href="#framework" className="hover:text-foreground transition-colors">Framework</a>
          <a href="#systems" className="hover:text-foreground transition-colors">Systems</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#founder" className="hover:text-foreground transition-colors">Founder</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-ghost-luxe text-sm">
          Consultation <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        <div className="animate-float-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse-glow" />
            <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">Growth Architecture Firm</span>
          </div>
          <h1 className="text-display text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem]">
            Your Business Doesn't<br />Need Another Website.<br />
            <span className="italic text-muted-foreground">It Needs A </span>
            <span className="electric-text italic">Growth System.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            We architect digital ecosystems that transform how modern businesses operate, scale, and dominate their market.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-electric inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm">
              Book Strategic Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#systems" className="btn-ghost-luxe inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm">
              Explore Growth Systems
            </a>
          </div>
          <div className="mt-14 flex items-center gap-8 text-xs text-muted-foreground">
            <div><div className="text-2xl text-display text-foreground">250+</div>Businesses</div>
            <div className="w-px h-10 bg-border" />
            <div><div className="text-2xl text-display text-foreground">120K+</div>Hours saved</div>
            <div className="w-px h-10 bg-border" />
            <div><div className="text-2xl text-display text-foreground">98%</div>Satisfaction</div>
          </div>
        </div>

        <div className="relative aspect-square max-w-[640px] mx-auto w-full">
          <div className="absolute inset-0 rounded-full blur-3xl opacity-60" style={{ background: "radial-gradient(circle, oklch(0.5 0.25 245 / 0.6), transparent 60%)" }} />
          <img src={heroOrb} alt="GK Weber holographic orb" width={1024} height={1024} className="relative z-10 w-full h-full object-cover rounded-full mix-blend-screen" />
          <div className="absolute inset-0 z-20 animate-orbit-slow">
            <div className="absolute inset-[8%] rounded-full border border-electric/30" />
          </div>
          <div className="absolute inset-0 z-20 animate-orbit-reverse">
            <div className="absolute inset-[18%] rounded-full border border-electric/20" style={{ transform: "rotateX(70deg)" }} />
          </div>
          <div className="absolute inset-0 z-20 animate-orbit-slow" style={{ animationDuration: "45s" }}>
            <div className="absolute top-[10%] left-1/2 w-2 h-2 rounded-full bg-electric shadow-[0_0_20px_var(--electric)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const logos = ["NORTHWIND", "ARCADIA", "MERIDIAN", "OBSIDIAN", "VANTAGE", "HELIOS"];
  const stats = [
    { v: 250, s: "+", l: "Businesses Transformed" },
    { v: 120, s: "K+", l: "Automation Hours Saved" },
    { v: 380, s: "+", l: "Growth Systems Built" },
    { v: 98, s: "%", l: "Client Satisfaction" },
  ];
  return (
    <section className="py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-eyebrow text-center mb-12">Trusted By Growth-Focused Businesses</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-10 items-center justify-items-center opacity-60">
          {logos.map(l => (
            <div key={l} className="text-sm tracking-[0.3em] font-light text-muted-foreground hover:text-foreground transition-colors">{l}</div>
          ))}
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.l} className="text-center md:text-left">
              <div className="text-display text-5xl md:text-6xl electric-text">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Framework() {
  const steps = [
    { n: "01", t: "Discover", d: "Analyze challenges, bottlenecks, opportunities, and goals.", i: Compass },
    { n: "02", t: "Architect", d: "Design a tailored growth ecosystem aligned to outcomes.", i: Sparkles },
    { n: "03", t: "Automate", d: "Implement AI and intelligent workflows at scale.", i: Cpu },
    { n: "04", t: "Scale", d: "Optimize systems for sustainable, compounding growth.", i: TrendingUp },
  ];
  const [active, setActive] = useState(0);
  return (
    <section id="framework" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-eyebrow mb-5">The Methodology</p>
          <h2 className="text-display text-5xl md:text-6xl">
            GK Growth Architecture<span className="electric-text">™</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A proven framework that transforms complexity into scalable growth.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-12 left-0 right-0 h-px hairline hidden md:block" />
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.i;
              const isActive = active === i;
              return (
                <button
                  key={s.n}
                  onMouseEnter={() => setActive(i)}
                  className="text-left group relative"
                >
                  <div className={`relative w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-8 mx-auto md:mx-0 transition-all duration-500 ${isActive ? "shadow-[var(--shadow-glow)] scale-105" : ""}`}>
                    <Icon className={`w-8 h-8 transition-colors ${isActive ? "text-electric" : "text-muted-foreground"}`} />
                    {isActive && <div className="absolute inset-0 rounded-full border border-electric/60 animate-pulse-glow" />}
                  </div>
                  <div className="text-xs tracking-[0.3em] text-electric mb-3">STEP {s.n}</div>
                  <div className="text-display text-3xl mb-3">{s.t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CostOfStanding() {
  const without = ["Manual Processes", "Disconnected Systems", "Technology Confusion", "Slow Growth", "Missed Opportunities"];
  const withh = ["Automated Operations", "Unified Ecosystems", "Predictable Growth", "Scalable Infrastructure", "Measurable Outcomes"];
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-eyebrow mb-5">The Inflection Point</p>
          <h2 className="text-display text-5xl md:text-6xl">The Cost Of <span className="italic text-muted-foreground">Standing Still</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 relative">
          <div className="glass-panel rounded-3xl p-10">
            <div className="flex items-center gap-3 mb-8 text-muted-foreground">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center"><X className="w-4 h-4" /></div>
              <span className="text-xs tracking-[0.25em] uppercase">Without GK Weber</span>
            </div>
            <ul className="space-y-5">
              {without.map(w => (
                <li key={w} className="flex items-start gap-3 text-lg text-muted-foreground line-through decoration-border decoration-1">
                  <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground" />{w}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-3xl p-10 overflow-hidden" style={{ background: "linear-gradient(160deg, oklch(0.22 0.08 245 / 0.4), oklch(0.13 0.02 260 / 0.6))", border: "1px solid oklch(0.72 0.2 245 / 0.2)" }}>
            <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(circle at 80% 20%, oklch(0.5 0.25 245 / 0.25), transparent 60%)" }} />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full btn-electric flex items-center justify-center"><Check className="w-4 h-4" /></div>
              <span className="text-xs tracking-[0.25em] uppercase electric-text">With GK Weber</span>
            </div>
            <ul className="space-y-5">
              {withh.map(w => (
                <li key={w} className="flex items-start gap-3 text-lg text-foreground">
                  <Check className="w-4 h-4 mt-1.5 text-electric flex-shrink-0" />{w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Systems() {
  const items = [
    { i: Globe, t: "Digital Presence", d: "Enterprise websites engineered for trust and conversions." },
    { i: Workflow, t: "Intelligent Operations", d: "Automation systems that remove inefficiencies." },
    { i: Bot, t: "AI Workforce", d: "AI systems working 24/7 for growth." },
    { i: LineChart, t: "Growth Architecture", d: "Strategic consulting aligned with measurable business outcomes." },
  ];
  return (
    <section id="systems" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <p className="text-eyebrow mb-5">What We Build</p>
          <h2 className="text-display text-5xl md:text-6xl">
            Growth Systems Built<br /><span className="italic text-muted-foreground">Around Your Business</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(({ i: Icon, t, d }) => (
            <div key={t} className="group relative rounded-3xl p-10 glass-panel transition-all duration-500 hover:border-electric/30 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "radial-gradient(circle, oklch(0.72 0.2 245 / 0.3), transparent 70%)" }} />
              <div className="relative flex items-start justify-between mb-12">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center group-hover:shadow-[var(--shadow-glow)] transition-all">
                  <Icon className="w-6 h-6 text-electric" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-electric group-hover:rotate-12 transition-all" />
              </div>
              <h3 className="text-display text-3xl mb-3">{t}</h3>
              <p className="text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    { tag: "E-Commerce", t: "Northwind Retail", ch: "Fragmented commerce stack throttling growth across 4 channels.", st: "Unified commerce architecture with AI-driven personalization.", im: "Replatformed in 90 days with automated merchandising and ops.", r: "+312%", rl: "Revenue Growth" },
    { tag: "SaaS", t: "Arcadia Cloud", ch: "Outbound team stuck at 40 leads/month with poor qualification.", st: "AI lead engine + revenue ops architecture.", im: "Intent-driven pipeline with automated qualification scoring.", r: "+178%", rl: "Lead Growth" },
    { tag: "Operations", t: "Meridian Logistics", ch: "Manual back-office choking 11-person operations team.", st: "End-to-end workflow automation across 6 systems.", im: "AI agents handling intake, routing, and exception handling.", r: "-68%", rl: "Manual Work" },
    { tag: "Enterprise", t: "Obsidian Capital", ch: "Siloed teams duplicating effort across functions.", st: "Unified operating system with shared intelligence layer.", im: "Custom internal platform with role-based AI copilots.", r: "+240%", rl: "Operational Efficiency" },
  ];
  return (
    <section id="work" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <p className="text-eyebrow mb-5">Selected Engagements</p>
          <h2 className="text-display text-5xl md:text-6xl">
            Real Businesses.<br /><span className="italic electric-text">Real Transformations.</span>
          </h2>
        </div>
        <div className="space-y-6">
          {cases.map((c, i) => (
            <article key={c.t} className="group glass-panel rounded-3xl p-8 lg:p-12 grid lg:grid-cols-[1fr_2fr_auto] gap-8 lg:gap-12 items-center hover:border-electric/30 transition-all">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-electric mb-3">{String(i + 1).padStart(2, "0")} · {c.tag}</div>
                <h3 className="text-display text-3xl">{c.t}</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 text-sm">
                <div><div className="text-eyebrow mb-2">Challenge</div><p className="text-muted-foreground leading-relaxed">{c.ch}</p></div>
                <div><div className="text-eyebrow mb-2">Strategy</div><p className="text-muted-foreground leading-relaxed">{c.st}</p></div>
                <div><div className="text-eyebrow mb-2">Implementation</div><p className="text-muted-foreground leading-relaxed">{c.im}</p></div>
              </div>
              <div className="text-right lg:border-l border-border lg:pl-12">
                <div className="text-display text-5xl electric-text">{c.r}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">{c.rl}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 grid md:grid-cols-[auto_1fr] gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl opacity-60 blur-2xl" style={{ background: "var(--gradient-electric)" }} />
          <img src={founder} alt="GK Weber, Founder" width={1024} height={1280} loading="lazy" className="relative rounded-3xl w-72 h-96 object-cover" />
        </div>
        <div>
          <p className="text-eyebrow mb-5">Why GK Weber Exists</p>
          <h2 className="text-display text-4xl md:text-5xl mb-8">
            Technology should create <span className="italic text-muted-foreground">clarity</span>, not complexity.
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>GK Weber was built to help ambitious businesses transform technology into a competitive advantage — not another line item.</p>
            <p>We've spent a decade architecting growth systems for founders who refuse to settle for incremental progress.</p>
          </div>
          <div className="mt-10 pt-8 border-t border-border flex items-center gap-5">
            <div className="text-display text-3xl italic">G. K. Weber</div>
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Founder<br />Growth Architect
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const rows = [
    ["Most agencies deliver projects.", "We deliver transformation."],
    ["Most agencies implement tools.", "We architect growth systems."],
    ["Most agencies focus on outputs.", "We focus on measurable business outcomes."],
  ];
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="text-eyebrow mb-5">The Distinction</p>
          <h2 className="text-display text-5xl md:text-6xl">Why Clients Choose <span className="italic electric-text">GK Weber</span></h2>
        </div>
        <div className="space-y-px">
          {rows.map(([a, b]) => (
            <div key={a} className="grid md:grid-cols-2 gap-6 py-8 border-t border-border last:border-b group">
              <div className="text-2xl md:text-3xl text-muted-foreground font-light line-through decoration-1">{a}</div>
              <div className="text-2xl md:text-3xl text-display group-hover:electric-text transition-all">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  const items = [
    { n: "Clutch", a: "Top B2B Firm" },
    { n: "DesignRush", a: "Excellence Award" },
    { n: "GoodFirms", a: "Top Developer" },
    { n: "Awwwards", a: "Site of the Day" },
  ];
  return (
    <section className="py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-eyebrow text-center mb-12">Awards & Recognition</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(i => (
            <div key={i.n} className="glass-panel rounded-2xl p-8 text-center group hover:border-electric/30 transition-all">
              <Award className="w-7 h-7 mx-auto mb-4 text-electric" />
              <div className="text-display text-2xl">{i.n}</div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">{i.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "GK Weber didn't redesign our website. They rebuilt how our business operates.", n: "Helena Marsh", r: "CEO, Northwind Retail", res: "+312% Revenue" },
    { q: "The closest thing to having a Chief Growth Officer on retainer. Strategic, surgical, transformative.", n: "Daniel Okafor", r: "Founder, Arcadia Cloud", res: "+178% Pipeline" },
    { q: "We measured outcomes, not deliverables. That alone made them different from every firm we'd worked with.", n: "Priya Anand", r: "COO, Meridian Logistics", res: "-68% Manual Work" },
  ];
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <p className="text-eyebrow mb-5">Voices Of Transformation</p>
          <h2 className="text-display text-5xl md:text-6xl">Executives <span className="italic text-muted-foreground">In Their Own Words</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(t => (
            <figure key={t.n} className="glass-panel rounded-3xl p-8 flex flex-col">
              <Quote className="w-7 h-7 text-electric mb-6" />
              <blockquote className="text-lg leading-relaxed flex-1">"{t.q}"</blockquote>
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <div>
                  <div className="font-medium">{t.n}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.r}</div>
                </div>
                <div className="text-right">
                  <div className="text-display text-xl electric-text">{t.res}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mt-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3 h-3 fill-electric text-electric" />)}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promise() {
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="relative glass-panel rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "radial-gradient(ellipse at center, oklch(0.5 0.25 245 / 0.4), transparent 70%)" }} />
          <p className="text-eyebrow mb-8">Our Promise</p>
          <h2 className="text-display text-4xl md:text-6xl mb-8">
            Your Growth Is Our<br /><span className="italic electric-text">Greatest Commitment.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't take projects. We build long-term growth partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={ctaPortal} alt="" width={1920} height={1080} loading="lazy" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 0%, transparent 30%, transparent 70%, var(--background) 100%)" }} />
      </div>
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center py-32">
        <p className="text-eyebrow mb-8">The Next Stage</p>
        <h2 className="text-display text-5xl md:text-7xl lg:text-8xl">
          Let's Build Your<br /><span className="italic electric-text">Competitive Advantage.</span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover how GK Weber can architect the next stage of your business growth.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="#" className="btn-electric inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm">
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="btn-ghost-luxe inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm">
            Start A Conversation
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 rounded-full glass-panel flex items-center justify-center">
              <span className="text-display text-base">GK</span>
            </div>
            <div>
              <div className="font-medium">GK Weber</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Growth Architecture Firm</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Business transformation through technology.
          </p>
        </div>
        <div>
          <div className="text-eyebrow mb-4">Firm</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#framework" className="hover:text-foreground">Framework</a></li>
            <li><a href="#founder" className="hover:text-foreground">Founder</a></li>
            <li><a href="#work" className="hover:text-foreground">Work</a></li>
          </ul>
        </div>
        <div>
          <div className="text-eyebrow mb-4">Systems</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Digital Presence</li>
            <li>Intelligent Operations</li>
            <li>AI Workforce</li>
            <li>Growth Architecture</li>
          </ul>
        </div>
        <div>
          <div className="text-eyebrow mb-4">Contact</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>hello@gkweber.com</li>
            <li>Book Consultation</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} GK Weber. All rights reserved.</div>
        <div className="tracking-[0.2em] uppercase">Architected, not assembled.</div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Framework />
        <CostOfStanding />
        <Systems />
        <CaseStudies />
        <Founder />
        <WhyChoose />
        <Awards />
        <Testimonials />
        <Promise />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

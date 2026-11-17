import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { aboutPoints, stats } from "../data/content.js";
import { ArrowRight, Check } from "./icons.jsx";

function Counter({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  const formatted = Number.isInteger(value) ? String(Math.round(display)) : display.toFixed(1);

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <span className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {formatted}
        <span className="text-brand-600">{suffix}</span>
      </span>
      <span className="text-sm font-medium text-slate-500">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-500 via-brand-700 to-ink p-8 shadow-soft sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] border-white/10" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-brand-400/20 blur-2xl" />
              <div className="relative flex min-h-[280px] flex-col justify-between gap-10">
                <p className="font-display text-3xl font-semibold leading-snug text-white sm:text-4xl">
                  Visibility isn&apos;t luck. It&apos;s engineered — search by search, click by
                  click.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["SEO", "Web design", "Branding", "CRO", "Paid media"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 right-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-card sm:-right-6">
              <p className="text-xs font-medium text-slate-500">Faster service</p>
              <p className="font-display text-2xl font-bold text-ink">
                1.8<span className="text-brand-600">x</span>
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col items-start gap-6">
            <SectionHeading
              eyebrow="Who we are"
              title={
                <>
                  The team behind <span className="text-brand-600">your visibility</span>
                </>
              }
              copy="VizNerd partners with companies and organizations that need to be found, understood and chosen. We combine strategy, design and engineering to build an online presence that works as hard as you do."
            />
            <Reveal delay={0.1}>
              <ul className="flex flex-col gap-3.5">
                {aboutPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] font-medium text-slate-600">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white"
              >
                Explore our services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-24 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-slate-100 pt-12 lg:grid-cols-4">
          {stats.map((s) => (
            <Counter key={s.label} {...s} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

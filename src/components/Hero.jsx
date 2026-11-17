import { motion } from "framer-motion";
import { heroAvatars, heroBars } from "../data/content.js";
import { ArrowRight, Play, Star } from "./icons.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-tr from-brand-200/70 via-brand-100/50 to-sky-100/70 blur-2xl" />

      <div className="relative rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur-xl sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">Organic traffic</p>
            <p className="mt-1 font-display text-5xl font-bold tracking-tight text-ink">
              +212<span className="text-brand-600">%</span>
            </p>
          </div>
          <span className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
            Last 12 months
          </span>
        </div>

        <div className="mt-8 flex h-40 items-end gap-2 sm:gap-2.5">
          {heroBars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: `${h}%` }}
              className={`w-full origin-bottom rounded-t-md ${
                i === heroBars.length - 1
                  ? "bg-gradient-to-t from-brand-700 to-brand-500"
                  : "bg-gradient-to-t from-brand-600/80 to-brand-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="text-sm font-medium text-slate-500">Avg. monthly growth</span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
            +18.2% vs last year
          </span>
        </div>
      </div>

      <div className="animate-float absolute -right-3 -top-8 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-card backdrop-blur-xl sm:block">
        <p className="text-xs font-medium text-slate-500">Leads this month</p>
        <p className="font-display text-2xl font-bold text-ink">
          +38<span className="text-brand-600">%</span>
        </p>
      </div>

      <div
        className="animate-float absolute -bottom-8 -left-3 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-card backdrop-blur-xl sm:block"
        style={{ animationDelay: "1.4s" }}
      >
        <p className="text-xs font-medium text-slate-500">Conversion rate</p>
        <p className="font-display text-2xl font-bold text-ink">
          6.4<span className="text-brand-600">%</span>
        </p>
        <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-brand-100">
          <div className="h-full w-2/3 rounded-full bg-brand-600" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pb-24 pt-32 lg:pb-32 lg:pt-44"
    >
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand-200/50 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 top-64 h-80 w-80 rounded-full bg-sky-200/50 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-7">
          <motion.span
            variants={item}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            Digital growth agency
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.04] tracking-tight text-ink sm:text-6xl xl:text-7xl"
          >
            We make your brand <span className="text-stroke-blue">impossible</span> to ignore.
          </motion.h1>

          <motion.p variants={item} className="max-w-xl text-lg leading-relaxed text-slate-500">
            VizNerd is a full-service digital agency helping companies and organizations gain
            visibility and a stronger online presence — and turn visitors into loyal clients.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
            >
              Get started now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-brand-300 hover:text-brand-700"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-brand-600">
                <Play />
              </span>
              See our work
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-3">
              {heroAvatars.map((a) => (
                <span
                  key={a.initials}
                  className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${a.gradient} text-xs font-bold text-white ring-2 ring-white`}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5" />
                ))}
                <span className="ml-1 text-xs font-bold text-ink">4.9/5</span>
              </div>
              <p className="mt-0.5 text-sm text-slate-500">Trusted by 2,400+ brands worldwide</p>
            </div>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

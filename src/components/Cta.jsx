import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { contactInfo } from "../data/content.js";
import { ArrowRight, Mail } from "./icons.jsx";

export default function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/30 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-500/20 blur-[110px]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Let&apos;s get in touch
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Let&apos;s talk <span className="text-stroke-white">with us</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Tell us where you want to be visible. We&apos;ll show you the shortest route from
            where you are to a pipeline of clients.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${contactInfo.email}?subject=Free%20strategy%20call%20with%20VizNerd`}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-500"
          >
            Book a free strategy call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-brand-400 hover:text-brand-300"
          >
            <Mail className="h-4 w-4" />
            {contactInfo.email}
          </a>
        </Reveal>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-sm text-slate-400"
        >
          Average response time: under 4 business hours
        </motion.p>
      </div>
    </section>
  );
}

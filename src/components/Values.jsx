import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { capabilities, values } from "../data/content.js";
import { Plus } from "./icons.jsx";

export default function Values() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-600/30 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-brand-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          <div className="flex flex-col items-start gap-8">
            <SectionHeading
              dark
              eyebrow="Why VizNerd"
              title="Empowering brands to stand out and grow"
              copy="Four principles shape every engagement. They're why our clients stay for years — and why they send their friends."
            />
            <Reveal delay={0.15} className="flex flex-wrap gap-2">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200 transition-colors hover:border-brand-400/60 hover:text-white"
                >
                  {cap}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="border-t border-white/10">
              {values.map((value, i) => {
                const open = i === openIndex;
                return (
                  <div key={value.title} className="border-b border-white/10">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="flex items-baseline gap-5">
                        <span className="font-display text-sm font-semibold text-brand-400">
                          0{i + 1}
                        </span>
                        <span
                          className={`font-display text-xl font-semibold transition-colors sm:text-2xl ${
                            open ? "text-white" : "text-slate-300"
                          }`}
                        >
                          {value.title}
                        </span>
                      </span>
                      <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors ${
                          open
                            ? "border-brand-500 bg-brand-600 text-white"
                            : "border-white/15 text-slate-300"
                        }`}
                      >
                        <Plus className="h-5 w-5" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-xl pb-7 pl-10 pr-4 leading-relaxed text-slate-400">
                            {value.body}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

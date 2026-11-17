import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { contactInfo, faqs } from "../data/content.js";
import { ArrowRight, Plus } from "./icons.jsx";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="flex flex-col items-start gap-8">
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Frequently asked <span className="text-brand-600">questions</span>
                </>
              }
              copy="Everything you might want to know before we start. Can't find your answer? We're one email away."
            />
            <Reveal delay={0.15}>
              <div className="w-full rounded-3xl border border-brand-100 bg-brand-50/70 p-6">
                <p className="font-display text-lg font-bold text-ink">Still have questions?</p>
                <p className="mt-1 text-sm text-slate-500">Talk to a strategist — no sales script, promise.</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
                >
                  {contactInfo.email}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="border-t border-slate-200">
              {faqs.map((faq, i) => {
                const open = i === openIndex;
                return (
                  <div key={faq.q} className="border-b border-slate-200">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`font-display text-lg font-semibold transition-colors sm:text-xl ${
                          open ? "text-brand-700" : "text-ink"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                          open
                            ? "border-brand-600 bg-brand-600 text-white"
                            : "border-slate-200 text-slate-500"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
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
                          <p className="max-w-2xl pb-6 pr-10 leading-relaxed text-slate-500">{faq.a}</p>
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

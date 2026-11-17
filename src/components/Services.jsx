import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { services } from "../data/content.js";
import { ArrowUpRight } from "./icons.jsx";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Premium services, <span className="text-brand-600">one goal: growth</span>
              </>
            }
            copy="Six disciplines, one integrated team. Pick a single service or hand us the whole funnel."
          />
        </div>

        <div className="border-t border-slate-200">
          {services.map((service, i) => {
            const open = i === openIndex;
            return (
              <Reveal key={service.title} delay={i * 0.04}>
                <div className={`border-b border-slate-200 transition-colors ${open ? "bg-brand-50/70" : "hover:bg-brand-50/40"}`}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-6 px-2 py-7 text-left sm:gap-10 sm:px-4"
                  >
                    <span className="font-display text-sm font-bold text-brand-400 sm:text-base">
                      0{i + 1}
                    </span>
                    <span
                      className={`flex-1 font-display text-2xl font-bold tracking-tight transition-colors sm:text-4xl ${
                        open ? "text-brand-700" : "text-ink"
                      }`}
                    >
                      {service.title}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors ${
                        open ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-600"
                      }`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-5 px-2 pb-8 pl-12 pr-2 sm:pl-20 sm:pr-6">
                          <p className="max-w-2xl leading-relaxed text-slate-500">{service.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-semibold text-brand-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

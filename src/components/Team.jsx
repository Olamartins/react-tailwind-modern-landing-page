import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { team } from "../data/content.js";

export default function Team() {
  return (
    <section id="team" className="bg-brand-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Our team"
          title={
            <>
              Introducing the <span className="text-brand-600">VizNerd</span> skilled team
            </>
          }
          copy="Senior specialists only — the same people you meet on the first call do the work."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group rounded-3xl border border-slate-100 bg-white p-4 shadow-card transition-shadow duration-300 hover:shadow-soft"
              >
                <div
                  className={`relative grid h-44 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br ${member.gradient}`}
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border-[18px] border-white/15 transition-transform duration-500 group-hover:scale-110" />
                  <span className="font-display text-5xl font-bold text-white">{member.initials}</span>
                </div>
                <div className="px-3 pb-3 pt-5 text-center">
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">{member.role}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

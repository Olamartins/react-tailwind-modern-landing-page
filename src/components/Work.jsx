import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { projects } from "../data/content.js";
import { ArrowRight, ArrowUpRight } from "./icons.jsx";

export default function Work() {
  return (
    <section id="work" className="bg-brand-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Case studies"
            title={
              <>
                Recent work that <span className="text-brand-600">moved the needle</span>
              </>
            }
            copy="A snapshot of recent engagements — and the measurable outcomes behind them."
          />
          <Reveal delay={0.15}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
            >
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1} className={i % 2 === 1 ? "md:translate-y-10" : ""}>
              <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-soft">
                <div className={`relative h-60 overflow-hidden bg-gradient-to-br sm:h-64 ${project.gradient}`}>
                  <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border-[22px] border-white/15 transition-transform duration-500 group-hover:scale-110" />
                  <div className="pointer-events-none absolute -bottom-14 -left-8 h-40 w-40 rounded-full bg-white/10 blur-xl" />
                  <span className="pointer-events-none absolute bottom-3 right-5 font-display text-7xl font-bold text-white/10">
                    {project.year}
                  </span>
                  <div className="absolute left-5 top-5 flex gap-2">
                    <span className="rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
                      {project.year}
                    </span>
                  </div>
                  <span className="absolute right-5 top-5 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-white text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 p-6 sm:p-7">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold text-brand-600">{project.result}</p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <ArrowUpRight />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

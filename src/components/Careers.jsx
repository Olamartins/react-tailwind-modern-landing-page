import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { career } from "../data/content.js";
import { ArrowRight, Briefcase } from "./icons.jsx";

export default function Careers() {
  return (
    <section id="career" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Careers"
          title={
            <>
              Build your career <span className="text-brand-600">with VizNerd</span>
            </>
          }
          copy="We're a small, senior team that ships work we're proud of. Here's what working with us looks like."
        />

        <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {career.perks.map((perk) => (
            <span
              key={perk}
              className="rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700"
            >
              {perk}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border-2 border-dashed border-brand-200 bg-brand-50/50 p-10 text-center sm:p-12">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-soft">
              <Briefcase />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink">
              No open positions right now
            </h3>
            <p className="mx-auto mt-2 max-w-md leading-relaxed text-slate-500">
              We&apos;re not hiring at the moment — but we&apos;re always happy to hear from
              talented designers, developers and marketers.
            </p>
            <a
              href={`mailto:${career.email}?subject=Open%20application%20to%20VizNerd`}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
            >
              Send an open application
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

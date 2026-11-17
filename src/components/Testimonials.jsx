import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { testimonials } from "../data/content.js";
import { Quote, Star } from "./icons.jsx";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          title={
            <>
              Trusted by clients <span className="text-brand-600">who needed results</span>
            </>
          }
          copy="Real words from the founders and marketing leaders we work with every day."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure
                className={`flex h-full flex-col justify-between gap-8 rounded-3xl border p-8 transition-shadow duration-300 hover:shadow-soft ${
                  t.featured ? "border-transparent bg-brand-600 text-white shadow-soft" : "border-slate-100 bg-white shadow-card"
                }`}
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-brand-200" />
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4" />
                      ))}
                    </div>
                  </div>
                  <blockquote
                    className={`text-lg leading-relaxed ${t.featured ? "text-white" : "text-ink"}`}
                  >
                    {t.quote}
                  </blockquote>
                </div>
                <figcaption className="flex items-center gap-4">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-bold text-white ring-2 ${t.featured ? "ring-white/30" : "ring-brand-50"}`}
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className={`block font-display text-base font-bold ${t.featured ? "text-white" : "text-ink"}`}>
                      {t.name}
                    </span>
                    <span className={`block text-sm ${t.featured ? "text-brand-100" : "text-slate-500"}`}>
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

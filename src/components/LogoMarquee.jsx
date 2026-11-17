import { clients } from "../data/content.js";

export default function LogoMarquee() {
  const doubled = [...clients, ...clients];
  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <p className="px-6 text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
        Trusted by 120+ ambitious brands and organizations
      </p>
      <div className="mask-fade-x relative mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16 pr-16">
          {doubled.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-slate-300 transition-colors hover:text-brand-600"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

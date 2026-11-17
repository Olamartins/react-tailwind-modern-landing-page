import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, copy, align = "left", dark = false }) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
      <span
        className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
          dark ? "bg-white/10 text-brand-300" : "bg-brand-50 text-brand-700"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
        {eyebrow}
      </span>
      <h2 className={`font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {copy && <p className={`text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-500"}`}>{copy}</p>}
    </Reveal>
  );
}

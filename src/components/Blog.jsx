import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { posts } from "../data/content.js";
import { ArrowRight } from "./icons.jsx";

export default function Blog() {
  return (
    <section id="blog" className="bg-brand-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Blog"
            title={
              <>
                Latest from the <span className="text-brand-600">VizNerd journal</span>
              </>
            }
            copy="Practical playbooks on visibility, design and conversion — written by the team that does the work."
          />
          <Reveal delay={0.15}>
            <a
              href="#blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
            >
              All articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-soft">
                <div className={`relative h-44 bg-gradient-to-br ${post.gradient}`}>
                  <div className="pointer-events-none absolute -right-8 -bottom-10 h-32 w-32 rounded-full border-[20px] border-white/15" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {post.date} · {post.readTime}
                  </p>
                  <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand-700">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-brand-600">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

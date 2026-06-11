import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, Brain, Clock, Sparkles, Speech } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { createMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/site";

export const metadata = createMetadata({
  ...pageSeo.blog,
  title: "Learning Journal",
  description:
    "Read Heaven’s Seed International School articles on nursery learning, inclusive education, primary support, speech delay support, speech therapy guidance and child psychology support.",
});

export default function BlogPage() {
  const featured = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#B86452] p-6 text-white shadow-[0_26px_85px_rgba(168,79,63,0.18)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#F4D77B] backdrop-blur-md sm:text-[11px]">
                  <BookOpenText size={14} />
                  Heaven’s Seed Journal
                </p>

                <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                  Helpful insights for families and young learners.
                </h1>

                <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/82 sm:text-lg sm:leading-8">
                  Practical articles on nursery learning, inclusive education,
                  primary support, speech delay, communication development,
                  emotional wellbeing and child psychology support.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Nursery",
                    "Inclusive Education",
                    "Speech Delay",
                    "Primary Support",
                    "Child Psychology",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-extrabold text-white/88"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/blog/${featured.slug}`}
                className="group overflow-hidden rounded-[1.75rem] border border-white/14 bg-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.14)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/14"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#944337]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    quality={75}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#944337]/60 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/18 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    Featured
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-xs font-extrabold text-[#F4D77B]">
                    <span>{featured.tag}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                  </div>

                  <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                    {featured.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/76">
                    {featured.desc}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#F4B321] px-5 py-2.5 text-sm font-extrabold !text-[#944337] shadow-[0_16px_38px_rgba(244,179,33,0.28)]">
                    <span className="text-[#944337]">Read featured article</span>
                    <ArrowRight size={16} className="text-[#944337]" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#B86452]">
                <Sparkles size={15} />
                Latest Articles
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#183528] sm:text-4xl">
                Read, learn and feel supported.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#426252] sm:text-base lg:ml-auto">
              Browse parent-friendly guidance created for families seeking a
              caring, inclusive and flexible learning pathway for their child.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-white/45 bg-white/58 shadow-[0_22px_70px_rgba(24,53,40,0.09)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/75"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#B86452]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    loading="lazy"
                    quality={70}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#944337]/44 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-white/22 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-md backdrop-blur-md">
                    <BookOpenText size={12} />
                    {post.tag}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#B86452]">
                    <Clock size={14} />
                    {post.readTime}
                  </div>

                  <h3 className="mt-3 text-xl font-extrabold leading-tight tracking-[-0.035em] text-[#183528]">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#426252]">
                    {post.desc}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#F4B321] px-5 py-2.5 text-sm font-extrabold !text-[#944337] shadow-[0_16px_35px_rgba(244,179,33,0.24)] transition group-hover:bg-[#FFD46A]">
                    <span className="text-[#944337]">Read article</span>
                    <ArrowRight size={16} className="text-[#944337]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-[#B86452] p-6 text-white shadow-[0_26px_85px_rgba(168,79,63,0.18)] sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#F4D77B]">
                  Family Guidance
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                  Need help choosing the right support pathway?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                  Speak with us about nursery, inclusive learning, primary
                  support, speech delay concerns, speech therapy guidance or
                  emotional development support.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B321] px-6 py-3 text-sm font-extrabold !text-[#944337] shadow-[0_18px_45px_rgba(244,179,33,0.36)] transition hover:-translate-y-1 hover:bg-[#FFD46A]"
                >
                  <span className="text-[#944337]">Start Enrollment</span>
                  <ArrowRight size={17} className="text-[#944337]" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/16 px-6 py-3 text-sm font-extrabold !text-white ring-1 ring-white/25 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/24"
                >
                  <span className="text-white">Contact Us</span>
                  <Brain size={17} className="text-white" />
                </Link>
              </div>
            </div>
          </div>

          <p className="sr-only">
            Heaven’s Seed International School blog covers nursery learning,
            inclusive education, primary support, speech delay support, speech
            therapy guidance and child psychology support.
          </p>
        </div>
      </section>
    </main>
  );
}

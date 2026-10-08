import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { stories, type StoryContent } from "@/data/stories";

type StoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export default async function StoryPage({
  params,
}: StoryPageProps) {
  const { slug } = await params;

  const story = stories.find((story) => story.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#e9dfcc] text-[#3b3025]">
      <Navbar />

      {/* Story header */}
      <section className="relative overflow-hidden px-6 pb-16 pt-40">
        {/* Paper texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              radial-gradient(#3b3025 0.7px, transparent 0.7px)
            `,
            backgroundSize: "14px 14px",
          }}
        />

        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/journey"
            className="font-mono text-xs tracking-widest text-[#8a755b] transition-colors hover:text-[#3b3025]"
          >
            ← BACK TO JOURNEY
          </Link>

          <div className="mt-12 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[#9b7847]">
            <span>{story.category.toUpperCase()}</span>
            <span className="text-[#c9bda7]">/</span>
            <span>{story.date.toUpperCase()}</span>
          </div>

          <h1 className="mt-6 font-cinzel text-4xl font-medium leading-tight tracking-tight text-[#3b3025] sm:text-6xl">
            {story.title}
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#665846]">
            {story.description}
          </p>

          <div className="mt-10 flex items-center gap-4">
            <span className="text-2xl text-[#b8a487]">✦</span>
            <div className="h-px w-32 bg-[#c9bda7]" />
          </div>
        </div>
      </section>

      {/* Story content */}
      <article className="relative px-6 pb-32">
        <div className="mx-auto max-w-3xl">
          <div className="border-t border-[#c9bda7] pt-12">
            <div className="space-y-7 text-lg leading-[1.9] text-[#4f4234]">
              {story.content.map((item, index) => {
                if (typeof item === "string") {
                  return <p key={index}>{item}</p>;
                }

                const image = item as Extract<StoryContent, { type: "image" }>;

                return (
                  <figure key={index} className="my-10">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="mx-auto w-full max-w-3xl rounded-2xl object-cover shadow-sm"
                    />
                  </figure>
                );
              })}
            </div>
          </div>

          <div className="mt-16 border-t border-[#c9bda7] pt-6">
            <Link
              href="/journey"
              className="font-mono text-xs tracking-widest text-[#8a755b] transition-colors hover:text-[#3b3025]"
            >
              ← ALL JOURNEY ENTRIES
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
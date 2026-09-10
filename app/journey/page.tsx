import Link from "next/link";
import Navbar from "@/components/Navbar";
import JourneyHero from "@/components/JourneyHero";
import { stories } from "@/data/stories";

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-[#e9dfcc] text-[#3b3025]">
      <Navbar />

      <JourneyHero />

      {/* Stories */}
      <section
        id="stories"
        className="relative overflow-hidden bg-[#e9dfcc] px-6 py-32"
      >
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

        <div className="relative mx-auto max-w-6xl">
          {/* Section header */}
          <div className="mb-10 border-t border-[#c9bda7] pt-6">
            <div className="flex items-center justify-between font-mono text-xs tracking-widest text-[#8a755b]">
              <span>FIELD NOTES</span>

              <span>
                {stories.length.toString().padStart(2, "0")} ENTRIES
              </span>
            </div>
          </div>

          <div className="mb-16 max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="text-3xl text-[#b8a487]">
                ✦
              </span>

              <div className="h-px w-20 bg-[#c9bda7]" />
            </div>

            <h2 className="mt-6 font-cinzel text-4xl font-medium tracking-tight text-[#3b3025] sm:text-5xl">
              Notes from the road.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#665846]">
              Stories about learning, building, failing, changing
              direction, and the experiences that shape the person
              behind the code.
            </p>
          </div>

          {/* Story list */}
          <div className="space-y-6">
            {stories.map((story, index) => (
              <Link
                key={story.slug}
                href={`/journey/${story.slug}`}
                className="group block"
              >
                <article className="relative overflow-hidden rounded-lg border border-[#c9bda7] bg-[#eee5d5]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#9b7847] hover:bg-[#f2e9da] sm:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-6">
                      <span className="hidden pt-1 font-mono text-xs text-[#b19d80] sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[#9b7847]">
                          <span>
                            {story.category.toUpperCase()}
                          </span>

                          <span className="text-[#c9bda7]">
                            /
                          </span>

                          <span>
                            {story.date.toUpperCase()}
                          </span>
                        </div>

                        <h3 className="mt-3 font-cinzel text-2xl text-[#3b3025] transition-colors duration-300 group-hover:text-[#80613a] sm:text-3xl">
                          {story.title}
                        </h3>

                        <p className="mt-4 max-w-2xl leading-relaxed text-[#665846]">
                          {story.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center font-mono text-xs text-[#8a755b] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#6d512e]">
                      read
                      <span className="ml-2">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
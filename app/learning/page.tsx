import Navbar from "@/components/Navbar";
import LearningHero from "@/components/LearningHero";

const learningAreas = [
  {
    title: "System Design",
    status: "ACTIVE",
    description:
      "Learning how large-scale systems are designed, where bottlenecks appear, and how engineers make tradeoffs.",
    topics: [
      "Scalability",
      "Distributed systems",
      "Caching",
      "Databases",
      "Message queues",
    ],
  },
  {
    title: "Backend Engineering",
    status: "ACTIVE",
    description:
      "Going deeper into APIs, databases, services, networking, and the engineering decisions behind backend systems.",
    topics: [
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "Networking",
      "Service architecture",
    ],
  },
  {
    title: "Cybersecurity",
    status: "EXPLORING",
    description:
      "Building a stronger understanding of security from the perspective of software, systems, and infrastructure.",
    topics: [
      "Web security",
      "Authentication",
      "Networking",
      "Threat modeling",
      "Security fundamentals",
    ],
  },
  {
    title: "Algorithms & Problem Solving",
    status: "ONGOING",
    description:
      "Strengthening the fundamentals through deliberate practice and learning to recognize patterns rather than memorizing solutions.",
    topics: [
      "Arrays",
      "Hash tables",
      "Trees",
      "Graphs",
      "Dynamic programming",
    ],
  },
];

export default function LearningPage() {
  return (
    <main className="min-h-screen bg-[#e9dfcc] text-[#3b3025]">
      <Navbar />

      {/* Header */}
      <LearningHero />
     

      {/* Learning areas */}
      <section className="relative overflow-hidden px-6 pb-32">
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
          <div className="mb-10 border-t border-[#c9bda7] pt-6">
            <div className="flex items-center justify-between font-mono text-xs tracking-widest text-[#8a755b]">
              <span>CURRENT STUDIES</span>
              <span>
                {learningAreas.length.toString().padStart(2, "0")} AREAS
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {learningAreas.map((area, index) => (
              <article
                key={area.title}
                className="group rounded-lg border border-[#c9bda7] bg-[#eee5d5]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#9b7847] hover:bg-[#f2e9da] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-[#b19d80]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#9b7847]">
                    [{area.status}]
                  </span>
                </div>

                <h2 className="mt-6 font-cinzel text-2xl text-[#3b3025] transition-colors duration-300 group-hover:text-[#80613a] sm:text-3xl">
                  {area.title}
                </h2>

                <p className="mt-4 leading-relaxed text-[#665846]">
                  {area.description}
                </p>

                <div className="mt-6 border-t border-[#c9bda7] pt-5">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[#8a755b]">
                    EXPLORING
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {area.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md border border-[#c9bda7] px-2.5 py-1 font-mono text-[10px] text-[#806f59]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Philosophy */}
          <div className="mt-20 border-t border-[#c9bda7] pt-10">
            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-mono text-xs tracking-[0.25em] text-[#8a755b]">
                  THE APPROACH
                </p>

                <div className="mt-5 text-4xl text-[#b8a487]/60">
                  ✦
                </div>
              </div>

              <div>
                <h2 className="font-cinzel text-3xl text-[#3b3025] sm:text-4xl">
                  Build it. Break it. Understand it.
                </h2>

                <div className="mt-6 space-y-5 leading-relaxed text-[#665846]">
                  <p>
                    I learn best when I have something concrete to
                    experiment with.
                  </p>

                  <p>
                    Instead of only reading about a system, I like
                    building a smaller version, seeing where it
                    breaks, and using those failures to understand
                    the underlying ideas.
                  </p>

                  <p>
                    This page will evolve as I do. The things listed
                    here are not a checklist of technologies. They
                    are areas I&apos;m actively trying to understand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
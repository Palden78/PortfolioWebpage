export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#e9dfcc] px-6 py-32 text-[#3b3025]"
    >
      {/* subtle paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            radial-gradient(#3b3025 0.7px, transparent 0.7px)
          `,
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.25em] text-[#8a755b]">
            01 / ABOUT
          </p>

          <div className="mt-6 hidden text-5xl text-[#b8a487]/60 md:block">
            ✦
          </div>
        </div>

        <div>
          <h2 className="font-cinzel text-4xl font-medium tracking-tight text-[#3b3025] sm:text-5xl">
            Building with curiosity.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#665846]">
            <p>
              I&apos;m a Computer Science graduate interested in
              understanding how software works beyond the surface.
            </p>

            <p>
              I enjoy building applications from the ground up,
              learning how backend systems communicate, and exploring
              the problems that appear when software needs to scale.
            </p>

            <p>
              Right now, I&apos;m developing my skills in backend
              engineering, system design, and cybersecurity while
              building projects that challenge me to understand the
              underlying systems.
            </p>
          </div>

          <div className="mt-12 border-t border-[#c9bda7] pt-6 font-mono text-xs tracking-widest text-[#8a755b]">
            SOFTWARE × NATURE × CURIOSITY
          </div>
        </div>
      </div>
    </section>
  );
}
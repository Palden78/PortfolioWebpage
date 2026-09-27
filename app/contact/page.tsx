import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import JournalSignature from "@/components/JournalSignature";

const contactMethods = [
  {
    label: "EMAIL",
    value: "palden6234@gmail.com",
    href: "mailto:palden6234@gmail.com",
    description: "For direct correspondence.",
  },
  {
    label: "GITHUB",
    value: "github.com/Palden78",
    href: "https://github.com/Palden78",
    description: "Code, experiments, and things I'm building.",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/palden-tamang",
    href: "https://www.linkedin.com/in/palden-tamang-b281141a0/",
    description: "Professional background and experience.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <ContactHero />

        <section className="bg-[#e9dfcc] px-6 py-24 text-[#3b3025]">
          <div className="mx-auto max-w-6xl">
            {/* ---------------------------------------------------------- */}
            {/* Header                                                     */}
            {/* ---------------------------------------------------------- */}

            <div className="mb-14 border-b border-[#c9bda7] pb-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-[#9b7847]">
                    CORRESPONDENCE
                  </p>

                  <h2 className="mt-2 font-cinzel text-3xl">
                    Find me here
                  </h2>
                </div>

                <span className="font-mono text-[9px] tracking-widest text-[#8a755b]">
                  OPEN CHANNELS / 03
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* Contact entries                                             */}
            {/* ---------------------------------------------------------- */}

            <div className="divide-y divide-[#c9bda7] border-y border-[#c9bda7]">
              {contactMethods.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block py-8 transition-colors duration-300 hover:bg-[#eee5d5]/50"
                >
                  <div className="grid gap-5 md:grid-cols-[80px_1fr_auto] md:items-center">
                    {/* Number */}
                    <span className="font-mono text-xs text-[#9b7847]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Main content */}
                    <div>
                      <p className="font-mono text-[9px] tracking-[0.22em] text-[#9b7847]">
                        {contact.label}
                      </p>

                      <p className="mt-2 font-cinzel text-xl text-[#3b3025] transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                        {contact.value}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[#756957]">
                        {contact.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <span className="font-mono text-[9px] tracking-[0.18em] text-[#9b7847] transition-transform duration-300 group-hover:translate-x-1">
                      OPEN →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* ---------------------------------------------------------- */}
            {/* Small note                                                 */}
            {/* ---------------------------------------------------------- */}

            <div className="mt-14 grid gap-8 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] text-[#9b7847]">
                  FIELD NOTE
                </p>
              </div>

              <div>
                <p className="max-w-2xl text-sm leading-8 text-[#665846]">
                  I'm always interested in meeting people who are
                  curious about how things work. If you're building
                  something interesting, learning something difficult,
                  or simply want to say hello, feel free to reach out.
                </p>
              </div>
            </div>
          </div>
        </section>

        <JournalSignature />
      </main>
    </>
  );
}
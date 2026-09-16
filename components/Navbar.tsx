import JournalLink from "@/components/JournalLink";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <JournalLink
          href="/"
          className="font-cinzel text-sm tracking-widest text-white drop-shadow-md transition-colors hover:text-amber-100"
        >
          PT.
        </JournalLink>

        <div className="hidden items-center gap-8 font-mono text-xs text-white/80 sm:flex">
          <JournalLink
            href="/#about"
            className="transition-colors hover:text-white"
          >
            about
          </JournalLink>

          <JournalLink
            href="/projects"
            className="transition-colors hover:text-white"
          >
            projects
          </JournalLink>

          <JournalLink
            href="/learning"
            className="transition-colors hover:text-white"
          >
            learning
          </JournalLink>

          <JournalLink
            href="/journey"
            className="transition-colors hover:text-white"
          >
            journey
          </JournalLink>

          <JournalLink
            href="/contact"
            className="transition-colors hover:text-white"
          >
            contact
          </JournalLink>
        </div>

        <a
          href="/resume.pdf"
          className="rounded-md border border-white/30 bg-black/10 px-4 py-2 font-mono text-xs text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-black/20"
        >
          resume
        </a>
      </nav>
    </header>
  );
}
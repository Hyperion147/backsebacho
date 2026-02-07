import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground transition-colors duration-300">
      <main className="flex flex-col items-center gap-8 text-center px-4">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet bg-clip-text text-transparent drop-shadow-sm">
            Master Web <br className="hidden sm:inline" />
            Concepts
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            A comprehensive guide to the{" "}
            <span className="font-semibold text-foreground">
              theoretical foundations
            </span>{" "}
            of HTML, CSS, and JavaScript.
            <br className="hidden sm:inline" />
            Tailored for college curricula and exam preparation.
          </p>
        </div>

        <Link
          href="/docs"
          className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-10 text-base font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
        >
          <span className="mr-2">Go to Documentation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </main>
    </div>
  );
}

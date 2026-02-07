import Link from "next/link";

const topics = [
  {
    title: "HTML",
    description:
      "Structure & Semantics. Document standards, accessibility principles, and the DOM tree structure.",
    href: "/docs/html",
    color: "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
  },
  {
    title: "CSS",
    description:
      "Presentation & Layout. The Box Model, cascading rules, specificity hierarchy, and layout theory.",
    href: "/docs/css",
    color: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "JavaScript",
    description:
      "Logic & Behavior. Execution contexts, prototype chains, closures, and the event loop mechanism.",
    href: "/docs/javascript",
    color: "bg-brand-yellow/10 text-brand-yellow border-brand-yellow/20",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
      </svg>
    ),
  },
];

export default function DocsPage() {
  return (
    <div className="bg-background p-6 md:p-10 font-sans">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
              Academic Documentation
            </h1>
            <p className="max-w-2xl text-xl text-muted-foreground">
              Structured notes and theoretical explanations for your web
              development courses.
            </p>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-accent"
            >
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border shadow-sm transition-transform duration-300 group-hover:scale-110 ${item.color}`}
              >
                {item.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="absolute top-8 right-8 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground group-hover:text-foreground"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

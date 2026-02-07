export default function HTMLPage() {
  return (
    <div className="p-6 md:p-10 font-sans">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          HTML Documentation
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          HyperText Markup Language (HTML) is the core standard for defining the
          structure and semantics of a document on the web.
        </p>
        <div className="rounded-xl border p-8 dark:border-zinc-800 bg-card shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Course Objectives</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Understand Semantic HTML5 elements.</li>
            <li>Master the Document Object Model (DOM) structure.</li>
            <li>Learn form handling and validation theory.</li>
            <li>Accessibility standards (WCAG).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

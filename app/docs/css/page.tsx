export default function CSSPage() {
  return (
    <div className="p-6 md:p-10 font-sans">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          CSS Documentation
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Cascading Style Sheets (CSS) manages the visual presentation and
          layout rules of the web.
        </p>
        <div className="rounded-xl border p-8 dark:border-zinc-800 bg-card shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Academic Focus</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>The Box Model: Margin, Border, Padding, and Content.</li>
            <li>CSS Specificity hierarchy and Cascading rules.</li>
            <li>Layout Algorithms: Flexbox vs. Grid theory.</li>
            <li>Responsive design and Media Query principles.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

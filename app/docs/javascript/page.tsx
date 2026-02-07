export default function JavaScriptPage() {
  return (
    <div className="p-6 md:p-10 font-sans">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          JavaScript Documentation
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          JavaScript defines the programmatic behavior and logic of the web
          ecosystem.
        </p>
        <div className="rounded-xl border p-8 dark:border-zinc-800 bg-card shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Core Concepts</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Execution Context and the Call Stack.</li>
            <li>JavaScript Engine: Memory Heap and Event Loop.</li>
            <li>Prototypal Inheritance and Closures.</li>
            <li>Asynchronous Programming: Promises and Async/Await theory.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

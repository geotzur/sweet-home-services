export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-brand-teal-500 sm:text-5xl">
          Sweet Home Services
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Professional websites with SEO optimization and smart automations for
          local businesses across the USA.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#plans"
            className="rounded-lg bg-brand-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-teal-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal-500"
          >
            View Plans
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-brand-amber-400 px-6 py-3 text-sm font-semibold text-brand-amber-600 hover:bg-brand-amber-50"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}

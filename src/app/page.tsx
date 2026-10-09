const features = [
  {
    title: "Property Listings",
    description:
      "Browse clear and accessible information about available neighborhood homes.",
  },
  {
    title: "Neighborhood Sponsors",
    description:
      "Discover local organizations and businesses that support the community.",
  },
  {
    title: "Voice Help",
    description:
      "Get assistance navigating property information with voice-friendly tools.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <header>
          <p className="font-semibold text-blue-700">
            Neighborhood Property Resources
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Neighborhood Listing Platform
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Find property information, local sponsors, and accessible
            neighborhood assistance in one convenient place.
          </p>
        </header>

        <section className="mt-12" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl font-bold">
            Platform features
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
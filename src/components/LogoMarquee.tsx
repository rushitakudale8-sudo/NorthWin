const logos = [
  'Acme Corp', 'Lumen', 'Northgate', 'Vertex', 'Cobalt', 'Helios', 'Monarch', 'Quartz',
];

export default function LogoMarquee() {
  return (
    <section className="py-12 border-y border-ink-100 bg-ink-50/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm font-500 text-ink-400 uppercase tracking-widest mb-8">
          Trusted by teams at
        </p>
        <div className="relative">
          <div className="flex w-max animate-marquee gap-16">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="text-2xl font-700 font-display text-ink-300 whitespace-nowrap hover:text-brand-500 transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-50/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-50/80 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

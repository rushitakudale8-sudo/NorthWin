import { productGroups } from '@/data/products';

export default function ProductGroups() {
  return (
    <section id="groups" className="py-20 sm:py-24 bg-surface border-y border-brand-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-sm font-600 text-brand-600 uppercase tracking-widest">Product Groups</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-700 text-balance">
            Browse our range of medical equipment categories
          </h2>
          <p className="mt-4 text-ink-500">
            From mobility aids to respiratory care — find exactly what you need.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {productGroups.map((g, i) => (
            <a
              key={g.name}
              href="#products"
              className="reveal group relative rounded-2xl overflow-hidden border border-brand-100 bg-white hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={g.image}
                  alt={g.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="text-2xl mb-1.5">{g.icon}</span>
                <h3 className="text-sm sm:text-base font-600 text-white leading-tight">{g.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

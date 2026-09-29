const team = [
  {
    name: 'Alex Morgan',
    role: 'Founder & Principal Designer',
    image: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Jordan Lee',
    role: 'Lead Engineer',
    image: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Sam Rivera',
    role: 'Product Strategist',
    image: 'https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Casey Kim',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/37273005/pexels-photo-37273005.png?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-ink-50/50 border-y border-ink-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-sm font-600 text-brand-600 uppercase tracking-widest">The studio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-700 text-balance">
            A small team with a big track record.
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            We stay deliberately small so every project gets senior attention end to end.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <div
              key={m.name}
              className="reveal group text-center"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-square">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-600 text-lg">{m.name}</h3>
              <p className="text-sm text-brand-600 font-500 mt-0.5">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

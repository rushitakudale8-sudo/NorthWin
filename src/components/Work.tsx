import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Helios Finance',
    category: 'Fintech · Web App',
    desc: 'A consumer investing platform that grew to 50k users in six months.',
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=900',
    metric: '+180% user retention',
  },
  {
    title: 'Monarch Health',
    category: 'Healthcare · Mobile',
    desc: 'Patient engagement app connecting 12 clinics across three states.',
    image: 'https://images.pexels.com/photos/8204363/pexels-photo-8204363.jpeg?auto=compress&cs=tinysrgb&w=900',
    metric: '4.9★ App Store rating',
  },
  {
    title: 'Quartz Commerce',
    category: 'E-commerce · Platform',
    desc: 'Headless storefront powering $4M in annual recurring revenue.',
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=900',
    metric: '3.2× conversion lift',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-ink-50/50 border-y border-ink-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 reveal">
          <div className="max-w-xl">
            <span className="text-sm font-600 text-brand-600 uppercase tracking-widest">Selected work</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-700 text-balance">
              Products we're proud to have shipped.
            </h2>
          </div>
          <a href="#contact" className="text-sm font-500 text-brand-600 hover:text-brand-700 inline-flex items-center gap-1.5 group">
            See all case studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="px-3 py-1 rounded-full glass text-xs font-500 text-ink-800">
                    {p.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-600">
                    {p.metric}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-600 group-hover:text-brand-600 transition-colors">{p.title}</h3>
              <p className="mt-2 text-ink-500">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Northwind delivered our MVP in ten weeks — on spec, on budget. They felt like an extension of our own team, not an outside vendor.",
    author: 'Sarah Chen',
    role: 'CEO, Helios Finance',
  },
  {
    quote:
      "The level of craft is unreal. Every interaction, every pixel had intention behind it. Our users noticed the difference immediately.",
    author: 'Marcus Reid',
    role: 'Head of Product, Monarch Health',
  },
  {
    quote:
      "They took us from a Figma file to a scaled platform serving millions of requests. The engineering rigor is exactly what we needed.",
    author: 'Priya Nair',
    role: 'CTO, Quartz Commerce',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-sm font-600 text-brand-600 uppercase tracking-widest">Client stories</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-700 text-balance">
            We build long-term partnerships, not one-off projects.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.author}
              className="reveal p-8 rounded-2xl bg-white border border-ink-100 hover:shadow-xl hover:shadow-ink-900/5 transition-shadow"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="w-8 h-8 text-brand-200 mb-4" />
              <blockquote className="text-ink-700 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-ink-100">
                <div className="font-600 text-ink-900">{t.author}</div>
                <div className="text-sm text-ink-400">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

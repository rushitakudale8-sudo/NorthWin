import { Layers, Code2, LineChart, Sparkles, Cloud, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Product Strategy',
    desc: 'We help you define what to build and why — from discovery sprints to roadmaps that align stakeholders.',
  },
  {
    icon: Layers,
    title: 'UX & Interface Design',
    desc: 'Beautiful, accessible interfaces crafted in Figma and validated with real users before a line of code.',
  },
  {
    icon: Code2,
    title: 'Engineering',
    desc: 'Production-grade web and mobile apps built with modern stacks, shipped in two-week increments.',
  },
  {
    icon: LineChart,
    title: 'Growth & Analytics',
    desc: 'Instrumentation, dashboards, and experimentation systems that turn data into decisions.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure on AWS and Supabase with CI/CD, observability, and zero-downtime deploys.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Audits',
    desc: 'Penetration testing and code review to harden your app before it faces the real world.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16 reveal">
          <span className="text-sm font-600 text-brand-600 uppercase tracking-widest">What we do</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-700 text-balance">
            Full-stack capabilities, one accountable team.
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            From first sketch to scaled platform, we cover every discipline your product needs —
            so you never have to coordinate five vendors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative p-8 rounded-2xl border border-ink-100 bg-white hover:border-brand-300 hover:shadow-xl hover:shadow-brand-600/5 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors mb-5">
                <s.icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-600 mb-2">{s.title}</h3>
              <p className="text-ink-500 leading-relaxed">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-500 text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

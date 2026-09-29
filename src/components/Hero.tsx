import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-500 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Now accepting new projects for Q4 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-700 leading-[1.08] text-balance animate-fade-up">
              We design and build <span className="gradient-text">digital products</span> that move businesses forward.
            </h1>

            <p className="mt-6 text-lg text-ink-500 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Northwind is a consulting studio partnering with founders and product teams to
              turn ambitious ideas into polished, scalable software.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink-900 text-white font-500 hover:bg-brand-600 transition-all hover:shadow-lg hover:shadow-brand-600/20"
              >
                Start a project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink-200 text-ink-700 font-500 hover:border-brand-400 hover:text-brand-700 transition-colors"
              >
                <Play className="w-4 h-4 fill-current" />
                View our work
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {[
                { value: '120+', label: 'Projects shipped' },
                { value: '40+', label: 'Clients worldwide' },
                { value: '8 yrs', label: 'In the studio' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-700 font-display text-ink-900">{s.value}</div>
                  <div className="text-sm text-ink-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="lg:col-span-6 animate-scale-in" style={{ animationDelay: '0.15s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-200 to-teal-100 rounded-3xl blur-2xl opacity-60" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ink-900/10 border border-white/60">
                <img
                  src="https://images.pexels.com/photos/23496662/pexels-photo-23496662.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Team collaborating in a modern office"
                  className="w-full h-[440px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl shadow-xl border border-white/60 p-4 flex items-center gap-3 animate-float">
                <div className="grid place-items-center w-10 h-10 rounded-xl bg-brand-500 text-white">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="M22 4 12 14.01l-3-3" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-600 text-ink-900">98% on-time delivery</div>
                  <div className="text-xs text-ink-400">Across all 2025 engagements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

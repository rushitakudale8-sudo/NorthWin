import { ArrowRight, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[640px] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-50" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-brand-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-100/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(#174A63 1px, transparent 1px), linear-gradient(90deg, #174A63 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-800 text-sm font-500 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Buy & Rent available on most products
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-700 leading-[1.12] text-balance animate-fade-up">
              Quality Medical & Surgical Products for{' '}
              <span className="text-brand-700">Better Patient Care</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-ink-500 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Reliable healthcare equipment and patient-care solutions for hospitals,
              clinics and home healthcare. Buy or rent the equipment you need.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="#products"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-900 text-white font-500 hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-700/20"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-brand-200 text-brand-800 font-500 hover:border-brand-400 hover:bg-brand-50 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Info bar */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 text-ink-600">
                <MapPin className="w-4 h-4 text-brand-600" />
                Kothrud, Pune
              </div>
              <a href="tel:+918796593557" className="flex items-center gap-2 text-ink-600 hover:text-brand-700 transition-colors">
                <Phone className="w-4 h-4 text-brand-600" />
                +91 87965 93557
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="lg:col-span-6 animate-scale-in" style={{ animationDelay: '0.15s' }}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-tr from-brand-200 to-brand-100 rounded-3xl blur-2xl opacity-50" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/10 border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/6129678/pexels-photo-6129678.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Healthcare professional checking patient blood pressure"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -left-3 sm:-left-5 glass rounded-2xl shadow-xl border border-brand-100 p-4 flex items-center gap-3 animate-float">
                <div className="grid place-items-center w-10 h-10 rounded-xl bg-brand-600 text-white">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="M22 4 12 14.01l-3-3" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-600 text-ink-900">Buy & Rent Options</div>
                  <div className="text-xs text-ink-500">On most medical equipment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

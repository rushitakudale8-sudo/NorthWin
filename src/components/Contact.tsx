import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div className="reveal">
            <span className="text-sm font-600 text-brand-600 uppercase tracking-widest">Get in touch</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-700 text-balance">
              Let's build something remarkable together.
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Tell us about your project and we'll get back to you within one business day.
              No sales calls, no obligation — just a genuine conversation about what you're building.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Mail, label: 'hello@northwind.studio' },
                { icon: Phone, label: '+1 (415) 555-0142' },
                { icon: MapPin, label: 'San Francisco · Remote worldwide' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="grid place-items-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <span className="text-ink-700 font-500">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="reveal p-8 rounded-3xl bg-ink-900 text-white"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="First name" name="firstName" placeholder="Jane" />
              <Field label="Last name" name="lastName" placeholder="Doe" />
            </div>
            <div className="mt-5">
              <Field label="Work email" name="email" type="email" placeholder="jane@company.com" />
            </div>
            <div className="mt-5">
              <Field label="Company" name="company" placeholder="Acme Inc." />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-500 text-ink-300 mb-2">Project details</label>
              <textarea
                name="message"
                rows={4}
                placeholder="What are you building, and what do you need help with?"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-ink-500 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-500 text-white font-600 hover:bg-brand-400 transition-colors disabled:opacity-70"
            >
              {sent ? (
                <>
                  <Check className="w-5 h-5" /> Message sent — we'll be in touch
                </>
              ) : (
                <>
                  Send message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-500 text-ink-300 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-ink-500 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all"
      />
    </div>
  );
}

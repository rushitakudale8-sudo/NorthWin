import { useState } from 'react';
import { Send, Check, Mail, MapPin } from 'lucide-react';

const ENQUIRY_EMAIL = 'service.navsanjivan10@gmail.com';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', product: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry from ${form.name || 'website visitor'}`;
    const body =
      `Name: ${form.name}%0D%0A` +
      `Phone: ${form.phone}%0D%0A` +
      `Email: ${form.email}%0D%0A` +
      `Product/Service Required: ${form.product}%0D%0A` +
      `Message: ${form.message}`;
    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-700/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-600/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <div className="reveal">
            <span className="text-sm font-600 text-brand-300 uppercase tracking-widest">Get in touch</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-700 text-white text-balance">
              Send us an enquiry
            </h2>
            <p className="mt-4 text-brand-100 leading-relaxed">
              Have a question about a product, rental terms or nursing services? Fill out the form
              and we'll get back to you as soon as possible. You can also email us directly.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-white/10 text-brand-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-brand-200">Email us</div>
                  <a href={`mailto:${ENQUIRY_EMAIL}`} className="font-500 text-white hover:text-brand-200 transition-colors break-all">
                    {ENQUIRY_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-white/10 text-brand-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-brand-200">Visit us</div>
                  <div className="font-500 text-white">Rambag Colony, Paud Road, Kothrud, Pune – 411038</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="reveal p-6 sm:p-8 rounded-3xl bg-white text-ink-800 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField label="Name" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Your name" required />
              <FormField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+91 ..." required />
            </div>
            <div className="mt-4">
              <FormField label="Email" name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@example.com" />
            </div>
            <div className="mt-4">
              <FormField label="Product / Service Required" name="product" value={form.product} onChange={(v) => setForm({ ...form, product: v })} placeholder="e.g. Wheelchair rental" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-500 text-ink-700 mb-1.5">Message</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what you need..."
                className="w-full px-4 py-3 rounded-xl bg-surface border border-brand-100 text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-900 text-white font-600 hover:bg-brand-700 transition-colors disabled:opacity-70"
            >
              {sent ? (
                <>
                  <Check className="w-5 h-5" /> Opening your email app...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Enquiry
                </>
              )}
            </button>
            <p className="mt-3 text-xs text-ink-400 text-center">
              Your enquiry will be sent to {ENQUIRY_EMAIL}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label, name, type = 'text', value, onChange, placeholder, required,
}: {
  label: string; name: string; type?: string; value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-500 text-ink-700 mb-1.5">
        {label}{required && <span className="text-brand-600"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-surface border border-brand-100 text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all"
      />
    </div>
  );
}

import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="absolute -inset-3 bg-gradient-to-tr from-brand-100 to-brand-50 rounded-3xl blur-2xl opacity-60" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.pexels.com/photos/6129595/pexels-photo-6129595.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Medical supplies organized in a healthcare setting"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="reveal">
            <span className="text-sm font-600 text-brand-600 uppercase tracking-widest">About Us</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-700 text-balance">
              Navsanjivani Surgical & Nursing Beuro
            </h2>
            <p className="mt-5 text-ink-500 leading-relaxed text-lg">
              Navsanjivani Surgical & Nursing Beuro provides a range of medical, surgical and
              patient-care products for healthcare facilities and home-care requirements. We
              focus on providing accessible product information and practical healthcare
              equipment for everyday patient-care needs.
            </p>
            <p className="mt-4 text-ink-500 leading-relaxed">
              Located in Kothrud, Pune, we serve hospitals, clinics, nursing facilities and
              home healthcare providers across Maharashtra. Our products are available for
              purchase and rental, making quality healthcare equipment accessible to all.
            </p>

            {/* Contact info cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-brand-100">
                <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-600 text-ink-900">Address</div>
                  <div className="text-sm text-ink-500 mt-0.5">Rambag Colony, Paud Road, Kothrud, Pune – 411038, Maharashtra</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-brand-100">
                <Mail className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-600 text-ink-900">Email</div>
                  <div className="text-sm text-ink-500 mt-0.5 break-all">service.navsanjivan10@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-brand-100">
                <Clock className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-600 text-ink-900">Hours</div>
                  <div className="text-sm text-ink-500 mt-0.5">Mon–Sat: 9:30 AM – 8:00 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-brand-100">
                <Phone className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-600 text-ink-900">Phone</div>
                  <div className="text-sm text-ink-500 mt-0.5">Available on request</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const footerLinks = {
  Products: ['Wheelchairs', 'Hospital Beds', 'Nebulizers', 'BP Monitors', 'Air Mattresses'],
  Services: ['Nursing Staff', 'Caregivers', 'Patient Care Assistants', 'Ward Attendants'],
  Company: ['About Us', 'Contact', 'Product Groups', 'Buy & Rent'],
};

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-400 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-600 text-white">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 C8 2 6 5 6 8 v3 c0 3 2 5 6 5 s6-2 6-5 V8 c0-3-2-6-6-6z" />
                  <path d="M12 16 v6" />
                  <path d="M8 22 h8" />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="font-display font-700 text-base text-white">Navsanjivani</div>
                <div className="text-[10px] text-ink-400">Surgical & Nursing Beuro</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-ink-400 leading-relaxed text-sm">
              Medical, surgical and patient-care products for hospitals, clinics and home
              healthcare. Buy or rent quality equipment in Pune, Maharashtra.
            </p>
            <p className="mt-4 text-sm text-ink-400">
              Rambag Colony, Paud Road, Kothrud, Pune – 411038
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading} className="md:col-span-2">
              <h4 className="text-sm font-600 text-white uppercase tracking-widest mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#products" className="text-sm hover:text-brand-300 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-600 text-white uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:service.navsanjivan10@gmail.com" className="text-sm hover:text-brand-300 transition-colors break-all">
                  service.navsanjivan10@gmail.com
                </a>
              </li>
              <li className="text-sm">Mon–Sat: 9:30 AM – 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p>© 2026 Navsanjivani Surgical & Nursing Beuro. All rights reserved.</p>
          <p>Designed for better patient care.</p>
        </div>
      </div>
    </footer>
  );
}

const footerLinks = {
  Services: ['Strategy', 'Design', 'Engineering', 'Analytics'],
  Company: ['About', 'Team', 'Careers', 'Blog'],
  Legal: ['Privacy', 'Terms', 'Security'],
};

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-400 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2 font-display font-700 text-lg text-white">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-brand-600 text-white">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 L2 7 l10 5 10-5-10-5z" />
                  <path d="M2 17 l10 5 10-5" />
                  <path d="M2 12 l10 5 10-5" />
                </svg>
              </span>
              Northwind
            </a>
            <p className="mt-4 max-w-sm text-ink-500 leading-relaxed">
              A consulting studio designing and building digital products for ambitious teams worldwide.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading} className="md:col-span-2">
              <h4 className="text-sm font-600 text-white uppercase tracking-widest mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-brand-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1">
            <h4 className="text-sm font-600 text-white uppercase tracking-widest mb-4">Social</h4>
            <ul className="space-y-2.5">
              {['Twitter', 'LinkedIn', 'GitHub'].map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm hover:text-brand-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 Northwind Studio. All rights reserved.</p>
          <p>Designed & built in-house.</p>
        </div>
      </div>
    </footer>
  );
}

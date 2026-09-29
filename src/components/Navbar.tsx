import { useEffect, useState } from 'react';
import { Menu, X, Search, Mail, Phone } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Product Groups', href: '#groups' },
  { label: 'Nursing & Care', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function Navbar({ searchQuery, onSearchChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm border-b border-brand-100' : 'bg-white/95 border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-900 text-white">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 C8 2 6 5 6 8 v3 c0 3 2 5 6 5 s6-2 6-5 V8 c0-3-2-6-6-6z" />
              <path d="M12 16 v6" />
              <path d="M8 22 h8" />
            </svg>
          </span>
          <div className="leading-tight hidden sm:block">
            <div className="font-display font-700 text-sm text-brand-900">Navsanjivani</div>
            <div className="text-[10px] text-ink-500 font-500">Surgical & Nursing Beuro</div>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-500 text-ink-600 hover:text-brand-700 transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className="p-2 rounded-lg text-ink-600 hover:bg-brand-50 hover:text-brand-700 transition-colors"
            aria-label="Search products"
          >
            <Search className="w-5 h-5" />
          </button>
          <a
            href="tel:+918796593557"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-brand-200 text-brand-800 text-sm font-500 hover:bg-brand-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            87965 93557
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-900 text-white text-sm font-500 hover:bg-brand-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Enquiry
          </a>
          <button
            className="lg:hidden p-2 -mr-1 text-ink-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-brand-100 glass animate-slide-down">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products by name..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-brand-100 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pb-5 pt-2 glass border-t border-brand-100 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 px-3 rounded-lg text-ink-700 hover:bg-brand-50 hover:text-brand-700 transition-colors font-500"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+918796593557"
            onClick={() => setOpen(false)}
            className="py-3 text-center rounded-full border border-brand-200 text-brand-800 font-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              Call: 87965 93557
            </span>
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 py-3 text-center rounded-full bg-brand-900 text-white font-500"
          >
            Send Enquiry
          </a>
        </div>
      </div>
    </header>
  );
}

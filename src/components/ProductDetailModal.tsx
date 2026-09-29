import { useEffect } from 'react';
import type { Product } from '@/data/products';
import { X, ShoppingBag, RotateCw, HelpCircle, Check, Truck, ShieldCheck } from 'lucide-react';

const ENQUIRY_EMAIL = 'service.navsanjivan10@gmail.com';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const showBuy = product.availability === 'buy' || product.availability === 'both';
  const showRent = product.availability === 'rent' || product.availability === 'both';
  const isEnquiry = product.availability === 'enquiry' || (!product.buyPrice && !product.rentPriceDaily);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const buildEnquiryLink = (intent: 'buy' | 'rent' | 'enquiry') => {
    const subject = `Enquiry: ${product.name} — ${intent === 'buy' ? 'Purchase' : intent === 'rent' ? 'Rental' : 'Availability'}`;
    const body =
      `Hello Navsanjivani Surgical & Nursing Beuro,%0D%0A%0D%0A` +
      `I am interested in the following product:%0D%0A%0D%0A` +
      `Product: ${product.name}%0D%0A` +
      `Intent: ${intent === 'buy' ? 'Purchase (Buy)' : intent === 'rent' ? 'Rental (Rent)' : 'Price & Availability'}%0D%0A` +
      `Group: ${product.group}%0D%0A%0D%0A` +
      `Please share pricing and availability details.%0D%0A%0D%0A` +
      `Thank you.`;
    return `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 grid place-items-center w-9 h-9 rounded-full bg-white/80 glass text-ink-600 hover:text-ink-900 hover:bg-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid sm:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square sm:aspect-auto sm:min-h-[400px] overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <AvailabilityBadge availability={product.availability} />
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col">
            <span className="text-xs font-600 text-brand-600 uppercase tracking-widest">{product.group}</span>
            <h2 className="mt-2 text-2xl font-700 text-ink-900">{product.name}</h2>
            <p className="mt-3 text-ink-500 leading-relaxed">{product.description}</p>

            {/* Specs */}
            <div className="mt-5">
              <h3 className="text-sm font-600 text-ink-900 mb-2">Specifications</h3>
              <ul className="space-y-1.5">
                {product.specs.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-ink-600">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="mt-5 pt-5 border-t border-ink-100">
              {showBuy && product.buyPrice && (
                <div className="mb-3">
                  <div className="text-xs text-ink-400 uppercase tracking-widest font-500">Purchase Price</div>
                  <div className="text-2xl font-700 text-ink-900">₹{product.buyPrice.toLocaleString('en-IN')}</div>
                </div>
              )}

              {showRent && product.rentPriceDaily && (
                <div className="mb-3">
                  <div className="text-xs text-ink-400 uppercase tracking-widest font-500">Rental Pricing</div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="text-center p-2.5 rounded-xl bg-surface border border-brand-100">
                      <div className="text-xs text-ink-400">Daily</div>
                      <div className="font-700 text-ink-900 text-sm">₹{product.rentPriceDaily}</div>
                    </div>
                    <div className="text-center p-2.5 rounded-xl bg-surface border border-brand-100">
                      <div className="text-xs text-ink-400">Weekly</div>
                      <div className="font-700 text-ink-900 text-sm">₹{product.rentPriceWeekly}</div>
                    </div>
                    <div className="text-center p-2.5 rounded-xl bg-surface border border-brand-100">
                      <div className="text-xs text-ink-400">Monthly</div>
                      <div className="font-700 text-ink-900 text-sm">₹{product.rentPriceMonthly}</div>
                    </div>
                  </div>
                  {product.securityDeposit && (
                    <div className="mt-2 text-xs text-ink-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                      Security deposit: ₹{product.securityDeposit.toLocaleString('en-IN')} (refundable)
                    </div>
                  )}
                  <div className="mt-2 text-xs text-ink-500 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-brand-600" />
                    Delivery & pickup available in Pune
                  </div>
                </div>
              )}

              {isEnquiry && (
                <div className="mb-4 p-3 rounded-xl bg-brand-50 border border-brand-100 text-sm text-brand-800">
                  Price & availability on request. Contact us for details.
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-auto pt-4 flex flex-col gap-2.5">
              {showBuy && (
                <a
                  href={buildEnquiryLink('buy')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brand-900 text-white font-500 hover:bg-brand-700 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {product.buyPrice ? 'Buy Now' : 'Request Purchase'}
                </a>
              )}
              {showRent && (
                <a
                  href={buildEnquiryLink('rent')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brand-100 text-brand-800 font-500 hover:bg-brand-200 transition-colors"
                >
                  <RotateCw className="w-4 h-4" />
                  Request Rental
                </a>
              )}
              {product.availability === 'enquiry' && (
                <a
                  href={buildEnquiryLink('enquiry')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-ink-100 text-ink-700 font-500 hover:bg-ink-200 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  Enquire Now
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AvailabilityBadge({ availability }: { availability: string }) {
  const config: Record<string, { label: string; dot: string; bg: string; text: string }> = {
    buy: { label: 'Available for Buy', dot: 'bg-green-500', bg: 'bg-green-50', text: 'text-green-700' },
    rent: { label: 'Available for Rent', dot: 'bg-blue-500', bg: 'bg-blue-50', text: 'text-blue-700' },
    both: { label: 'Buy & Rent Available', dot: 'bg-brand-500', bg: 'bg-brand-50', text: 'text-brand-700' },
    enquiry: { label: 'Enquiry Required', dot: 'bg-ink-300', bg: 'bg-ink-50', text: 'text-ink-600' },
  };
  const c = config[availability] ?? config.enquiry;
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-500 ${c.bg} ${c.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </div>
  );
}

import type { Product } from '@/data/products';
import { ShoppingBag, RotateCw, HelpCircle } from 'lucide-react';

const availabilityConfig: Record<string, { label: string; dot: string; bg: string; text: string }> = {
  buy: { label: 'Available for Buy', dot: 'bg-green-500', bg: 'bg-green-50', text: 'text-green-700' },
  rent: { label: 'Available for Rent', dot: 'bg-blue-500', bg: 'bg-blue-50', text: 'text-blue-700' },
  both: { label: 'Buy & Rent Available', dot: 'bg-brand-500', bg: 'bg-brand-50', text: 'text-brand-700' },
  enquiry: { label: 'Enquiry Required', dot: 'bg-ink-300', bg: 'bg-ink-50', text: 'text-ink-600' },
};

interface ProductCardProps {
  product: Product;
  index: number;
  onClick: () => void;
}

export default function ProductCard({ product, index, onClick }: ProductCardProps) {
  const avail = availabilityConfig[product.availability];
  const showBuy = product.availability === 'buy' || product.availability === 'both';
  const showRent = product.availability === 'rent' || product.availability === 'both';

  return (
    <div
      className="reveal group flex flex-col rounded-2xl overflow-hidden border border-brand-100 bg-white hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Image */}
      <button onClick={onClick} className="relative aspect-square overflow-hidden text-left">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Availability badge */}
        <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-500 ${avail.bg} ${avail.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${avail.dot}`} />
          {avail.label}
        </div>
      </button>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <button onClick={onClick} className="text-left">
          <h3 className="font-600 text-base text-ink-900 group-hover:text-brand-700 transition-colors">{product.name}</h3>
        </button>
        <p className="mt-1.5 text-sm text-ink-500 line-clamp-2 leading-relaxed flex-1">{product.description}</p>

        {/* Price */}
        <div className="mt-3">
          {product.buyPrice ? (
            <div className="text-sm">
              <span className="text-ink-400">Buy: </span>
              <span className="font-700 text-ink-900">₹{product.buyPrice.toLocaleString('en-IN')}</span>
            </div>
          ) : product.rentPriceDaily ? (
            <div className="text-sm">
              <span className="text-ink-400">Rent from: </span>
              <span className="font-700 text-ink-900">₹{product.rentPriceDaily}/day</span>
            </div>
          ) : (
            <div className="text-sm text-ink-400 font-500">Price & availability on request</div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          {showBuy && (
            <button
              onClick={onClick}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-brand-900 text-white text-xs font-500 hover:bg-brand-700 transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Buy Now
            </button>
          )}
          {showRent && (
            <button
              onClick={onClick}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-brand-100 text-brand-800 text-xs font-500 hover:bg-brand-200 transition-colors"
            >
              <RotateCw className="w-3.5 h-3.5" />
              Rent Now
            </button>
          )}
          {product.availability === 'enquiry' && (
            <button
              onClick={onClick}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-ink-100 text-ink-700 text-xs font-500 hover:bg-ink-200 transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Enquire Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

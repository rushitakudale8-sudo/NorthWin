import { useState } from 'react';
import { products, type Product, type Availability } from '@/data/products';
import { Search } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ProductDetailModal from '@/components/ProductDetailModal';

type Filter = 'all' | 'buy' | 'rent' | 'both';

const filterLabels: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'buy', label: 'Buy' },
  { key: 'rent', label: 'Rent' },
  { key: 'both', label: 'Buy & Rent' },
];

interface ProductsProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function Products({ searchQuery, onSearchChange }: ProductsProps) {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = products.filter((p) => {
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.group.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filter === 'all' ||
      (filter === 'buy' && (p.availability === 'buy' || p.availability === 'both')) ||
      (filter === 'rent' && (p.availability === 'rent' || p.availability === 'both')) ||
      (filter === 'both' && p.availability === 'both');

    return matchesSearch && matchesFilter;
  });

  return (
    <section id="products" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 reveal">
          <span className="text-sm font-600 text-brand-600 uppercase tracking-widest">Our Products</span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-700 text-balance">
            Medical equipment available to buy or rent
          </h2>
          <p className="mt-4 text-ink-500">
            All products are quality-checked. Prices shown where available — enquire for the rest.
          </p>
        </div>

        {/* Search + filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-10 reveal">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-brand-100 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {filterLabels.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-500 whitespace-nowrap transition-all ${
                  filter === f.key
                    ? 'bg-brand-900 text-white'
                    : 'bg-surface text-ink-600 border border-brand-100 hover:border-brand-300 hover:text-brand-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onClick={() => setSelected(p)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-ink-400">
            <p className="text-lg">No products found matching your search.</p>
            <button
              onClick={() => { onSearchChange(''); setFilter('all'); }}
              className="mt-4 text-brand-600 font-500 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {selected && <ProductDetailModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

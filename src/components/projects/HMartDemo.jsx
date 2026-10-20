import React, { useState } from 'react';
import { ShoppingBag, Tag, Check, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';

export default function HMartDemo({ project }) {
  const [cartCount, setCartCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sampleProducts = [
    { id: 1, name: "Gourmet Shin Ramyun Pack", category: "Snacks", price: "$6.49", tag: "Best Seller" },
    { id: 2, name: "Artisanal Aged Kimchi 500g", category: "Fresh", price: "$8.99", tag: "Organic" },
    { id: 3, name: "Spicy Rice Cake (Tteokbokki)", category: "Pantry", price: "$5.25", tag: "Quick Cook" },
    { id: 4, name: "Hydrating Snail Mucin Sheet Mask", category: "K-Beauty", price: "$3.50", tag: "Trending" },
  ];

  const categories = ["All", "Snacks", "Fresh", "Pantry", "K-Beauty"];

  const filtered = selectedCategory === 'All'
    ? sampleProducts
    : sampleProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full rounded-2xl bg-space-900 border border-white/10 p-4 sm:p-6">
      {/* Top Shop Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-sm text-starlight">H-Mart Seoul Market Concept</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-warm/15 text-accent-warm border border-accent-warm/30">
            Concept Preview
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Category filters */}
          <div className="hidden sm:flex items-center gap-1">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedCategory(c)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                  selectedCategory === c ? 'bg-accent-blue text-white' : 'text-lunardust hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-space-850 border border-white/10 text-xs font-mono text-starlight">
            <ShoppingBag className="w-3.5 h-3.5 text-accent-blue" />
            <span>Cart ({cartCount})</span>
          </div>
        </div>
      </div>

      {/* Product Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-3 rounded-xl bg-space-950 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-space-850 text-cosmicmuted">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-accent-blue font-bold">
                  {item.tag}
                </span>
              </div>
              <h4 className="font-display font-semibold text-xs text-starlight line-clamp-1 mb-1">
                {item.name}
              </h4>
              <span className="font-mono text-xs font-bold text-starlight">
                {item.price}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setCartCount(prev => prev + 1)}
              className="mt-3 w-full py-1.5 rounded-lg bg-space-850 hover:bg-accent-blue text-lunardust hover:text-white font-mono text-[11px] font-medium transition-colors"
            >
              + Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Links Bar */}
      <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-cosmicmuted text-[11px]">
          React • Vite • Tailwind CSS • Responsive UI Concept
        </span>

        <div className="flex items-center gap-4">
          <a
            href={project.links.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:text-white flex items-center gap-1 font-bold"
          >
            <span>Live GitHub Pages Demo</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={project.links.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lunardust hover:text-white flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}

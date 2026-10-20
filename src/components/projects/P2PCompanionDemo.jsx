import React, { useState } from 'react';
import { ArrowUpDown, ExternalLink, ShieldAlert, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';

export default function P2PCompanionDemo({ project }) {
  const [isSorted, setIsSorted] = useState(false);

  // Exchanges specified by user: Binance, Bitget, Bybit, OKX, MEXC, KuCoin
  const [exchangeData] = useState([
    { exchange: "Binance", price: 67240, change: "+1.2%", volume: "High" },
    { exchange: "Bitget", price: 67180, change: "+0.8%", volume: "Moderate" },
    { exchange: "Bybit", price: 67210, change: "+1.1%", volume: "High" },
    { exchange: "OKX", price: 67225, change: "+0.9%", volume: "High" },
    { exchange: "MEXC", price: 67290, change: "+1.4%", volume: "Moderate" },
    { exchange: "KuCoin", price: 67195, change: "+0.7%", volume: "Moderate" },
  ]);

  const displayed = isSorted
    ? [...exchangeData].sort((a, b) => b.price - a.price)
    : exchangeData;

  return (
    <div className="w-full rounded-2xl bg-space-900 border border-white/10 p-4 sm:p-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
        <div>
          <span className="font-display font-bold text-sm text-starlight block">
            Multi-Exchange Price Comparison Board
          </span>
          <span className="text-[10px] font-mono text-cosmicmuted">
            Binance • Bitget • Bybit • OKX • MEXC • KuCoin
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsSorted(!isSorted)}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-space-850 hover:bg-space-800 border border-white/10 text-xs font-mono text-starlight transition-colors"
        >
          <ArrowUpDown className="w-3.5 h-3.5 text-accent-blue" />
          <span>{isSorted ? "Sorted by Price (Desc)" : "Sort by Price"}</span>
        </button>
      </div>

      {/* Exchange Price Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {displayed.map((item, index) => (
          <div
            key={item.exchange}
            className="p-3 rounded-xl bg-space-950 border border-white/5 hover:border-accent-blue/30 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-display font-semibold text-xs text-starlight">
                {item.exchange}
              </span>
              <span className="text-[9px] font-mono text-emerald-400">
                {item.change}
              </span>
            </div>
            <div className="font-mono text-sm font-bold text-starlight mb-1">
              ${item.price.toLocaleString()}
            </div>
            <span className="text-[9px] font-mono text-cosmicmuted">
              Vol: {item.volume}
            </span>
          </div>
        ))}
      </div>

      {/* Honest disclaimer notice */}
      <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-cosmicmuted text-[11px] flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-cosmicmuted" />
          SvelteKit • Svelte • JavaScript • Price comparison architecture
        </span>

        <a
          href={project.links.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-blue hover:text-white flex items-center gap-1 font-bold"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub Repository</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { Network, Sparkles, Target, Zap } from 'lucide-react';

export default function SynapseVectorDemo({ project }) {
  const [queryPoint, setQueryPoint] = useState({ x: 200, y: 100 });
  const [nodes, setNodes] = useState(() => [
    { id: 1, x: 120, y: 70, label: "BERT Embedding", category: "NLP" },
    { id: 2, x: 160, y: 110, label: "Vector Index", category: "HNSW" },
    { id: 3, x: 230, y: 80, label: "Cosine Metric", category: "Math" },
    { id: 4, x: 310, y: 130, label: "Quantized IVFPQ", category: "Index" },
    { id: 5, x: 90, y: 140, label: "Dot Product", category: "Math" },
    { id: 6, x: 380, y: 70, label: "ANN Search", category: "Alg" },
    { id: 7, x: 270, y: 145, label: "L2 Norm", category: "Math" },
  ]);

  const handleCanvasClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setQueryPoint({ x, y });
  };

  // Compute Euclidean/Cosine distance proxy to find nearest 3 neighbors
  const rankedNodes = nodes
    .map((node) => {
      const dx = node.x - queryPoint.x;
      const dy = node.y - queryPoint.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const similarity = Math.max(0, (1 - dist / 300)).toFixed(3);
      return { ...node, dist, similarity };
    })
    .sort((a, b) => b.similarity - a.similarity);

  const nearest3Ids = new Set(rankedNodes.slice(0, 3).map((n) => n.id));

  return (
    <div className="w-full rounded-2xl bg-space-950/90 border border-white/10 p-4 sm:p-6 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Network className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs uppercase tracking-wider text-starlight font-bold">
            Interactive Vector Cosine Explorer
          </span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
          Wasm Cosine Probe
        </span>
      </div>

      <div
        onClick={handleCanvasClick}
        className="relative w-full h-44 sm:h-48 rounded-xl bg-space-900 border border-white/5 cursor-crosshair overflow-hidden select-none"
      >
        {/* Ambient Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#00f0ff15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Connecting Rays from Query Probe to Nearest Nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {nodes.map((node) => {
            const isNearest = nearest3Ids.has(node.id);
            if (!isNearest) return null;
            return (
              <line
                key={`line-${node.id}`}
                x1={queryPoint.x}
                y1={queryPoint.y}
                x2={node.x}
                y2={node.y}
                stroke="#00F0FF"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-pulse"
              />
            );
          })}
        </svg>

        {/* Existing Embedding Nodes */}
        {nodes.map((node) => {
          const isNearest = nearest3Ids.has(node.id);
          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
              style={{ left: `${node.x}px`, top: `${node.y}px` }}
            >
              <div
                className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-mono border backdrop-blur-sm transition-all ${
                  isNearest
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-cyan-glow scale-110 font-bold'
                    : 'bg-space-850/90 border-white/10 text-lunardust'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isNearest ? 'bg-cyan-400 animate-ping' : 'bg-cosmicmuted'
                  }`}
                />
                <span>{node.label}</span>
              </div>
            </div>
          );
        })}

        {/* Active Query Probe Target */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
          style={{ left: `${queryPoint.x}px`, top: `${queryPoint.y}px` }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-coral-500 flex items-center justify-center animate-ping opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Target className="w-4 h-4 text-coral-400" />
          </div>
        </div>

        <div className="absolute bottom-2 left-3 font-mono text-[10px] text-cosmicmuted pointer-events-none">
          Click anywhere to place query probe • Highlights Top-3 Cosine Similarity neighbors
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-lunardust pt-2 border-t border-white/5">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Top match: {rankedNodes[0]?.label} (Cosine Sim: {rankedNodes[0]?.similarity})
        </span>
        <span className="text-cosmicmuted">HNSW Graph Visualizer</span>
      </div>
    </div>
  );
}

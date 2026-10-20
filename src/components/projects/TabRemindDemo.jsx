import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Sparkles, Check, RotateCcw, Pill, Smartphone, Lock } from 'lucide-react';

export default function TabRemindDemo({ project }) {
  const [pills, setPills] = useState([
    { id: 1, name: "Morning Routine", dosage: "1 Tablet", color: "#3B82F6", popped: false },
    { id: 2, name: "Vitamin D3", dosage: "2000 IU", color: "#0EA5E9", popped: true },
    { id: 3, name: "Omega-3", dosage: "1 Capsule", color: "#F59E0B", popped: false },
    { id: 4, name: "Evening Dose", dosage: "500mg", color: "#8B5CF6", popped: false },
  ]);
  const [lastPopped, setLastPopped] = useState(null);

  const handlePop = (id) => {
    setPills((prev) =>
      prev.map((pill) => {
        if (pill.id === id) {
          const nextState = !pill.popped;
          if (nextState) setLastPopped(pill.name);
          return { ...pill, popped: nextState };
        }
        return pill;
      })
    );
  };

  const handleReset = () => {
    setPills(pills.map((p) => ({ ...p, popped: false })));
    setLastPopped(null);
  };

  return (
    <div className="w-full rounded-2xl bg-space-900 border border-white/10 p-4 sm:p-6">
      {/* Header with Non-clickable In Development Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          {/* Non-clickable In Development badge as requested */}
          <span className="px-2.5 py-1 rounded-full bg-accent-warm/15 border border-accent-warm/40 text-accent-warm font-mono text-xs font-bold flex items-center gap-1.5 cursor-default select-none">
            <span className="w-2 h-2 rounded-full bg-accent-warm" />
            In Development
          </span>
          <span className="font-mono text-xs text-cosmicmuted hidden sm:inline">
            Flutter • Dart • Mobile Architecture
          </span>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-space-850 hover:bg-space-800 text-starlight font-mono text-xs transition-colors"
          title="Reset blister pack simulation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Pack</span>
        </button>
      </div>

      {/* Tactile Blister Pack Animation Prototype */}
      <div className="relative rounded-2xl p-4 sm:p-5 bg-space-950 border border-white/10 overflow-hidden">
        <div className="flex items-center justify-between text-xs font-mono text-lunardust mb-4 pb-2 border-b border-white/5">
          <span className="flex items-center gap-1.5 font-bold text-starlight">
            <Pill className="w-4 h-4 text-accent-blue" />
            Daily Medication Dose Tracker
          </span>
          <span className="text-[10px] text-cosmicmuted">Click pocket to pop capsule</span>
        </div>

        {/* 4 Blister Pockets */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {pills.map((pill) => (
            <div
              key={pill.id}
              onClick={() => handlePop(pill.id)}
              className={`p-3 rounded-xl border flex flex-col items-center justify-between min-h-[130px] cursor-pointer transition-all select-none ${
                pill.popped
                  ? 'bg-space-900/60 border-dashed border-emerald-500/40'
                  : 'bg-space-850 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="w-full text-center mb-1">
                <span className="text-[11px] font-mono font-bold text-starlight block truncate">
                  {pill.name}
                </span>
                <span className="text-[9px] font-mono text-cosmicmuted">
                  {pill.dosage}
                </span>
              </div>

              {/* Capsule Visual */}
              <div className="relative w-14 h-14 flex items-center justify-center my-1">
                {pill.popped ? (
                  <div className="w-8 h-8 rounded-full border border-emerald-500/50 bg-emerald-500/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                  </div>
                ) : (
                  <div
                    className="w-9 h-4 rounded-full flex shadow transform -rotate-45"
                    style={{ backgroundColor: pill.color }}
                  >
                    <div className="w-1/2 h-full rounded-l-full bg-white/30" />
                  </div>
                )}
              </div>

              <span
                className={`text-[9px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                  pill.popped
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-lunardust bg-white/5'
                }`}
              >
                {pill.popped ? 'Taken ✓' : 'Push to Pop'}
              </span>
            </div>
          ))}
        </div>

        {lastPopped && (
          <div className="mt-3 px-3 py-1.5 rounded-lg bg-space-850 border border-white/10 text-starlight font-mono text-xs flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Bell className="w-3.5 h-3.5 text-accent-blue" />
              Recorded: {lastPopped} logged as taken.
            </span>
            <span className="text-[10px] text-emerald-400 font-bold">On Schedule</span>
          </div>
        )}
      </div>

      {/* Notice on Private / In-Development Repository */}
      <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-cosmicmuted text-[11px]">
          Scheduled reminders • Recurring medication routines • Dose compliance
        </span>

        {/* As requested: no public repo link invented; display non-clickable in-development status */}
        <div className="flex items-center gap-1.5 text-lunardust bg-space-850 px-3 py-1 rounded-md border border-white/10 cursor-not-allowed select-none">
          <Lock className="w-3 h-3 text-cosmicmuted" />
          <span>Repository Private • In Active Development</span>
        </div>
      </div>
    </div>
  );
}

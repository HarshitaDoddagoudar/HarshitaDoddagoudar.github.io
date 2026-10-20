import React, { useState, useEffect } from 'react';
import { GitBranch, GitCommit, GitMerge, Sparkles } from 'lucide-react';

export default function OrbitGitDemo({ project }) {
  const [orbits, setOrbits] = useState([
    { name: "main", color: "#FF4D36", radius: 55, speed: 0.02, angle: 0, commits: 14 },
    { name: "feat/physics-engine", color: "#00F0FF", radius: 95, speed: -0.015, angle: 1.2, commits: 8 },
    { name: "research/dr-n-stylus", color: "#FFB800", radius: 135, speed: 0.01, angle: 2.8, commits: 22 },
  ]);

  useEffect(() => {
    let animId;
    const tick = () => {
      setOrbits((prev) =>
        prev.map((orb) => ({
          ...orb,
          angle: orb.angle + orb.speed,
        }))
      );
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="w-full rounded-2xl bg-space-950/90 border border-white/10 p-4 sm:p-6 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-coral-400" />
          <span className="font-mono text-xs uppercase tracking-wider text-starlight font-bold">
            Gravitational Commit Graph Simulation
          </span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
          N-Body Orbit Physics
        </span>
      </div>

      <div className="relative w-full h-44 sm:h-48 rounded-xl bg-space-900 border border-white/5 flex items-center justify-center overflow-hidden">
        {/* Core Root Star / Initial Commit */}
        <div className="absolute w-8 h-8 rounded-full bg-coral-500 shadow-coral-glow flex items-center justify-center z-20">
          <GitCommit className="w-4 h-4 text-white" />
        </div>

        {/* Orbit Rings and Commit Satellites */}
        {orbits.map((orb) => {
          const x = Math.cos(orb.angle) * orb.radius;
          const y = Math.sin(orb.angle) * orb.radius;

          return (
            <React.Fragment key={orb.name}>
              {/* Elliptical Orbit Track */}
              <div
                className="absolute rounded-full border border-dashed border-white/10 pointer-events-none"
                style={{
                  width: `${orb.radius * 2}px`,
                  height: `${orb.radius * 2}px`,
                }}
              />
              {/* Branch Head Satellite */}
              <div
                className="absolute w-6 h-6 rounded-full flex items-center justify-center shadow-lg transition-transform cursor-pointer"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  backgroundColor: orb.color,
                  boxShadow: `0 0 15px ${orb.color}80`,
                }}
                title={`Branch: ${orb.name} (${orb.commits} commits)`}
              >
                <GitBranch className="w-3 h-3 text-space-950 stroke-[3]" />
              </div>
            </React.Fragment>
          );
        })}

        <div className="absolute bottom-2 left-3 font-mono text-[10px] text-cosmicmuted pointer-events-none">
          Branches orbit commit core with angular velocities scaled to churn rate
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-lunardust pt-2 border-t border-white/5">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-coral-400" />
          Interactive: Celestial Git topology with harmonic merge gravitational tugs.
        </span>
        <span className="text-cosmicmuted">D3-Force & WebGL</span>
      </div>
    </div>
  );
}

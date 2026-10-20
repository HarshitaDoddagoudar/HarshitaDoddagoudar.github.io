import React, { useState, useRef, useEffect } from 'react';
import { PenTool, RotateCcw, Sparkles, CheckCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function EndnotesDemo({ project }) {
  const [inkKey, setInkKey] = useState(0);
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'doodle'
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleReplay = () => {
    setInkKey((prev) => prev + 1);
  };

  // Doodle Canvas handlers for testing the stylus feel
  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = '#00F0FF';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = 'rgba(0, 240, 255, 0.4)';
    ctx.shadowBlur = 4;
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    if (activeTab === 'doodle' && canvasRef.current) {
      canvasRef.current.width = canvasRef.current.parentElement.clientWidth;
      canvasRef.current.height = 180;
    }
  }, [activeTab]);

  return (
    <div className="w-full rounded-2xl bg-space-950/90 border border-white/10 p-4 sm:p-6 backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <PenTool className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs uppercase tracking-wider text-starlight font-bold">
            Stylus Vector Ink Engine (Collaboration with Dr. N)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-lg bg-white/5 p-0.5 border border-white/10 text-xs font-mono">
            <button
              type="button"
              onClick={() => setActiveTab('demo')}
              className={`px-3 py-1 rounded-md transition-colors ${
                activeTab === 'demo' ? 'bg-cyan-500 text-space-950 font-bold' : 'text-lunardust hover:text-white'
              }`}
            >
              Signature Demo
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('doodle')}
              className={`px-3 py-1 rounded-md transition-colors ${
                activeTab === 'doodle' ? 'bg-cyan-500 text-space-950 font-bold' : 'text-lunardust hover:text-white'
              }`}
            >
              Freehand Test
            </button>
          </div>

          <button
            type="button"
            onClick={activeTab === 'demo' ? handleReplay : clearCanvas}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-starlight transition-colors"
            title={activeTab === 'demo' ? 'Replay ink drawing' : 'Clear doodle canvas'}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Screen */}
      {activeTab === 'demo' ? (
        <div
          key={inkKey}
          onClick={handleReplay}
          className="relative w-full h-44 sm:h-48 rounded-xl bg-space-900 border border-white/5 flex flex-col items-center justify-center p-4 cursor-pointer overflow-hidden group select-none"
        >
          {/* Subtle grid paper lines in background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          {/* Dr. N Research Watermark */}
          <span className="absolute top-2.5 left-3 font-mono text-[10px] text-cosmicmuted uppercase tracking-wider">
            Vector Bezier Stream • Low-Latency Ink (8.2ms)
          </span>

          {/* SVG Animated Ink Signature Path */}
          <svg
            className="w-full max-w-lg h-32 overflow-visible"
            viewBox="0 0 520 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Integral & Euler Formula Path */}
            <path
              d="M 25 110 C 25 130 40 135 50 125 C 60 115 50 25 50 15 C 50 5 65 5 70 20"
              stroke="#00F0FF"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="animate-ink-draw"
              style={{ animationDelay: '0.1s' }}
            />
            <path
              d="M 85 65 C 95 65 105 75 95 85 C 85 95 80 85 80 75 C 80 60 100 55 115 65"
              stroke="#00F0FF"
              strokeWidth="3"
              strokeLinecap="round"
              className="animate-ink-draw"
              style={{ animationDelay: '0.5s' }}
            />
            {/* Mathematical exponent */}
            <path
              d="M 125 50 Q 135 45 145 48 M 135 45 L 135 60"
              stroke="#00F0FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-ink-draw"
              style={{ animationDelay: '0.8s' }}
            />
            {/* + 1 = 0 equation */}
            <path
              d="M 165 72 L 185 72 M 175 62 L 175 82 M 200 65 L 200 82 M 220 70 L 235 70 M 220 76 L 235 76 M 250 72 C 250 62 265 62 265 72 C 265 82 250 82 250 72"
              stroke="#FF4D36"
              strokeWidth="3"
              strokeLinecap="round"
              className="animate-ink-draw"
              style={{ animationDelay: '1.1s' }}
            />

            {/* Handwritten Signature and Dr. N co-sign */}
            <path
              d="M 310 90 Q 330 35 345 75 T 375 65 T 405 80 Q 425 45 440 75 T 475 70"
              stroke="#F4F4F8"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-ink-draw"
              style={{ animationDelay: '1.6s' }}
            />
            <path
              d="M 320 98 Q 390 102 485 88"
              stroke="#00F0FF"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-ink-draw"
              style={{ animationDelay: '2.4s' }}
            />
          </svg>

          {/* Signature tag */}
          <div className="flex items-center gap-2 mt-1 font-mono text-[11px] text-lunardust">
            <CheckCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Handwritten Vector Signature: Dr. N × {PERSONAL_INFO.name.replace('[', '').replace(']', '')}</span>
          </div>

          <span className="absolute bottom-2 right-3 text-[10px] font-mono text-cosmicmuted group-hover:text-cyan-400 transition-colors">
            Click to replay stroke animation ↺
          </span>
        </div>
      ) : (
        <div className="relative w-full h-44 sm:h-48 rounded-xl bg-space-900 border border-white/10 flex flex-col items-center justify-center overflow-hidden">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-full cursor-crosshair touch-none"
          />
          <div className="absolute bottom-2 left-3 font-mono text-[10px] text-cosmicmuted pointer-events-none">
            Touch or drag cursor anywhere to draw in real time with vector stylus glow
          </div>
        </div>
      )}

      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-lunardust pt-2 border-t border-white/5">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Interactive: SVG path stroke-dashoffset animation simulating ink pen pressure.
        </span>
        <span className="text-cosmicmuted">{project.collabNote}</span>
      </div>
    </div>
  );
}

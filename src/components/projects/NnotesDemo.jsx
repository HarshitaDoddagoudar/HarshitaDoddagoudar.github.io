import React, { useState, useRef, useEffect } from 'react';
import { PenTool, Highlighter, Eraser, FileText, Timer, RotateCcw, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';

export default function NnotesDemo({ project }) {
  const [selectedTool, setSelectedTool] = useState('pen'); // 'pen' | 'highlighter' | 'eraser'
  const [pomodoroSeconds, setPomodoroSeconds] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Pomodoro countdown simulation
  useEffect(() => {
    let interval = null;
    if (timerRunning && pomodoroSeconds > 0) {
      interval = setInterval(() => {
        setPomodoroSeconds((prev) => prev - 1);
      }, 1000);
    } else if (pomodoroSeconds === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, pomodoroSeconds]);

  const formatTimer = (sec) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Canvas drawing handler
  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);

    if (selectedTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = 18;
    } else if (selectedTool === 'highlighter') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = 'rgba(250, 204, 21, 0.4)';
      ctx.lineWidth = 14;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 2.5;
    }

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
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
    if (canvasRef.current) {
      canvasRef.current.width = canvasRef.current.parentElement.clientWidth;
      canvasRef.current.height = 190;
      // Pre-draw an elegant sample formula
      const ctx = canvasRef.current.getContext('2d');
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.font = '16px "JetBrains Mono", monospace';
      ctx.fillStyle = '#9BA3B8';
      ctx.fillText("Nnotes: Stylus & PDF Workspace", 16, 32);
      ctx.fillText("✓ Local-first • No account required", 16, 56);
      ctx.fillText("✓ Co-created with Dr. Nitz", 16, 80);
    }
  }, []);

  return (
    <div className="w-full rounded-2xl bg-space-900 border border-white/10 p-4 sm:p-6">
      {/* Top Bar with Collaboration Notice & Android Tools */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Google Play Verified App
          </span>
          <span className="font-mono text-xs text-cosmicmuted hidden sm:inline">
            Kotlin • Jetpack Compose • Material 3
          </span>
        </div>

        {/* Toolbar & Study Pomodoro */}
        <div className="flex items-center gap-2">
          {/* Tool switchers */}
          <div className="flex rounded-lg bg-space-850 p-0.5 border border-white/10">
            <button
              type="button"
              onClick={() => setSelectedTool('pen')}
              className={`p-1.5 rounded-md transition-colors ${
                selectedTool === 'pen' ? 'bg-accent-blue text-white' : 'text-lunardust hover:text-white'
              }`}
              title="Stylus Pen"
            >
              <PenTool className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setSelectedTool('highlighter')}
              className={`p-1.5 rounded-md transition-colors ${
                selectedTool === 'highlighter' ? 'bg-amber-400 text-space-950' : 'text-lunardust hover:text-white'
              }`}
              title="Highlighter"
            >
              <Highlighter className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setSelectedTool('eraser')}
              className={`p-1.5 rounded-md transition-colors ${
                selectedTool === 'eraser' ? 'bg-white/20 text-white' : 'text-lunardust hover:text-white'
              }`}
              title="Eraser"
            >
              <Eraser className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pomodoro Timer Badge */}
          <button
            type="button"
            onClick={() => setTimerRunning(!timerRunning)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-space-850 border border-white/10 text-xs font-mono text-starlight hover:border-accent-blue/40"
            title="Toggle Study Pomodoro Timer"
          >
            <Timer className="w-3.5 h-3.5 text-accent-blue" />
            <span>{formatTimer(pomodoroSeconds)}</span>
            <span className="text-[10px] text-cosmicmuted">
              {timerRunning ? 'Pause' : 'Start'}
            </span>
          </button>

          <button
            type="button"
            onClick={clearCanvas}
            className="p-1.5 rounded-lg bg-space-850 border border-white/10 text-lunardust hover:text-white transition-colors"
            title="Clear canvas"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive Stylus Note Canvas */}
      <div className="relative w-full h-48 rounded-xl bg-space-950 border border-white/5 overflow-hidden">
        {/* Subtle lined paper grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100%_24px] pointer-events-none" />

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
          Draw or write with mouse/stylus • Tests Nnotes handwriting engine simulation
        </div>
      </div>

      {/* Co-creator acknowledgement & Links Bar */}
      <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-lunardust">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Co-created with <a href={project.links.collaborator} target="_blank" rel="noopener noreferrer" className="text-starlight underline hover:text-accent-blue">Dr. Nitz</a></span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.links.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:text-white flex items-center gap-1 font-bold"
          >
            <span>Google Play Store</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={project.links.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lunardust hover:text-white flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

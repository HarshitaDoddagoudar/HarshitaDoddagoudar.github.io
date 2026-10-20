import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * TUNABLE BACKGROUND CONFIGURATION
 * Adjust these values to increase or decrease the 3D movement intensity and styling.
 */
export const BACKGROUND_CONFIG = {
  // Master sensitivity multiplier for cursor 3D movement (1.0 = balanced, 0.5 = subtle, 2.0 = pronounced)
  movementStrength: 1.0,

  // Maximum 3D Tilt angle in degrees on mouse movement
  maxTiltDeg: 7.0,

  // Maximum parallax shift in pixels for foreground elements
  maxParallaxPx: 32.0,

  // Speed of the continuous idle floating drift
  idleDriftSpeed: 0.0006,

  // Base opacity of tech line art elements (0.10 to 0.22 ensures low-contrast subtlety)
  baseOpacity: 0.16,

  // Color palette for thin line art
  primaryColor: '#3B82F6',   // Calm electric blue
  secondaryColor: '#5A647B', // Muted slate gray
  accentColor: '#E25A38',    // Subtle warm accent
};

export default function Tech3DBackground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const stateRef = useRef({
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    tiltX: 0,
    tiltY: 0,
    targetTiltX: 0,
    targetTiltY: 0,
    hasDeviceOrientation: false,
    isVisible: true,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Track mouse for 3D tilt and depth shift
    const handleMouseMove = (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;

      stateRef.current.targetMouseX = normX;
      stateRef.current.targetMouseY = normY;
      stateRef.current.targetTiltX = -normY * BACKGROUND_CONFIG.maxTiltDeg * BACKGROUND_CONFIG.movementStrength;
      stateRef.current.targetTiltY = normX * BACKGROUND_CONFIG.maxTiltDeg * BACKGROUND_CONFIG.movementStrength;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Device orientation for mobile tilt
    const handleDeviceOrientation = (e) => {
      if (e.beta === null || e.gamma === null) return;
      stateRef.current.hasDeviceOrientation = true;
      const gamma = Math.max(-30, Math.min(30, e.gamma)); // left-to-right [-30, 30]
      const beta = Math.max(-30, Math.min(30, e.beta - 45)); // front-to-back tilt

      const normX = gamma / 30;
      const normY = beta / 30;

      stateRef.current.targetMouseX = normX;
      stateRef.current.targetMouseY = normY;
      stateRef.current.targetTiltX = -normY * BACKGROUND_CONFIG.maxTiltDeg * BACKGROUND_CONFIG.movementStrength;
      stateRef.current.targetTiltY = normX * BACKGROUND_CONFIG.maxTiltDeg * BACKGROUND_CONFIG.movementStrength;
    };
    window.addEventListener('deviceorientation', handleDeviceOrientation, { passive: true });

    // Pause rendering when tab is hidden
    const handleVisibility = () => {
      stateRef.current.isVisible = !document.hidden;
      if (stateRef.current.isVisible && !reducedMotion) {
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Generate tech line-art elements across 3 depth tiers
    // Depth: 0.25 (far), 0.55 (mid), 1.0 (near)
    const elementCount = window.innerWidth < 768 ? 22 : 44;
    const techTypes = ['bracket', 'terminal', 'graph', 'binary', 'chip', 'database', 'cube', 'circuit'];

    const items = Array.from({ length: elementCount }, (_, i) => {
      const type = techTypes[i % techTypes.length];
      const depthTier = i % 3 === 0 ? 1.0 : i % 3 === 1 ? 0.55 : 0.25;

      return {
        type,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        depth: depthTier,
        size: depthTier === 1.0 ? 36 : depthTier === 0.55 ? 26 : 18,
        driftSpeedX: (Math.random() - 0.5) * 0.15,
        driftSpeedY: (Math.random() - 0.5) * 0.12,
        phase: Math.random() * Math.PI * 2,
        color: i % 4 === 0 ? BACKGROUND_CONFIG.accentColor : i % 2 === 0 ? BACKGROUND_CONFIG.primaryColor : BACKGROUND_CONFIG.secondaryColor,
        text: type === 'binary' ? (Math.random() > 0.5 ? '0x7F2B' : '1011001') : null,
      };
    });

    // Helper draw functions for simple line-art (no neon glows, thin crisp strokes)
    const drawItem = (item, px, py) => {
      ctx.save();
      ctx.translate(px, py);
      ctx.strokeStyle = item.color;
      ctx.fillStyle = item.color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = BACKGROUND_CONFIG.baseOpacity * (0.5 + item.depth * 0.5);

      switch (item.type) {
        case 'bracket':
          // { } or < / >
          ctx.font = `${item.size * 0.8}px "JetBrains Mono", monospace`;
          ctx.fillText(item.depth > 0.5 ? '{ ... }' : '</>', -item.size / 2, item.size / 4);
          break;

        case 'terminal':
          // Mini code-editor outline with 3 window dots and code lines
          const w = item.size * 1.6;
          const h = item.size * 1.1;
          ctx.strokeRect(-w / 2, -h / 2, w, h);
          // 3 dots
          ctx.fillRect(-w / 2 + 3, -h / 2 + 3, 2, 2);
          ctx.fillRect(-w / 2 + 7, -h / 2 + 3, 2, 2);
          ctx.fillRect(-w / 2 + 11, -h / 2 + 3, 2, 2);
          // Code line segments
          ctx.beginPath();
          ctx.moveTo(-w / 2 + 4, -h / 2 + 9);
          ctx.lineTo(w / 2 - 8, -h / 2 + 9);
          ctx.moveTo(-w / 2 + 4, -h / 2 + 14);
          ctx.lineTo(w / 2 - 14, -h / 2 + 14);
          ctx.stroke();
          break;

        case 'graph':
          // 3 connected node vertices
          const r = 2.5;
          ctx.beginPath();
          ctx.arc(-10, -8, r, 0, Math.PI * 2);
          ctx.arc(8, -4, r, 0, Math.PI * 2);
          ctx.arc(0, 10, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(-10, -8);
          ctx.lineTo(8, -4);
          ctx.lineTo(0, 10);
          ctx.lineTo(-10, -8);
          ctx.stroke();
          break;

        case 'binary':
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillText(item.text, -12, 0);
          break;

        case 'chip':
          // IC chip outline with pin teeth
          const cw = item.size;
          const ch = item.size * 0.8;
          ctx.strokeRect(-cw / 2, -ch / 2, cw, ch);
          // 3 pins on top & bottom
          for (let p = -cw / 3; p <= cw / 3; p += cw / 3) {
            ctx.beginPath();
            ctx.moveTo(p, -ch / 2);
            ctx.lineTo(p, -ch / 2 - 3);
            ctx.moveTo(p, ch / 2);
            ctx.lineTo(p, ch / 2 + 3);
            ctx.stroke();
          }
          break;

        case 'database':
          // Cylinder outline
          const dw = item.size * 0.8;
          const dh = item.size;
          ctx.beginPath();
          ctx.ellipse(0, -dh / 2, dw / 2, 3, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-dw / 2, -dh / 2);
          ctx.lineTo(-dw / 2, dh / 2);
          ctx.ellipse(0, dh / 2, dw / 2, 3, 0, 0, Math.PI);
          ctx.lineTo(dw / 2, -dh / 2);
          ctx.stroke();
          break;

        case 'cube':
          // Isometric wireframe box
          const s = item.size * 0.45;
          ctx.beginPath();
          // Front diamond
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.86, -s * 0.5);
          ctx.lineTo(s * 0.86, s * 0.5);
          ctx.lineTo(0, s);
          ctx.lineTo(-s * 0.86, s * 0.5);
          ctx.lineTo(-s * 0.86, -s * 0.5);
          ctx.closePath();
          // Inner y-spokes
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -s);
          ctx.moveTo(0, 0);
          ctx.lineTo(s * 0.86, s * 0.5);
          ctx.moveTo(0, 0);
          ctx.lineTo(-s * 0.86, s * 0.5);
          ctx.stroke();
          break;

        case 'circuit':
          // Circuit trace with terminal connection pad
          ctx.beginPath();
          ctx.moveTo(-14, 0);
          ctx.lineTo(0, 0);
          ctx.lineTo(8, 8);
          ctx.lineTo(16, 8);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(18, 8, 2, 0, Math.PI * 2);
          ctx.stroke();
          break;

        default:
          break;
      }

      ctx.restore();
    };

    const render = () => {
      if (!stateRef.current.isVisible) return;

      const state = stateRef.current;

      // Smooth interpolation for mouse & 3D tilt
      state.mouseX += (state.targetMouseX - state.mouseX) * 0.05;
      state.mouseY += (state.targetMouseY - state.mouseY) * 0.05;
      state.tiltX += (state.targetTiltX - state.tiltX) * 0.05;
      state.tiltY += (state.targetTiltY - state.tiltY) * 0.05;

      // Apply CSS 3D tilt to container for true hardware-accelerated perspective
      if (containerRef.current && !reducedMotion) {
        containerRef.current.style.transform = `perspective(1000px) rotateX(${state.tiltX.toFixed(
          2
        )}deg) rotateY(${state.tiltY.toFixed(2)}deg)`;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = performance.now();

      // Render each tech element with 3D parallax depth shifting
      for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (!reducedMotion) {
          // Slow continuous idle drift
          const idleX = Math.sin(time * BACKGROUND_CONFIG.idleDriftSpeed + item.phase) * 6;
          const idleY = Math.cos(time * BACKGROUND_CONFIG.idleDriftSpeed * 0.8 + item.phase) * 6;

          item.x += item.driftSpeedX;
          item.y += item.driftSpeedY;

          // Wrap edges
          if (item.x < -40) item.x = canvas.width + 30;
          if (item.x > canvas.width + 40) item.x = -30;
          if (item.y < -40) item.y = canvas.height + 30;
          if (item.y > canvas.height + 40) item.y = -30;

          // Depth-based parallax offset: closer items shift more, farther items shift less
          const parallaxShiftX =
            state.mouseX * item.depth * BACKGROUND_CONFIG.maxParallaxPx * BACKGROUND_CONFIG.movementStrength;
          const parallaxShiftY =
            state.mouseY * item.depth * BACKGROUND_CONFIG.maxParallaxPx * BACKGROUND_CONFIG.movementStrength;

          const px = item.x + parallaxShiftX + idleX;
          const py = item.y + parallaxShiftY + idleY;

          drawItem(item, px, py);
        } else {
          // Reduced motion: static clean placement, zero drift or tilt
          drawItem(item, item.x, item.y);
        }
      }

      if (!reducedMotion) {
        animFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden will-change-transform"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

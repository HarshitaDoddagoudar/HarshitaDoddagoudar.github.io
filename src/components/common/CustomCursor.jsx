import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function CustomCursor({ cursorVariant = 'default', cursorText = '' }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Check if device is primarily touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isClickable = target.closest('button, a, input, [role="button"], .interactive-cursor');
      setIsPointer(!!isClickable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || reducedMotion || !isVisible) return null;

  const isProjectHover = cursorVariant === 'project';

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {isProjectHover ? (
        <div className="w-14 h-14 rounded-full bg-accent-blue text-white flex flex-col items-center justify-center border border-white/20 shadow-subtle transition-transform duration-150 scale-100">
          <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          {cursorText && (
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider -mt-0.5">
              {cursorText}
            </span>
          )}
        </div>
      ) : (
        <div
          className={`rounded-full transition-all duration-150 flex items-center justify-center ${
            isPointer
              ? 'w-8 h-8 bg-accent-blue/15 border border-accent-blue/60 scale-110'
              : 'w-2.5 h-2.5 bg-starlight'
          }`}
        />
      )}
    </div>
  );
}

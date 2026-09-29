"use client";

import Image from "next/image";
import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import type { Img } from "@/lib/images";

type BeforeAfterProps = {
  before: Img;
  after: Img;
  sizes: string;
  className?: string;
  children?: React.ReactNode;
};

/** Drag (or use arrow keys) to compare two aligned photographs. */
export function BeforeAfter({ before, after, sizes, className = "", children }: BeforeAfterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, next)));
  }, []);

  const onPointerDown = (e: PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    update(e.clientX);
  };
  const onPointerMove = (e: PointerEvent) => dragging.current && update(e.clientX);
  const onPointerUp = () => (dragging.current = false);

  const onKey = (e: KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - step));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + step));
    else return;
    e.preventDefault();
  };

  return (
    <div
      ref={ref}
      className={`relative touch-pan-y select-none overflow-hidden ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <Image src={after.src} alt={after.alt} fill sizes={sizes} placeholder="blur" className="object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before.src} alt={before.alt} fill sizes={sizes} placeholder="blur" className="object-cover" draggable={false} />
      </div>

      <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-[0.7rem] font-medium text-ivory">Before</span>
      <span className="glass absolute right-4 top-4 rounded-full px-3 py-1 text-[0.7rem] font-medium text-ivory">After</span>

      <div className="pointer-events-none absolute inset-y-0 w-px bg-ivory/80" style={{ left: `${pos}%` }}>
        <div
          role="slider"
          tabIndex={0}
          aria-label="Compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% before`}
          onKeyDown={onKey}
          className="glass pointer-events-auto absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full text-ivory focus-visible:outline-ivory"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </div>
      </div>

      {children}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

type Props = { to: number; suffix?: string; label: string; duration?: number };

/** Counts up from 0 once it scrolls into view. */
export function CountUp({ to, suffix = "", label, duration = 1500 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const running = useRef(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || running.current) return;
        running.current = true;
        const t0 = performance.now();
        const tick = (t: number) => {
          const k = Math.min(1, (t - t0) / duration);
          setValue(Math.round(to * (1 - Math.pow(1 - k, 3))));
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <div ref={ref} className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
      <p className="font-display text-5xl font-medium text-mint-deep">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
    </div>
  );
}

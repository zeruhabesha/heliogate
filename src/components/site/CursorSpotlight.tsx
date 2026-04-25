import { useEffect, useState } from "react";

export const CursorSpotlight = () => {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            "radial-gradient(circle, hsl(var(--signal) / 0.18), transparent 60%)",
        }}
      />
    </div>
  );
};

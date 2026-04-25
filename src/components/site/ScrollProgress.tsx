import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 inset-x-0 h-[2px] z-50 pointer-events-none">
      <div
        className="h-full bg-signal transition-[width] duration-150"
        style={{ width: `${p}%` }}
      />
    </div>
  );
};

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
};

export const VideoFrame = ({ src, poster, className = "", overlayClassName = "" }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
};

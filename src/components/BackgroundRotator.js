import React, { useEffect, useRef, useState } from "react";
import { BG_TRANSITION_MS, BG_ROTATE_MS } from "../config";

// Background rotator with fade + slight blur during crossfade
export default function BackgroundRotator({ images = [], height = "60vh", overlay = true }) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [nextLoaded, setNextLoaded] = useState(false);
  const timerRef = useRef(null);

  const safeImages = images.filter(Boolean);
  const current = safeImages[index % safeImages.length];
  const next = safeImages[(index + 1) % safeImages.length];

  // preload first
  useEffect(() => {
    if (!current) return;
    const img = new Image();
    img.src = current;
    img.onload = () => setLoaded(true);
  }, [current]);

  // preload next
  useEffect(() => {
    if (!next) return;
    const img = new Image();
    img.src = next;
    img.onload = () => setNextLoaded(true);
  }, [next]);

  useEffect(() => {
    if (!loaded) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => i + 1);
      setNextLoaded(false);
    }, BG_ROTATE_MS);
    return () => clearInterval(timerRef.current);
  }, [loaded]);

  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      {/* Current image */}
      <div
        className="absolute inset-0 bg-layer transition duration-1000 ease-in-out"
        style={{
          backgroundImage: current ? `url(${current})` : "none",
          filter: "blur(0px)",
          opacity: loaded ? 1 : 0
        }}
      />
      {/* Next image for cross-fade with slight blur */}
      <div
        className="absolute inset-0 bg-layer transition duration-1000 ease-in-out"
        style={{
          backgroundImage: next ? `url(${next})` : "none",
          filter: "blur(2px)",
          opacity: nextLoaded ? 1 : 0
        }}
      />
      {/* Gradient overlay for readability */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/20 pointer-events-none" />
      )}
      {/* Loading state */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-sm bg-black/50 px-4 py-2 rounded-lg animate-pulseSoft">
            Loading...
          </div>
        </div>
      )}
    </div>
  );
}

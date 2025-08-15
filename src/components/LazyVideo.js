import React, { useEffect, useRef, useState } from "react";

export default function LazyVideo({ src, title = "Video" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "100px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full aspect-video rounded-xl overflow-hidden shadow">
      {visible ? (
        <iframe
          title={title}
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulseSoft" />
      )}
    </div>
  );
}

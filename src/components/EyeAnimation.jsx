import { useState, useEffect, useRef } from "react";

export default function FloatingEye() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const eyeRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!eyeRef.current) return;

      const rect = eyeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      setPos({ x: dx, y: dy });
    };

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4000);

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(blinkInterval);
    };
  }, []);

  // Limit pupil movement
  const maxMove = 12;
  const magnitude = Math.sqrt(pos.x ** 2 + pos.y ** 2);
  const scale = magnitude > maxMove ? maxMove / magnitude : 1;
  const pupilX = 50 + pos.x * scale * 1.2;
  const pupilY = 50 + pos.y * scale * 1.2;

  return (
    <div
      ref={eyeRef}
      className="absolute left-1/2 z-50 pointer-events-none"
      style={{
        top: "28px",              // ⬅️ Más abajo para centrar en el navbar
        transform: "translateX(-50%)",
        width: "90px",
        height: "60px",
      }}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <defs>
          <clipPath id="eyeShape">
            <path d="M5,50 Q50,15 95,50 Q50,85 5,50 Z" />
          </clipPath>
        </defs>

        <path
          d="M5,50 Q50,15 95,50 Q50,85 5,50 Z"
          fill="#fff"
          stroke="#1a1a1a"
          strokeWidth="7"
        />

        {!isBlinking && (
          <circle
            cx={pupilX}
            cy={pupilY}
            r="12"                // ⬅️ Pupila más grande
            fill="#1a1a1a"
            clipPath="url(#eyeShape)"
          />
        )}

        {isBlinking && (
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="#1a1a1a"
            opacity="0.6"
            clipPath="url(#eyeShape)"
          />
        )}
      </svg>
    </div>
  );
}

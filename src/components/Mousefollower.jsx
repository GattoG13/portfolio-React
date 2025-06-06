import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringLink, setHoveringLink] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A') {
        setHoveringLink(true);
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.tagName === 'A') {
        setHoveringLink(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${hoveringLink ? 1.5 : 1})`,
        backgroundColor: hoveringLink ? "#ffffff" : "#d1d5db",
      }}
    ></div>
  );
}

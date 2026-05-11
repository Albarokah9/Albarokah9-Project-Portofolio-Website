import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    // Add global class to hide default cursor
    document.documentElement.classList.add("hide-default-cursor");

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const isHoverable = e.target.closest('a, button, input, [role="button"], .cursor-pointer, .draggable');
      setIsHovering(!!isHoverable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      document.documentElement.classList.remove("hide-default-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        // We use a small lag to make it feel slightly physical/heavy
        transition: 'transform 0.05s ease-out',
      }}
    >
      <div
        className={`relative -left-1/2 -top-1/2 w-8 h-8 border-4 border-black transition-all duration-200 flex items-center justify-center
          ${isHovering ? 'scale-[1.5] rotate-45 bg-accent shadow-brutal-sm' : 'scale-100 rotate-0 bg-primary'}
          ${isClicking ? 'scale-[0.8] bg-secondary shadow-none' : ''}
        `}
      />
    </div>
  );
}

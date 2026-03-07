import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Hide on mobile/touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Hide the default cursor
    document.body.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseEnter = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { opacity: 1, duration: 0.3 });
      }
    };

    const onMouseLeave = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { opacity: 0, duration: 0.3 });
      }
    };

    // Detect hoverable elements
    const hoverTargets = "a, button, [role='button'], input, textarea, select, [data-cursor-hover]";

    const addHoverListeners = () => {
      document.querySelectorAll(hoverTargets).forEach((el) => {
        (el as HTMLElement).style.cursor = "none";
        el.addEventListener("mouseenter", handleHoverIn);
        el.addEventListener("mouseleave", handleHoverOut);
      });
    };

    const handleHoverIn = () => setIsHovering(true);
    const handleHoverOut = () => setIsHovering(false);

    // Smooth animation loop
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${pos.current.x + 20}px, ${pos.current.y + 20}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    rafId.current = requestAnimationFrame(animate);

    // Observe DOM changes to add hover listeners to dynamically added elements
    addHoverListeners();
    const observer = new MutationObserver(() => addHoverListeners());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
      document.querySelectorAll(hoverTargets).forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor Arrow */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ opacity: 0, willChange: "transform" }}
      >
        <div
          className="transition-transform duration-300 ease-out"
          style={{ transform: isHovering ? "scale(1.3)" : "scale(1)" }}
        >
          <svg
            width="28"
            height="34"
            viewBox="0 0 28 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 2px 6px rgba(59, 130, 246, 0.35))",
              marginLeft: "-2px",
              marginTop: "-2px",
            }}
          >
            <path
              d="M2.5 1.5L25.5 15.5L14 18.5L8.5 32L2.5 1.5Z"
              fill="#3B82F6"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Hover Label Pill */}
      <div
        ref={labelRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div
          className="transition-all duration-300 ease-out"
          style={{
            opacity: isHovering ? 1 : 0,
            transform: isHovering ? "translateY(0) scale(1)" : "translateY(5px) scale(0.85)",
          }}
        >
          <div className="bg-[#3B82F6] text-white text-[10px] font-semibold tracking-wider uppercase px-4 py-2 rounded-full whitespace-nowrap shadow-lg shadow-blue-500/20">
            Jainam Decor
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;

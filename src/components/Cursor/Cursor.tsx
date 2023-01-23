import React, { useLayoutEffect, useRef } from "react";

function Cursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!cursor.current) {
      return;
    }

    cursor.current!.style.transition = `all 0.1s ease`;

    document.addEventListener("mousemove", (event: MouseEvent) => {
      cursor.current!.style.transform = `translate3D(calc(${event.x}px - 50%), calc(${event.y}px - 50%), 0px)`;
    });
  }, []);

  return (
    <div
      ref={cursor}
      className={`cursor fixed z-[100]`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffd500"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-alert-triangle pointer-events-none">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line
          x1="12"
          y1="9"
          x2="12"
          y2="13"></line>
        <line
          x1="12"
          y1="17"
          x2="12.01"
          y2="17"></line>
      </svg>
    </div>
  );
}

export default Cursor;

import React from "react";
import { useSyncScroll } from "./useSyncScroll";
import clsx from "clsx"; // You can install clsx: npm install clsx
import type { RefObject } from "react";

interface MinimapProps {
  // --- CHANGE THIS LINE ---
  scrollContainerRef: RefObject<HTMLDivElement>; // Allow for a null ref.current
  // ------------------------
  children: React.ReactNode;
}

const Minimap: React.FC<MinimapProps> = ({ scrollContainerRef, children }) => {
  const {
    viewportStyle,
    isDragging,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  } = useSyncScroll(scrollContainerRef);

  return (
    <div
      className={clsx(
        "minimap-container",
        isDragging ? "minimap-container--dragging" : ""
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      <div className="minimap-content">{children}</div>
      <div className="minimap-viewport" style={viewportStyle} />
    </div>
  );
};

export default Minimap;

import type { RefObject } from "react";

import { useState, useEffect, useCallback } from "react";

/**
 * A custom hook to synchronize a minimap's viewport with a scrollable container.
 * @param scrollContainerRef A React ref attached to the main scrollable element.
 */
export const useSyncScroll = (
  // --- CHANGE THIS LINE ---
  scrollContainerRef: RefObject<HTMLDivElement | null> // Allow for a null ref.current
  // ------------------------
) => {
  const [viewportStyle, setViewportStyle] = useState<React.CSSProperties>({});
  const [isDragging, setIsDragging] = useState(false);

  const updateViewport = useCallback(() => {
    const container = scrollContainerRef.current;
    // This null check was already here, which is why the logic is safe.
    if (!container) return;

    const { scrollWidth, clientWidth, scrollLeft } = container;
    const widthRatio = clientWidth / scrollWidth;
    const viewportThumbWidth = widthRatio * clientWidth;
    const viewportThumbLeft = (scrollLeft / scrollWidth) * clientWidth;

    setViewportStyle({
      width: `${viewportThumbWidth}px`,
      height: "100%",
      transform: `translateX(${viewportThumbLeft}px)`,
    });
  }, [scrollContainerRef]);

  // ... the rest of the file remains exactly the same ...
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateViewport);
    const resizeObserver = new ResizeObserver(updateViewport);
    resizeObserver.observe(container);
    if (container.firstChild) {
      resizeObserver.observe(container.firstChild as Element);
    }
    updateViewport();
    return () => {
      container.removeEventListener("scroll", updateViewport);
      resizeObserver.disconnect();
    };
  }, [scrollContainerRef, updateViewport]);

  const moveViewport = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    const minimap = e.currentTarget;
    if (!container || !minimap) return;
    const rect = minimap.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const targetScrollLeft =
      (clickX / rect.width) * container.scrollWidth - container.clientWidth / 2;
    container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
  };
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    moveViewport(e);
  }, []);
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isDragging) {
        moveViewport(e);
      }
    },
    [isDragging]
  );
  return {
    viewportStyle,
    isDragging,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
};

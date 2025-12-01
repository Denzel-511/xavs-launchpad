"use client";
import { useEffect, useState } from "react";

export const useScrollProgress = (elementRef: React.RefObject<HTMLElement>) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when element enters and exits viewport
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start animation when element is 60% visible from bottom
      const startPoint = windowHeight * 0.6;
      
      if (elementTop > startPoint) {
        setProgress(0);
      } else if (elementTop + elementHeight < 0) {
        setProgress(100);
      } else {
        // Calculate progress based on scroll position
        const scrolled = startPoint - elementTop;
        const total = elementHeight + startPoint;
        const percentage = (scrolled / total) * 100;
        setProgress(Math.min(100, Math.max(0, percentage)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementRef]);

  return progress;
};

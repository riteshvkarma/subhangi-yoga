"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    jQuery?: unknown;
    SEMICOLON?: {
      initialize?: {
        init?: () => void;
      };
    };
  }
}

export default function CanvasInitializer() {
  useEffect(() => {
    // Wait for Canvas scripts to load and initialize
    const initializeCanvas = () => {
      if (typeof window !== "undefined") {
        // Check if jQuery and SEMICOLON are loaded
        const checkAndInit = () => {
          if (window.jQuery && window.SEMICOLON) {
            const { SEMICOLON } = window;

            // Initialize all Canvas core functions
            if (
              SEMICOLON.initialize &&
              typeof SEMICOLON.initialize.init === "function"
            ) {
              SEMICOLON.initialize.init();
            }
          } else {
            // If not loaded yet, try again in 100ms
            setTimeout(checkAndInit, 100);
          }
        };

        checkAndInit();
      }
    };

    // Start checking after a short delay
    const timer = setTimeout(initializeCanvas, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

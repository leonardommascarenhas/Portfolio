import React, { useEffect, useRef, useState } from "react";

import Intro from "./components/Intro";
import About from "./components/About";

const App: React.FC = () => {
  const animatedElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (window.innerWidth < 768) {
              entry.target.classList.add("animate-rightLeft");
            } else {
              entry.target.classList.add("animate-downUp");
            }
          } else {
            entry.target.classList.remove("animate-rightLeft", "animate-downUp");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (animatedElementRef.current) {
      observer.observe(animatedElementRef.current);
    }

    // Clean up the observer on unmount
    return () => {
      if (animatedElementRef.current) {
        observer.unobserve(animatedElementRef.current);
      }
    };
  }, [animatedElementRef]);

  return (
    <div className="text-white overflow-y-scroll scroll-smooth w-screen h-screen overflow-x-hidden bg-black opacity-95">
      <Intro />
      <About forwardedRef={animatedElementRef} />
    </div>
  );
};

export default App;

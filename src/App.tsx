import React, { useEffect, useRef } from "react";

import Intro from "./components/Intro";
import About from "./components/About";

const App: React.FC = () => {
  const animatedElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          } else {
            entry.target.classList.remove("animate-fadeIn");
          }
        });
      },
      { threshold: 0.5 }
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
  }, []);

  return (
    <div className="text-white overflow-y-scroll scroll-smooth w-screen h-screen bg-black opacity-95">
      <Intro />
      <About forwardedRef={animatedElementRef} />
    </div>
  );
};

export default App;

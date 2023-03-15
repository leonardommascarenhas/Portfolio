import React, { useEffect, useRef, useState } from "react";
import { Context, MyContext } from "./Provider/auth";
import Intro from "./components/Intro";
import About from "./components/About";

const App: React.FC = () => {
  const [screenSize, setScreenSize] = useState<MyContext>({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });
  const animatedElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("hurray");
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

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Context.Provider value={screenSize}>
      <div className="text-white overflow-y-scroll scroll-smooth w-screen h-screen bg-black opacity-95">
        <Intro />
        <About forwardedRef={animatedElementRef} />
        <Intro />
      </div>
    </Context.Provider>
  );
};

export default App;

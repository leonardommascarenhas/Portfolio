import { useEffect, useRef } from "react";
import profilePicture from "../assets/ProfilePicture.jpeg";
import TechStack from "./TechStack";

type Props = {
  forwardedRef: React.RefObject<HTMLElement>;
};

const About = ({ forwardedRef }: Props) => {
  const animatedElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-rightLeft");
            console.log(animatedElementRef.current?.children);
          } else {
            entry.target.classList.remove("animate-rightLeft");
          }
        });
      },
      { threshold: 0.42 }
    );

    if (animatedElementRef.current) {
      const children = animatedElementRef.current.children;
      for (let i = 0; i < children.length; i++) {
        observer.observe(children[i]);
      }
    }

    // Clean up the observer on unmount
    return () => {
      if (animatedElementRef.current) {
        observer.unobserve(animatedElementRef.current);
      }
    };
  }, []);
  return (
    <section
      id="about"
      ref={forwardedRef}
      className="h-screen flex flex-col items-center font-roboto text-sm  opacity-0 fill-mode-forwards"
    >
      <h2 className="text-2xl md:text-5xl">Sobre Mim</h2>
      <div className="lg:flex">
        <div className="mt-3 max-w-lg px-6 text-ellipsis text-justify">
          <img
            src={profilePicture}
            alt="Foto de Leonardo Moura"
            className="rounded-full h-48 w-48 md:h-72 md:w-72 mx-auto mb-6"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid nulla, officiis ratione
            excepturi explicabo doloribus eos. Itaque nemo ipsum eum sunt debitis quod commodi animi maxime
            ducimus, quos quam deserunt.
          </p>
        </div>
        <TechStack techRef={animatedElementRef} />
      </div>
    </section>
  );
};

export default About;

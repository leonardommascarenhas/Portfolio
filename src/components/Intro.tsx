import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

//remove the classOnHover to "clear" the animation of the fadeIn button
const removeClassOnHover = (classNameToRemove: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.classList.remove(classNameToRemove);
};

const Intro = () => {
  const handleHover = removeClassOnHover("animate-fadeIn");

  return (
    <section className="text-center max-w-full h-screen flex flex-col items-center justify-center font-roboto text-2xl md:text-5xl font-light space-y-3.5 bg-opacity-90 snap-start">
      <h1 className="animate-rightLeft">
        Olá, me chamo <span className="text-blue-500">Leonardo Moura</span>.
      </h1>
      <h1 className="animate-leftRight">
        Eu sou criador de &lt;
        <span className="text-yellow-300">Experiências</span> /&gt;
      </h1>
      <a href="/#about">
        <button
          className="group inline-flex items-center gap-3 text-sm md:text-lg px-2 py-1 border border-blue-500 rounded-md animate-fadeIn fill-mode-forwards hover:-translate-y-0.5  hover:border-yellow-300 hover:transition-all hover:shadow hover:shadow-yellow-400/50"
          onMouseEnter={handleHover}
        >
          Cheque meus projetos
          <span className="mt-1.5 animate-bounce text-blue-400 group-hover:text-yellow-400">
            <BsFillArrowDownCircleFill />
          </span>
        </button>
      </a>
    </section>
  );
};

export default Intro;

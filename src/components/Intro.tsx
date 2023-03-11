import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const removeClassOnHover = (classNameToRemove: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.classList.remove(classNameToRemove);
};

const Intro = () => {
  const handleHover = removeClassOnHover("animate-fadeIn");

  return (
    <section className="font-roboto text-2xl md:text-5xl text-white font-light space-y-3.5 bg-opacity-95">
      <h1 className="animate-firstH1Animation">
        Olá, me chamo <span className="text-blue-500">Leonardo Moura</span>.
      </h1>
      <h1 className="animate-secondH1Animation">
        Eu sou criador de &lt;
        <span className="text-yellow-300">Experiências</span> /&gt;
      </h1>
      <button
        className="group inline-flex items-center gap-3 text-sm md:text-lg px-2 py-1 border border-blue-500 rounded-md animate-fadeIn fill-mode-forwards hover:-translate-y-0.5  hover:border-yellow-300 hover:transition-all"
        onMouseEnter={handleHover}
      >
        Cheque meus projetos
        <span className="mt-1.5 animate-bounce delay-150 text-blue-400">
          <BsFillArrowDownCircleFill />
        </span>
      </button>
    </section>
  );
};

export default Intro;

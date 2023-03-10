import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Intro = () => {
  return (
    <section className="font-roboto text-2xl md:text-5xl text-white font-light space-y-3.5 bg-opacity-95">
      <h1 className="animate-firstH1Animation">
        Olá, me chamo <span className="text-blue-500">Leonardo Moura</span>.
      </h1>
      <h1 className="animate-secondH1Animation">
        Eu sou criador de &lt;<span className="text-yellow-300">Experiências</span> /&gt;
      </h1>
      <button className="text-sm md:text-lg px-2 py-1 border border-blue-500 rounded-md opacity-0 animate-fadeIn fill-mode-forwards hover:animate-bounce">
        Cheque meus projetos
      </button>
    </section>
  );
};

export default Intro;

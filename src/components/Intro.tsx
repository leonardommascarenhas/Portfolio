import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Intro = () => {
  return (
    <section className=" font-roboto text-5xl text-white font-light space-y-3 transition-">
      <h1 className=" animate-firstH1Animation">
        Oi, eu sou o <span className="text-blue-500">Leonardo Moura</span>.
      </h1>
      <h1>
        Eu sou criador de &lt;<span className="text-yellow-300">Experiências</span> /&gt;
      </h1>
      <button>Cheque meus projetos</button>
    </section>
  );
};

export default Intro;

import React from "react";
import profilePicture from "../assets/ProfilePicture.jpeg";
import TechStack from "./TechStack";

const About = () => {
  return (
    <section className="snap-start h-screen flex flex-col items-center">
      <h2 className="text-2xl md:text-5xl">Sobre Mim</h2>
      <div className="lg:flex">
        <div className="mt-6 max-w-lg px-6 text-center text-lg">
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
        <TechStack />
      </div>
    </section>
  );
};

export default About;

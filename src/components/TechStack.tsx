import { FaJs, FaReact, FaGitAlt, FaSass } from "react-icons/fa";
import { SiTypescript, SiVuedotjs, SiTailwindcss } from "react-icons/si";
import { RiCss3Line, RiHtml5Line } from "react-icons/ri";

type Props = {
  techRef: React.RefObject<HTMLDivElement>;
};

const TechStack = ({ techRef }: Props) => {
  return (
    <div
      id="teste"
      ref={techRef}
      className="flex flex-col justify-center items-center gap-3 text-sm mt-4 opacity-0 fill-mode-forwards"
    >
      <div className="flex gap-3 teste">
        <div className="techContainer">
          <FaJs className="techStackSize text-yellow-400" />
          <p>JavaScript</p>
        </div>
        <div className="techContainer">
          <FaReact className="techStackSize text-blue-400" />
          <p>React JS</p>
        </div>
        <div className="techContainer">
          <SiTypescript className="techStackSize text-blue-500" />
          <p>TypeScript</p>
        </div>
      </div>
      <div className="flex gap-3 teste">
        <div className="techContainer">
          <SiVuedotjs className="techStackSize text-green-500" />
          <p>Vue JS</p>
        </div>
        <div className="techContainer">
          <RiCss3Line className="techStackSize text-blue-400" />
          <p>CSS3</p>
        </div>
        <div className="techContainer">
          <RiHtml5Line className="techStackSize text-orange-500" />
          <p>HTML5</p>
        </div>
      </div>
      <div className="flex gap-3 teste">
        <div className="techContainer">
          <SiTailwindcss className="techStackSize text-blue-400" />
          <p>Tailwind</p>
        </div>
        <div className="techContainer">
          <FaGitAlt className="techStackSize text-orange-700" />
          <p>Git</p>
        </div>
        <div className="techContainer">
          <FaSass className="techStackSize text-pink-600" />
          <p>Sass</p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

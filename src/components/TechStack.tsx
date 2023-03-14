import { FaJs, FaReact, FaGitAlt, FaSass } from "react-icons/fa";
import { SiTypescript, SiVuedotjs, SiTailwindcss } from "react-icons/si";
import { RiCss3Line, RiHtml5Line } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";

const TechStack = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <FaJs className="h-24 w-24 rounded-lg p-4 text-yellow-400" />
      <FaReact className="h-24 w-24 rounded-full p-4 text-blue-400" />
      <SiTypescript className="h-24 w-24 rounded-md p-4 text-blue-500" />
      <SiVuedotjs className="h-24 w-24 rounded-md p-4 text-green-500" />
      <RiCss3Line className="h-24 w-24 rounded-full p-4 text-blue-400" />
      <RiHtml5Line className="h-24 w-24 rounded-full p-4 text-orange-500" />
      <SiTailwindcss className="h-24 w-24 rounded-full p-4  text-blue-400" />
      <FaGitAlt className="h-24 w-24 rounded-full p-4 text-orange-700" />
      <FaSass className="h-24 w-24 p-4 text-pink-600" />
    </div>
  );
};

export default TechStack;

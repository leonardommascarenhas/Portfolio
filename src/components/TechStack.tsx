import { FaJs, FaReact, FaGitAlt, FaSass } from "react-icons/fa";
import { SiTypescript, SiVuedotjs, SiTailwindcss } from "react-icons/si";
import { RiCss3Line, RiHtml5Line } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";

const TechStack = () => {
  return (
    <div className="flex justify-center flex-wrap items-center mt-6">
      <div className="rounded-xl bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <div className="grid place-items-center p-2 bg-black bg-opacity-95">
          <FaJs className="h-12 md:h-24 w-12 md:w-24 rounded-lg text-yellow-400" />
          <p>JavaScript</p>
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <div className="grid place-items-center p-2 bg-black bg-opacity-95">
          <FaReact className="h-12 md:h-24 w-12 md:w-24 rounded-full text-blue-400" />
          <p>React JS</p>
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <div className="grid place-items-center p-2 bg-black bg-opacity-95">
          <SiTypescript className="h-12 md:h-24 w-12 md:w-24 rounded-md text-blue-500" />
          <p>TypeScript</p>
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <div className="grid place-items-center p-2 bg-black bg-opacity-95">
          <SiVuedotjs className="h-12 md:h-24 w-12 md:w-24 rounded-md text-green-500" />
          <p>Vue JS</p>
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <div className="grid place-items-center p-2 bg-black bg-opacity-95">
          <RiCss3Line className="h-12 md:h-24 w-12 md:w-24 rounded-full text-blue-400" />
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <div className="grid place-items-center p-2 bg-black bg-opacity-95">
          <RiHtml5Line className="h-12 md:h-24 w-12 md:w-24 rounded-full text-orange-500" />
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <div className="grid place-items-center p-2 bg-black bg-opacity-95">
          <SiTailwindcss className="h-12 md:h-24 w-12 md:w-24 rounded-full  text-blue-400" />
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <div className="grid place-items-center p-2 bg-black bg-opacity-95">
          <FaGitAlt className="h-12 md:h-24 w-12 md:w-24 rounded-full text-orange-700" />
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
        <div className="grid place-items-center p-2 bg-black bg-opacity-95">
          <FaSass className="h-12 md:h-24 w-12 md:w-24 text-pink-600" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;

import React from "react";
import { useRef, useEffect, useState } from "react";

import Intro from "./components/Intro";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <div className="text-white overflow-y-scroll w-screen h-screen bg-black opacity-95">
      <Intro />
      <About />
    </div>
  );
};

export default App;

import React from "react";
import Intro from "./components/Intro";

const App: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-black text-center opacity-90 snap-y">
      <Intro />
    </div>
  );
};

export default App;

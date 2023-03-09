import React from "react";
import Intro from "./components/Intro";

const App: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-gray-700 text-center">
      <Intro />
    </div>
  );
};

export default App;

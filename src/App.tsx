import React from "react";
import Intro from "./components/Intro";

const App: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-700 text-center">
      <Intro />
    </div>
  );
};

export default App;

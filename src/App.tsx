import React from "react";

import Intro from "./components/Intro";

const App: React.FC = () => {
  return (
    <div className="snap-y snap-proximity overflow-y-scroll w-screen h-screen bg-black opacity-95">
      <Intro />
      <Intro />
      <Intro />
      <Intro />
      <Intro />
    </div>
  );
};

export default App;

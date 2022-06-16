import React, { useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Greet from "./Components/Greet/Greet";
import Network from "./Components/Network/Network";
import Sdx from "./Components/sideEffect/Sdx";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  const [pos, setPos] = useState(0);

  return (
    <div className="Main">
      <Navbar />
      <Greet />
      <Sdx />
      <Network />
      <div className="observer">
        <About className="target" />
        <Projects className="target" />
        <Contact className="target" />
      </div>
    </div>
  );
}

export default App;

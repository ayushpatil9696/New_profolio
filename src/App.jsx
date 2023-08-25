import React from "react";
// components
import Banner from "./components/Banner";

import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import StarsCanvas from "./canvas/Stars";

const App = () => {
  return (
    <div className="bg-black  h-auto z-[-5] ">
      <StarsCanvas />

      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;

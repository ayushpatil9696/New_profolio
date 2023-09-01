import React from "react";
// components
import Banner from "./components/Banner";
import { Element } from 'react-scroll';
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import StarsCanvas from "./canvas/Stars";

const App = () => {
  return (
    <div className="bg-black h-auto z-[-5] ">
     <Element name="section1">
          <div className="bg-black h-auto z-[-5]">
            <StarsCanvas />
            <Banner />
          </div>
        </Element>

        <Element name="section2">
          <About />
        </Element>

        <Element name="section3">
          <Services />
        </Element>

        <Element name="section4">
          <Work />
        </Element>

        <Element name="section5">
          <Contact />
        </Element>
    </div>
    
  );
};

export default App;

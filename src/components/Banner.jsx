import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import EarthCanvas from "../canvas/Earth";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container relative mx-auto">
        <div className="grid absolute top-[-200px] left-0 grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Left Side */}
          <div className="text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] text-accent font-bold leading-[0.8] lg:text-[110px]"
            >
              Ayush <span> Patil</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-10 mt-10 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Gamer", 2000, "Guitarist", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-white text-[40px] text-base"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="/" className="text-gradient btn-link pl-4">
                My portfolio
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="/" className="text-blue-400">
                <FaGithub size={50}/>
              </a>
              <a href="/" className="text-blue-400">
                <FaLinkedin size={50}/>
              </a>
              <a href="/" className="text-blue-400">
                <FaInstagram size={50}/>
              </a>
            </motion.div>
          </div>

          {/* Right Side */}
          <div>
            <EarthCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

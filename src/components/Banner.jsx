import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import EarthCanvas from "../canvas/Earth";

const Banner = () => {
  return (
    <section
      className=" flex items-center lg:pt-[200px]"
      id="home"
    >
      <div className="container relative mx-auto">
        <div className="grid absolute  grid-cols-1  lg:grid-cols-2   ">
          {/* Left Side */}
          <div className="text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="text-[55px] text-accent font-bold leading-[0.8] lg:text-[110px]"
            >
              Ayush <span> Patil</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.3)}  
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-white text-[40px] text-base"
            >
              I'm a front-end developer with lots of interest in Data strutures.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              {/* <button className="btn btn-lg">Contact me</button>
              <a href="/" className="text-gradient btn-link pl-4">
                My portfolio
              </a> */}
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/ayushpatil9696/" className="text-blue-400">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/ayush-patil-a942b4202/" className="text-blue-400">
                <FaLinkedin size={30} />
              </a>
              <a href="https://instagram.com/ayush_nope_11?utm_source=qr&igshid=MThlNWY1MzQwNA==" className="text-blue-400">
                <FaInstagram size={30} />
              </a>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="h-full ">
            <EarthCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

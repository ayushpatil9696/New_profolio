import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//img
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.section
            className="section"
            id="work"
            variants={fadeIn("up", 0.2)} // Apply the fadeIn variant to the entire section
            initial="hidden"
            whileHover="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
              {/* text */}
              <div>
                <h2 className="h2 leading-tight text-accent">
                  My latest <br />
                  work
                </h2>
                <p className="max-w-sm mb-16 text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it.
                </p>
                <button className="btn btn-sm">View all project</button>
              </div>

              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transtion-all duration-300"></div>
                {/* img */}
                <img className="group-hover:scale-125" src={img1} alt="" />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <div className="text-accent text">UI/Ux design</div>
                </div>
                {/* title */}
                {/* <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-3xl text-white">project title</span>
                </div>1 */}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default Work;

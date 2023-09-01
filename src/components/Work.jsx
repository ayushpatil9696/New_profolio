import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/portfolio-img1.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.section
            className="section"
            id="work"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
              <div>
                <h2 className="h2 leading-tight text-accent">
                  My latest <br />
                  work
                </h2>
                <p className="max-w mb-10 text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it.
                </p>
                <button className="btn btn-sm">View all projects</button>
              </div>

              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 "></div>

                {/* Apply styles to the image and its container */}
                <div className="relative w-full h-96 overflow-hidden group-hover:scale-125 hover:transition-all duration-300 z-40">
                  <img
                    className="w-full h-full object-cover transition-transform"
                    src={img1}
                    alt=""
                  />
                </div>

                <div className="absolute -bottom-16 left-2 group-hover:-bottom-24 transition-all duration-500 z-50">
                  <div className="text-accent text">UI/Ux design</div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default Work;

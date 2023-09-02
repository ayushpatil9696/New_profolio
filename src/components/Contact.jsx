import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <motion.section
      className="py-10 lg:section my-[100px] "
      id="contact"
      variants={fadeIn("up", 0.08)} // Apply the fadeIn variant to the entire section
      initial="hidden"
      whileHover={"show"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            className="flex-1 flex justify-start items-center"
            variants={fadeIn("left", 0.2)} // Apply the fadeIn variant to this div
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 text-white">
                let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            className="flex-1 border rounded-2xl flex-col gap-y-6 pb-24 p-6 items-start"
            variants={fadeIn("right", 0.2)} // Apply the fadeIn variant to this form
          >
            <div className="flex-1 border rounded-2xl flex-col gap-y-6 pb-24 p-6 items-start">
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your name"
              />

              <input
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your email"
              />

              <textarea
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                // type="text"
                placeholder="Your message"
              ></textarea>
              <button className="btn btn-lg">Send message</button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

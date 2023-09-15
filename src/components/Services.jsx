import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { fadeIn } from "../variants";

import { motion } from "framer-motion";

//services data
const services = [
  {
    name: "PrintWow",
    description:
      "Created a user-friendly interface that allows customers to edit their photos and see how they will look in reality.Integrated the product page with the manufacturing system to enable customers to easily order their photo frames. ",
    link: "Learn more",
  },
  {
    name: "Health Harmony",
    description:
      "Designed and developed the Health Harmony platform, a web application for tracking and managing health and fitness goals. Implemented user-friendly dashboards and interactive charts to visualize health progress.    ",
    link: "Learn more",
  },
  {
    name: "DevMentor",
    description:
      "A website that serves as a platform containing top-rated courses and provides interview preparation recommendations. It is an ideal place for beginners to enhance their skills. ",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto lg:pt-[100px]">
        <div className="flex flex-col lg:flex-row">
          {/* text and images */}

          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What i Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16 text-white">
            Creating diverse React projects to power dynamic and interactive front-end web applications.
            </h3>
            <button className="btn btn-sm">See some of my work</button>
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1 items-center justify-center"
          >
            {/* services list */}
            {services.map((services, index) => {
              // destructure services
              const { name, description, link } = services;
              return (
                <div
                  className="border-b border-white/20 h-[200px] lg:h-[150px] mb-[5px] flex text-white text-sm"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex justify-center gay-y-20 items-center">
                    <a
                      href="/"
                      className="group btn w-9 h-9  flex justify-center items-center"
                    >
                      <BsArrowUpRight className="arrow-icon transform rotate-0 group-hover:rotate-45 transition-transform duration-300 ease-in-out" />
                    </a>
                    <a
                      href="/"
                      className="text-gradient hover:text-blue-300 text-sm flex justify-center items-center"
                    >
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

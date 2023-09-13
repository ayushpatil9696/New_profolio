import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section " id="about" ref={ref}>
      <div className="container mx-auto w-screen lg:pt-[500px] ">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center ld:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
            viewport={{ once: true}}
          >
            {/* <AstronautCanvas/> */}
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true}}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4 text-white">
              Motivated web developer with React and Next.js internship
              experience. Proficient in dynamic, responsive web app creation and
              modern web tech. Proven adaptability, teamwork, and
              problem-solving skills.
            </h3>
            <p className="mb-6 text-white">
              Eager to contribute expertise to collaborative projects and grow
              in software development. Seeking skill enhancement and impact in
              the field.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] text-white">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] text-white">
                  Projects <br />
                  Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] text-white">
                  Satisfied
                  <br />
                  Client
                </div>
              </div>
            </div>

            <div>
              <button className="btn btn-lg">Contact me</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import {motion} from "framer-motion";
import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {

  return (
    <section className="pt-20 mt-16" id="experience">
      <motion.h2 
        initial={{opacity:0, y: -20}} 
        whileInView={{opacity :1,y:0}}
        transition={{duration:1}}
        className="text-3xl font-semibold text-center tracking-tighter lg:text-3xl">
        Work Experience
      </motion.h2>
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1,delay:0.5}}
      className="space-y-8 p-20 ">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            initial={{opacity:0, x:-20}}
            whileInView={{opacity:1}}
            transition={{duration:1,delay:index * 0.2}}
            key={index}
            className="rounded-xl border borderstone-50/30 bg-white/10 p-6"
          >
            <h3 className="text-2xl font-semibold mb-1">{experience.role}</h3>
            <p className="text-md ">{experience.company}</p>
            <p className="text-sm text-stone-300 mb-4">{experience.yearRange}</p>
            <p className="mt-2 text-base mb-6">{experience.description}</p>
            {/* <p className="text-md font-medium text-gray-200 tracking-wide space-x-4">
              {experience.techStack}
            </p> */}
            <div className="text-md font-medium text-gray-200 tracking-wide flex flex-wrap gap-2 ">
              {experience.techStack.map((tech, techIndex) => (
                <span key={techIndex} className="bg-slate-300/20 rounded-md p-[5px]">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;

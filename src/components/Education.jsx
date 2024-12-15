import React from "react";
import { EDUCATION } from "../constants";
import {motion} from "framer-motion";

const Education = () => {
  return (
    <section className=" pt-16" id="education">
      <motion.h2 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        className="mt-4 text-center text-3xl lg:text-3xl font-semibold">Education</motion.h2>
      <div className="py-8">
        {EDUCATION.map((edu, id) => (
          <motion.div 
            initial={{opacity:0, x:-20}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, delay: id * 0.5}}
            key={id} className="mb-6 px-[80px] py-10">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-lg">{edu.institution}</p>
            <p className="text-sm text-stone-300">{edu.duration}</p>
            <p className="mt-2">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

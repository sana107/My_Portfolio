import { motion } from "framer-motion";

import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  const projectvarients = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,

      transition: {
        duration: 1.5,
        ease: "easeout",
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  return (
    <section
      className="px-6 py-10 flex items-center justify-center flex-col"
      id="work"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" md:text-3xl tracking-tight mb-16 mt-20 text-3xl font-semibold lg:text-3xl"
      >
        Projects
      </motion.h1>
      {/* <div className="h-1 w-20 mb-16 bg-white"></div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-6 gap-y-16">
        {PROJECTS.map((item) => (
          <motion.div
            key={item.id}
            className="relative rounded-lg overflow-hidden h-[400px] transition-transform  "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={projectvarients}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="inset-0 absolute w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="relative z-20 p-6 flex flex-col justify-between h-full bg-black/30 text-white">
              <h2 className="text-2xl font-medium mb-4">{item.title}</h2>
              <div className="flex flex-col justify-between">
                <p className="mb-4 flex-grow text-lg">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-stone-900 rounded-full py-2 px-2 w-32 text-sm hover:bg-gray-100 text-center"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

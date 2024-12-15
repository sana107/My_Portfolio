import React, { useEffect, useRef } from "react";
import { SKILLS } from "../constants";
// import redux from "../assets/icons/redux.png";
import "remixicon/fonts/remixicon.css";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className="py-24" id="skills" ref={skillsRef}>
      <div className="px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 text-center text-3xl font-semibold lg:text-3xl"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="skill-item flex flex-col items-center text-center"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="mb-2 text-lg font-medium lg:text-xl">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

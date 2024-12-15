import React from "react";
import { motion } from "framer-motion";
import girl_img from "../assets/girl_img.png";
import my_img from "../assets/my_img.jpg";


const About = () => {
  return (
    <div id="about" className=" p-10 border-b border-neutral-900">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl text-zinc-50 lg:3xl font-semibold"
      >
        About me
        {/* <span className="text-neutral-500">Me</span> */}
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img className="rounded-zxl" src={girl_img} alt="aboutme" />
            {/* <img className="rounded-zxl" src={my_img} alt="aboutme" width={280}/> */}
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div className=" flex justify-center lg:justify-start">
            <motion.p
              initial={{ opacity: 0, x: 100 }} // Start from the right (x: 100)
              whileInView={{ opacity: 1, x: 0 }} // Move to the center (x: 0)
              transition={{ duration: 1, delay: 0.5 }} // Smooth animation with delay
              viewport={{ once: true }}
              className="my-2 max-w-xl py-6"
            >
              I am a passionate and dedicated Frontend Developer with a strong
              foundation in React, Redux, Tailwind CSS, Bootstrap, JavaScript,
              HTML, and CSS. With a keen eye for detail and a commitment to
              creating responsive and user-friendly interfaces, I have developed
              several projects showcasing my skills. Additionally, I have
              experience working with Git and GitHub for version control and
              collaboration. My learning journey includes building projects
              using Python and Flask, demonstrating versatility in backend
              development. As a fresher, I am eager to bring my skills and
              enthusiasm to contribute to innovative and impactful projects in a
              professional setting.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

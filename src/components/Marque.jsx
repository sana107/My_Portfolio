import React from "react";
import star_icon from "../assets/star.png";
import {motion} from "framer-motion";

const Marque = () => {
  const words = [
    "Redux",
    "React Js",
    "Javascript (ES6+)",
    "Tailwind CSS",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "Python",
    "Flask",

  ];
  return (
    <div className="py-16 lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
        <motion.div 
        // initial={{x:"-100%"}}
        // animate={{x:"0"}}
        // transition={{repeat:Infinity, ease : "linear", duration:20}}
        className="flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">



          <div className="flex flex-none gap-6 py-4">
            
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 font-bold text-lg">{word}</span>
                <img src={star_icon} alt="star" className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>



        </motion.div>
      </div>
    </div>
  );
};

export default Marque;

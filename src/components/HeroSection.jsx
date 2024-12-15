import React from "react";
import girl_img from "../assets/girl_img.png";
import my_img from "../assets/my_img.jpg";
import { LuDownload } from "react-icons/lu";

import { FaAngleDown } from "react-icons/fa";

// import { ButtonPrimary,ButtonOutline } from "./Button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src={girl_img}
                alt="girlimg"
                className="img-cover"
                width={100}
                height={100}
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className=" relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <div>
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-2">
              Hi, I am Mahak Sanole
            </h2>

            <p className="text-xl font-mediun  max-w-none mt-5 mb-8 lg:mb-10 ">Frontend Developer, Building Scalable<br/> Modern Websites for the Future</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://drive.google.com/uc?id=1zdwBsjkFZGESkD1qhw5-l6HyIERyliK1&export=download"
              download
            >
              <button className="bg-sky-400 py-2 px-6 rounded-lg flex items-center gap-2 text-white hover:bg-sky-300 transition">
                Resume <LuDownload />
              </button>
            </a>

            <a href="#target-section">
              <button className="bg-sky-400 py-2 px-6 rounded-lg flex items-center gap-2 text-white hover:bg-sky-300 transition">
                Scroll Down <FaAngleDown />
              </button>
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[380px] ml-auto  overflow-hidden">
            <img src={girl_img} alt="" width={400} />
            {/* <img src={my_img} alt=""  width={280} /> */}
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

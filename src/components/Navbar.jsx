import React, { useState } from "react";

import logo from "../assets/logo.png";
import Header from "./Header";


const Navbar = () => {

  const [navOpen,setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src={logo}
              alt="image"
              style={{ backgroundColor: "white" }}
              width={30}
            />
            {/* add logo omag here later */}
          </a>
        </h1>
        <div className="relative md:justify-self-center mt-4">
          <button className = "menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
            
            <span className="material-symbols-rounded">{navOpen ? 'close' : 'menu'}</span>
          </button>

          <Header navOpen={navOpen}/>
        </div>
        
        <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">contact me</a>
      </div>
    </nav>
  );
};

export default Navbar;

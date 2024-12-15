import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-zinc-50 py-6">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} mahak sanole. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


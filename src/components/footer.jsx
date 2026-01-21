import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">

          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent mb-2">
              ThaeDev
            </h2>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Crafting modern, scalable web experiences with clean code and passion.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:sthandie15@gmail.com"
              className="text-gray-400 hover:text-sky-400 transition transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved made by Sithandekile Ndhlovu
            </p>
          </div>
        </div>

      
        <div className="mt-8 text-center text-gray-500 text-xs">
          Designed with Tailwind CSS & React.js
        </div>
      </div>
    </footer>
  );
};

export default Footer;

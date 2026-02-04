import React from "react";
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import heroImage from "../assets/skillsHero.png";
import { FaWhatsapp } from "react-icons/fa6";
import resumeFile from "../assets/Sithandekile Resume.pdf";

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-fixed"
       style={{ backgroundImage: `url(${heroImage})`,backgroundSize:'cover' }} >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black opacity-50 to-purple-900/30"></div>

      {/* Content */}
      <div className="relative z-10 px-6 mt-32 w-full max-w-4xl">
        <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl text-center">

          {/* Heading */}
          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="text-white">Hi, I’m </span>
            <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
              Sithandekile
            </span>
          </h1>

          {/* Subtitle */}
          <h3 className="text-xl md:text-3xl text-white mb-6 font-light animate-fade-in delay-200">
            Full Stack <span className="text-sky-400 font-medium">MERN</span>{" "}
            Developer · Johannesburg
          </h3>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-500">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-lg text-white bg-sky-600
              hover:bg-sky-500 hover:-translate-y-0.5
              shadow-lg hover:shadow-sky-500/30
              transition-all duration-300"
            >
              View My Work
            </button>

            <a
              href={resumeFile}
              download="Sithandekile Resume.pdf"
              className="px-6 py-3 rounded-lg border border-sky-400 text-sky-400
              bg-sky-500/10 hover:bg-sky-500/20 hover:text-white
              hover:border-sky-300 hover:-translate-y-0.5
              transition-all duration-300"
            >
              Download CV
            </a>
            

          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-10 animate-fade-in delay-700">
            <a
              href="https://github.com/sithandekile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur
              text-gray-400 hover:text-sky-400
              hover:bg-sky-500/20 hover:-translate-y-1
              transition-all duration-300"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://github.com/sithandekile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur
              text-gray-400 hover:text-sky-400
              hover:bg-sky-500/20 hover:-translate-y-1
              transition-all duration-300"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://github.com/sithandekile"
              className="p-3 rounded-full bg-white/5 backdrop-blur
              text-gray-400 hover:text-sky-400
              hover:bg-sky-500/20 hover:-translate-y-1
              transition-all duration-300"
            >
              <FaEnvelope size={22} />
            </a>
          
          <a href="https://wa.me/27670118494" target="_blank"
          className="p-3 rounded-full bg-white/5 backdrop-blur
              text-emerald-400 hover:text-sky-400
              hover:bg-sky-500/20 hover:-translate-y-1
              transition-all duration-300" >
             <FaWhatsapp size={22}/>
             </a>
             </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-sky-400 transition animate-bounce"
          >
            <p className="text-sm mb-1">Scroll</p>
            <FaArrowDown size={20} className="mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

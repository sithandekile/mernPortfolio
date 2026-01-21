import React from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../constants/data";
import { ProjectCard } from "./projectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-950 relative">
      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            A selection of projects I’ve built using the MERN stack and modern
            web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              card_list={project}
              style={{ animationDelay: `${0.1 * index}s` }}
            />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/sithandekile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3
            border border-sky-400 text-sky-400 rounded-lg
            hover:bg-sky-500/10 hover:text-white
            transition-all duration-300"
          >
            <FaGithub className="mr-2" size={18} />
            View All Projects on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ card_list }) => {
  return (
    <div
      className={`group relative bg-white/5 backdrop-blur-md
      border border-white/10 rounded-2xl
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10
      animate-fade-in ${
        card_list.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Image */}
      <div className="relative w-full aspect-video rounded-t-2xl overflow-hidden bg-black/30">
        <img
          src={card_list.image}
          alt={card_list.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Overlay links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
          <a
            href={card_list.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={card_list.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-white group-hover:text-sky-400 transition">
            {card_list.title}
          </h3>

          {card_list.featured && (
            <span className="text-xs px-2 py-1 rounded-full
              bg-sky-500/10 text-sky-400 border border-sky-400/20">
              Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          {card_list.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {card_list.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full
              bg-white/5 text-gray-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

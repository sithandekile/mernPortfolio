import React from "react";
import meImg from "../assets/thande.JPG";
import { experience } from "../constants/data";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";

const techIcons = [
  <FaReact />,
  <SiJavascript />,
  <FaNodeJs />,
  <SiMongodb />,
  <SiTailwindcss />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaGitAlt />,
];

export const About = ({
  skills = [
    { category: "Frontend", name: "React" },
    { category: "Frontend", name: "Tailwind CSS" },
    { category: "Backend", name: "Node.js" },
    { category: "Backend", name: "Express" },
    { category: "Backend", name: "MongoDB" },
  ],
}) => {

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  // Find the tech stat (10+)
  const techStat = experience.find(
    (item) => item.label.toLowerCase().includes("tech")
  );

  // Get the rest for left/right
  const otherStats = experience.filter(
    (item) => item !== techStat
  );

  return (
    <section id="about" className="py-24 bg-zinc-50 relative">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5E5E5E]">
            About{" "}
            <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            A quick look at how I work and what I focus on.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Image */}
          <div>
            <img
              src={meImg}
              alt="Sithandekile"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Story */}
          <div className="space-y-6 text-sm md:text-xl">
            <p>
              I’m a Full Stack MERN developer based in Johannesburg, focused on
              building clean, scalable, and user-friendly web applications.
            </p>

            <p>
              I enjoy turning ideas into working products, paying close attention
              to both frontend experience and backend structure.
            </p>

            <p className="text-gray-600">
              I learn best by building real projects and solving real problems.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {Object.entries(groupedSkills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-black/80 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-sky-400 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm
                      bg-sky-500/10 text-sky-300 border border-sky-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 items-center">

          {/* Left Stat */}
          {otherStats[0] && (
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-sky-400 mb-2">
                {otherStats[0].number}
              </div>
              <div className="text-sm md:text-xl">
                {otherStats[0].label}
              </div>
            </div>
          )}

          {/* Middle Tech Circle */}
          {techStat && (
            <div className="relative w-56 h-56 mx-auto flex items-center justify-center">

              <div className="text-center animate-pulse">
                <p className="text-5xl font-bold text-sky-400">
                  {techStat.number}
                </p>
                <p className="text-sm text-gray-600">
                  {techStat.label}
                </p>
              </div>

              {techIcons.map((icon, index) => {
                const angle = (index / techIcons.length) * 2 * Math.PI;
                const radius = 90;

                return (
                  <div
                    key={index}
                    style={{
                      transform: `translate(${radius * Math.cos(angle)}px, ${
                        radius * Math.sin(angle)
                      }px)`,
                    }}
                    className="absolute text-2xl text-pink-500 animate-pulse" 
                  >
                    {icon}
                  </div>
                );
              })}
            </div>
          )}

          {/* Right Stat */}
          {otherStats[1] && (
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-sky-400 mb-2">
                {otherStats[1].number}
              </div>
              <div className="text-sm md:text-xl">
                {otherStats[1].label}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

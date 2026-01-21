import React from "react";
import meImg from "../assets/thande.JPG";
import { experience } from "../constants/data";

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

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About{" "}
            <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A quick look at how I work and what I focus on.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Image */}
          <div className="md:col-span-1">
            <img
              src={meImg}
              alt="Sithandekile"
              className="rounded-2xl object-cover shadow-xl border border-white/10"
            />
          </div>

          {/* Story */}
          <div className="md:col-span-1 space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              I’m a Full Stack MERN developer based in Johannesburg, focused on
              building clean, scalable, and user-friendly web applications.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy turning ideas into working products, paying close attention
              to both frontend experience and backend structure. I care about
              writing code that is maintainable, efficient, and easy to improve
              over time.
            </p>

            <p className="text-gray-500">
              I learn best by building real projects and solving real problems.
            </p>
          </div>

          {/* Skills */}
          <div className="md:col-span-1 space-y-6">
            {Object.entries(groupedSkills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold text-sky-400 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium
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

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {experience.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-sky-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

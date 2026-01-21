import React, { useState } from "react";
import { socialLinks, contactInfo } from "../constants/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thanks for reaching out. I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to work together?  
            I’m always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Form */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Send a Message
            </h3>
            <p className="text-gray-400 mb-8">
              Fill out the form below and I’ll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/10
                  text-white placeholder-gray-500 focus:outline-none
                  focus:border-sky-400 transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/10
                  text-white placeholder-gray-500 focus:outline-none
                  focus:border-sky-400 transition"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10
                text-white placeholder-gray-500 resize-none focus:outline-none
                focus:border-sky-400 transition"
              />

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600
                text-white py-3 rounded-lg font-medium
                transition-all duration-300 hover:-translate-y-0.5
                hover:shadow-lg hover:shadow-sky-500/30"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info + Socials */}
          <div className="space-y-8">

            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-3 p-3 rounded-lg
                    hover:bg-white/5 transition"
                  >
                    <info.icon className="text-sky-400" size={18} />
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-white font-medium">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg
                    hover:bg-white/5 transition"
                  >
                    <social.icon className="text-sky-400" size={18} />
                    <div>
                      <div className="text-white font-medium">
                        {social.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {social.username}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

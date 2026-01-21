import { useState, useEffect } from "react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const text = "ThandeDev";

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 dark:bg-gray-900/80 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Brand */}
        <div className="text-3xl font-black bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
          {text}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative md:text-2xl transition-colors hover:text-pink-500 ${
                activeSection === item.id
                  ? "text-pink-600 font-semibold after:block after:w-full after:h-1 after:bg-pink-500 after:rounded-full after:absolute after:-bottom-1 after:left-0"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

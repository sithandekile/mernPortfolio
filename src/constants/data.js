 import taskImage from '../assets/preloved.png'
import ecommerceImage from '../assets/ecommerce.png'
import skillsImage from '../assets/skills2.png'
import blogImage from '../assets/blog.png'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

 export const projects = [
    {
      title: "E-Commerce App",
      description:
        "A full-stack e-commerce solution with user authentication, and admin dashboard. Built with React, Node.js, Express, and MongoDB.",
      image:ecommerceImage,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
      github: "https://github.com/sithandekile/mernfinalpro",
      live: "https://safe-swap-pre-loved-goods.vercel.app/",
      featured: false,
    },
    {
      title: "Blog Platform App",
      description:
        "A modern blogging platform with rich text editor, comment  and likes system, and content management features.Mcedgvcf uyiudgyfcxdzsgrdj",
      image: blogImage,
      technologies: ["React", "Node.js", "MongoDB", "Rich Text Editor"],
      github: "https://github.com/sithandekile/myblogPost",
      live: "https://example.com",
      featured: false,
    },
    {
      title: " Bridging Skills Gap App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: skillsImage,
      technologies: ["React", "Socket.io", "Express", "MongoDB", "Redux"],
      github: "https://github.com/sithandekile/skillsGapE",
      live: "https://example.com",
      featured: false,
    },
    // {
    //   title: "Weather Dashboard",
    //   description:
    //     "Real-time weather monitoring dashboard with interactive charts, forecasts, and location-based services integration.",
    //   image: weatherImage,
    //   technologies: ["React", "Chart.js", "Express", "Weather API"],
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   featured: false,
    // },
    
  ];

  export const experience=[
            // { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "8+", label: "Technologies" },
            { number: "100%", label: "Commitment" },
          ];
          
  export const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "sthandie15@gmail.com", href: "sthandie15@gmail.com" },
    { icon: FaPhone, label: "Phone", value: "+27 670 118 494", href: "cel:+27 670 118 494" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Johannesburg, SA", href: "#" },
  ];

  export const socialLinks = [
    { icon: FaGithub, name: "GitHub", href: "https://github.com/sithandekile", username: "sithandekile" },
    { icon: FaLinkedin, name: "LinkedIn", href: "https://linkedin.com", username: "Sithandekile" },
    // { icon: FaTwitter, name: "Twitter", href: "https://twitter.com", username: "@thande" },
  ];

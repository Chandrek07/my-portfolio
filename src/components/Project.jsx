import React, { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import myImage1 from "../assets/e-comm.jpg";
import myImage2 from "../assets/blog.jpg";
import myImage3 from "../assets/news.jpg";
import myImage4 from "../assets/attendance.jpg";
import myImage5 from "../assets/files.jpg";
import myImage6 from "../assets/bg.jpg";

function Project() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("projects");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerInstance.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.",
      image: myImage1,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Blog Website",
      description:
        "A Flask-based blog application allowing users to post, edit, and read blogs with secure authentication and an intuitive interface.",
      image: myImage2,
      technologies: ["Flask", "SQLite", "Python"],
      category: "Web App",
    },
    {
      id: 3,
      title: "News Portal",
      description:
        "A WordPress-based dynamic news portal for publishing and managing daily news articles with a responsive design.",
      image: myImage3,
      technologies: ["WordPress", "PHP", "MySQL"],
      category: "CMS",
    },
    {
      id: 4,
      title: "Facial Recognition Attendance System",
      description:
        "An automated attendance system using Python and OpenCV to recognize faces and mark attendance, improving classroom/workplace efficiency.",
      image: myImage4,
      technologies: ["Python", "OpenCV"],
      category: "AI",
    },
    {
      id: 5,
      title: "File Format Changer",
      description:
        "A tool to convert files between multiple formats (e.g., PDF to Word, Image to PDF) with a clean UI and fast processing, built using Python and Flask.",
      image: myImage5,
      technologies: ["Python", "Flask"],
      category: "Utility",
    },
    {
      id: 6,
      title: "Background Remover",
      description:
        "An AI-based image background remover using Python and OpenCV, delivering quick and accurate background separation for photos.",
      image: myImage6,
      technologies: ["Python", "OpenCV"],
      category: "AI Tool",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-transparent relative overflow-hidden"
    >
      {/* Animated background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-green-400 font-semibold text-lg mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 overflow-hidden border border-slate-700 hover:border-green-500 hover:scale-105 flex flex-col
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
                    <Github className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>

                  <h4 className="text-lg font-bold text-white mt-3 mb-2 group-hover:text-green-400 transition-all duration-300">
                    {project.title}
                  </h4>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed min-h-[60px]">
                    {project.description.substring(0, 100)}...
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.technologies.map((tech, techindex) => (
                    <span
                      key={techindex}
                      className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;

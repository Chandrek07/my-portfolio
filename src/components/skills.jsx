import React, { useEffect, useState } from "react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skills = [
    { name: "HTML / CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Flask", level: 70 },
    { name: "Python", level: 70 },
    { name: "WordPress", level: 80 },
  ];

  const education = [
    {
      year: "2020 - 2023",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Soban Singh Jeena University, Almora",
      description:
        "Focused on programming, web technologies, and database management, building a strong foundation in IT and software development.",
    },
    {
      year: "2023 - 2024",
      title: "Master of Computer Applications",
      institution: "Graphic Era Hill University, Dehradun",
      description:
        "Advanced study of computer science and development technologies",
    },
  ];

  useEffect(() => {
    const element = document.getElementById("skills");
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }));
            }, index * 200);
          });
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-24 bg-transparent relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Education */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mb-4">
                Qualification
              </p>
              <p className="text-green-400 text-4xl font-bold md-8">
                Education
              </p>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`border-l-2 border-green-500 pl-6 relative group transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-all duration-300"></div>
                  <div className="text-green-400 text-sm font-semibold mb-2 group-hover:text-green-300 transition-all duration-300">
                    {edu.year}
                  </div>
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                    {edu.title}
                  </h3>
                  <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-all duration-300">
                    {edu.institution}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-all duration-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Skills */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-12">
              <p className="text-green-400 font-semibold mb-4 text-lg">
                Expert
              </p>
              <p className="text-white text-4xl font-bold mb-8">My Skills</p>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="space-y-2 transition-all duration-1000"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium group-hover:text-green-400 transition-all duration-300">
                        {skill.name}
                      </span>
                      <span className="text-green-400 font-semibold">
                        {animatedSkills[skill.name] || 0}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1500 ease-out relative"
                        style={{
                          width: `${animatedSkills[skill.name] || 0}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

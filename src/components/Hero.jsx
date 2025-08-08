import React, { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, Play } from "lucide-react";
import "Z:/My_Portfolio/my-portfolio/src/components/hero.css";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("home");
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-transparent pt-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-1 bg-gradient-to-r from-blue-500/40 to-transparent animate-ping"></div>
        <div className="absolute top-10 right-1/4 w-24 h-24 border border-green-500/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 border border-blue-500/30 rounded-full animate-spin-slow"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p
              className={`text-green-400 font-semibold text-lg transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Crafting modern web applications
            </p>

            <h1
              className={`text-5xl md:text-6xl font-black text-white leading-tight transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <span className="text-gray-200 text-4xl">Hi I'm </span>
              <span className="text-gray-200">Chandrek Bisht</span>
              <br />
              <span className="text-green-500">a Web Developer</span>
            </h1>

            <p
              className={`text-gray-300 leading-relaxed max-w-lg transition-all duration-1000 font-light text-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              Full Stack Developer Intern-ready candidate{" "}
              <span className="text-green-500">
                with hands-on experience in Flask, React, and JavaScript
              </span>{" "}
              projects. Passionate about coding, solving problems, and
              delivering impactful digital solutions.
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl font-medium hover:scale-105">
                LEARN MORE
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="border-2 border-slate-600 text-white px-8 py-4 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium flex items-center gap-2 group hover:scale-105">
                PLAY VIDEO
                <Play className="w-5 h-5" />
              </button>
            </div>

            {/* Social Icons */}
            <div
              className={`flex gap-4 pt-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <a
                href="https://github.com/Chandrek07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-6"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-6"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:chandrek07@gmail.com"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-6"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Right Terminal Card */}
          <div
            className={`relative transition-all duration-1000`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="relative w-full max-w-lg mx-auto group shimmer-card">
              <div className="bg-slate-800/60 p-6 rounded-xl shadow-xl border border-slate-700 backdrop-blur-lg hover:scale-105 transition-all duration-500 font-mono">
                <span className="text-green-400">$</span>{" "}
                <span className="typing text-gray-300">npm start</span>
                <br />
                <span className="text-green-400"></span>{" "}
                <span className="typing-delay text-gray-300">
                  Running portfolio...
                </span>
                <br />
                <span className="text-green-400"></span>{" "}
                <span className="typing-delay-2 text-gray-300">
                  Loading skills...
                </span>
                <br />
                <span className="text-green-400"></span>{" "}
                <span className="typing-delay-3 text-gray-300">Ready!</span>
              </div>
            </div>

            {/* Floating shapes */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-600 rounded-2xl opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

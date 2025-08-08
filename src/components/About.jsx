import React from "react";
import { useState, useEffect } from "react";
import myImage from "../assets/image 2.jpg.png";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("about");
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
      id="about"
      className={`py-24 bg-transparent relative overflow-hidden `}
    >
      {/* Animated background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-4">
        <div className="container px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-space">
            {/* Left Image */}
            <div
              className={`relative transition-all mt-13 max-w-114 duration-1000 
              ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              } `}
            >
              <div className="relative group">
                <div className="relative border-4 border-white rounded-2xl p-2 group-hover:border-green-400 transition-all duration-300">
                  <img
                    src={myImage}
                    alt=""
                    className="w-full rounded-xl transition-all duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-2 bg-gradient-to-tr from-green-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  {/* Floating Decoration */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-600/20 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-600/20 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Right Content */}
            <div
              className={`space-y-8 transition-all duration-1000  delay-300 font-light  ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-4">
                <p className="text-green-400 font-semibold text-lg">About Us</p>
                <h2 className="text-4xl md:text-5xl text-white font-bold animate-slide-up">
                  Why hire me for your <br />
                  <span className="text-gray-500">next project?</span>
                </h2>
                <p className="text-green-400 font-semibold delay-200">
                  Web Developer
                </p>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p
                  className={`text-lg transition-all duration-1000 delay-500  ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  I am an enthusiastic web developer with hands-on experience in
                  building full‑stack applications using Flask, React, and
                  JavaScript. I focus on creating clean, user‑friendly
                  interfaces and scalable back‑end solutions. My passion for
                  coding, ability to quickly learn new technologies, and
                  dedication to delivering high‑quality results make me a
                  reliable choice for your next project.
                </p>
                <p
                  className={`transition-all duration-1000 delay-700  ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  4Passionate about crafting responsive and functional websites
                  using modern tools like React, Flask, and Node.js. I deliver
                  clean code, creative solutions, and on-time results.
                </p>
              </div>
              <div
                className={`grid grid-cols-2 gap-8 py-6 transition-all duration-1000 text-lg delay-500  ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Name:
                  </p>
                  <p className="text-gray-300">Chandrek Bisht</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Location:
                  </p>
                  <p className="text-gray-300">Almora, Uttarakhand</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Birthday:
                  </p>
                  <p className="text-gray-300">27/04/2003</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                    Email:
                  </p>
                  <p className="text-gray-300">chandrek07@gmail.com</p>
                </div>
              </div>
              <div className="group">
                {/*<div className=" flex flex-wrap gap-4 transition-all duration-1000">
                  <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-all font-medium duration-300 shadow-lg hover:shadow-xl hover:scale-105 ">
                    DOWNLOAD
                  </button>
                  <button className="border-2 border-slate-600 text-white px-8 py-3 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium group hover:scale-105">
                    LEARN MORE
                  </button>
                </div>*/}
                <p className="text-gray-300"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

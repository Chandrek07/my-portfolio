import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
      ${
        isScrolled
          ? "backdrop-blur-lg bg-indigo-900/40 shadow-lg border-b border-indigo-500/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 ">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-green-400">CHANDREK</span>
            <span className="text-white">BISHT</span>
            <span className="text-green-400">.</span>
          </div>

          {/* Desktop menus */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                style={{ animationDelay: `${index * 0.1}s` }}
                className=" text-gray-300 hover:text-green-400 transition-all duration-300 font-medium relative group :"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <a
            href="/My-Resume.pdf"
            download
            className="hidden md:flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
          >
            Download CV Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/*mobile navigation*/}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pd-4 border-t border-slate-800 pt-4 bg-slate-800 rounded-lg shadow-lg">
            {navItems.map((item) => {
              return (
                <button className="block w-full text-left py-3 px-4 text-gray-300 hover:text-green-400 hover:bg-slate-700 transition-all duration-300 rounded-lg">
                  {item.name}
                </button>
              );
            })}
            <a
              href="/My-Resume.pdf"
              download
              className="mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white  px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 "
            >
              <button>Download CV Now</button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });

    // Check for scroll to change navbar style
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close mobile menu
  };

  const links = [
    { name: "Home", id: "home", delay: 0 },
    { name: "How It Works", id: "how-it-works", delay: 100 },
    { name: "Explore", id: "explore", delay: 200 },
    { name: "Review", id: "review", delay: 300 },
    { name: "Blog", id: "blog", delay: 400 },
    { name: "Contact", id: "contact", delay: 500 },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white  shadow-md py-0 "
          : "bg-white/90 borpy-1"
      }`}
    >
      <div
        className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
        data-aos="fade-down"
        data-aos-duration="600"
      >
        <div className="relative flex h-16 items-center justify-between w-full">
          <div className="flex items-center" >
            <span className="text-2xl font-bold text-gray-800">
              List<span className="text-red-500">Race</span>
            </span>
          </div>

          <div className="flex sm:hidden items-center">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors duration-200"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>

                {/* Middle line */}
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-600 top-3 transition-all duration-200 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>

                {/* Bottom line */}
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="px-3 py-2 text-sm font-medium text-black hover:text-red-500 relative group transition-colors duration-200"
                
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`sm:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-red-500 rounded-md transition-colors duration-200 transform"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: "0.3s",
                animationName: isMenuOpen ? "slideInRight" : "none",
                animationFillMode: "both",
              }}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;

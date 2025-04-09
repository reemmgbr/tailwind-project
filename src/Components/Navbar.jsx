import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // يقفل المينيو في الموبايل
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Explore", id: "explore" },
    { name: "Review", id: "review" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="border-b border-gray-200 bg-white fixed w-full z-50 shadow-sm">
      {/* container للعرض الداخلي فقط */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">
              List<span className="text-red-500">Race</span>
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              onClick={toggleMenu}
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} w-6 h-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} w-6 h-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-500 transition"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden bg-white px-2 pt-2 pb-3`}>
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollTo(link.id)}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gray-800 hover:text-red-500"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

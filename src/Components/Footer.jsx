import React from "react";

function Footer() {
  return (
    <footer className="mt-2 ">
      <div className="bg-red-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              Do You Want To Add Your Business
            </h3>
            <p className="text-gray-500 text-lg md:text-xl lg:text-2xl">
              Learn more about how websites work With Us?
            </p>

            <form className="max-w-md mx-auto mt-8 w-full px-4">
              <div className="relative">
                <input
                  type="email"
                  id="email-subscription"
                  className="block w-full p-3 md:p-4 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter Your Email Here"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 rounded-lg text-sm md:text-base font-medium px-3 py-1.5 md:px-4 md:py-2 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl md:text-3xl font-bold text-gray-800">
                List<span className="text-red-500">Race</span>
              </span>
            </div>

            <nav className="w-full md:w-auto">
              <ul className="flex flex-wrap justify-center gap-1 md:gap-2">
                <li>
                  <a
                    href="#"
                    className="rounded-md px-2 py-1.5 md:px-3 md:py-2 text-sm font-medium text-gray-600 hover:text-red-500 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="rounded-md px-2 py-1.5 md:px-3 md:py-2 text-sm font-medium text-gray-600 hover:text-red-500 transition duration-300"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#explore"
                    className="rounded-md px-2 py-1.5 md:px-3 md:py-2 text-sm font-medium text-gray-600 hover:text-red-500 transition duration-300"
                  >
                    Explore
                  </a>
                </li>
                <li>
                  <a
                    href="#review"
                    className="rounded-md px-2 py-1.5 md:px-3 md:py-2 text-sm font-medium text-gray-600 hover:text-red-500 transition duration-300"
                  >
                    Review
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="rounded-md px-2 py-1.5 md:px-3 md:py-2 text-sm font-medium text-gray-600 hover:text-red-500 transition duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="rounded-md px-2 py-1.5 md:px-3 md:py-2 text-sm font-medium text-gray-600 hover:text-red-500 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Horizontal Line */}
          <hr className="border-gray-200 my-6" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2024 Your Company, Inc. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <i className="fas fa-phone-alt"></i>
                <p className="text-sm">+1 234 567 890</p>
              </div>

              <div className="flex space-x-6 text-gray-600">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-lg hover:text-blue-600 transition duration-300"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter text-lg hover:text-blue-400 transition duration-300"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-lg hover:text-pink-500 transition duration-300"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

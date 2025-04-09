function Footer() {
  return (
    <>
      <div className="text-center mb-8 mt-20 bg-red-50 py-16 space-y-6 sm:py-32 sm:space-y-7">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Do You Want To Add Your Business
        </h3>
        <p className="text-gray-500 text-xl sm:text-2xl mt-4">
          Learn more about how websites work With Us?
        </p>

        <form className="max-w-md mx-auto px-4 w-full">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Enter Your Email Here"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-0 bottom-0 top-0 bg-red-500 hover:bg-red-300 focus:outline-none focus:ring-red-300 font-medium text-sm px-5 py-2 dark:bg-red-300 dark:hover:bg-red-300 dark:focus:ring-red-300"
            >
              Create account
            </button>
          </div>
        </form>
      </div>

      <div>
        <div className="container flex md:flex-row flex-col m-auto items-center justify-between py-4 text-gray-600">
          <div>
            <span className="text-2xl sm:text-3xl font-bold text-gray-800">
              List<span className="text-red-500">Race</span>
            </span>
          </div>

          <div className="flex sm:ml-6 mt-4 sm:mt-0">
            <div className="flex flex-wrap space-x-2 items-center justify-center">
              <a href="#" className="rounded-md px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-red-500 transition duration-300">
                Home
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-red-500 transition duration-300">
                How It Works
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-red-500 transition duration-300">
                Explore
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-red-500 transition duration-300">
                Review
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-red-500 transition duration-300">
                Blog
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm sm:text-base font-medium text-gray-600 hover:text-red-500 transition duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="container flex md:flex-row flex-col m-auto items-center justify-between py-4 text-gray-600 md:space-y-0 space-y-5">
          <p className="text-sm sm:text-base">© 2024 Your Company, Inc. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <i className="fas fa-phone-alt text-sm sm:text-base"></i>
              <p className="text-sm sm:text-base">+1 234 567 890</p>
            </div>

            <div className="flex space-x-4 sm:space-x-6 text-gray-600">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-xl sm:text-2xl hover:text-blue-600 transition duration-300"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-xl sm:text-2xl hover:text-blue-400 transition duration-300"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-xl sm:text-2xl hover:text-pink-500 transition duration-300"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

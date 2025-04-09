function HowItWork() {
  return (
    <div className="container m-auto py-10 text-center">
      <div className="text-center mb-8">
        <h3 className="text-4xl font-bold text-gray-800">How It Works</h3>
        <p className="text-gray-500 text-2xl mt-4">
          Learn more about how websites work
        </p>
      </div>

      <div  id="how-it-works" className="flex flex-wrap md:flex-nowrap justify-center gap-8">
        {/* Box 1 */}
        <div className=" px-8 py-10 flex flex-col items-center justify-center space-y-3 w-full sm:w-1/2 lg:w-1/3 h-auto rounded-md shadow-lg mb-6 sm:mb-4">
          <div className="bg-gray-200 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <i className="fa-solid fa-car text-gray-800 text-2xl "></i>
          </div>
          <h5 className="text-sm font-semibold">Choose what to do</h5>
          <p className="text-gray-500 text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
            maiores minus fugit totam perspiciatis, cum voluptatum doloremque
            cumque voluptatem autem earum aliquid expedita? Minus
          </p>
          <button className="text-gray-500 border border-gray-500 text-white py-2 px-5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-300">
            Read More
          </button>
        </div>

        {/* Box 2 */}
        <div className=" px-8 py-10 flex flex-col items-center justify-center space-y-3 w-full sm:w-1/2 lg:w-1/3 h-auto rounded-md shadow-lg mb-6 sm:mb-4">
          <div className="bg-gray-200 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <i className="fa-solid fa-car text-gray-800 text-2xl "></i>
          </div>{" "}
          <h5 className="text-sm font-semibold">Choose what to do</h5>
          <p className="text-gray-500 text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
            maiores minus fugit totam perspiciatis, cum voluptatum doloremque
            cumque voluptatem autem earum aliquid expedita? Minus
          </p>
          <button className="text-gray-500 border border-gray-500 text-white py-2 px-5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-300">
            Read More
          </button>
        </div>

        {/* Box 3 */}
        <div className=" px-8 py-10 flex flex-col items-center justify-center space-y-3 w-full sm:w-1/2 lg:w-1/3 h-auto rounded-md shadow-lg mb-6 sm:mb-4">
          <div className="bg-gray-200 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <i className="fa-solid fa-car text-gray-800 text-2xl "></i>
          </div>{" "}
          <h5 className="text-sm font-semibold">Choose what to do</h5>
          <p className="text-gray-500 text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
            maiores minus fugit totam perspiciatis, cum voluptatum doloremque
            cumque voluptatem autem earum aliquid expedita? Minus
          </p>
          <button className="text-gray-500 border border-gray-500 text-white py-2 px-5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowItWork;

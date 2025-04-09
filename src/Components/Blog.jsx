import blogImage from "../assets/b1.jpg";
import blogImage2 from "../assets/b2.jpg";
import blogImage3 from "../assets/b3.jpg";



function Blog() {
  return (
    <>
      <div id="blog"  className="text-center my-20">
        <h3 className="text-4xl font-bold text-gray-800">News And Articals</h3>
        <p className="text-gray-500 text-2xl mt-4">
          Learn more about how websites work
        </p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap container m-auto justify-center gap-6">
        <div className="shadow-lg  space-y-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={blogImage}
            alt="photo for blog"
            className="w-full h-64 object-cover"
          />
          <div className="px-5 pb-5">
            <h2 className="text-xl font-semibold mt-4 text-gray-900">
              How To Find Your Desired Place More Quickly
            </h2>
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-sm text-gray-600">
                Posted by <b>reem gbr</b>
              </h3>
              <h3 className="text-sm border-l border-gray-300 pl-4 text-gray-600">
                March 2025
              </h3>
            </div>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              in molestiae voluptates amet, quasi, sit reiciendis consequuntur
              quaerat.
            </p>
          </div>
        </div>

        {/* Second Blog Card */}
        <div className="shadow-lg  space-y-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={blogImage2}
            alt="photo for blog"
            className="w-full h-64 object-cover"
          />
          <div className="px-5 pb-5 ">
            <h2 className="text-xl font-semibold mt-4 text-gray-900">
              How To Find Your Desired Place More Quickly
            </h2>
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-sm text-gray-600">
                Posted by <b>reem gbr</b>
              </h3>
              <h3 className="text-sm border-l border-gray-300 pl-4 text-gray-600">
                March 2025
              </h3>
            </div>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              in molestiae voluptates amet, quasi, sit reiciendis consequuntur
              quaerat.
            </p>
          </div>
        </div>

        {/* Third Blog Card */}
        <div className="shadow-lg  space-y-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={blogImage3}
            alt="photo for blog"
            className="w-full h-64 object-cover"
          />
          <div className="px-5 pb-5 ">
            <h2 className="text-xl font-semibold mt-4 text-gray-900">
              How To Find Your Desired Place More Quickly
            </h2>
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-sm text-gray-600">
                Posted by <b>reem gbr</b>
              </h3>
              <h3 className="text-sm border-l border-gray-300 pl-4 text-gray-600">
                March 2025
              </h3>
            </div>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              in molestiae voluptates amet, quasi, sit reiciendis consequuntur
              quaerat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;

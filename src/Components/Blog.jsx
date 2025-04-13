import React, { useEffect } from "react";
import blogImage from "../assets/b1.jpg";
import blogImage2 from "../assets/b2.jpg";
import blogImage3 from "../assets/b3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
      offset: 100,
    });

    // Refresh AOS on window resize
    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh();
      });
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: blogImage,
      title: "How To Find Your Desired Place More Quickly",
      author: "Reem Gabr",
      date: "March 2025",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae in molestiae voluptates amet, quasi, sit reiciendis consequuntur quaerat.",
      animation: "fade-right",
    },
    {
      id: 2,
      image: blogImage2,
      title: "Top Rated Places You Must Visit This Year",
      author: "Reem Gabr",
      date: "March 2025",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae in molestiae voluptates amet, quasi, sit reiciendis consequuntur quaerat.",
      animation: "fade-up",
    },
    {
      id: 3,
      image: blogImage3,
      title: "Best Travel Tips From Expert Travelers",
      author: "Reem Gabr",
      date: "March 2025",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae in molestiae voluptates amet, quasi, sit reiciendis consequuntur quaerat.",
      animation: "fade-left",
    },
  ];

  return (
    <section className="py-10 md:py-20">
      <div
        id="blog"
        className="text-center mb-10 md:mb-16"
        data-aos="fade-down"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
          News And Articles
        </h3>
        <p className="text-gray-500 text-lg md:text-2xl mt-4">
          Learn more about how websites work
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500"
              data-aos={post.animation}
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={post.image}
                  alt={`Blog image for ${post.title}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                  New
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="bg-white text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 font-medium px-4 py-2 rounded-full text-sm">
                    Read Article
                  </button>
                </div>
              </div>

              <div className="px-5 py-6">
                <h2 className="text-xl font-semibold text-gray-900 line-clamp-2 mb-3 hover: transition-colors duration-300">
                  {post.title}
                </h2>

                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm text-gray-600">
                    Posted by{" "}
                    <span className="font-medium ">{post.author}</span>
                  </h3>
                  <h3 className="text-sm border-l border-gray-300 pl-4 text-gray-600">
                    {post.date}
                  </h3>
                </div>

                <p className="text-gray-600 mb-5">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;

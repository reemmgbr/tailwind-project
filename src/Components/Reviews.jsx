import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div  id="review" className="text-center my-20">
        <h3 className="text-4xl font-bold text-gray-800">Clintes Reviews</h3>
        <p className="text-gray-500 text-2xl mt-4">
          what our clints say about us
        </p>
      </div>
      <div className="container mx-auto px-4 py-6">
        <Slider {...settings}>
          {/* Example of a Slide */}
          <div className="p-4">
            <div className="max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-4 p-4">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  alt="Tania Andrew"
                  className="rounded-full w-20"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-xl">Reem Gbr</h4>
                  <p className="text-gray-500">London / UK</p>
                  <div className="flex space-x-2 mt-1">
                    <i className="text-yellow-400 fa-solid fa-star"></i>
                    <i className="text-yellow-400 fa-solid fa-star"></i>
                    <i className="text-yellow-400 fa-solid fa-star"></i>
                    <i className="text-yellow-400 fa-solid fa-star"></i>
                    <i className="text-yellow-400 fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestiae tempora expedita inventore eligendi cum eum
                  mollitia. Perspiciatis illum ullam at, sint consequuntur
                  laborum quam.
                </p>
              </div>
            </div>
          </div>

          {/* Repeat slides */}
          {Array(5)
            .fill()
            .map((_, index) => (
              <div key={index} className="p-4">
                <div className=" mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center gap-4 p-4">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                      alt="Tania Andrew"
                      className="rounded-full w-20"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800 text-xl">
                        Reem Gbr
                      </h4>
                      <p className="text-gray-500">London / UK</p>
                      <div className="flex space-x-2 mt-1">
                        <i className="text-yellow-400 fa-solid fa-star"></i>
                        <i className="text-yellow-400 fa-solid fa-star"></i>
                        <i className="text-yellow-400 fa-solid fa-star"></i>
                        <i className="text-yellow-400 fa-solid fa-star"></i>
                        <i className="text-yellow-400 fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-500 text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Molestiae tempora expedita inventore eligendi cum eum
                      mollitia. Perspiciatis illum ullam at, sint consequuntur
                      laborum quam.
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}

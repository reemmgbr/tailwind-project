import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Sample review data
  const reviews = [
    {
      name: "Reem Gbr",
      location: "London / UK",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempora expedita inventore eligendi cum eum mollitia. Perspiciatis illum ullam at, sint consequuntur laborum quam.",
    },
    {
      name: "John Smith",
      location: "New York / USA",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempora expedita inventore eligendi cum eum mollitia. Perspiciatis illum ullam at, sint consequuntur laborum quam.",
    },
    {
      name: "Maria Garcia",
      location: "Madrid / Spain",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempora expedita inventore eligendi cum eum mollitia. Perspiciatis illum ullam at, sint consequuntur laborum quam.",
    },
    {
      name: "Yuki Tanaka",
      location: "Tokyo / Japan",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempora expedita inventore eligendi cum eum mollitia. Perspiciatis illum ullam at, sint consequuntur laborum quam.",
    },
    {
      name: "Sarah Johnson",
      location: "Sydney / Australia",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempora expedita inventore eligendi cum eum mollitia. Perspiciatis illum ullam at, sint consequuntur laborum quam.",
    },
    {
      name: "Alex Chen",
      location: "Singapore",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempora expedita inventore eligendi cum eum mollitia. Perspiciatis illum ullam at, sint consequuntur laborum quam.",
    },
  ];

  // Generate stars based on rating
  const renderStars = (rating) => {
    return Array(rating)
      .fill()
      .map((_, i) => (
        <i key={i} className="text-yellow-400 fa-solid fa-star"></i>
      ));
  };

  return (
    <>
      <div id="review" className="text-center py-8 md:py-20">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-800">Client Reviews</h3>
        <p className="text-gray-500 text-md md:text-2xl mt-4">
          What clients say about us
        </p>
      </div>
      <div className="container mx-auto px-4 py-6">
        <Slider {...settings} className="m-auto">
          {reviews.map((review, index) => (
            <div key={index} className="px-2 py-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    alt={review.name}
                    className="rounded-full w-20 h-20 object-cover"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-gray-800 text-xl">
                      {review.name}
                    </h4>
                    <p className="text-gray-500">{review.location}</p>
                    <div className="flex justify-center sm:justify-start space-x-2 mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 sm:pt-4">
                  <p className="text-gray-500 text-sm">{review.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

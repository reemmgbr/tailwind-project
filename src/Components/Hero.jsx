import React from "react";
import heroImage from "../assets/banner.jpg";

function Hero() {
  const features = [
    {
      icon: "fa-solid fa-car",
      title: "Automotion",
      description: "120 Auto",
    },
    {
      icon: "fa-solid fa-bicycle",
      title: "Bicycles",
      description: "80 Bikes",
    },
    {
      icon: "fa-solid fa-bus",
      title: "Transport",
      description: "50 Buses",
    },
    {
      icon: "fa-solid fa-plane",
      title: "Air Travel",
      description: "30 Flights",
    },
    {
      icon: "fa-solid fa-train",
      title: "Trains",
      description: "100 Trains",
    },
  ];

  return (
    <div
    
    id="home"   className="w-full h-screen relative mb-36"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundColor: "rgba(48, 46, 59, 0.747)",
        }}
      ></div>

      {/* Hero Section Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center uppercase">
          Best Place To Find And Explore
        </h3>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center uppercase">
          That All You Need
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam
          error quam
        </p>
      </div>

      {/* Features Section */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full m-auto py-6"
        style={{
          transform: "translateY(100px)", // Moves the div slightly above the bottom edge of the banner
          zIndex: 10, // Ensures it appears above the overlay
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white px-4 py-6 flex flex-col items-center justify-center space-y-3 w-24 sm:w-32 md:w-40 h-32 sm:h-40 md:h-48 rounded-md shadow-md"
              >
                <i
                  className={`${feature.icon} text-2xl mb-4 text-gray-800`}
                ></i>
                <h5 className="text-xs sm:text-sm font-semibold text-gray-800">
                  {feature.title}
                </h5>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

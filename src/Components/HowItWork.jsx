import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HowItWork() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
      offset: 120,
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

  // Data for the feature boxes
  const features = [
    {
      icon: "fa-solid fa-car",
      title: "Choose what to do",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, maiores minus fugit totam perspiciatis, cum voluptatum doloremque cumque voluptatem autem earum aliquid expedita? Minus",
      animation: "fade-right",
      delay: 0,
    },
    {
      icon: "fa-solid fa-map-location-dot",
      title: "Find what you want",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, maiores minus fugit totam perspiciatis, cum voluptatum doloremque cumque voluptatem autem earum aliquid expedita? Minus",
      animation: "fade-up",
      delay: 200,
    },
    {
      icon: "fa-solid fa-star",
      title: "Explore amazing places",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, maiores minus fugit totam perspiciatis, cum voluptatum doloremque cumque voluptatem autem earum aliquid expedita? Minus",
      animation: "fade-left",
      delay: 400,
    },
  ];

  return (
    <div id="how-it-works" className="container mx-auto px-4 py-10 md:py-20">
      <div className="text-center mb-8 md:mb-16" data-aos="fade-down">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
          How It Works
        </h3>
        <p className="text-gray-500 text-lg md:text-2xl mt-4">
          Learn more about how our services work
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos={feature.animation}
            data-aos-delay={feature.delay}
            className="px-6 py-8 flex flex-col items-center justify-center space-y-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
          >
            <div className="bg-red-50 w-16 h-16 flex items-center justify-center rounded-full transform transition-transform duration-500 hover:scale-110">
              <i className={`${feature.icon} text-2xl`}></i>
            </div>
            <h5 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h5>
            <p className="text-gray-500 text-base text-center">
              {feature.description}
            </p>
           
          </div>
        ))}
      </div>

 
    </div>
  );
}

export default HowItWork;

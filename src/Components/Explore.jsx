import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Exploreing1 from "../assets/e1.jpg";
import Exploreing2 from "../assets/e2.jpg";
import Exploreing3 from "../assets/e3.jpg";
import Exploreing4 from "../assets/e4.jpg";
import Exploreing5 from "../assets/e5.jpg";
import Exploreing6 from "../assets/e6.jpg";

export default function Explore() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
      mirror: false,
    });
    
    // Refresh AOS on window resize
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
    
    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  // Card data for reusability
  const exploreCards = [
    {
      id: 1,
      image: Exploreing1,
      title: "Europe Tour",
      rating: "4.5",
      ratingClass: "bg-yellow-300",
      status: "Close Now",
      statusClass: "text-red-500",
      price: "20$-300$",
      animation: "fade-right"
    },
    {
      id: 2,
      image: Exploreing2,
      title: "Asian Adventure",
      rating: "4.5",
      ratingClass: "bg-blue-300",
      status: "Open Now",
      statusClass: "text-green-500",
      price: "20$-300$",
      animation: "fade-up"
    },
    {
      id: 3,
      image: Exploreing3,
      title: "African Safari",
      rating: "4.5",
      ratingClass: "bg-green-300",
      status: "Open Now",
      statusClass: "text-green-500",
      price: "20$-300$",
      animation: "fade-left"
    },
    {
      id: 4,
      image: Exploreing4,
      title: "American Tour",
      rating: "4.5",
      ratingClass: "bg-yellow-300",
      status: "Close Now",
      statusClass: "text-red-500",
      price: "20$-300$",
      animation: "fade-right"
    },
    {
      id: 5,
      image: Exploreing5,
      title: "Oceania Expedition",
      rating: "4.5",
      ratingClass: "bg-red-500",
      status: "Open Now",
      statusClass: "text-green-500",
      price: "20$-300$",
      animation: "fade-up"
    },
    {
      id: 6,
      image: Exploreing6,
      title: "Middle East Discovery",
      rating: "4.5",
      ratingClass: "bg-indigo-500",
      status: "Close Now",
      statusClass: "text-red-500",
      price: "20$-300$",
      animation: "fade-left"
    }
  ];

  return (
    <section className="py-10 md:py-20">
      <div id="explore" className="text-center mb-10 md:mb-16" data-aos="fade-down">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Explore</h3>
        <p className="text-gray-500 text-lg md:text-2xl mt-4">
          Explore amazing destinations our clients love
        </p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {exploreCards.map((card, index) => (
            <div 
              key={card.id} 
              className="space-y-4 shadow-md border p-5 rounded-lg bg-white hover:shadow-xl transition-all duration-300"
              data-aos={card.animation}
              data-aos-delay={index * 100}
            >
              <div className="overflow-hidden rounded">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover rounded transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl text-gray-700 font-semibold">{card.title}</h3>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className={`${card.ratingClass} text-white font-bold px-2 py-1 rounded`}>
                  {card.rating}
                </div>
                <p>10 Rating</p>
                <p>
                  From <b className="text-red-500">{card.price}</b>
                </p>
                <p>Restaurant</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 mt-4">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  alt="Reviewer"
                  className="rounded-full w-20 h-20 object-cover"
                />
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                  reprehenderit explicabo aliquid. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>
              </div>
              
              <div className="flex items-center gap-4 justify-between border-t border-gray-200">
                <p className={`${card.statusClass} pt-5`}>{card.status}</p>
                <div className="space-x-5 pt-5">
                  <i className="fas fa-map-marker-alt text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-300"></i>
                  <i className="fas fa-share-alt text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-300"></i>
                  <i className="fas fa-heart text-red-500 hover:text-red-600 cursor-pointer transition-colors duration-300"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      

    </section>
  );
}
import React, { useState, useEffect, useRef } from "react";
import counterImage from "../assets/counter-banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Counter() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
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

  const counters = [
    { id: 1, label: "Happy Clients", target: 500, icon: "fa-solid fa-users", animation: "fade-right" },
    { id: 2, label: "Projects Completed", target: 250, icon: "fa-solid fa-check-circle", animation: "fade-up" },
    { id: 3, label: "Awards Won", target: 100, icon: "fa-solid fa-trophy", animation: "fade-up" },
    { id: 4, label: "Years Experience", target: 15, icon: "fa-solid fa-calendar-alt", animation: "fade-left" }
  ];

  const [counterValues, setCounterValues] = useState(
    counters.reduce((acc, counter) => {
      acc[counter.id] = 0;
      return acc;
    }, {})
  );

  const countingStarted = useRef(false);
  
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countingStarted.current) {
          startCounting();
          countingStarted.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    counters.forEach((counter) => {
      const duration = 2000; 
      const steps = 50; 
      const increment = counter.target / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        
        setCounterValues((prev) => ({
          ...prev,
          [counter.id]: Math.min(Math.round(increment * currentStep), counter.target)
        }));

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);
    });
  };

  return (
    <div
      ref={counterRef}
      className="w-full relative my-10 md:my-20"
      style={{
        backgroundImage: `url(${counterImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "auto",
        minHeight: "250px",
      }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      ></div>
      
      <div className="relative py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {counters.map((counter) => (
              <div 
                key={counter.id} 
                className="text-center"
                data-aos={counter.animation}
                data-aos-delay={(counter.id - 1) * 100}
              >
                <div className="flex justify-center mb-3">
                  <i className={`${counter.icon} text-white text-2xl md:text-3xl`}></i>
                </div>
                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-2">
                  {counterValues[counter.id]}+
                </p>
                <h3 className="text-base md:text-xl text-white font-medium">
                  {counter.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/30 to-transparent"
        data-aos="fade-up"
        data-aos-delay="500"
      ></div>
    </div>
  );
}

export default Counter;
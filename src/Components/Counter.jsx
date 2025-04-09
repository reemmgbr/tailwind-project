import React, { useState, useEffect } from "react";
import counterImage from "../assets/counter-banner.jpg";

function Counter() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  // سرعة العد: زيادة العدد كل 50 ملي ثانية
  const incrementSpeed = 50;

  // الحد الأقصى للعدد الذي يجب أن يتوقف عنده
  const maxCount = 100;

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCounter1((prev) => {
        if (prev < maxCount) return prev + 1;
        clearInterval(interval1); // توقف بعد الوصول للعدد المحدد
        return prev;
      });
    }, incrementSpeed);

    const interval2 = setInterval(() => {
      setCounter2((prev) => {
        if (prev < maxCount) return prev + 1;
        clearInterval(interval2); // توقف بعد الوصول للعدد المحدد
        return prev;
      });
    }, incrementSpeed);

    const interval3 = setInterval(() => {
      setCounter3((prev) => {
        if (prev < maxCount) return prev + 1;
        clearInterval(interval3); // توقف بعد الوصول للعدد المحدد
        return prev;
      });
    }, incrementSpeed);

    const interval4 = setInterval(() => {
      setCounter4((prev) => {
        if (prev < maxCount) return prev + 1;
        clearInterval(interval4); // توقف بعد الوصول للعدد المحدد
        return prev;
      });
    }, incrementSpeed);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  return (
    <div
      className="w-full relative my-20"
      style={{
        backgroundImage: `url(${counterImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "300px",
      }}
    >
      {/* overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.575)",
        }}
      ></div>
      <div className="absolute inset-0 flex md:flex-nowrap flex-wrap justify-center items-center text-white space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-3">
        {/* Counter 1 */}
        <div className="text-center w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4">
          <p className="text-4xl">{counter1}</p>
          <h3 className="text-2xl font-semibold">Counter 1</h3>
        </div>
        {/* Counter 2 */}
        <div className="text-center w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4">
          <p className="text-4xl">{counter2}</p>
          <h3 className="text-2xl font-semibold">Counter 2</h3>
        </div>
        {/* Counter 3 */}
        <div className="text-center w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4">
          <p className="text-4xl">{counter3}</p>
          <h3 className="text-2xl font-semibold">Counter 3</h3>
        </div>
        {/* Counter 4 */}
        <div className="text-center w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4">
          <p className="text-4xl">{counter4}</p>
          <h3 className="text-2xl font-semibold">Counter 4</h3>
        </div>
      </div>
    </div>
  );
}

export default Counter;

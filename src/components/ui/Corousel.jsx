import React from "react";
import "flowbite"; // Import Flowbite CSS

const Carousel = () => {
  const staffData = [
    "/Rectangle 3.png",
    "/Rectangle 4.png",
    "/Rectangle 5.png",
    "/Rectangle 6.png",
    "/Rectangle 7.png",
  ];

  return (
    <section>
      <div className="h-full w-[85%] mx-auto sm:mx-0 sm:w-full">
        <div className="rounded-full bg-red-500 h-[90vh] w-[90%]">1</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {staffData.map((image, index) => (
            <div
              key={index}
              className="justify-center items-center hover:bg-slate-100 rounded-3xl p-2 flex hover:scale-105 ease-in duration-300 dark:bg-slate-800 flex-col"
            >
              <img
                className="h-48 w-96 md:h-full md:w-full"
                src={image}
                alt={`Image ${index + 5}`}
              />
            </div>
          ))}
        </div>
        <div className="rounded-full bg-red-500 h-[90vh] w-[90%]">1</div>
      </div>
      <h1>welcome gt</h1>
    </section>
  );
};

export default Carousel;

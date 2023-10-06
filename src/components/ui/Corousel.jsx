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
        <div className="rounded-[50%]  relative top-[76px] bg-white h-[117px] w-full flex-shrink-0" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {staffData.map((image, index) => (
            <div
              key={index}
              className="justify-center items-center hover:bg-slate-100 rounded-3xl p-2 flex  dark:bg-slate-800 flex-col"
            >
              <img
                className="h-48 w-96 md:h-full md:w-full"
                src={image}
                alt={`Image ${index + 5}`}
              />
            </div>
          ))}
        </div>
        <div className="rounded-[50%] relative -top-[76px] bg-white h-[117px] w-full flex-shrink-0" />
      </div>
    </section>
  );
};

export default Carousel;

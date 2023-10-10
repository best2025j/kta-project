import React, { useState } from "react";

const CarouselCard = () => {
  const staffData = [
    {
      image: "/Courses card for html.png",
    },
    {
      image: "/Courses card for html (1).png",
    },
    {
      image: "/Courses card for html (2).png",
    },
    {
      image: "/Courses card for html (3).png",
    },
  ];

  return (
    <div className="ml-32 py-32 space-y-[110px]">
      <div className="h-full w-full space-y-3">
        <h1 className="sm:text-5xl text-xl font-bold">Explore our courses</h1>
        <div className="max-w-[480px]">
          <p className="text-[#4F616D] text-base">
            At KTA, we offer a diverse range of tech courses that cater to
            beginners and experts alike. From web development to data science,
            our curriculum is designed to equip you with practical skills that
            matter in today's tech-driven world. Join us on this educational
            journey and unlock your potential.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-6 py-6">
        <div className="grid grid-col-1 md:grid-cols-2 gap-10 py-6">
          {staffData.map((item, index) => (
            <div className="" key={index}>
              <div className="flex">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;

import React, { useState } from "react";
import "animate.css";
import ButtonWhite from "../Buttons/ButtonWhite";
import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";

const CarouselCard = () => {
  const staffData = [
    {
      svg: "",
      thumbnail: "/Courses card for html.png",
      fullImage: "/frontendfull.png",
    },
    {
      thumbnail: "/Courses card for html (1).png",
      fullImage: "/backendfull.png",
    },
    {
      thumbnail: "/Courses card for html (2).png",
      fullImage: "/designfull.png",
    },
    {
      thumbnail: "/Courses card for html (3).png",
      fullImage: "/datasciencefull.png",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full h-full">
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

        <div className="flex justify-between gap-6 items-start py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-6">
            {staffData.map((item, index) => (
              <div
                className={`relative transform ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="image-container">
                  <img src={item.thumbnail} alt="" />
                </div>

                {hoveredIndex === index && (
                  <div className="absolute animate__animated animate__zoomIn delay-120 ease-in-out duration-100 inset-y-24 flex flex-grow justify-center items-center h-full w-[500px]">
                    <img
                      src={item.fullImage}
                      alt=""
                      className="h-[600px] w-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pr-6">
            <img src="/KTA.png" alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center relative">
        <ButtonWhite
          className={"absolute -top-28 flex items-center"}
          label={
            <>
              View all courses <ViewAllCourseIcon />
            </>
          }
        />
      </div>
    </div>
  );
};

export default CarouselCard;

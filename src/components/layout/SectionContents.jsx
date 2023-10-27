import React from "react";
import ButtonWhite from "../Buttons/ButtonWhite";
import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";
import { Link } from "react-router-dom";

const SectionContents = () => {
  return (
    <div className="bg-[#C6E7FF] w-full h-full flex justify-between items-center">
      <img src="/KTA. logo (1).png" alt="" />
      <div className="absolute left-0 right-0 space-y-4 text-center justify-center flex flex-col">
        <h1 className="text-5xl font-bold">Let’s start your tech journey</h1>
        <div className="py-6 flex items-center justify-center ">
          <Link to="/courses">
            {/* Use Link for navigation */}
            <ButtonWhite
              className={
                "flex items-center text-base text-center justify-center"
              }
              label={
                <>
                  View Courses <ViewAllCourseIcon />
                </>
              }
            />
          </Link>
        </div>
      </div>
      <img src="KTA.logo(2).png" alt="" />
    </div>
  );
};

export default SectionContents;

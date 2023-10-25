import React from "react";
import ButtonWhite from "../Buttons/ButtonWhite";
import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";

const SectionContents = () => {
  return (
    <div className="bg-[#C6E7FF] w-full h-full flex justify-between items-center">
      <img src="/KTA. logo (1).png" alt="" />
      <div className="absolute left-0 right-0 space-y-4 text-center justify-center flex flex-col">
        <h1 className="text-5xl font-bold">Let’s start your tech journey</h1>
        <div className="w-60 justify-center flex items-center mx-auto">
          <ButtonWhite
            className={" flex items-center "}
            label={
              <>
                View all courses <ViewAllCourseIcon />
              </>
            }
          />
        </div>
      </div>
      <img src="KTA. logo (2).png" alt="" />
    </div>
  );
};

export default SectionContents;

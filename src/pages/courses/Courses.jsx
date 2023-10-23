import React from "react";
import Footer from "../../components/layout/Footer";
import SectionContents from "../../components/layout/SectionContents";
import ButtonWhite from "../../components/Buttons/ButtonWhite";
import ContactIcon from "../../components/icons/ContactIcon";
import ViewAllCourseIcon from "../../components/icons/ViewAllCourseIcon";

const Courses = () => {
  const courseData = [
    {
      image: "webDev.png",
      course: "Web Development",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      name: "Duration",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },  {
      image: "webDev.png",
      course: "Web Development",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      name: "Duration",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },  {
      image: "webDev.png",
      course: "Web Development",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      name: "Duration",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },  {
      image: "webDev.png",
      course: "Web Development",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      name: "Duration",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },  {
      image: "webDev.png",
      course: "Web Development",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      name: "Duration",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },  {
      image: "webDev.png",
      course: "Web Development",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      name: "Duration",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },  {
      image: "webDev.png",
      course: "Web Development",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      name: "Duration",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },  {
      image: "webDev.png",
      course: "Web Development",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      name: "Duration",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },
  ];

  return (
    <>
      <div className="py-40">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold">Courses</h1>
          <p className="text-lg font-thin">
            Unlock Your Potential with Kwaratech Academy's Diverse Range of Tech
            Courses
          </p>
        </div>

        <div className="flex justify-around py-20 flex-col">
          <h1 className="text-8xl font-bold text-[#4F616D]">01</h1>
          {courseData.map((item, index) => (
            <div className="w-[931px] bg-white p-4 rounded-3xl">
              <img src={item.image} alt="" />

              <div className="flex p-4 items-center justify-between">
                <div className="w-[439px] space-y-4">
                  <h1 className="text-5xl font-bold">{item.course}</h1>
                  <p>{item.info}</p>
                </div>

                <div className="flex flex-col space-y-4">
                  <span className="font-bold">{item.captionName}</span>
                  <span>{item.durationPeriod}</span>
                </div>

                <div className="flex flex-col space-y-4">
                  <p className="font-bold">{item.Instructor}</p>
                  <span>{item.InstructorName}</span>
                </div>
              </div>

              <div className="py-6 flex items-center justify-center ">
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
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionContents />
      <Footer />
    </>
  );
};

export default Courses;

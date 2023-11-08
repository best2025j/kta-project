// import React from "react";
import Footer from "../../components/layout/Footer";
import SectionContents from "../../components/layout/SectionContents";
import ButtonWhite from "../../components/Buttons/ButtonWhite";
import ViewAllCourseIcon from "../../components/icons/ViewAllCourseIcon";
import { Link } from "react-router-dom";

const Courses = () => {
  const courseData = [
    {
      id: 1,
      name: "web-development",
      number: 1,
      image: "/webDev.png",
      course: "Web Development",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: 2,
      name: "design-animation",
      number: 2,
      image: "/Designs.png",
      course: "Design/ Animation",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Victor",
    },

    {
      id: 3,
      name: "ui-ux",
      number: 3,
      image: "/UI.png",
      course: "UI/UX Design",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2 months",
      Instructor: "Instructor",
      InstructorName: "Mr victor",
    },

    {
      id: 4,
      name: "data-analytics",
      number: 4,
      image: "/DataSciences.png",
      course: "Data & Analytics",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: 5,
      name: "cyber-security",
      number: 5,
      image: "/CyberSecuritys.png",
      course: "Cybersecurity",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: 6,
      name: "Virtual-Assistance-and-Remote-Jobs",
      number: 6,
      image: "/VirtualRemoteJob.png",
      course: "Virtual Assistance and Remote Jobs",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: 7,
      name: "DigitalMarketing",
      number: 7,
      image: "/DMarketting.png",
      course: "Digital Marketing",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },

    {
      id: 8,
      name: "ContentWriting",
      number: 8,
      image: "/CopyWritting.png",
      course: "Content Writing",
      info: "Explore the world of web development, from creating stunning front-end interfaces to building robust back-end systems and mobile applications.",
      captionName: "Duration",
      durationPeriod: "2-4 months",
      Instructor: "Instructor",
      InstructorName: "Mr Azeez",
    },
  ];

  return (
    <>
      <div className="py-40">
        <div className="space-y-3 px-6">
          <h1 className="text-5xl font-bold">Courses</h1>
          <p className="text-lg font-thin">
            Unlock Your Potential with Kwaratech Academy&apos;s Diverse Range of
            Tech Courses
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1">
          {courseData.map((item, index) => (
            <div
              className={`flex justify-around py-20 ${
                (index % 2 === 0 && "flex") ||
                (index % 2 !== 0 && "flex-row-reverse")
              }`}
              key={item.id}
            >
              <h1 className="text-8xl font-bold text-[#4F616D]">
                0{item.number}
              </h1>

              <div className="w-[931px] bg-white p-4 rounded-3xl">
                <img
                  src={item.image}
                  alt="NO IMAGE FOT THIS COURSE"
                  onError={() =>
                    console.error("Image failed to load for:", item.image)
                  }
                />

                <div className="flex p-4 pt-[40px] items-center justify-between">
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
                  {/* Use Link for navigation */}
                  <Link to={`/courses/${item.name}`}>
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

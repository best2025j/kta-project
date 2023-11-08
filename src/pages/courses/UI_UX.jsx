// import React from "react";
import { useParams } from "react-router-dom";
import SectionContents from "../../components/layout/SectionContents";
import Footer from "../../components/layout/Footer";
// import image from "../../assets/images/uifull.png";
// import ButtonWhite from "../Buttons/ButtonWhite";
// import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";

const UI_UX = () => {
  // Access the &apos;id&apos; parameter from the route
  const { name } = useParams();

  return (
    <div className="pt-40">
      <h1>Course Name: {name}</h1>
      <SectionContents />
      <Footer />
    </div>
  );
};

export default UI_UX;

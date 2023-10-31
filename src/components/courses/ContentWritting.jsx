// import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../layout/Footer";
import SectionContents from "../layout/SectionContents";

const ContentWritting = () => {
  const { name } = useParams();
  // Access the 'id' parameter from the route

  return (
    <div className="pt-40">
      <h1>Course Name: {name}</h1>
      <SectionContents />
      <Footer />
    </div>
  );
};

export default ContentWritting;

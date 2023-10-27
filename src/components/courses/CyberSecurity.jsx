import React from "react";
import { useParams } from "react-router-dom";
import SectionContents from "../layout/SectionContents";
import Footer from "../layout/Footer";

const CyberSecurity = () => {
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

export default CyberSecurity;

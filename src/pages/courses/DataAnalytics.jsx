// import React from "react";
import { useParams } from "react-router-dom";
import SectionContents from "../../components/layout/SectionContents";
import Footer from "../../components/layout/Footer";

const DataAnalytics = () => {
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

export default DataAnalytics;

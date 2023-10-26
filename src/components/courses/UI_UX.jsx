import React from "react";
import { useParams } from "react-router-dom";

const UI_UX = () => {
  const { name } = useParams();
  // Access the 'id' parameter from the route

  return (
    <div className="py-40">
      <h1>Course Name: {name}</h1>
    </div>
  );
};

export default UI_UX;

import React, { Children, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";

const Navigation = ({ children }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(location.pathname !== "/");
  }, [location]);

  return (
    <Header className={`p-4 ${isVisible ? "block" : "hidden"}`}>
      {children}
    </Header>
  );
};

export default Navigation;

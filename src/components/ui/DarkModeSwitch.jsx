import React, { useState } from "react";
import lightmode from "../../assets/svgs/Lightmode.svg";
import darkmode from "../../assets/svgs/Darkmode.svg";

const DarkModeSwitch = () => {
  const [themeToggle, setThemeToggle] = useState(
    localStorage.getItem("color-theme") || "dark"
  );

  const toggleTheme = () => {
    setThemeToggle((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      {themeToggle === "dark" ? (
        <img
          src={lightmode}
          alt="dark-mode"
          className="w-10 h-10 cursor-pointer"
          onClick={toggleTheme}
        />
      ) : (
        <img
          src={darkmode}
          alt="dark-mode"
          className="w-10 h-10 cursor-pointer"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;

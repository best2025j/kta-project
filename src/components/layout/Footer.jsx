import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import images from "../../assets/images/KTA. logo.png";
import ButtonWhite from "../Buttons/ButtonWhite";
import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";
import { FaFacebook } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/Bi";
import fb from "../../assets/svgs/facebooklogo.svg";
import ig from "../../assets/svgs/ig.svg";
import Twitter from "../../assets/svgs/Twitterlogo.svg";
import whatsapp from "../../assets/svgs/whatsapp.svg";

const Footer = () => {
  const [nav, setNav] = useState(false);
  // Function to handle menu icon click

  const handClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const location = useLocation();
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const inactiveLink = "hover:text-blue-500 active:text-blue-800 ";
  const activeLink = inactiveLink + " text-[#00AFF0]"; // Added 'active-link' class

  return (
    <div className="bg-[#001E2D] py-40 text-white">
      <div className="w-[90%] mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <img src={images} alt="" />
          </div>

          <div className="w-[456px]">
            <p className=" text-2xl">
              “Aim for the top with Kwara Tech Academy, empowering tech
              enthusiasts through education that is who we are and that is what
              we do!"
            </p>
            <div className="py-6">
              <ButtonWhite
                className={
                  "flex items-center text-base text-center justify-center"
                }
                label={
                  <>
                    Join KTA today <ViewAllCourseIcon />
                  </>
                }
              />
            </div>
          </div>
        </div>

        <div className="flex-col px-2 py-4 m-auto justify-between items-center sm:flex-row border-b flex text-center text-gray-500">
          <h3>We also write here at KTA check out our blogs.</h3>

          <div className="flex space-x-5 justify-end items-center sm:w-[360px] pt-4 text-2xl cursor-pointer">
            <Link href="https://instagram.com/kwaratechacademy?igshid=MzRlODBiNWFlZA==">
              <img
                alt="no image"
                className="cursor-pointer hover:scale-110 ease-in duration-300 rounded-full"
                width={30}
                height={30}
                src={ig}
              />
            </Link>
            <Link href="https://twitter.com/kwaratech?s=21&t=sYf7NFdQaYs03psUDuFqhQ">
              <img
                alt="no image"
                className="cursor-pointer hover:scale-110 ease-in duration-300 rounded-full"
                width={30}
                height={30}
                src={Twitter}
              />
            </Link>

            <Link href="https://wa.me/07011198112">
              <img
                alt="no image"
                className="cursor-pointer hover:scale-110 ease-in duration-300 rounded-full"
                width={30}
                height={30}
                src={whatsapp}
              />
            </Link>

            <Link href="https://www.facebook.com/kwaratechacademy?mibextid=LQQJ4d">
              <FaFacebook className="text-white bg-lightBlue h-8 rounded-full w-8 cursor-pointer hover:scale-110 ease-in duration-300 p-1" />
            </Link>

            <Link href="https://www.linkedin.com/in/kwara-tech-academy-a774a1244">
              <BiLogoLinkedin className=" text-white h-8 rounded w-8 cursor-pointer hover:scale-110 ease-in duration-300 p-[2px]" />
            </Link>
          </div>
        </div>

        <div className="flex justify-between">
          <h6>© 2023 KTA. All rights reserved.</h6>
          <ul className="flex space-x-8 text-sm">
            <li className={isActiveLink("/") ? activeLink : inactiveLink}>
              <NavLink exact="true" to="/">
                Home
              </NavLink>
            </li>
            <li
              className={isActiveLink("/courses") ? activeLink : inactiveLink}
            >
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li
              className={isActiveLink("/services") ? activeLink : inactiveLink}
            >
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className={isActiveLink("/about") ? activeLink : inactiveLink}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className={isActiveLink("/blog") ? activeLink : inactiveLink}>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

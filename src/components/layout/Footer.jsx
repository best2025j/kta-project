import React from "react";
import images from "../../assets/images/kwaraTech.png";
import ButtonWhite from "../Buttons/ButtonWhite";
import ViewAllCourseIcon from "../icons/ViewAllCourseIcon";

const Footer = () => {
  return (
    <div className="bg-[#001E2D] py-40">
      <div>
        <div>
          <img src={images} alt="" />
        </div>
        <div>
          <p>
            “Aim for the top with Kwara Tech Academy, empowering tech
            enthusiasts through education that is who we are and that is what we
            do!"
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
    </div>
  );
};

export default Footer;

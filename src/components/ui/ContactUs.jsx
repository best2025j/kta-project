import React from "react";
import ButtonWhite from "../Buttons/ButtonWhite";
import ContactIcon from "../icons/ContactIcon";

const ContactUs = () => {
  return (
    <div className="flex w-full h-full p-3 bg-red-500">
      <div className="flex-1">
        <img src="/Image for Contact Us.png" alt="image"className="rounded-[240px]"/>
      </div>

      <div className="flex-1 bg-[#001E2D] w-full h-full rounded-r-[240px]">
        <div className="text-[#fff] space-y-[16px]">
          <h1 className="text-6xl font-bold">Reach Out to Us</h1>
          <p className="w-[438px] text-lg font-normal">
            Got questions or need assistance? Our team is here to help. Feel
            free to reach out to us with your inquiries, feedback, or just to
            say hello. We're committed to providing you with the best learning
            and workspace experience possible.
          </p>
        </div>
        <div className="py-6 w-[438px]">
          <ButtonWhite
            className={
              "flex items-center w-full text-base text-center justify-center"
            }
            label={
              <>
                Contact Us <ContactIcon />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

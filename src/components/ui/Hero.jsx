import React from "react";

const Hero = () => {
  return (
    <div className="py-32 w-full h-full sm:px-[64px] px-[36px] flex flex-col justify-center text-center mx-auto items-center">
      <div className="md:max-w-[50rem] ">
        {/* <h1 className="bg-[#4F616D]">Kwaratech Academy</h1> */}
        <h1 className="font-bold md:text-6xl text-3xl">
          Your Journey to a <span className="text-[#00AFF0]">rewarding</span>
          tech career begins now !
        </h1>
      </div>
    </div>
  );
};

export default Hero;

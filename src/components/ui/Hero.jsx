import React from "react";

const Hero = () => {
  return (
    <div className="md:pt-60 py-24 md:py-0 w-full md:h-full h-[30rem] sm:px-[64px] px-[36px] flex flex-col justify-center text-center mx-auto items-center">
      <div className="md:max-w-[852px]  space-y-2">
        <h1 className="bg-[#4F616D] rounded-full text-white p-2 w-44 text-center mx-auto ">Kwaratech Academy</h1>
        <h1 className="font-bold md:text-6xl text-xl">
          Your Journey to a <span className="text-[#00AFF0] bg-white">rewarding</span>
           <br />tech career begins now !
        </h1>
      </div>
    </div>
  );
};

export default Hero;

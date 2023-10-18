import React from "react";

const Testimony = () => {
  return (
    <div className=" bg-[#fff] text-white h-full py-10 ">
      <div className="w-[80%] flex justify-center items-center flex-col mx-auto">
        <h1 className="text-black text-5xl font-bold">Testimonials</h1>
        <div className="flex justify-between items-center py-10 gap-10">
          <div className="bg-[#4F616D] rounded-[60px] h-full w-full p-10 space-y-3 text-justify">
            <img src="/semi.png" alt="" />
            <h1 className="text-lg">
              I started my tech journey with Kwaratech Academy's essential ICT
              training. The beginner-friendly approach made complex concepts
              easy to understand. I've gained skills that are not only helping
              me with my coursework but also opening doors for internships. KTA
              is the best place to kickstart a career in tech.
            </h1>
            <h5 className="flex justify-end py-4">Amina Yusuf</h5>
          </div>

          <div className="bg-[#4F616D]  rounded-[60px] h-full w-full p-10 space-y-3 text-justify">
            <img src="/semi.png" alt="" />
            <h1 className="text-lg">
              "I can't thank Kwaratech Academy enough for their top-notch tech
              courses. As a web developer, I needed to upskill in various areas,
              and KTA had the perfect courses for me. The hands-on experience
              and expert guidance were invaluable. I've not only improved my
              skills but also landed a new job in a top tech company. KTA is a
              game-changer!"
            </h1>
            <h5 className="flex justify-end py-4">Emmanuel Osai</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;

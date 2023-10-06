import React from "react";

const OutSponsors = () => {
  const staffData = [
    "/unescoUnited.png",
    "/kwaralLog.png",
    "/ntda.png",
    "/eFyg1QEJ 1.png",
    "/XqUYhl60 1.png",
  ];

  return (
    <section>
      <div className="h-full w-full justify-center mx-auto sm:mx-0 sm:w-full">
        <div className="flex w-full items-center justify-center">
          {staffData.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center hover:bg-slate-100 rounded-3xl p-2 sm:flex dark:bg-slate-800 h-full w-auto flex-col"
            >
              <img
                className="h-14 w-14 md:h-full md:w-full"
                src={image}
                alt={`Image ${index + 5}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="h-full w-full py-10 px-6 space-y-3">
        <h1 className="sm:text-5xl text-xl font-bold">Explore our courses</h1>
        <div className="max-w-[480px]">
          <p className="text-[#4F616D] text-base">
            At KTA, we offer a diverse range of tech courses that cater to
            beginners and experts alike. From web development to data science,
            our curriculum is designed to equip you with practical skills that
            matter in today's tech-driven world. Join us on this educational
            journey and unlock your potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OutSponsors;

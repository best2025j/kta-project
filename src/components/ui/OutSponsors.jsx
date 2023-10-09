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

   
    </section>
  );
};

export default OutSponsors;

// import React from "react";

const Testimony = () => {
  return (
    <div className=" bg-[#fff] text-white h-full py-10 ">
      <div className="w-[80%] flex justify-center items-center flex-col mx-auto">
        <h1 className="text-black text-3xl  md:text-5xl font-bold">
          Testimonials
        </h1>
        <div className=" md:flex space-y-4 justify-between items-center py-10 gap-10">
          <div className="bg-[#4F616D] rounded-[60px] h-full w-full p-10 space-y-3 text-justify">
            <img src="/semi.png" alt="" />
            <h1 className="md:text-lg text-sm">
              I started my tech journey with Kwaratech Academy&apos;s essential
              ICT training. The beginner-friendly approach made complex concepts
              easy to understand. I&apos;ve gained skills that are not only
              helping me with my coursework but also opening doors for
              internships. KTA is the best place to kickstart a career in tech.
            </h1>
            <h5 className="flex justify-end py-4">Amina Yusuf</h5>
          </div>

          <div className="bg-[#4F616D]  rounded-[60px] h-full w-full p-10 self-stretch space-y-3 text-justify">
            <img src="/semi.png" alt="" />
            <h1 className="md:text-lg text-sm">
              &quot;I can&apos;t thank Kwaratech Academy enough for their
              top-notch tech courses.
            </h1>
            <h5 className="flex justify-end py-4">Emmanuel Osai</h5>
          </div>
        </div>
      </div>

      {/*  */}

      <div
        id="indicators-carousel"
        className="relative w-full bg-black text-slate-400"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <h1 className="md:text-lg text-sm">
              &quot;I can&apos;t thank Kwaratech Academy enough for their
              top-notch tech courses.
            </h1>
          </div>
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <h1 className="md:text-lg text-sm">
              &quot;I can&apos;t thank Kwaratech Academy enough for their
              top-notch tech courses.
            </h1>
          </div>
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <h1 className="md:text-lg text-sm">
              &quot;I can&apos;t thank Kwaratech Academy enough for their
              top-notch tech courses.
            </h1>
          </div>
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <h1 className="md:text-lg text-sm">
              &quot;I can&apos;t thank Kwaratech Academy enough for their
              top-notch tech courses.
            </h1>
          </div>
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <h1 className="md:text-lg text-sm">
              &quot;I can&apos;t thank Kwaratech Academy enough for their
              top-notch tech courses.
            </h1>
          </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Testimony;

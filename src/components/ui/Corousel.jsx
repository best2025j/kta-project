import React, { useState } from "react";
import "flowbite"; // Import Flowbite CSS

const Carousel = () => {
  const staffData = [
    "/Rectangle 3.png",
    "/Rectangle 4.png",
    "/Rectangle 5.png",
    "/Rectangle 6.png",
    "/Rectangle 7.png",
  ];

  return (
    <section>
      <div className="h-full w-[85%] mx-auto sm:mx-0 sm:w-full">
        <div className="md:rounded-[50%] relative top-[76px] bg-white md:h-[117px] w-full flex-shrink-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {staffData.map((image, index) => (
            <div
              key={index}
              className="justify-center hidden  items-center hover:bg-slate-100 rounded-3xl p-2 sm:flex  dark:bg-slate-800 flex-col"
            >
              <img
                className="h-48 w-96 md:h-full md:w-full"
                src={image}
                alt={`Image ${index + 5}`}
              />
            </div>
          ))}
        </div>

        <div className="md:rounded-[50%] relative -top-[76px] bg-white md:h-[117px] w-full flex-shrink-0" />
      </div>
    </section>
  );
};

export default Carousel;

// import React, { useState } from "react";
// import "tailwindcss/tailwind.css"; // Import Tailwind CSS

// const Carousel = () => {
//   const staffData = [
//     "/Rectangle 3.png",
//     "/Rectangle 4.png",
//     "/Rectangle 5.png",
//     "/Rectangle 6.png",
//     "/Rectangle 7.png",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === staffData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? staffData.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <section>
//       <div className="flex items-center justify-center h-full">
//         <div className="carousel-container relative overflow-hidden w-full">
//           <div
//             className="carousel-wrapper flex transition-transform duration-300 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {staffData.map((image, index) => (
//               <div
//                 key={index}
//                 className="carousel-slide p-2 rounded-3xl flex items-center justify-center hover:bg-gray-100 dark:bg-gray-800"
//               >
//                 <img
//                   className="h-48 w-96 md:h-full md:w-full"
//                   src={image}
//                   alt={`Image ${index + 1}`}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           className="carousel-control prev"
//           onClick={handlePrevSlide}
//           aria-label="Previous"
//         >
//           &laquo;
//         </button>
//         <button
//           className="carousel-control next"
//           onClick={handleNextSlide}
//           aria-label="Next"
//         >
//           &raquo;
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Carousel;

import React from "react";
import BooksStack from "../../assets/website/library.jpg";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div data-aos="slide-up" className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div>
                <img
                  src={BooksStack}
                  alt="my img"
                  className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  eLibrary for the little ones
                </h1>
                <p className="text-sm text-white-500 tracking-wide leading-5">
                "Once Upon a Time Starts Here: For the Readers of Tomorrow!"
                <p>
                  Every story opens a door to a world of imagination, learning, and endless possibilities. Encouraging your child to read is more than just a pastime—it’s the foundation for a lifetime of curiosity and growth. Through books, young minds discover new adventures, build empathy, and develop skills that will shape their future. Let their journey begin today with stories that captivate, inspire, and spark a love for learning. After all, every great adventure starts with a single page!
                </p>
                  <br />
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                    <p>Free eBook Downloads</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                    <p>Fast Delivery</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                    <p>Easy Payment Method</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                    <p>Reading Marathons</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

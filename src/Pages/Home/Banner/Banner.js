import React from "react";
import bannerImg from "../../../assets/banner/banner.jpg";

function Banner() {
  return (
    <div className="flex justify-end items-center">
      <img className="object-cover brightness-50  w-full h-56 lg:h-[450px]" src={bannerImg} alt="background" />
      <div className="mr-4 flex xl:px-20 justify-start items-start flex-col absolute">
        <h1 className="text-xl xl:text-4xl font-semibold leading-5 text-white">Welcome to Food Fly</h1>
        <p className="w-44 sm:w-64 lg:w-2/3 mt-4 text-base leading-6 xl:leading-5 text-white">
          I am providing the fastest food delivery service in the town. Taking your food to your doorstep.
        </p>
      </div>
    </div>
  );
}

export default Banner;

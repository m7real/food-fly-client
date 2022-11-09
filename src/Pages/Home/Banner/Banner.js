import React from "react";
import bannerImg from "../../../assets/banner/banner.jpg";

function Banner() {
  return (
    <div className="flex justify-end items-center ">
      <img className=" object-cover brightness-50  w-full h-56 lg:h-96" src={bannerImg} alt="background" />
      <div className=" flex xl:px-20 justify-start items-start flex-col absolute">
        <h1 className="text0-xl xl:text-2xl font-medium leading-5 xl:leading-normal text-white">Home Made Healthy Food</h1>
        <p className="w-44 sm:w-64 lg:w-2/3 mt-4 text-base leading-6 xl:leading-5 text-white">Best cloud kitchen of the Town</p>
        <button className="mt-5 xl:mt-6 hover:underline underline-offset-4 transition duration-300 ease-in-out flex justify-start items-center space-x-2">
          <p className="text-base font-medium leading-none pb-0.5 text-white">Shop Sale</p>
        </button>
      </div>
    </div>
  );
}

export default Banner;

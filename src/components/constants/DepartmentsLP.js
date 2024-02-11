import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const DepartmentsLP = ({ dlp }) => {
  return (
    <div>
      <div className=" flex  text-primary-foreground bg-gray-700">
        <p className="mx-3 py-3">
          <span className="  text-orange-300 font-bold">Notice : </span>
          {dlp.notice}
        </p>
      </div>

      <div className="relative">
        <Image
          src={dlp.img}
          quality={100}
          width={800}
          height={600}
          className=" opacity-90  w-screen h-screen"
          alt="Background image"
        />

        <div className="absolute top-0 left-0 w-full h-full  mt-4 max-w-screen max-h-screen  justify-center  p-5">
          <div className="grid lg:grid-cols-2 mx-10 lg:pt-[150px] md:pt-[100px] pt-2 py-9 sm:gap-2  gap-3 lg:gap-6 sm:grid-cols-1 grid-cols-1 md:grid-cols-2 justify-between  lg:text-left text-center  md:text-left">
            <div className="mt-1 mb-1">
              <p className="text-xl lg:text-xl md:text-xl text-white">
                Department of
              </p>
              <h1 className="lg:text-5xl text-3xl md:text-4xl text-white font-bold ">
                Computer Technology
              </h1>
              <p className="text-[17px] pb-3 lg:xl md:xl text-white">
                Fast Refresh had to perform a full reload due to a runtime
                error. Refresh had to perform a full reload due to a runtime
                error. ✓ Compiled /not-found in 737ms
              </p>
              <Button size="lg" variant="sumedh">
                Know More
              </Button>
            </div>
            <div className="lg:mx-[200px] mx-6 sm:mx-6 md:mx-11 pb-">
              <div className=" p-4 text-white text-center bg-gray-800 rounded-sm   opacity-70  items-center ">
                <h2>Current Event</h2>
                <p>{} An International Technical Fest</p>
                <h2>COMPUFEST2K24</h2>
                <p className="underline hover:text-gray-400">
                  <a href="#register">Register Now</a>
                </p>
              </div>
            </div>
          </div>
           <div className="lg:px-[200px] md:px[130px] py-3 px-5">
          <div className=" grid grid-cols-2 mt-11 lg:grid-cols-4 md:grid-cols-2 px-2  gap-2  justify-center bg-gray-800 opacity-70 ">

            <div className="text-center p-5">
                <h1 className="text-cyan-500 lg:text-3xl text-2xl font-bold ">134th</h1>
                <h3 className="flex flex-wrap  text-white text-md">All india ranked by NIRF,MHRD,Gov of India</h3>
            </div>
            <div className="text-center p-5">
                <h1 className="text-cyan-500 lg:text-3xl font-bold ">134th</h1>
                <h3 className="flex flex-wrap text-white text-md">All india ranked by NIRF,MHRD,Gov of India</h3>
            </div>
            <div className="text-center p-5">
                <h1 className="text-cyan-500 text-3xl font-bold ">134th</h1>
                <h3 className="flex flex-wrap text-white text-md">All india ranked by NIRF,MHRD,Gov of India</h3>
            </div>
            <div className="text-center p-5">
                <h1 className="text-cyan-500 text-3xl font-bold ">134th</h1>
                <h3 className="flex flex-wrap text-white text-md">All india ranked by NIRF,MHRD,Gov of India</h3>
            </div>
           
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsLP;

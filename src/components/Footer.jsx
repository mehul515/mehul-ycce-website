"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="w-screen bg-gray-800 text-white p-4 md:flex md:justify-between">
        <div className="  mx-auto py-14 px-6">
          <h1 className="text-2xl  text-center pb-4 lg:text-left md:text-left hidden lg:block ">Department</h1>
          <h1 className="sm:hidden text-3xl">YCCE</h1>
          <div className="grid  md:grid-cols-3   lg:grid-cols-4 sm:grid-cols-1 gap-7 ">
            <div className="flex-wrap hidden lg:block text-center md:text-left mb-2 md:mb-0">
              <p>Computer technology </p>
              <p>Electrical Engineering </p>
              <p>Civil Engineering </p>
              <p>Computer Science Engineering </p>
            </div>
            <div className="flex-wrap hidden lg:block text-center md:text-left mb-2 md:mb-0">
              <p>Computer Science & Design </p>
              <p> Mechanical Engineering </p>
              <p>Electronics Engineering </p>
              <p>Information Technology </p>
            </div>
            <div className=" flex-wrap hidden lg:block text-center md:text-left mb-2 md:mb-0">
              <p>Artificial Intelligence And Data Science </p>
              <p>CSE(Artificial Intelligence & Machine Learning) </p>
              <p>Electronics and Telecommunication </p>
              <p>Computer Science Engineering(IOT)</p>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap justify-between mt-6">
              <div>
                
                <div className="text-center  hidden lg:block md:text-left mb-2 md:mb-0">
                  <div className="flex">
                  <Image
                    src="/ycccelog.png"
                    width={50}
                    height={40}
                    alt="meghe group"
                  />
                  <h1 className="mt-2 text-4xl font-bold">YCCE</h1>
                  </div>
                  <p className="text-[7px]">Yeshwantrao Chavan College of Engineering</p>
                  
                </div>
              </div>
              <div className="hidden lg:block ">
                <Image
                  src="/meghegrp.png"
                  width={101}
                  height={91}
                  style={{ filter: "invert(1)" }}
                  placeholder="empty"
                  priority={false}
                  alt="meghe group"
                />
              </div>
            </div>
            <div className="mt-6 ">
              
              <div className="flex flex-wrap  justify-between  gap-7">
                <div className="sm:text-sm text-[12px]">
                <h1 className="text-xl sm:text-[20px] pb-3" >LOCATION</h1>
                  <p className="sm:text-sm text-[10px]">
                    {" "}

                    Yeshwantrao Chavan College of Engineering Hingna Road,
                    Wanadongri, Nagpur, Maharashtra 441110
                  </p>
                  <p>State:Maharastra</p>
                  <p>Country:India</p>
                </div>

                <div className="text-sm  ">
                  <h2 className="text-xl sm:text-[20px] underline hover:text-gray-400  pb-3"><a href="#contact">CALL US ON</a></h2>
                  <p className="sm:text-sm pb-3 text-[12px]">PHONE:+91-7104-295083,295085 PHONE(PRINCIPAL OFFICE)</p>
                </div>
              </div>

            </div>
            <div className="text-center sm:hidden text-[10px] py-3 border-t border-gray-300">
    &copy; {new Date().getFullYear()} YCCE. All rights reserved.
  </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeaderMenu } from "@/components/ui/HeaderMenu";
const logo = require("../../public/ycce_logo.png");

export default function Home() {
  return (
    <>
      <main className="bg-[#242E3B]">
        <div className="flex flex-row justify-between">
          <div>
            <p className='text-[10px] ml-5 my-1 text-white'><span className='text-[#F6A61D]'>APPLY NOW</span> for CUCET - 2024</p>
          </div>
          <div className="text-white mr-40">
            <span className="text-[10px] border-l px-1 cursor-pointer">INTERNATIONAL</span>
            <span className="text-[10px] border-l px-1 cursor-pointer">LIBRARY</span>
            <span className="text-[10px] border-l px-1 cursor-pointer">STUDENT SERVICES</span>
            <span className="text-[10px] border-l px-1 cursor-pointer">CAREER</span>
            <span className="text-[10px] border-l px-1 cursor-pointer">ALUMNI</span>
            <span className="text-[10px] border-l border-r px-1 cursor-pointer">CONTACT US</span>
          </div>
        </div>
        <div className="flex flex-row justify-between mx-5">
          <div name="logo" className='cursor-pointer'>
            <div className="flex flex-row">
              <Image src={logo} alt="YCCE logo" width={40} height={40} />
              <p className="text-5xl text-white font-semibold font-serif mx-3">
                YCCE
              </p>
            </div>
            <p className=" text-white text-[9px] my-[-10px] mb-1">
              Yeshwantrao Chavan College of Engineering
            </p>
          </div>
          <div className="flex flex-row">
            <HeaderMenu />
            <div className="bg-slate-500 p-2 text-center rounded-md mb-2 mx-3 mt-3">
              <p className="text-xs text-white font-semibold">
                Admission Helpline
              </p>
              <p className="text-xs text-white">07104-236031/32/33</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

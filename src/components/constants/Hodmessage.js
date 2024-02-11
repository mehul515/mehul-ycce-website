import React from "react";
import Image from "next/image";



const Hodmessage = ({hod}) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 max-w-full md:grid-cols-3 grid-cols-1 justify-between  bg-gray-800 lg:px-[50px] px-7 pt-8  ">
        
        <div className=" col-span-1 items-center lg:items-left">
          <div className="flex justify-center">
            <Image
              src={hod.img}
              width={200}
              height={200}
              
              className=" rounded-full"
              alt="CT HOD"
              
            />
            
          </div>
          <div className="text-center">
          <div className="text-center mt-3  ">
            <h1 className="text-white text-xl lg:text-2xl font-bold">
              {hod.name}
            </h1>

            <p className="text-white lg:mt-2 text-[15px] md:text-[17px] lg:text-[19px]">
             {hod.designation}
            </p>
          </div>
          </div>
        </div>
        <div className="col-span-2 p-4">
        <h1 className="text-cyan-400 lg:text-left text-center pt-3  text-2xl">HOD Message</h1>
        <p className="  flex flex-wrap text-white lg:text-left  text-lg">{hod.message} </p>
       
       </div>
      </div>
    
    </div>
  );
};

export default Hodmessage;

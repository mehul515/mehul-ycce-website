import React from "react";
import Image from "next/image";
const groupImg = require("../../public/meghe-group.jpeg");

function AboutMegheGroup() {
  return (
    <div className="bg-[#F2FBFE] border-2 border-black w-full flex flex-col-reverse justify-center items-center pb-20 md:py-36 px-5 sm:px-20 lg:px-44 lg:flex-row">
      <div className="basis-3/4">
        <h1 className="text-[#3092DD] font-poppins text-3xl lg:text-4xl font-semibold my-5 text-center lg:text-left">
          About Meghe Group
        </h1>
        <h3 className="font-poppins font-semibold text-sm sm:text-base lg:text-lg mb-5 text-center lg:text-left">
          We believe… Success is a journey… Collectively achieved
        </h3>

        <p className="font-poppins font-normal text-xs md:text-base text-center lg:text-left">
          Rooted in our founding and enduring principles, our mission is fueled
          by an unwavering dedication to biblical truth and boundless love. We
          value unwavering convictions and open-minded dialogue. Wheaton is
          truly unique: a liberal arts ethos, rigorous academics, an aspiration
          to excellence, and a deep commitment to Christian spiritual formation,
          this is the place where you can learn and grow with a community of
          spiritual and intellectual peers.
        </p>
      </div>
      <div className="basis-1/4 m-0 lg:ml-20 flex justify-center lg:justify-end relative">
        <Image
          src={groupImg}
          alt="Meghe Group LOGO"
          width={200}
          height={200}
          className="shadow-xl rounded-3xl md:rounded-none md:shadow-none z-10 relative mt-[-100px] md:m-0"
        />
      </div>
    </div>
  );
}

export default AboutMegheGroup;

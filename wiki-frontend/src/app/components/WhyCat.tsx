import { Cats1, Cats2, Cats3 } from "@/constants/icons";
import Image from "next/image";
import React from "react";

const WhyCat = () => {
  return (
    <div className="w-full bg-primary flex ">
      <div className="content w-1/2 flex flex-col justify-center items-start">
        <span className="block relative h-[3px] w-[60px] bg-[#4D270C] rounded-[77px]" />
        <h1 className="text-[48px] font-[700] text-primary mt-2">
          Why should you have a cat?
        </h1>
        <p className="text mt-10">
        Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
        </p>
        <button className="mt-12">
            Read More
        </button>
      </div>
      <div className="img flex gap-7 w-1/2">
        <div className="right flex flex-col items-end gap-7">
          <Image src={Cats2} alt="" className="" />
          <Image src={Cats1} alt="" className="" />
        </div>
        <div className="left">
          <Image src={Cats3} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default WhyCat;

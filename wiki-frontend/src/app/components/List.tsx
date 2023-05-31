import { Cats1 } from "@/constants/icons";
import Image from "next/image";
import React from "react";

const List = () => {
  return (
    <>
      <div className="flex w-full justify-between items-end">
        <h1 className="text-[48px] font-[700] text-primary mt-8">
          66+ Breeds For you to discover
        </h1>
        <button className=" ">Show More</button>
      </div>
      <div className="wrraper w-full mt-12 flex flex-wrap gap-8 justify-evenly ">
        {[...Array(5)].map((item, index) => (
          <div className="rounded-[24px] relative cursor-pointer hover:scale-[1.02]">
            <Image
              src={Cats1}
              alt={""}
              className="rounded-[24px] border-none  h-[220px] w-[220px] relative z-[2]"
            />
            <div className={` ${index===0 ? 'block' : 'hidden'} h-[175px] w-[48px] bg-[#DEC68B] absolute z-[1] rounded-[14px] top-[10%] left-[-15px]`} />
            <p className="text-[18px] font-[600] text-primary mt-5">{"Cat"}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;

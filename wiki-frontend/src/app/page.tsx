import { Cat, HeroImage, Logo } from "@/constants/icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <header>
        <Image src={Logo} width={128} height={43} alt="logo" />
      </header>
      <div className="main rounded-main">
        <div className="hero relative p-5 flex justify-start">
          <Image
            src={HeroImage}
            alt="hero-image"
            className="rounded-t-main md:absolute relative z-[-1] top-0 left-0"
          />
          <div className="description w-1/2 justify-start mt-auto  md:mt-[115px] md:ml-[100px] pr-5">
            <div className="icon flex flex-col items-start justify-start m-0">
              <div className="icon flex items-center justify-center m-0">
                <span className="text-[#ffffff] Mystery text-[64px]">
                  Catwiki
                </span>
                <Image
                  src={Cat}
                  alt="cat"
                  height={65}
                  width={80}
                  className="ml-2"
                />
              </div>
              <p className="text-[24px] font-[500] text-white m-3 pr-5">Get to know more about your cat breed</p>
              <input type="text" className="bg-primary rounded-[59px] h-[70px] w-full p-5 mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

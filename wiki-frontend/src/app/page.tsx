import { Cat, HeroImage, Logo } from "@/constants/icons";
import Image from "next/image";
import List from "./components/List";
import WhyCat from "./components/WhyCat";

export default function Home() {
  return (
    <div className="p-5 pb-0 bg-primary">
      <header>
        <Image src={Logo} width={128} height={43} alt="logo" />
      </header>
      <div className="main rounded-main w-full">
        <div className="hero w-full min-h-[540px] p-5 flex flex-1 rounded-t-main pb-1">
          {/* <Image
            src={HeroImage}
            alt="hero-image"
            className="rounded-t-main absolute z-[-1] top-0 left-0 max-h-[540px]"
          /> */}
          <div className="description w-1/2 h-[540px] flex justify-end items-center pr-5 mb-5">
            <div className="icon flex flex-col items-start justify-end ml-auto">
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
              <input type="text" className="bg-primary rounded-[59px] h-[70px] w-[92px] md:w-[390px] p-5 mt-3" />
            </div>
          </div>
        </div>
        <div className="recent bg-secondary w-full flex flex-col rounded-b-main p-24">
          <p className="tag text-primary font-[500] text-[18px]">
            Most Searched Breeds
            <span className="block relative h-[3px] w-[60px] bg-[#4D270C] rounded-[77px] mt-2"></span>
          </p>
          <List />
        </div>
        <div className="p-24">
          <WhyCat/>
        </div>
      </div>
      <footer className="w-full px-9">
        <div className="footer rounded-t-main bg-black flex pt-9 pb-5 justify-between px-7">
        <div className="icon flex items-center justify-center m-0">
                <span className="text-[#ffffff] Mystery text-[24px] font-[400]">
                  Catwiki
                </span>
                <Image
                  src={Cat}
                  alt="cat"
                  height={34}
                  width={42}
                  className="ml-2"
                />
              </div>
              <div className="trad text-[18px] font-[700] text-white">
              ©{"  "} created by Pushpendra - devChallenge.io 2021
              </div>
        </div>

      </footer>
    </div>
  );
}

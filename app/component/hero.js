import React from "react";
import Image from "next/image";
import hero from "../asset/hero.png";
import sol from "../asset/sol.png";
import dex from "../asset/dex.png";
import sync from "../asset/sync.png";
import base from "../asset/base.png";
import x from "../asset/x.png";
import xx from "../asset/xx.png";
import uni from "../asset/uni.png";
export default function Hero() {
  return (
    <div className="pt-8">
      <div className="flex justify-between gap-20 px-6 ">
        <div className="w-1/2">
          {" "}
          <Image className="" src={hero} alt="" width={460} height={460} />{" "}
        </div>
        <div className="text-center flex flex-col justify-center items-center  w-1/2">
          <div className="flex gap-4 justify-center">
            <a href="https://x.com/base_nakamoto">
              {" "}
              <Image className="" src={x} alt="" width={18} height={18} />
            </a>

            <a href="">
              {" "}
              <Image className="" src={uni} alt="" width={18} height={18} />
            </a>
            <a href="">
              {" "}
              <Image className="" src={dex} alt="" width={19} height={19} />
            </a>
          </div>
          <h1 className="pt-2 text-2xl font-bold text-[#FF914D] md:text-4xl ">
            $BITCOIN
          </h1>
          <h2 className=" text-lg font-bold md:text-4xl ">DAD OF BITCOIN</h2>{" "}
          <p className="text-xs md:text-base">
            $BITCOIN is a memecoin with a big mission: celebrate Satoshi and his
            invention, Bitcoin, in the day of the halving.
          </p>
          <div className="flex justify-center ">
            <Image className="" src={base} alt="" width={100} height={100} />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

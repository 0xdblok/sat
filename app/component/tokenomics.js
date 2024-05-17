import React from "react";
import Image from "next/image";
import token from "../asset/token.png";
import supply from "../asset/supply.png";
import add from "../asset/add.png";
import addd from "../asset/addd.png";
import ad from "../asset/ad.png";
export default function Tokenomics() {
  return (
    <div className="pb-8">
      <h1 className="text-center text-2xl  font-bold pt-8 md:text-4xl ">
        TOKENOMICS
      </h1>{" "}
      <div className="flex justify-between px-6 gap-8  ">
        <div className="w-1/2">
          {" "}
          <Image
            className="w-full"
            src={token}
            alt=""
            width={460}
            height={460}
          />{" "}
        </div>
        <div className="text-center flex flex-col justify-center items-center w-1/2 ">
          <p className=" text-xs font-semibold md:text-base">total supply</p>
          <div>
            {" "}
            <Image
              className=""
              src={supply}
              alt=""
              width={460}
              height={460}
            />{" "}
          </div>
          <p className="pt-8 md:text-base md:pt-16 text-xs font-semibold">
            contract address
          </p>
          <div className="p-10 px-10 bg-[#FA813C] border-4 border-black rounded-xl">
            <p className=" text-lg font-bold">
              0x255a08E741B6eF5502129e4dB1a30fFDBC2B90D7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

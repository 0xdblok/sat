import React from "react";
import Image from "next/image";
import token from "../asset/token.png";
import supply from "../asset/supply.png";
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
          <div className="px-4 border-2 border-black py-6 bg-[#FF914D] container mx-auto">
            {" "}
            <p className="md:text-base text-xs text-center  break-words px-12 md:px-0">
              0xDc49590964ba35e559d5eB129F53c53e2ac7E558
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

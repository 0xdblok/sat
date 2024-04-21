import React from "react";
import Image from "next/image";
import token from "../asset/token.png";
export default function Tokenomics() {
  return (
    <div>
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
              src="https://fatherofbitcoin.xyz/images/6cb80af631df3dc86e73955762785521.svg"
              alt=""
              width={460}
              height={460}
            />{" "}
          </div>
          <p className="pt-8 md:text-base md:pt-16 text-xs font-semibold">
            contract address
          </p>
          <div>
            {" "}
            <a>
              {" "}
              <Image
                className=""
                src="https://fatherofbitcoin.xyz/images/6cb80af631df3dc86e73955762785521.svg"
                alt=""
                width={460}
                height={460}
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

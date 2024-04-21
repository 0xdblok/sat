import React from "react";
import Image from "next/image";
import matrix from "../asset/matrix.png";
export default function Matrix() {
  return (
    <div className="pt-16">
      <div className="flex h-full justify-between gap-6 px-6 ">
        <div className="text-center w-1/2 ">
          <h1 className="pt-2 text-2xl  md:text-4xl font-bold">
            ESCAPE THE <span className="text-[#FF914D]">MATRIX</span>
          </h1>

          <p className="text-xs md:text-base">
            $BITCOIN started a battle for everyone who believes in freedom from
            the matrix.
          </p>
          <div className="flex justify-center pt-4">
            <a
              href="https://app.uniswap.org/swap?outputCurrency=0xDc49590964ba35e559d5eB129F53c53e2ac7E558&chain=base"
              className="px-3 md:text-base text-xs py-2 font-semibold bg-black rounded-2xl text-white">
              {" "}
              BUY $BITCOIN
            </a>
          </div>
        </div>{" "}
        <div className="w-1/2">
          {" "}
          <Image
            className=""
            src={matrix}
            alt=""
            width={460}
            height={460}
          />{" "}
        </div>
      </div>
    </div>
  );
}

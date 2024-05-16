import React from "react";
import Image from "next/image";
import all from "../asset/all.png";
export default function All() {
  return (
    <div>
      {" "}
      <div className="flex justify-between px-6 ">
        <div className="w-1/2">
          {" "}
          <Image className="" src={all} alt="" width={460} height={460} />{" "}
        </div>
        <div className="text-center w-1/2 flex flex-col justify-center items-center">
          <h1 className="pt-2 text-2xl font-bold md:text-4xl ">
            $WE ARE ALL $<span className="text-[#FF914D]">BITCOIN</span>
          </h1>
          <p className="text-xs md:text-base">
            We're Seizing Power, Charting the Exodus to Financial Freedom. for
            the people, by the people.
          </p>
          <div className="flex pt-2 justify-center">
            <a
              href="https://dexscreener.com/zksync/0x2ee93371081a1e3b3156bee13ae98f00bae1b8bb"
              className="px-3 text-xs md:text-base py-2 font-semibold bg-[#FF914D] rounded-2xl text-white">
              {" "}
              CHART
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

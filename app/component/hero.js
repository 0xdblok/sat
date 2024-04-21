import React from "react";
import Image from "next/image";
import hero from "../asset/hero.png";
import sol from "../asset/sol.png";
import dex from "../asset/dex.png";
export default function Hero() {
  return (
    <div>
      <div className="flex justify-between gap-20 px-6 ">
        <div className="w-1/2">
          {" "}
          <Image className="" src={hero} alt="" width={460} height={460} />{" "}
        </div>
        <div className="text-center flex flex-col justify-center items-center  w-1/2">
          <div className="flex gap-4 justify-center">
            <a href="">
              {" "}
              <Image
                className=""
                src="https://fatherofbitcoin.xyz/images/13e466c6f162b9abfc3152e736a27f2e.svg"
                alt=""
                width={16}
                height={16}
              />
            </a>
            <a href="">
              {" "}
              <Image
                className=""
                src="https://fatherofbitcoin.xyz/images/d16ed99d2ab1743d89aaf5fbf6bec303.svg"
                alt=""
                width={16}
                height={16}
              />
            </a>
            <a>
              {" "}
              <Image
                className=""
                src="https://fatherofbitcoin.xyz/images/c39a291ab3f71adbe7daf4fcb4e93347.svg"
                alt=""
                width={16}
                height={16}
              />
            </a>
            <a>
              {" "}
              <Image className="" src={dex} alt="" width={18} height={18} />
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
            <Image className="" src={sol} alt="" width={80} height={80} />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

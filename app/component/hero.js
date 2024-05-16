import React from "react";
import Image from "next/image";
import hero from "../asset/hero.png";
import sol from "../asset/sol.png";
import dex from "../asset/dex.png";
import sync from "../asset/sync.png";
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
            <a href="https://x.com/zknakamoto/">
              {" "}
              <Image className="" src="" alt="" width={16} height={16} />
            </a>
            <a href="">
              {" "}
              <Image className="" src="" alt="" width={16} height={16} />
            </a>
            <a href="https://syncswap.xyz/swap?inputCurrency=0x48D94d605532625D05266349CEe4d707596E03ED&outputCurrency=0x5aea5775959fbc2557cc8789bc1bf90a239d9a91">
              {" "}
              <Image className="" src={sync} alt="" width={16} height={16} />
            </a>
            <a href="https://dexscreener.com/zksync/0x2ee93371081a1e3b3156bee13ae98f00bae1b8bb">
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
            <Image className="" src={sol} alt="" width={100} height={100} />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

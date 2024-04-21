import React from "react";
import Image from "next/image";
export default function Nav() {
  return (
    <div>
      <div className="flex md:px-16 px-2  pt-2 md:pt-8 w-full">
        {" "}
        <Image
          className="md:w-[56px] md:h-[56px]"
          src="https://fatherofbitcoin.xyz/images/8c713eeb4ade0a7227e5a06076084117.svg"
          alt=""
          width={36}
          height={36}
        />
      </div>
    </div>
  );
}

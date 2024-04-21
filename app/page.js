import Image from "next/image";
import Nav from "./component/nav";
import Hero from "./component/hero";
import blanc from "./asset/blanc.png";
import Matrix from "./component/matrix";
import All from "./component/all";
import Tokenomics from "./component/tokenomics";
import Footer from "./component/footer";
import bleu from "./asset/bleu.png";
import blank from "./asset/blank.png";
export default function Home() {
  return (
    <div className="md:mx-auto md:container  lg:px-40 ">
      <Nav />
      <Hero />
      <div className="w-full">
        {" "}
        <Image
          className="w-full"
          src={blank}
          alt=""
          width={560}
          height={560}
        />{" "}
      </div>
      <Matrix />
      <div className="w-full">
        {" "}
        <Image
          className="w-full"
          src={bleu}
          alt=""
          width={560}
          height={560}
        />{" "}
      </div>
      <All />
      <div className="w-full">
        {" "}
        <Image
          className="w-full"
          src={blank}
          alt=""
          width={560}
          height={560}
        />{" "}
      </div>
      <Tokenomics />
    </div>
  );
}

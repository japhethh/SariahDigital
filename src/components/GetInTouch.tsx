import Image from "next/image";
import { Button } from "./ui/button";

const GetInTouch = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 overflow-y-auto">
      <div className="text-center w-full max-w-[867px] py-12">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">
          <span className="text-[#30B0C7]">I'm</span>{" "}
          <span className="italic text-[#243B2D]">Lara Sophia</span>{" "}
          <Image
            className="rounded-full inline-flex align-middle"
            src="/getInTouchLogo.png"
            width={40}
            height={40}
            alt="Image"
          />
        </h1>

        <br />

        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">
          <span className="text-[#30B0C7]">A Founder of </span>{" "}
          <span className="italic text-[#243B2D]">Saria Digitals</span>
        </h1>

        <br />

        <h1 className="font-extralight text-3xl sm:text-4xl md:text-6xl">
          Based in the Philippines
        </h1>

        <br />

        <p className="text-base sm:text-lg md:text-xl text-black">
          Are you ready to unlock your potential, create your own success story, and finally take control of your financial future?
        </p>

        <br />

        <Button className="py-4 px-6 sm:py-6 sm:px-8 text-base sm:text-lg md:text-xl rounded-full text-white bg-[#243B2D]">
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default GetInTouch;

import React from "react";
import Button from "./Button";
import Image from "next/image";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between  bg-cover bg-no-repeat relative">
        <div className=" flex flex-col justify-center">
          <h1 className=" text-8xl font-semibold md:text-start text-center md:w-2/3 z-50 pl-10">
            Your body, your rules.
          </h1>
          <div className=" w-full md:w-2/4 mt-5 flex flex-row justify-center z-50">
            <Button title="Checkout Plans" />
          </div>
        </div>
        <Image
          // width={1200}
          // height={900}
          layout="fill"
          objectFit="cover"
          alt="Background image"
          src={"/assets/img/hero.jpg"}
        />
    </div>
  );
};

export default Home;

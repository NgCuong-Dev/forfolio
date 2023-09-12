"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const handleHire =() => {
    alert("Name:Nguyễn Quốc Cường,Số Điện Thoại:0839170198")
  }
  return (
    <section className="mt-5 ">
      <div className="grid grid-cols-1 md:grid-cols-12  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12 text-center lg:text-left  ">
        <div className="col-span-7 sm:ml-5 lg:mt-0 md:mt-10">
          <h1 className="text-white md:text-4xl font-extrabold lg:6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}
              Hello,I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Nguyễn Cường",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Backend Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] lg:text-xl mb-6 mt-3">
            I am a 4th year student who has time to work and learn with new
            technologies. I hope in the future I can find a business to develop
            myself and contribute a lot to the company.
          </p>
          <div>
            <button onClick={handleHire} className="px-9 py-3 w-full sm:w-fit font-medium  rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-yellow-500 via-purple-500 to-pink-500">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500   hover:bg-slate-800 text-white border border-yellow">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Dowload CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-7  bg-[#181818] w-[400px] h-[400px] rounded-full  flex justify-center items-center">
          <Image
            className="object-cover md:mb-10"
            src="/img/avartart.png"
            alt="hero image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

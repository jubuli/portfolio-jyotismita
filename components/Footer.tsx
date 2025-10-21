import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div>
          {/* <div className="font-logo text-white text-[18px]">
            <span className="text-[30px] md:text-[40px] text-yellow-400">
              
            </span>
            bout
          </div> */}
          <h1 className="text-[12px] mt-[0.5rem] text-white opacity-70">
            As a passionate Full Stack Developer with a knack for turning
            complex ideas into seamless digital experiences. With a strong
            foundation in both frontend and backend technologies, I specialize
            in creating dynamic, user-friendly applications. My journey in tech
            is driven by continuous learning and a desire to innovate. Beyond
            coding, I am dedicated to mentoring and empowering others through
            comprehensive training programs. Let&apos;s collaborate to build
            impactful solutions and push the boundaries of technology together.
            Feel free to connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/somanath07"
              className="text-[13px] text-blue-600"
            >
              {" "}
              LinkedIn
            </a>{" "}
            or explore my
            <a
              href="https://github.com/somanath27"
              className="text-[13px] text-blue-600"
            >
              {" "}
              Github
            </a>{" "}
            to see more of my work.
          </h1>
        </div>
        <div className="md: mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Quick Link
          </h1>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            About
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            Services
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            Project
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            Contact
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Address
          </h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <MapIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px]  font-normal text-white opacity-75">
              Koramangala,Bangalore
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px]  font-normal text-white opacity-75">
              somanathbarik0727@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px]  font-normal text-white opacity-75">
              +91 7683844093
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

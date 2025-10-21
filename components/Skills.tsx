import React from "react";
import SkillCard from "./Helper/SkillCard";
import react from "../images/react.png";
import reactnative from "../images/native.png";
import node from "../images/node.png";
import graphql from "../images/graphql.png";
import js from "../images/js.png";
import typescript from "../images/typescript.png";
import mongo from "../images/mongodb.png";
import aws from "../images/aws.png";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading__mini">My Skills</p>
          <h1 className="heading__primary">
            Let&apos;s Explore Popular{" "}
            <span className="text-yellow-300">Skills</span> & Experience
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            With 3+ years of experience in web and mobile development, I
            specialize in creating seamless, high-performance applications. My
            expertise spans across modern technologies like React, Node.js, and
            AWS, ensuring scalable and efficient solutions. Dive into my
            skillset to see how I can help bring your projects to life.
          </p>
          <button
            className="relative flex h-[50px] w-40 items-center 
              justify-center font-semibold overflow-hidden bg-red-500
               text-white shadow-2xl transition-all before:absolute 
               before:h-0 before:w-0 before:rounded-full before:bg-blue-600
                before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
          >
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
              <SkillCard title="React" image={react} percent="95%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
            >
              <SkillCard
                title="ReactNative"
                image={reactnative}
                percent="91%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
            >
              <SkillCard title="Node" image={node} percent="89%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
            >
              <SkillCard title="Typescript" image={typescript} percent="90%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="800"
            >
              <SkillCard title="Javascript" image={js} percent="90%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1000"
            >
              <SkillCard title="Graphql" image={graphql} percent="85%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1200"
            >
              <SkillCard title="MongoDB" image={mongo} percent="90%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1400"
            >
              <SkillCard title="Aws" image={aws} percent="80%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

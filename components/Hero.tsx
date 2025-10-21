import React from "react";
import TypeWrite from "./Helper/TypeWrite";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-[100vw] pt-[5vh] md:pt-[12vh] h-[90vh] md:h-[100vh] custom-bg">
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5rem] items-center">
          <div>
            <h1
              data-aos="fade-right"
              className="text-[#c4cfde] mb-[1.4rem] font-mono"
            >
              WELCOME TO MY WORLD
            </h1>
            <div data-aos="fade-left" data-aos-delay="400">
              <h1 className="xl:text-[40px] lg:text-[30px] sm:text-[25px] text-[20px] font-semibold leading-[2.6rem] text-white">
                Hi, I&apos;m <span className="text-yellow-300">Somanath</span>
              </h1>
              <TypeWrite />
            </div>
            <p
              data-aos="fade-right"
              data-aos-delay="800"
              className="mt-[1.2rem] text-[13px] md:text-[15px] text-[#c4cfde]"
            >
              I am a Full Stack Developer with expertise in frontend
              technologies like React and React Native, and backend solutions
              using Node.js, Express.js, GraphQL, Apollo, and MongoDB. I have
              integrated generative AI in projects, including a telemedicine app
              for accurate doctor recommendations. With experience in leading
              complex web applications and delivering corporate training in full
              stack development, I am committed to high-quality, innovative
              solutions. I thrive on learning new technologies and collaborating
              with teams to create impactful applications and empower others
              through mentorship. Let&apos;s connect to innovate together!
            </p>
            <div className="mt-[2rem] flex flex-col md:flex-row items-center justify-center md:justify-start space-y-6 md:space-y-0 md:space-x-6">
              <a href="/SomanathBarik.pdf" download={"SomanathBarik"}>
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                  className="before:ease relative h-12 w-40 overflow-hidden
                   bg-blue-700 text-white font-semibold shadow-2xl 
                   before:absolute before:left-0 before:-ml-2 before:h-48
                    before:w-48 before:origin-top-right before:-translate-x-full 
                    before:translate-y-12 before:-rotate-90 before:bg-yellow-500 
                    before:transition-all before:duration-300 hover:text-white
                     hover:shadow-black hover:before:-rotate-180 rounded-md"
                >
                  <span className="relative z-10">Download CV</span>
                </button>
              </a>
            </div>
          </div>
          <div
            className="hidden md:block"
            data-aos="fade-left"
            data-aos-delay="2000"
          >
            <Image
              src={require("../images/profile-pic.png")}
              width={400}
              height={300}
              alt={""}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

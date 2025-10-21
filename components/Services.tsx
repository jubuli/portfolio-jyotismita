import React from "react";
import ServiceCard from "./Helper/ServiceCard";

const Services = () => {
  const services = [
    `Dive into the world of modern web development with our React Website service.
     Our team leverages the power of React to build dynamic, high-performance user 
     interfaces that are both responsive and visually appealing. 
     Whether you need a simple landing page or a complex web application,
     our React solutions ensure a seamless user experience and efficient functionality`,

    `Experience the next generation of web development with our Next.js Website service.
     Combining the best of React with server-side rendering and static site generation,
     Next.js websites are incredibly fast and SEO-friendly.
     Our experts deliver robust and scalable web solutions that provide a
     superior user experience and optimize performance across all devices`,

    `Unlock the full potential of your web presence with our Fullstack Website service.
     We provide end-to-end solutions, handling everything from front-end design to back-end development.
     Our fullstack expertise ensures seamless integration and efficient performance,
     delivering websites that are not only visually stunning but also highly functional and secure`,

    `Power your applications with our Node.js API service. We specialize in creating scalable,
     high-performance APIs using Node.js, enabling seamless communication between your front-end and back-end systems.
     Our APIs are designed for robustness and efficiency, 
     ensuring smooth data flow and optimal performance for your web and mobile applications`,

    `Transform your ideas into reality with our MERN WebApp service.
      Utilizing the powerful MERN stack (MongoDB, Express, React, Node.js),
      we develop full-fledged web applications that are fast, reliable, and scalable.
      Our MERN solutions provide a seamless user experience,
      robust functionality, and the flexibility to grow with your business`,

    `Ensure the smooth operation of your web applications with our Bug Fixing service.
     Our expert team quickly identifies and resolves issues, enhancing performance and reliability.
     We focus on delivering timely and efficient solutions to keep your applications running flawlessly,
     so you can concentrate on what matters most - your business`,
  ];
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center">
        <p className="heading__mini">Popular Services</p>
        <h1 className="heading__primary">
          My Special <span className="text-yellow-300">Services</span>
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ServiceCard
            title="React Website"
            num="01"
            description={services[0]}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard
            title="NextJs Website"
            num="02"
            description={services[1]}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <ServiceCard
            title="Fullstack Website"
            num="03"
            description={services[2]}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <ServiceCard title="NodeJs Api" num="04" description={services[3]} />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="800"
        >
          <ServiceCard title="MERN WebApp" num="05" description={services[4]} />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="1000"
        >
          <ServiceCard title="Bug Fixing" num="06" description={services[5]} />
        </div>
      </div>
    </div>
  );
};

export default Services;

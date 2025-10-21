import React from "react";
import ProjectCard from "./Helper/ProjectCard";
import chatapp from "../images/chatapp.jpg";
import travelmap from "../images/travelmap.png";

const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <h1 className="heading__primary">
          My Best <span className="text-yellow-300">Projects</span>
        </h1>
      </div>
      <ProjectCard
        title="Travel Map"
        tech1="React Native"
        tech2="NodeJs"
        tech3="MongoDB"
        tech4="Typescript"
        image={travelmap}
        link=""
        description="Discover the world like never before with Travel
         Map Explorer, your all-in-one travel companion! Whether you’re planning
          a trip or just exploring new places, our app provides an immersive experience 
          by allowing you to search for any destination and uncover nearby gems effortlessly."
      />
      <ProjectCard
        title="CHAT APPLICATION"
        tech1="React"
        tech2="Javascript"
        tech3="Socket.io"
        tech4="NodeJs"
        image={chatapp}
        link="https://chatapplication-frontend.vercel.app/"
        description=" Experience seamless communication with ChitChatter, where real-time
          messaging and dynamic typing indicators keep you in sync with friends
          and family. Enjoy vibrant group chats managed by admins who ensure a
          secure and enjoyable environment by controlling member access. Stay
          connected with instant notifications and a smooth, uninterrupted
          chatting experience."
      />
    </div>
  );
};

export default Project;

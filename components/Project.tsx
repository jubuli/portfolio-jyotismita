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
        title="URL Shrinker"
        tech1="React JS"
        tech2="Tailwind CSS"
         tech3="Supabase"
        tech4="Shadcn UI"
        image={travelmap}
        link="https://url-shrinker-3zlnt3ujv-jyotismitas-projects.vercel.app/"
        description="Simplify your links with URL Shrinker — a fast and efficient
         tool that transforms long, complex URLs into short, shareable ones. Whether 
         for social media, emails, or campaigns, manage your links effortlessly while maintaining accuracy 
         and reliability. Experience a clean interface, instant link generation, and seamless redirection for 'a smooth user experience."
      />
      <ProjectCard
        title="CHAT APPLICATION"
        tech1="React"
        tech2="Javascript"
        tech3="Socket.io"
        tech4="NodeJs"
        image={chatapp}
        link="https://talk-a-tive-7fgq.onrender.com/"
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

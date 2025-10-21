import React from "react";
import BlogCard from "./Helper/BlogCard";
import graphql from "../images/graphql.jpg";
import fullstack from "../images/fullstack.jpg";
import ai from "../images/ai.jpg";

const Blog = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center">
        <p className="heading__mini">My Blog</p>
        <h1 className="heading__primary">
          My Latest <span className="text-yellow-300">Blog </span>and News
        </h1>
      </div>
      <div className="w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[2rem]">
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <BlogCard
            title="Full Stack Roadmap"
            comment={12}
            date="24 January 2024"
            image={fullstack}
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <BlogCard
            title="GraphQL For Your API"
            comment={19}
            date="11 Mar 2024"
            image={graphql}
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <BlogCard
            title="Future With AI"
            comment={4}
            date="5 June 2024"
            image={ai}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import { MdxImage as Image } from "../core/Mdx";
import React, { useEffect, useState } from "react";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

interface Props {
  openNav: () => void;
}
const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  }, []);

  const stickyStyle = navSticky
    ? "bg-gradient-to-r from-[#1a1a1a] to-[#282c34] shadow-gray-800 shadow-sm"
    : "";

  return (
    <div
      className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000]`}
    >
      <div className="flex items-center h-[10vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px] cursor-pointer">
          <Image
            src={require("../images/profile-pic.png")}
            width={40}
            height={40}
            alt={""}
            className="object-contain"
          />
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <a className="nav__link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Contact
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              href="https://www.linkedin.com/in/somanath07"
            >
              <Image src={linkedin} alt="linkedin" height="25" width="25" />
            </a>
          </li>
          <li>
            <a className="nav__link" href="https://github.com/somanath27">
              <Image src={github} alt="github" height="25" width="25" />
            </a>
          </li>
        </ul>
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180"
        />
      </div>
    </div>
  );
};

export default Nav;

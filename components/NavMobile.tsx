import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";
import { MdxImage as Image } from "../core/Mdx";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}
const NavMobile = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}
      ></div>
      <ul
        className={`text-white ${navOpenStyle} fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-gradient-to-b from-[#001f3f] via-[#004080] to-[#00132e] space-y-14 z-[10006]`}
      >
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="">
            Home
          </a>
        </li>
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="">
            About
          </a>
        </li>
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="">
            Services
          </a>
        </li>
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="">
            Blog
          </a>
        </li>
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="">
            Contacts
          </a>
        </li>
        <li className="flex gap-4">
          <a
            className="nav__link"
            href="https://www.linkedin.com/in/somanath07"
          >
            <Image src={linkedin} alt="linkedin" height="25" width="25" />
          </a>
          <a className="nav__link" href="https://github.com/somanath27">
            <Image src={github} alt="github" height="25" width="25" />
          </a>
        </li>

        <XMarkIcon
          onClick={closeNav}
          className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white"
        />
      </ul>
    </div>
  );
};

export default NavMobile;

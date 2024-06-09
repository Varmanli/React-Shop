import React from "react";
import { FaSquareGithub } from "react-icons/fa6";

function About() {
  return (
    <div className="flex justify-center items-center text-[22px] gap-2 h-[300px]">
      <h1 className="text-[#703BF7]   font-bold">
        Developed by Amirhossein Varmanli
      </h1>
      <a href="https://github.com/Varmanli">
        <FaSquareGithub />
      </a>
    </div>
  );
}

export default About;

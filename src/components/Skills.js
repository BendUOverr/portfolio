import React from "react";
import GitHub from "../assets/github.png";
import ReactImg from "../assets/react.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import Laravel from "../assets/laravel.png";
import php from "../assets/php.png";

export const Skills = () => {
  return (
    <div name="skills" className="h-screen w-full bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="md:px-20">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-2">
            <img className="w-20 mx-auto" src={php} alt="HTML icon" />
            <p className="my-4">PHP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-2">
            <img className="w-20 mx-auto" src={Laravel} alt="HTML icon" />
            <p className="my-4">Laravel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

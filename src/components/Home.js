import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#83a4da]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#b68d3a]">
          Luka Buadze,
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#83a4da]">
          I am a FRONTEND Developer,
        </h2>
        <p className="text-[#83a4da] py-4 mx-w-[700]">
          I'm an enthusiastic and detail-oriented Frontend Software Engineer,
          seeking an ENTRY-LEVEL position with Company to use my skills in
          coding, troubleshooting complex problems, and assisting in the timely
          completion of projects.
        </p>
        <div>
          <button className="group flex items-center text-white border-2 px-6 py-3 my-2 hover:bg-[#b68d3a] hover:border-[#b68d3a]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

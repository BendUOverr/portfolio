import React from "react";
import Trafalgar from "../assets/trafalgar.png";
import crypto from "../assets/crypto.png";
import beaches from "../assets/BeachesApp.png";

export const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="md:px-20">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">//Check out my recent work</p>
        </div>

        {/* container for projects */}

        {/* Gird Item */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* First Item */}
          <div
            style={{
              backgroundImage: `url(${Trafalgar})`,
              backgroundSize: "contain",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-gray-200"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://main--sage-centaur-faa13d.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BendUOverr/Trafalgar"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* second item */}
          <div
            style={{
              backgroundImage: `url(${crypto})`,
              backgroundSize: "contain",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-gray-700"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://lambent-melba-d530ad.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BendUOverr/CryptoSci"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* third item */}
          <div
            style={{
              backgroundImage: `url(${beaches})`,
              backgroundSize: "contain",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-gray-700"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://bright-narwhal-ba482a.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BendUOverr/BeachesApp"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

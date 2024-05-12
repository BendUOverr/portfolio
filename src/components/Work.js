import React from "react";
import Trafalgar from "../assets/trafalgar.png";
import crypto from "../assets/crypto.png";
import beaches from "../assets/BeachesApp.png";
import shoppingbud from "../assets/shopping-bud.png";
import colorgenerator from "../assets/color-generator.png";
import slider from "../assets/slider.png";
import menu from "../assets/food-menu.png";
import ideas from "../assets/ideas.png";

export const Work = () => {
  return (
    <div name="work" className="h-screen w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1400px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="md:px-20">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">//Check out my recent work</p>
        </div>

        {/* container for projects */}

        {/* Gird Item */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* First Item */}
          <div
            style={{
              backgroundImage: `url(${ideas})`,
              backgroundSize: "contain",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-gray-200"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Laravel Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://ideas-luka.000webhostapp.com/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BendUOverr/twitter-clone"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* second Item */}
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
          {/* third item */}
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
          {/* 4th item */}
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
          {/* 5th item */}
          <div
            style={{
              backgroundImage: `url(${shoppingbud})`,
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
                  href="https://main--shopping-bud.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BendUOverr/shopping-bud"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* 6th item */}
          <div
            style={{
              backgroundImage: `url(${colorgenerator})`,
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
                  href="https://color-generatata.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BendUOverr/color-generator"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* 7th item */}
          <div
            style={{
              backgroundImage: `url(${slider})`,
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
                  href="https://main--sliderluka.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BendUOverr/slider"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* 8th item */}
          <div
            style={{
              backgroundImage: `url(${menu})`,
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
                  href="https://filter-menu-food.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 p-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BendUOverr/menu-filter"
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

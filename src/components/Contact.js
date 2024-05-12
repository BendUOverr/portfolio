import React from "react";

export const Contact = () => {
  return (
    <div className="w-full bg-[#0a192f]">
      <div
        name="contact"
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center p-4 sm:px-40"
      >
        <form
          method="POST"
          action="https://getform.io/f/c3bf37d6-382e-4fa2-8934-518ff393ded5"
          className="flex flex-col max-w-[700] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              // Submit the form below or shoot me an email -
              luka.buadzee@gmail.com
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="name"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            rows="10"
            name="message"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

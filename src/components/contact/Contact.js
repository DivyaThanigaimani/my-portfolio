import React from "react";
import Title from "../layouts/Title";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black  "
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="GET IN TOUCH" />
      </div>
      <div className="flex flex-col gap-4 lex justify-center items-center text-center rounded-lg shadow-shadowOne py-20 px-10 md:p-20  bg-gradient-to-r from-bodyColor to-[#202327] group hover:scale-110 cursor-pointer hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        <h3 className="text-3xl font-bold text-white">Divya Thanigaimani</h3>
        <p className="text-lg font-normal text-designColor">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Thank you for visiting my portfolio! I am student at University of
          Windsor, pursuing Master of Applied Computing.{" "}
          <b>
            Currently looking for Winter 2024 Internship.{" "}
          </b>{" "}
          If you have any questions, collaboration opportunities, or would like
          to get in touch, please feel free to reach out!
          <br /> I look forward to hearing from
          you!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <span className="text-lightText">
            <a href="tel:+19057819965">+1 5199925012</a>
          </span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">
            <a href="mailto:thanigad@uwindsor.ca">
              thanigad@uwindsor.ca
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;

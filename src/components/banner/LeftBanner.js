import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaHackerrank,
} from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer.", "Software Engineer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-2/3 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO!</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Divya Thanigaimani</span>
        </h1>
        <h2 className="text-4xl font-bold text-white h-[80px] md:h-auto">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
          I am a seasoned Software Engineer with a passion for crafting innovative solutions
           to complex problems. My experience spans across a range of industries, 
           from leading-edge technology companies to global logistics giants.
            Through hands-on development and collaboration with cross-functional teams,
             I have honed my skills in Java, Spring Boot, React,Javascript,Python
             and an array of other technologies.
          <br />
          <br />In addition to my technical prowess,
           I am well-versed in Agile and SCRUM methodologies, 
           ensuring seamless collaboration within dynamic development environments. 
           Proficient in an array of tools and platforms, including JIRA, Jenkins, and Azure,
            I am poised to tackle diverse challenges
          <br />
          <br /> Presently, I am pursuing my Master of Applied Computing degree
          at the University of Windsor, and I am always on the lookout for
          opportunities to improve my skills and apply my knowledge to
          real-world scenarios. Starting January 2024, I will be available for
          a 4-8 month internship.
          <br />
          
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 pt-0">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 ">
            Find me at
          </h2>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://www.linkedin.com/in/divya-thanigaimani/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;

import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiChakraui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";

const Experience = () => {
  const Exp = [
    {
      id: 1,
      src: <ImHtmlFive size={60} className='text-red-500 sm:ml-5'/>,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: <IoLogoCss3 size={60} className='text-blue-400 sm:ml-5'/>,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: <IoLogoJavascript size={60} className='text-yellow-400 sm:ml-5'/>,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: <GrReactjs size={60} className='text-blue-400 sm:ml-5'/>,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: <SiTailwindcss size={60} className='text-blue-400 sm:ml-5'/>,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: <SiChakraui size={60} className='text-blue-400 sm:ml-5'/>,
      title: "Chakra UI",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: <SiBootstrap size={60} className='text-blue-400 sm:ml-5'/>,
      title: "Bootstap",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: <BsGithub size={60} className='sm:ml-5'/>,
      title: "GitHub",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: <FaNodeJs size={60} className='text-blue-500 sm:ml-5'/>,
      title: "Node JS",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: <SiMongodb size={60} className='text-blue-500 sm:ml-5'/>,
      title: "Mongo DB",
      style: "shadow-gray-500",
    },
   
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-screen text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Experience
          </p>
          <p className="py-6 ">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {Exp.map(({ id, src, title, style }) => {
            return (
              <div key={id} className={`shadow-md block md:flex gap-10 hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                {src}
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;

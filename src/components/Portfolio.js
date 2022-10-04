import React from "react";
import mee from "../assets/mee.jpg";
import usestate from "../assets/usestate.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: mee,
      href: "https://group-three.vercel.app",
      code:"https://github.com/Bradojunior/group"
    },
    {
      id: 2,
      src: usestate,
      href:"https://redux-app1.vercel.app"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-4 sm:px-0">
          {portfolio.map(({ id, src, href, code }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="Meee"
                  className="rounded-md  duration-200 hover:scale-105"
                />
                <div className="flex justify-center items-center">
                  <button className="md:w-1/2 md:px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={href}>Demo</a>
                  </button>
                  <button className="md:w-1/2 md:px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"
const FirstNav = () => {
  const [nav, setNav] = useState(false);

  const Links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 ">
      <div>
        <h1 className="text-5xl ml-2 font-signature">Brandon</h1>
      </div>
      <ul className="hidden md:flex">
        {Links.map((link) => {
          return (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-200"
            >
              <Link to={link.link} smooth duration={500}>{link.link}</Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden pr-4 z-10 text-gray-500"
      >
        {nav ?<FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      {nav && (
       <div>
         <ul className="flex flex-col  justify-center items-center fixed top-0 pt-10 -0 w-full  h-[370px] left-0  bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {Links.map((link) => {
            return (
              <li
                key={link.id}
                className="px-4 cursor-pointer capitalize py-3  text-2xl "
              >
                <Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link>
              </li>
            );
          })}
        </ul>
        {/* <div  onClick={() => setNav(!nav)} className=" z-20 top-0 left-0 fixed bg-black/40 h-screen w-full "></div> */}
       </div>
      )}
    </div>
  );
};

export default FirstNav;

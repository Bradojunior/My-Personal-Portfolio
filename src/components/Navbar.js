import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Service", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Tech", link: "/" },
  ];

  const [open, setOpen] = useState(true);

  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl md:text-xl lg:text-2xl cursor-pointer items-center text-gray-800">
          Brado Junior
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-7 absolute md:static bg-blue-400 md:bg-white md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-8 ${
            open ? "top-15" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => {
            return (
              <li key={link} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className={`${open ? "text-white md:text-gray-400" : "md:text-gray-400"} hover:text-gray-800 duration-500`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
          <Button>Get started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

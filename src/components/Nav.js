import { useState } from "react";
import BradoMenu from "./BradoMenu";

const Nav = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
    { name: "More", link: "/" },
    { name: "Tech", link: "/" },
  ];

const [open, setOpen] = useState(false)

const toggle = () => {
    setOpen(!open)
}

  return (
    <>
      <div className="bg-blue-600 w-full text-white h-16 flex justify-between items-center">
        <div className="text-3xl font-bold ml-7">Brandon</div>
        <div onClick={toggle} className="text-6xl font-bold right-4 top-1 absolute md:hidden">
          {open ? <ion-icon name="close" /> : <ion-icon name="menu" />}
        </div>
        <div>
          <ul className=" items-center hidden md:flex">
            {Links.map((link) => {
              return (
                <li className="px-4" key={link}>
                  <a className="text-2xl font-bold" href={link.link}>
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <BradoMenu open={open} />
    </>
  );
};

export default Nav;

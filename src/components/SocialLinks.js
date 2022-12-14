import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const Links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn
                <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub
                <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com',
            
        },
        {
            id: 3,
            child: (
                <>
                Mail
                <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:bradojunior08@gmail.com',
            style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (
                <>
                Resume
                <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]
  return (
    <div className="hidden sm:flex flex-col top-[35%] left-0 fixed">
      <ul>

        {Links.map(({id, child, href, style, download}) => {
            return(
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
                <a href={href} className="flex justify-between items-center w-full text-white"
                download={download}
                rel="noreferrer" 
                target= "_blank"
                >
               {child}
                </a>
              </li>
            )
        })}
       
      </ul>
    </div>
  );
};

export default SocialLinks;

import { useState } from "react";
import MenuItems from "./MenuItems";

const Header = () => {
    const Links = [
        {name: "Home", link: "/"},
        {name: "About", link: "/"},
        {name: "Contact", link: "/"},
        {name: "Tech", link: "/"},
        {name: "More", link: "/"}
    ]

    const [open, setOpen] = useState(false)

const showMenu = () => {
    setOpen(!open)
}

    return (  
        <div className="fixed w-full flex justify-between p-4 items-center">
            <div className="text-2xl font-bold text-center">
                Tailwind Css
            </div>
            <nav>
                <div className={`absolute right-4 text-3xl md:hidden ${open ? 'hidden' : 'null'}`}>
                <ion-icon  name="menu" onClick={showMenu}/>
                </div>
                <ul className="hidden md:flex gap-8 p-6 uppercasse bg-blue-400 md:bg-white " >
                    {Links.map((link) => {
                        return(
                            <li key={link}>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <MenuItems showMenu={showMenu} open={open}/>
            </nav>
        </div>
     );
}
 
export default Header;
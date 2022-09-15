import { useState } from "react";
import SideMenu from "./SideMenu";

const Sidebar = () => {
  const items = [
    {name: "Create Quiz", link: "/"},
    {name: "Dashboard", link: "/"},
    {name: "Send Mail", link: "/"},
    {name: "Profile", link: "/"},
    {name: "Accounts", link: "/"},
    {name: "More", link: "/"}
  ]
  const [open, setOpen] = useState(false)

const toggle = () =>{
  setOpen(!open)
}

  return (
    <>

    <div onClick={toggle} className="text-6xl md:hidden absolute">
    {open ? <ion-icon  name="close"/> : <ion-icon  name="menu"/>}
    </div>
   <div className="bg-indigo-600 h-screen w-40 text-white hidden md:block">
      <ul className=" justify-center items-center pt-20 ml-3">
        {items.map((val) => {
          return(
            <li className="py-1" key={val}>
              <a className="text-2xl font-bold hover:bg-indigo-900" href={val.link}>{val.name}</a>
            </li>
          )
        })}
      </ul>
   </div>
   <SideMenu open={open}/>
   </>
  );
};

export default Sidebar;

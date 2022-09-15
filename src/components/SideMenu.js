const SideMenu = ({open}) => {
    const items = [
      {name: "Create Quiz", link: "/"},
      {name: "Dashboard", link: "/"},
      {name: "Send Mail", link: "/"},
      {name: "Profile", link: "/"},
      {name: "Accounts", link: "/"},
      {name: "More", link: "/"}
    ]
    return (
     <div className={open ? "bg-indigo-600 h-screen w-40 text-white md:hidden" : "hidden"}>
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
    );
  };
  
  export default SideMenu;
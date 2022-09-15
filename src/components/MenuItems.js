const MenuItems = ({ showMenu, open }) => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Tech", link: "/" },
    { name: "More", link: "/" },
  ];
  return (
    <ul className={open ? "md:hidden bg-blue-400 w-full  px-10 left-1  py-4 items-center" : "hidden"}>
        <div className="text-2xl ml-9"><ion-icon name="close" onClick={showMenu}/></div>
      
      {Links.map((link) => {
        return (
          <li key={link} className="mr-5 ml-5">
            <a className="text-2xl " href={link.link}>{link.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItems;

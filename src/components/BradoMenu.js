const BradoMenu = ({open}) => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
    { name: "More", link: "/" },
    { name: "Tech", link: "/" },
  ];
  return (
    <div className="text-white bg-blue-600">
      <ul className={open ? "items-center pb-3 md:hidden " : "hidden"}>
        {Links.map((link) => {
          return (
            <li className="ml-9 py-3" key={link}>
              <a className="text-2xl font-bold hover:cursor-pointer" href={link.link}>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BradoMenu;

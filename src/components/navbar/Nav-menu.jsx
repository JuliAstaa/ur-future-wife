import React from "react";

const links = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "Recipe",
    url: "#recipe",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

const NavMenu = () => {
  return (
    <div className="nav-menu flex lg:justify-end  w-full">
      <ul className="flex flex-col lg:flex-row gap-16">
        {links.map((link, index) => {
          return (
            <li key={index} className="relative w-full group">
              <a
                href={link.url}
                className="group-hover:text-[#FF9800] transition-all ease-in-out duration-300 font-poppins"
              >
                {link.name}
              </a>
              <div className="absolute -bottom-0 origin-center transition-all ease-in-out duration-300 w-full bg-[#FF9800]  h-[2px] scale-0 group-hover:scale-100"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMenu;

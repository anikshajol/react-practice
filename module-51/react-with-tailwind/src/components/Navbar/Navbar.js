import React, { useState } from "react";
import Menu from "../Menu/Menu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Order", path: "/order" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 4, name: "About", path: "/about" },
  ];
  return (
    <div className="bg-purple-500 ">
      <section
        onClick={() => setOpen(!open)}
        className="h-8 w-8 cursor-pointer md:hidden"
      >
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </section>

      <ul
        className={` bg-purple-500 p-2 w-full text-2xl md:flex justify-center absolute md:static transition duration-1000 ease-in ${
          open ? "top-6" : "hidden"
        }`}
      >
        {Routes.map((route) => (
          <Menu route={route}></Menu>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

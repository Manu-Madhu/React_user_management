import React from "react";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <header className="sticky top-0 flex-wrap z-[20] mx-auto flex w-full overflow-hidden items-center justify-between p-5 md:px-10 bg-transparent">
      <h1 className="text-white text-xl ">LOGO</h1>
      <NavLinks />
    </header>
  );
};

export default Nav;

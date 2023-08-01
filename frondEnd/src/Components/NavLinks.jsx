import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  return (
    <div className="flex gap-5 justify-center items-center text-white">
      <div className="cursor-pointer">Home</div>
      <div className="cursor-pointer">About</div>
      <div className="cursor-pointer">Service</div>
      <div>
        <img
          src={require("../Assets/Propic.png")}
          alt=""
          className="w-[31px] h-[31px]"
          style={{
            borderRadius:"50%"
          }}
        />
      </div>
    </div>
  );
};

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex items-start justify-end">
      <div className="hidden w-full justify-between md:flex font-bold cursor-pointer">
        <Nav />
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center justify-center">
          {<Nav />}
        </div>
      )}
      <div className="flex w-full justify-end items-start md:hidden">
        <button onClick={handleChange}>{isOpen ? <X /> : <Menu />}</button>
      </div>
    </div>
  );
};
export default NavLinks;

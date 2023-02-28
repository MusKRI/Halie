import React from "react";
import { logo2 } from "../../assets";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo2} alt="logo" className="w-20 object-contain" />
        <span className="text-5xl font-semibold">Halie</span>
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white rounded-md px-4 py-2"
      >
        Create
      </Link>
    </header>
  );
};

export default Header;

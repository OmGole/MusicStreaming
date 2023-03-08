import { MenuOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="bg-gray-300">
      <div className="flex justify-between">
        <h1 className="text-5xl lg:text-6xl text-black font-bold text-center">
          <Link to="/"> Tunes Block </Link>
        </h1>

        <nav className="flex flex-row">
          <div className="absolute right-6 md:hidden top-4 scale-150">
            <MenuOutlined
              onClick={showMenu}
              className="text-black scale-150 cursor-pointer"
            />
          </div>
          <ul className="text-black hidden md:flex gap-8 p-6 text-xl font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li className="">
              <Link to="/profile">Profile</Link>
              {/* Profile icon */}
              {/* <div className="flex-1"></div> */}
              {/* <Link to="/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Link> */}
            </li>
          </ul>
          <MenuItems showMenu={showMenu} active={active} />
        </nav>
        {/* <button className="">Login</button> */}
      </div>
    </div>
  );
};

export default NavBar;

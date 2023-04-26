import React from "react";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex fixed items-center inset-0 bg-black/30 backdrop-blur-md top-16 gap-6 left-1/4 p-8 justify-center md:hidden"
          : "hidden"
      }
    >
      <Close onClick={showMenu} className="text-black cursor-pointer" />
      <li className="text-black font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-black font-bold">
        <Link to="/login">Login</Link>
      </li>
      <li className="flex text-black font-bold">
        <Link to="/profile">Profile</Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </li>
    </ul>
  );
};

export default MenuItems;

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
    <div className="container-md mx-auto">
      <div className="flex justify-between p-5 items-center">
        <h1 className="text-3xl lg:text-5xl text-white font-bold text-center">
          <Link to="/home"> Tunes Block </Link>
        </h1>
        <div className="">
          <Link
            to="/profile"
            className="text-xl lg:text-2xl text-white font-bold text-center"
          >
            Profile
          </Link>
        </div>
        {/* <button className="">Login</button> */}
      </div>
    </div>
  );
};

export default NavBar;

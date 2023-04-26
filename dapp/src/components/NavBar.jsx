import React from "react";
import { Link } from "react-router-dom";
import {GiMusicSpell} from "react-icons/gi"

const NavBar = () => {
  return (
    <nav className="flex justify-between p-3 font-poppins content-center items-center w-full mx-auto">
    <div>
      <Link className="flex justify-end text-4xl" to="/home">
        <GiMusicSpell className="md:mr-6 md:ml-0 ml-5 mt-1 text-primary" />

        <h2 className="hidden md:block font-bold">
          Music<span className="text-primary">Boxx</span>{" "}
        </h2>
      </Link>
    </div>
    <ul className="flex text-2xl justify-between content-center items-center">
      <li>
      </li>
    </ul>
  </nav>
  );
};

export default NavBar;

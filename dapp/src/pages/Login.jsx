import React, { useState, useEffect } from "react";
import useContract from "../hooks/useContract";
import useConnect from "../hooks/useConnect";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import NFTCard from "../components/NFTCard";

function Login() {
  const { contract } = useContract();
  const { connect, account } = useConnect();
  const [role, setRole] = useState("user");

  useEffect(() => {
    connect();
  }, []);

  const getLogin = async (e) => {
    e.preventDefault();
    if (role === "user") {
      const { userName, userAddress } = await contract.userLogin();
      console.log(`User ${userName},${userAddress}`);
    } else {
      const { artistName, artistAddress } = await contract.artistLogin();
      console.log(`Artist ${artistName},${artistAddress}`);
    }
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };
  return (
    <div className="h-screen bg-gray-200 ">
      <Navbar />
      {/* <NFTCard /> */}
      <div className="sm:container h-full mx-auto flex justify-center content-center items-center">
        <div className="bg-form shadow-2xl rounded-xl">
          
          <form action="" className="p-12">
          <h1 className="text-black font-bold text-3xl  mb-5 text-center">
            Login
          </h1>
          <div className='mb-5'>
          <label htmlFor="" className='  pl-2'>Role: </label>
          <select value={role} onChange={handleRole} className='border-2 py-1 px-2 '>
            <option value="user">User</option>
            <option value="artist">Artist</option>
          </select>
        </div>
            <p className="font-semibold">
              Wallet Address : <br></br>
              {account}
            </p>
            <button
              type="submit"
              className="btn-login bg-black w-38 rounded-full font-bold text-white text-md p-4 my-2 "
              onClick={(e) => getLogin(e)}
            >
              Login
            </button>
            <div class="signup_link" className="font-semibold">
            <Link to="/register">Want to become an Artist? Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

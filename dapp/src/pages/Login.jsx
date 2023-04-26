import React, { useState, useEffect } from "react";
import useContract from "../hooks/useContract";
import useConnect from "../hooks/useConnect";
import Navbar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import NFTCard from "../components/NFTCard";

function Login() {
  const { contract } = useContract();
  const navigate = useNavigate();
  const { connect, account } = useConnect();
  const [role, setRole] = useState("user");

  useEffect(() => {
    connect();
  }, []);

  const getLogin = async (e) => {
    e.preventDefault();
    // if (role === "user") {
    //   const { userName, userAddress } = await contract.userLogin();
    //   console.log(`User ${userName},${userAddress}`);
    // } else {
    //   const { artistName, artistAddress } = await contract.artistLogin();
    //   console.log(`Artist ${artistName},${artistAddress}`);
    // }
    navigate("/home");
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };
  return (
    <div className="h-screen bg-main">
      {/* <Navbar /> */}
      {/* <NFTCard /> */}
      <div className="sm:container h-full mx-auto flex justify-center content-center items-center">
        <div className="justify-center bg-form shadow-2xl rounded-xl">
          <form
            action=""
            className="p-12 flex flex-col justify-center items-center"
          >
            <h1 className="text-white font-bold text-5xl pb-10 text-center px-20">
              Login
            </h1>
            <h1 className="text-lg font-semibold text-white pb-10 w-30">
              Wallet Address : <br></br>
              {account}
            </h1>
            <button
              type="submit"
              className="btn-grad font-poppins font-bold"
              onClick={(e) => getLogin(e)}
            >
              Login
            </button>
            
            {/* <button className='block bg-secondary text-white py-1 px-5 rounded-full ml-9 hover:bg-white hover:text-secondary border-2 border-secondary transition duration-200 box-border'>Add to Cart</button> */}
            {/* <div class="signup_link" className="font-semibold">
          <Link to="/register">Want to become an Artist? Signup</Link>
        </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

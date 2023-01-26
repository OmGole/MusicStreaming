import React, { useState, useEffect } from "react";
import useContract from "../hooks/useContract";
import useRegister from "../hooks/useRegister";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import NFTCard from "../components/NFTCard";

function Login() {
  const { contract } = useContract();
  const { connect, account } = useRegister();
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
    // <>
    //   {
    //     <div>
    //       <nav>
    //         <h1 class="title">Tunes Block</h1>
    //       </nav>
    //       <div class="register">
    //         <h1>Login</h1>
    //         <form>
    //           <div class="txt_field">
    //             <select
    //               name="roles"
    //               id="roles"
    //               value={role}
    //               onChange={(e) => handleRole(e)}
    //             >
    //               <option value="user">User</option>
    //               <option value="artist">Artist</option>
    //             </select>
    //           </div>
    //           <div class="txt_field">
    //             Wallet Address : <br></br>
    //             {account}
    //           </div>

    //           <button className="btn-login" onClick={(e) => getLogin(e)}>
    //             Login
    //           </button>
    //           <div class="signup_link">
    //             {/* Not a member? <a href="#">Signup</a> */}
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   }
    // </>

    <div className="h-screen bg-gray-200 ">
      <Navbar />
      {/* <NFTCard /> */}
      <div className="sm:container h-full mx-auto flex justify-center content-center items-center">
        <div className="bg-form shadow-2xl rounded-xl">
          <h1 className="text-black font-bold text-3xl  mb-5 text-center">
            Login
          </h1>
          <form action="" className="px-3 flex flex-col items-center">
            <div className="mb-5">
              <label htmlFor="passw" className="font-semibold">
                Password
              </label>
              <input type="password" name="passw" id="passw" className="ml-3" />
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
              Not a member? <Link to="/register">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

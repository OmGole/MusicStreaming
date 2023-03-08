import React, { useEffect, useState } from "react";
import useConnect from "../hooks/useConnect";
import useContract from "../hooks/useContract";
import NavBar from "../components/NavBar";

function Register() {
  const { connect, account } = useConnect();
  const { contract } = useContract();
  const [name, setName] = useState("");

  useEffect(() => {
    connect();
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };


  const handleRegister = async (e) => {
    e.preventDefault();
    const artist = await contract.artistRegister(name);
    console.log(artist);
    
  };

  return (
    <div className="h-screen bg-gray-200 ">
    <NavBar />
    <div className="sm:container h-full mx-auto flex justify-center content-center items-center">
      <div className="bg-form shadow-2xl rounded-xl">
        
        <form action="" className="p-12">
        <h1 className="text-black font-bold text-3xl  mb-5 text-center">
          Register as Artist
        </h1>
          <p className="font-semibold mb-5">
            Wallet Address : <br></br>
            {account}
          </p>
          <div>
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input type="text" name="name" id="name" className="ml-3" value={name} onChange={handleName} />
          </div>
          <button
            type="submit"
            className="btn-login bg-black w-38 rounded-full font-bold text-white text-md p-4 my-2 "
            onClick={(e) => handleRegister(e)}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Register;

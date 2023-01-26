import React, { useEffect, useState } from "react";
import useRegister from "../hooks/useRegister";
import useContract from "../hooks/useContract";
import NavBar from "../components/NavBar";

function Register() {
  const { connect, account } = useRegister();
  const { contract } = useContract();
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  useEffect(() => {
    connect();
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const createUser = async (e) => {
    e.preventDefault();
    if (role === "user") {
      const user = await contract.userRegister(name);
    } else {
      const artist = await contract.artistRegister(name);
      console.log(artist);
    }
  };

  return (
    // <>
    //   {
    //     <div>
    //       <nav>
    //         <h1 class="title">Tunes Block</h1>
    //       </nav>
    //       <div class="register">
    //         <h1>Register</h1>
    //         <form>
    //           <div class="txt_field">
    //             <input
    //               type="text"
    //               required
    //               value={name}
    //               onChange={(e) => handleName(e)}
    //             ></input>
    //             <span></span>
    //             <label>Name</label>
    //           </div>
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

    //           <button className="btn-login" onClick={(e) => createUser(e)}>
    //             Register
    //           </button>
    //           {/* <button className='btn-login' onClick={(e) => getUser(e)}>
    //           get user
    //         </button> */}
    //           <div class="signup_link">
    //             {/* Not a member? <a href="#">Signup</a> */}
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   }
    //   {/* <Loading/> */}
    // </>
    <div className="h-screen bg-gray-200">
      <NavBar />
      <div className="sm:container h-full mx-auto flex justify-center content-center items-center">
        <div className="bg-form shadow-2xl rounded-xl">
          <h1 className="text-black font-bold text-3xl  mb-5 text-center">
            Register
          </h1>
          <form action="" className="px-3 flex flex-col items-center">
            {/* <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" className="ml-10" />
            </div> */}
            <div className="mb-5">
              <label htmlFor="passw" className="font-semibold">
                Password
              </label>
              <input type="text" name="passw" id="passw" className="ml-3" />
            </div>
            <p className="font-semibold">
              Wallet Address : <br></br>
              {account}
            </p>
            <button
              type="submit"
              className="btn-login bg-black w-38 rounded-full font-bold text-white text-md p-4 my-2 "
              onClick={(e) => createUser(e)}
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

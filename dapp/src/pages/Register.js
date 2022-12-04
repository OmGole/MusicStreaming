import React,{useEffect, useState} from 'react'
import '../pages/Register.css'
import useRegister from '../hooks/useRegister';
import useContract from '../hooks/useContract';

function Register() {
  const {connect, account}= useRegister();
  const {contract} = useContract();
  const [name,setName] = useState("");
  const [role,setRole] = useState("user");

  useEffect(() => {
    connect();
  },[])

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleRole = (e) => {
    setRole(e.target.value);

  }

  const createUser = async (e) => {
    e.preventDefault();
    if(role === "user") {
      const user = await contract.userRegister(name);
    } else {
      const artist = await contract.artistRegister(name);
      console.log(artist);
    }
  }

  
  
  return (
    <>


    
    {<div>
    <nav>
        <h1 class="title">Tunes Block</h1>
    </nav>
    <div class="register">
        <h1>Register</h1>
        <form>
            <div class="txt_field">
                <input type="text" required value={name} onChange={(e) => handleName(e)}></input>
                <span></span>
                <label>Name</label>
            </div>
            <div class="txt_field">
            <select name="roles" id="roles" value={role} onChange={(e) => handleRole(e)}>
                 <option value="user">User</option>
                 <option value="artist">Artist</option>                  
              </select>
            </div>
            <div class="txt_field">
                Wallet Address : <br></br>
                {account}
            </div>
            
            <button className='btn-login' onClick={(e) => createUser(e)}>
              Register
            </button>
            {/* <button className='btn-login' onClick={(e) => getUser(e)}>
              get user
            </button> */}
             <div class="signup_link">
                {/* Not a member? <a href="#">Signup</a> */}
            </div> 
        </form>
    </div>
    </div>}
    {/* <Loading/> */}
    </>
  )
}

export default Register;
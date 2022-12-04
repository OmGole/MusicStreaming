import React,{useState,useEffect} from 'react'
import useContract from '../hooks/useContract';
import useRegister from '../hooks/useRegister';

function Login() {
  const {contract} = useContract();
  const {connect, account}= useRegister();
  const [role,setRole] = useState("user");

  useEffect(() => {
    connect();
  },[])

  const getLogin = async (e) => {
    e.preventDefault();
    if(role === "user") {
      const {userName,userAddress} = await contract.userLogin();
      console.log(`User ${userName},${userAddress}`);
    } else {
      const {artistName,artistAddress} = await contract.artistLogin();
      console.log(`Artist ${artistName},${artistAddress}`);
    }
  }



  const handleRole = (e) => {
    setRole(e.target.value);

  }
  return (
    <>

    {<div>
    <nav>
        <h1 class="title">Tunes Block</h1>
    </nav>
    <div class="register">
        <h1>Login</h1>
        <form>
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
            
            <button className='btn-login' onClick={(e) => getLogin(e)}>
              Login
            </button>
             <div class="signup_link">
                {/* Not a member? <a href="#">Signup</a> */}
            </div> 
        </form>
    </div>
    </div>}

    </>
  )
}

export default Login

// import {Buffer} from 'buffer';
// // import { url } from 'inspector';
// import React,{useEffect, useState} from 'react'
// // import {ipfsClient} from 'ipfs-http-client';
// const ipfsClient  = require('ipfs-http-client')



// function Upload() {
//   const [songName,setSongName] = useState("");
//   const [genre,setGenre] = useState("");
//   const [buffer,setBuffer] = useState();
//   const [hash,setHash] = useState();


  
//   useEffect(() => {
//     const projectId = '2GsjNnx5atEVO6JuzO5pCNNR0zx';
//     const projectSecret = '00b09e252b9c105247545cc9e96595dd';
    
//     const auth =
//         'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
    
//     const client = ipfsClient.create({
//         host: 'ipfs.infura.io',
//         port: 5001,
//         protocol: 'https',
//         headers: {
//             authorization: auth,
//         },
//     });
    
//     client.add('Hello World').then((res) => {
//         console.log(res);
//     });
//   },[])

//   const handleGenre = (e)=> {
//     setGenre(e.target.value);
//   }

//   const handleSongName = (e)=> {
//     setSongName(e.target.value);
//   }

//   // const handleUpload = (e) => {
//   //   e.preventDefault();
//   //   console.log(buffer);
//   //   ipfs.files.add(buffer,(err,res) => {
//   //     if(err) {
//   //       console.error(err);
//   //       return;
//   //     }
//   //     console.log("Hey");
//   //     setHash(res[0].hash);
//   //     console.log(hash);
//   //   })
//   // }

//   const handleFile = (e) => {
//     e.preventDefault();
//     const file = e.target.files[0];
//     const reader = new window.FileReader();
//     reader.readAsArrayBuffer(file);
//     reader.onloadend = () => {
//       setBuffer(Buffer(reader.result));
//       console.log(buffer);
//     }
//   }



//   return (
//     <div>
//     <div>
//     <nav>
//         <h1 class="title">Tunes Block</h1>
//     </nav>
//     <div class="register">
//         <h1>Upload Song</h1>
//         <form>
//             <div class="txt_field">
//                 <input type="text" required value={songName} onChange={(e) => handleSongName(e)}></input>
//                 <span></span>
//                 <label>Song Name</label>
//             </div>
//             <div class="txt_field">
//                 <input type="text" required value={genre} onChange={(e) => handleGenre(e)}></input>
//                 <span></span>
//                 <label>Genre</label>
//             </div>
//             <div class="txt_field">
//                 <input type="file" required onChange={(e) => handleFile(e)}></input>
//             </div>
            
            
//             <button className='btn-login'>
//               Upload
//             </button>
//             {/* <button className='btn-login' onClick={(e) => getUser(e)}>
//               get user
//             </button> */}
//              <div class="signup_link">
//                 {/* Not a member? <a href="#">Signup</a> */}
//             </div> 
//         </form>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Upload
import React, { useState, useEffect } from "react";
import useContract from "../hooks/useContract";
import useRegister from "../hooks/useConnect";
import NavBar from "../components/NavBar";
import HomeSection from "../components/HomeSection";

const Profile = () => {
  const { contract } = useContract();
  const { connect, account } = useRegister();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [audioNft, setAudioNft] = useState("");
  const [imageNft, setImageNft] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState();

  useEffect(() => {
    console.log(account);
  },[account])
  return (
    <div className="bg-gray-200">
      <NavBar />

      <div className="sm:container h-full mx-auto flex justify-center content-center items-center">
        <div
          className="bg-form shadow-2xl rounded-xl
        "
        >
          <h1 className="text-black text-2xl font-bold mb-5 text-center">
            Upload Music NFT
          </h1>
          <form action="" className="px-3 flex flex-col items-center">
            {/* <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" className="ml-10" />
            </div> */}
            <div className="mb-5">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="ml-12 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="desc" className="font-semibold">
                Description
              </label>
              <textarea name="" id="" cols="" rows="3" className='border-2 rounded-xl py-1 px-3 w-full' placeholder='Description' value = {description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="mb-5">
              <label htmlFor="genre" className="font-semibold">
                Genre
              </label>
              <input type="text" name="genre" id="genre" className="ml-12" />
            </div>
            <div className="mb-5">
              <label htmlFor="price" className="font-semibold">
                Price
              </label>
              <input type="number" name="price" id="price" className="ml-14" />
            </div>
            <div className="mb-5 items-center text-center">
              <label for="myfile" className="font-semibold">
                Upload Image:
              </label>
              <input type="file" id="myfile" name="myfile"></input>
            </div>
            <div className="mb-5 items-center text-center">
              <label for="myfile" className="font-semibold">
                Upload Audio:
              </label>
              <input type="file" id="myfile" name="myfile"></input>
            </div>
            <p className="font-semibold">
              Wallet Address : <br></br>
              {account}
            </p>
            <button
              type="submit"
              className="btn-login bg-black w-38 rounded-full font-bold text-white text-md p-4 my-2 "
              // onClick={(e) => getLogin(e)}
            >
              Upload
            </button>
          </form>
        </div>
      </div>
      <h2 className="text-2xl lg:text-4xl text-black font-bold text-center mt-16">My NFTS</h2>
        <HomeSection/>
    </div>
  );
};

export default Profile;

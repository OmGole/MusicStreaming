import React, { useState, useEffect } from "react";
import useContract from "../hooks/useContract";
import useConnect from "../hooks/useConnect";
import NavBar from "../components/NavBar";
import ProfileSection from "../components/ProfileSection";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";
import { ethers } from "ethers";

const Profile = () => {
  const { contract } = useContract();
  const { account } = useConnect();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [audioNft, setAudioNft] = useState("");
  const [imageNft, setImageNft] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState();
  const [nfts, setNfts] = useState();
  const [allNfts, setAllNfts] = useState();

  const handleImage = async (e) => {
    const imageResponse = await uploadFileToIPFS(e.target.files[0]);
    console.log(`Image hash: ${imageResponse.hash}`);
    setImageNft(imageResponse.pinataURL);
  };

  const handleAudio = async (e) => {
    const audioResponse = await uploadFileToIPFS(e.target.files[0]);
    console.log(`Audio hash: ${audioResponse.hash}`);
    setAudioNft(audioResponse.pinataURL);
  };

  const handleMint = async (e) => {
    e.preventDefault();
    const nftMetadata = {
      name,
      description,
      genre,
      imageNft,
      audioNft,
    };

    const metadataResponse = await uploadJSONToIPFS(nftMetadata);
    console.log(`Metadata hash: ${metadataResponse.hash}`);
    const ethPrice = ethers.utils.parseUnits(price, "ether");
    const tokenId = await contract.createToken(
      ethPrice,
      metadataResponse.pinataURL
    );
    console.log(tokenId);
    setName("");
    setDescription("");

    setGenre("");
    setPrice("");
    setAudioNft("");
    setImageNft("");
  };

  useEffect(() => {
    const getNFTS = async () => {
      const data = await contract.getMyNFTs();
      setNfts(data);
    };
    getNFTS();
  }, []);

  // useEffect(() => {
  //   console.log(`Image hash: ${imageNft.hash}`);
  // },[imageNft]);

  // useEffect(() => {
  //   console.log(`Image hash: ${audioNft}`);
  // },[audioNft]);

  return (
    <div className="bg-main">
      <NavBar />

      <div className="container mx-auto">
        <div className="bg-form shadow-2xl rounded-xl w-1/3 mx-auto p-8">
          <h1 className="text-white text-3xl font-bold mb-5 text-center">
            Upload Music NFT
          </h1>
          <form
            action=""
            className="px-3 my-8 text-black"
          >
            {/* <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" className="ml-10" />
            </div> */}
            <div className="mb-5">
              <input
                type="text"
                name="name"
                id="name"
                className="rounded-md w-full py-1 px-2"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <textarea
                name=""
                id=""
                cols="39"
                rows="3"
                placeholder="Description"
                className="border-2 rounded-xl pl-3 py-1 px-3 w-30"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="genre"
                id="genre"
                className="rounded-md w-full py-1 px-2"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                className="rounded-md w-full py-1 px-2"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label for="myfile" className="text-xl font-semibold text-white">
                Upload Image:
              </label>
              <input
                type="file"
                id="myfile"
                name="myfile"
                onChange={handleImage}
              ></input>
            </div>
            <div className="mb-5">
              <label for="myfile" className="text-xl font-semibold text-white">
                Upload Audio:
              </label>
              <input
                type="file"
                id="myfile"
                name="myfile"
                onChange={handleAudio}
              ></input>
            </div>
            <button
              type="submit"
              className={` justify-center btn-grad btn-login bg-black w-40 rounded-full font-bold text-white text-md p-4 my-2 mx-auto`}
              onClick={(e) => handleMint(e)}
              disabled={imageNft === "" || audioNft === "" ? true : false}
            >
              Upload
            </button>
          </form>
        </div>
      </div>
      <h2 className="text-2xl lg:text-4xl text-black font-bold text-center mt-16">
        My NFTS
      </h2>
      <ProfileSection nfts={nfts} />
    </div>
  );
};

export default Profile;

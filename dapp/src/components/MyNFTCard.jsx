import React, { useState, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";

function MyNFTCard({ nft, contract, account }) {
  const [current, setCurrent] = useState();
  const [price, setPrice] = useState();

  const handleUnlist = async (e) => {
    e.preventDefault();
    console.log("Unlist")
    await contract.unlistToken(nft.tokenId.toNumber());
    alert("Unlisted NFT");
  }
  
  const handleList = async (e) => {
    e.preventDefault();
    const ethPrice = ethers.utils.parseUnits(price, 'ether')
    await contract.listToken(nft.tokenId.toNumber(),ethPrice);
    alert("Listed NFT");
  }

  useEffect(() => {
    const getCurrentNft = async () => {
      const data = await contract.tokenURI(nft.tokenId);
      const current = await axios.get(data);
      setCurrent(current.data);
    };
    getCurrentNft();
  }, [nft]);

  useEffect(() => {
    console.log(account)
  })

  if (!current) {
    return <></>;
  }
  console.log(current); 
  return (
    <div className="h-[400px] w-[270px] bg-gray-800 mx-auto mt-10 rounded-xl">
      <img
        src={current.imageNft}
        className="w-[240px] h-[200] ml-[13px] absolute mt-[20px] rounded-xl"
      />

      <div>
        <p className="text-white font-bold ml-5 text-[20px] pt-[230px]">
          {current.name}
        </p>
        <p className="text-gray-500 font-bold ml-5 text-[15px]">
          {current.genre}
        </p>
        {/* <p className="text-gray-400 ml-5">
              6 mahine ruk meri body banne wali hai
            </p> */}
      </div>
      <div className="flex">
        {/* Ethereum icon */}
        <svg
          width="11"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[15px] h-[20px] ml-5 mt-5"
        >
          <path
            d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
            fill="#00FFF8"
          />
        </svg>
        <p className="font-bold text-white mt-[18px] ml-[10px]">
          {ethers.utils.formatEther(nft.price)}
        </p>
      </div>
      <div>
        {nft.seller.toLowerCase() === account &&
          (nft.listed === true ? (
            <button onClick={handleUnlist} className="bg-white p-2 mt-2 ml-5 rounded-lg">Unlist</button>
          ) : (
            <div>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-white w-1/2 px-2 mt-2 ml-5 rounded-lg"
              />
              <button onClick={handleList} className="bg-white px-2 py-1 mt-2 ml-2 rounded-lg">List</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MyNFTCard;

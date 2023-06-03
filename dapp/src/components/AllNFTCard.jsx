import React, { useState, useEffect } from "react";
import axios from "axios";
import useContract from "../hooks/useContract";
import { ethers } from "ethers";

function AllNFTCard({ nft }) {
  const [current, setCurrent] = useState();
  const { contract } = useContract();

  useEffect(() => {
    const getCurrentNft = async () => {
      const data = await contract.tokenURI(nft.tokenId);
      const current = await axios.get(data);
      setCurrent(current.data);
    };
    getCurrentNft();
  }, [nft]);

  if (!current) {
    return <></>;
  }
  console.log(current,nft);
  return (
    <div class="flex items-center justify-between border-white-200 p-4 bg-[#212121] rounded-lg mb-5">
          <div className="flex items-center">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4" src={current.imageNft} />
          <div class="flex-grow">
            <h2 class="text-white-900 font-poppins font-medium">{current.name}</h2>
            <p class="text-gray-300 font-montserrat">{current.genre}</p>
          </div>
          </div>
          <div className="flex items-center content-center">
        {/* Ethereum icon */}
        <svg
          width="11"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[15px] h-[20px] mx-1"
        >
          <path
            d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
            fill="#971ffd"
          />
        </svg>
        <p className="font-bold text-white font-poppins">
          {ethers.utils.formatEther(nft.price)}
        </p>
      </div>
        </div>
  );
}

export default AllNFTCard;

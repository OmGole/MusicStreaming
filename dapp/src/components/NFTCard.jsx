import React from "react";

const NFTCard = () => {
  return (
    <div className="bg-gray-200">
      <div className="h-[500px] w-[300px] bg-gray-800 mx-auto mt-20 rounded-xl">
        <img
          src="https://www.greatestphysiques.com/wp-content/uploads/2017/10/David-Laid.05.jpg"
          alt="zyzz"
          className="w-[270px] h-[200] ml-[13px] absolute mt-[20px] rounded-xl"
        />

        <div>
          <p className="text-white font-bold ml-5 text-[20px] pt-[360px]">
            Legend - Tevvez
          </p>
          <p className="text-gray-400 ml-5">
            6 mahine ruk meri body banne wali hai
          </p>
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
          <p className="font-bold text-white mt-[18px] ml-[10px]">0.041 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;

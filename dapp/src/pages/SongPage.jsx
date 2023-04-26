import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Player from "../components/Player";
import { useLocation } from "react-router-dom";
import axios from "axios";
import useContract from "../hooks/useContract";
import useConnect from "../hooks/useConnect";
import { ethers } from "ethers";
import Big from "big.js";

const SongPage = () => {
  const { connect, account } = useConnect();
  let { state } = useLocation();
  const [current, setCurrent] = useState();
  const[image,setImage] = useState("");
  const { contract } = useContract();
  useEffect(() => {
    connect()
  }, [])

  const handleBuy = async (e) => {
    e.preventDefault();
    const listPrice = await contract.getListingPrice();
    const ethPrice = ethers.utils.parseUnits(
      new Big(ethers.utils.formatEther(state.price))
        .add(ethers.utils.formatEther(listPrice))
        .toString(),
      "ether"
    );
    const transaction = await contract.buy(parseInt(state.tokenId._hex), {
      value: ethPrice,
      gasLimit: 3e7,
    });
    await transaction.wait();
    alert("Bought NFT");
  };

  useEffect(() => {
    const getCurrentNft = async () => {
      const data = await contract.tokenURI(state.tokenId);
      const current = await axios.get(data);
      setCurrent(current.data);
      setImage(current.data.imageNft);
    };
    getCurrentNft();
  }, [state]);

  useEffect(() => {
    console.log(image);
  },[image])

  if (!current) {
    return <></>;
  }

  return (
    // <div>
    //   <section class="text-gray-400 bg-gray-900 body-font">
    //     <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    //       <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    //         <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white py-5">
    //           <h2 className="mb-none">{current?.name}</h2>
    //           {/* LEGEND */}
    //           <br class="hidden lg:inline-block" />
    //           {/* BY TEVVEZ */}
    //         </h1>

    //         <div class="flex justify-center">
    //           <button className="justify-center items-center">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //               className="w-10 h-10"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //               />
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //       <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    //         <img
    //           class="object-cover object-center rounded-xl"
    //           alt="hero"
    //           src={current?.imageNft}
    //         />
    //       </div>
    //     </div>
    //   </section>

    //   {/* Description  */}

    //   <section class="text-gray-600 bg-blue-300 body-font overflow-hidden ">
    //     <div class="container px-5 py-24 mx-auto">
    //       <div className="flex">
    //         <div class="flex flex-wrap -m-12">
    //           <div class="p-12 md:w-1/2 flex flex-col items-start">
    //             <div className="flex flex-row">``

    //             </div>

    //             <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
    //               {current?.name}
    //             </h2>
    //             <p class="leading-relaxed text-md mb-8">
    //               {current?.description}
    //             </p>
    //           </div>
    //         </div>

    //         {/* NFT Card */}

    //         <div className="h-[200px] w-[550px] bg-gray-800 mx-auto mt-15 mr-40 rounded-xl">
    //           {/* <img
    //             src="https://i.scdn.co/image/ab67616d0000b273174e964b6fdf664e564b4f62"
    //             alt="Electronic"
    //             className="w-[230px] h-[200] ml-[13px] absolute mt-[20px] rounded-xl"
    //           /> */}
    //           <p className="text-white font-bold text-[17px] pt-[20px] ml-5">
    //             Artist: {current?.artist}
    //           </p>
    //           <div>
    //             <p className="text-white font-bold ml-5 text-[17px] pt-[20px]">
    //               Genre: {current?.genre}
    //             </p>
    //             {/* <p className="text-gray-400 ml-5">
    //           6 mahine ruk meri body banne wali hai
    //         </p> */}
    //           </div>

    //           <div className="flex">
    //             <p className="text-white font-bold text-[17px] pt-[20px] ml-5">
    //               Price:
    //             </p>
    //             {/* Ethereum icon */}
    //             <svg
    //               width="11"
    //               height="18"
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-[15px] h-[20px] ml-5 mt-5"
    //             >
    //               <path
    //                 d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
    //                 fill="#00FFF8"
    //               />
    //             </svg>
    //             <p className="font-bold text-white mt-[16px] ml-[10px]">
    //               {ethers.utils.formatEther(state.price)} ETH
    //             </p>
    //           </div>
    //           <div className="items-center justify-center">
    //             {state.listed === false ? (
    //               <p className="text-white ml-5 text-lg mt-2">
    //                 This NFT is not for sale
    //               </p>
    //             ) : state.seller.toLowerCase() === account ? (
    //               <p className="text-white ml-5 text-lg mt-2">
    //                 You are the owner
    //               </p>
    //             ) : (
    //               <button
    //                 className="bg-white px-2 py-1 mt-2 ml-5 rounded-lg"
    //                 onClick={handleBuy}
    //               >
    //                 Buy
    //               </button>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="sticky">
    //       <Player className="sticky" song={current.audioNft}/>
    //     </div>
    //   </section>
    // </div>
    <>
      <div style={{
              background: `url(${current?.imageNft})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition:'center',
              backgroundSize:'cover'
            }} className='h-screen shadow-overlay'>
        <div className='md:container mx-auto h-full'>
          <NavBar />
          <div className='flex justify-center content-center items-center h-full'>
            <div className='text-center'>
              <h2 className='font-poppins text-4xl mb-7 text-white font-bold'>{current?.name.toUpperCase()}</h2>
            </div>
          </div>
        </div>
      </div>
      <section class="text-gray-600 body-font overflow-hidden">

        <div class="flex flex-wrap -m-12">
          <div class="p-12 md:w-1/2 flex flex-col items-start">
            <div class="container px-5 py-24">
              <p className="text-white font-montserrat text-xl">{current?.description}</p>
            </div>
          </div>
          <div class="p-12 md:w-1/2 flex flex-col items-start bg-primary text-2xl">
            <div class="container px-5 py-24">
              <p className="text-white font-bold ml-5 mb-5">
                Artist: {state?.artist}
              </p>
              <div>
                <p className="text-white font-bold ml-5 mb-5">
                  Genre: {current?.genre}
                </p>
              </div>

              <div className="flex">
                <p className="text-white font-bold ml-5 mb-5">
                  Price:
                </p>
                <p className="font-bold text-white ml-3 mb-5">
                  {ethers.utils.formatEther(state.price)} ETH
                </p>
              </div>
              <div className="items-center justify-center">
                {state.listed === false ? (
                  <p className="text-white ml-5 text-2lg mt-2 font-montserrat mb-5">
                    This NFT is not for sale
                  </p>
                ) : state.seller.toLowerCase() === account ? (
                  <p className="text-white ml-5 text-2xl mt-2 font-montserrat mb-5">
                    You are the owner
                  </p>
                ) : (
                  <button
                    className="bg-white px-2 py-1 mt-2 ml-5 rounded-lg"
                    onClick={handleBuy}
                  >
                    Buy
                  </button>
                )}

              </div>
            </div>
          </div>
        </div>
        <div className="sticky">
          <Player className="sticky" song={current.audioNft} />
        </div>
      </section>
    </>
  );
};

export default SongPage;

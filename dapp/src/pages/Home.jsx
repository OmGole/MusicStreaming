import React, { useState, useEffect } from "react";
import AllNFTCard from "../components/AllNFTCard";
import useContract from "../hooks/useContract";
import { Link } from "react-router-dom";
import {TfiArrowDown} from 'react-icons/tfi'
import NavBar from "../components/NavBar";
import { HashLink } from 'react-router-hash-link';



const Home = () => {
  const [nfts, setNfts] = useState();
  const { contract } = useContract();

  useEffect(() => {
    const getNFTS = async () => {
      const data2 = await contract.getAllNFTs();
      setNfts(data2);
    }
    getNFTS();
  }, []);

  return (
    <>
      <header className="h-screen bg-showcase bg-cover bg-no-repeat bg-center shadow-overlay">
        <div className='md:container mx-auto h-full px-6'>
          <NavBar />
          <div className='flex justify-center content-center items-center h-full text-white'>
            <div className='text-center'>
              <h2 className='font-poppins text-5xl mb-7 font-'>Welcome to HappyReader</h2>
              <p className='font-montserrat text-xl leading-normal mb-10 pb-4 md:px-20 md:text-center px-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque numquam dicta perferendis quos, quibusdam quae maxime aliquam quaerat accusamus tenetur molestiae! Atque perferendis excepturi ratione quidem deserunt sequi.</p>
              <HashLink smooth to='/home/#songs' > 
                  <TfiArrowDown className='hover:text-white hover:bg-primary animate-bounce mx-auto text-7xl rounded-full p-4 box-border'></TfiArrowDown>
               </HashLink>
            </div>
          </div>
        </div>
      </header>
      <div className="md:container mx-auto mb-20 pt-10 px-6" id="songs">
        <h1 className="font-poppins text-5xl text-center mb-10 ">Songs</h1>
        <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
          <div class="p-2 w-full">
            {nfts?.map(nft => <Link to="/song" state={nft}>
              <AllNFTCard nft={nft} contract={contract}/>
            </Link>)}
          </div>
        </div>
        </div>
      </>
      );
};

export default Home;

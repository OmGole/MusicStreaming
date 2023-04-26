import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import HomeSection from "../components/HomeSection";
import useContract from "../hooks/useContract";

const Home = () => {
  const [nfts, setNfts] = useState();
  const { contract } = useContract();

  useEffect(() => {
    const getNFTS = async () => {
      const data2 = await contract.getAllNFTs();
      setNfts(data2);
    };
    getNFTS();
  }, []);

  return (
    <div className="bg-gray-400 w-full h-full">
      <NavBar />
      <div className="flex bg-main">
        <HomeSection className="basis-5/6" nfts={nfts} />
      </div>
      {/* <MusicPlayer /> */}
      {/* <Player /> */}
    </div>
  );
};

export default Home;

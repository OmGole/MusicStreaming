import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import HomeSection from "../components/HomeSection";
import NFTCard from "../components/NFTCard";
import MusicPlayer from "../components/MusicPlayer";
import Player from "../components/Player";
import Particle from "../components/Particle";

const Home = () => {
  return (
    <div className="bg-gray-200 w-full h-full">
      {/* <Particle /> */}
      <NavBar />
      <div className="flex">
        <SideBar className="basis-1/6" />
        <HomeSection className="basis-5/6" />
      </div>
      {/* <MusicPlayer /> */}
      {/* <Player /> */}
    </div>
  );
};

export default Home;

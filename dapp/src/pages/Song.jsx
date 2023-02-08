import React from "react";
import MusicPlayer from "../components/MusicPlayer";
import NavBar from "../components/NavBar";
import Player from "../components/Player";

const Song = () => {
  return (
    <div className="bg-gray-200 w-full h-full">
      <NavBar />
      <MusicPlayer className="flex items-center justify-center" />
      <Player />
    </div>
  );
};

export default Song;

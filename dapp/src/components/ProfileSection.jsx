import React, { useEffect } from "react";
import MyNFTCard from "./MyNFTCard";
import useConnect from "../hooks/useConnect";
import useContract from "../hooks/useContract";

const ProfileSection = ({nfts}) => {
  const { connect, account } = useConnect();
  const { contract } = useContract();
  useEffect(() =>{
    connect()
  },[])

  useEffect(() => {
    console.log(nfts);
  },[nfts]);

  return (
    <div className="container-md mx-auto">
      <div className="grid grid-cols-4 gap-4 ">
        {nfts?.map((nft) => (
            <MyNFTCard nft={nft} contract={contract} account={account}/>  
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;

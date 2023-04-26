import React, { useEffect } from "react";
import useConnect from "../hooks/useConnect";
import useContract from "../hooks/useContract";
import AllNFTCard from "./AllNFTCard";
import {Link} from "react-router-dom"

const HomeSection = ({nfts}) => {
  const { connect, account } = useConnect();
  const { contract } = useContract();

  return (
    <div className="container-md mx-auto">
      <div className="grid grid-cols-4 gap-4 ">
        {nfts?.map((nft) => (
          <Link to="/song" state={ nft }>
            <AllNFTCard nft={nft} contract={contract} account={account}/>  
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
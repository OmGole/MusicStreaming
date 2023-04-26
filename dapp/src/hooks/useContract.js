import NFT from './NFT.json'
import {ethers} from 'ethers';

const ContractABI = NFT.abi;
const ContractAddess = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const Ethereum = typeof window !== 'undefined' && window.ethereum;

const useContract =() => {
  const provider = new ethers.providers.Web3Provider(Ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(ContractAddess,ContractABI,signer)
  return {contract};
}

export default useContract;
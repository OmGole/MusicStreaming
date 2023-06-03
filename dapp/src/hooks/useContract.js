import NFT from './NFT.json'
import {ethers} from 'ethers';

const ContractABI = NFT.abi;
const ContractAddess = "0x73E65D4984fEC31c5BfD9Dc90E7da1D9719bcF18";
const Ethereum = typeof window !== 'undefined' && window.ethereum;

const useContract =() => {
  const provider = new ethers.providers.Web3Provider(Ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(ContractAddess,ContractABI,signer)
  return {contract};
}

export default useContract;
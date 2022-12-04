import Music from './Music.json'
import {ethers} from 'ethers';

const ContractABI = Music.abi;
const ContractAddess = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const Ethereum = typeof window !== 'undefined' && window.ethereum;

const useContract =() => {
  const provider = new ethers.providers.Web3Provider(Ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(ContractAddess,ContractABI,signer)
  return {contract};
}

export default useContract;
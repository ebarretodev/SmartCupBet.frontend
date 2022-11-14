import { useState, useEffect, useCallback } from 'react'
import { ethers } from 'ethers';
import { useMoralis } from "react-moralis"

const useEthBalance = () => {
    const { account} =  useMoralis()
    
  const [balance, setBalance] = useState(0);
  let provider = null
    let signer = null


    const fetchBalance = useCallback(async () => {
        if (signer !== null) {
            const address = await signer.getAddress();
            console.log(address);
            const rawBalance = await provider.getBalance(address);
            const value = parseFloat(ethers.utils.formatEther(rawBalance));
            setBalance(value);
        }
    }, []);
  
useEffect(() => {
    if (provider !== null) {
  provider.on('block', fetchBalance);
  return () => {
    provider.off('block', fetchBalance);
  };}
}, [fetchBalance]);

  useEffect(()=>{
    fetchBalance()
  }, [fetchBalance, account])  
  
  useEffect(()=>{
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
  },[])

return balance;
}



export default useEthBalance
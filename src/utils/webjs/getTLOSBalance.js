import Web3 from "web3";
let web3 = new Web3('https://mainnet.telos.net/evm');

export const getTLOSBalance = async (TLOSAddress) =>{
    try{
      let balance = await web3.eth.getBalance(TLOSAddress);
      return +((+balance)/(10 ** 18)).toFixed(2);
    }catch(e){
      return Promise.reject(e.message);
    }
  }
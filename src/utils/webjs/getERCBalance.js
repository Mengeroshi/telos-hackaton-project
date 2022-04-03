import Web3 from "web3";
let web3 = new Web3('https://mainnet.telos.net/evm');

export async function getERCBalance(contractData, TLOSAddress) {
    let contract = new web3.eth.Contract(contractData.abi, contractData.address);
  
    let balance = await contract.methods.balanceOf(TLOSAddress).call();
    const balanceFormatted  =  (+balance) / (10 ** contractData.decimals);
    return {
      ticker: contractData.ticker,  
      balance:balanceFormatted,
      logo: contractData.img,
      name: contractData.name 
    }
  }
  
 
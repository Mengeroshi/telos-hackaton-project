
import Web3 from "web3";
let web3 = new Web3('https://rpc2.us.telos.net/evm');

export async function getLatestBlocksWithTxs (n) {
  const getBlockNumbers = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);
  const latest = await web3.eth.getBlockNumber();
  const limit = latest - n;
  const blockNumbers = getBlockNumbers(limit, latest )
  const batch = new web3.BatchRequest();

  const total = blockNumbers.length;
  let counter = 0;
  let blocks = [];

  await new Promise(function(resolve, reject){
    blockNumbers.forEach(blockNumber => {
      batch.add(
        web3.eth.getBlock.request(blockNumber, true, (error, data) => {
          if (error) return reject(error);

          counter++;
          blocks.push(data);
          // if(data.transactions.length !== 0){
          //   blocks.push(data);
          // }
          

          if (counter === total) resolve();
        })
      )
    });

    batch.execute()
  });

  return blocks.filter( block =>  block.transactions.length !== 0);
}
import { defiTokens } from "./defiTokens";
import { getERCBalance } from "./getERCBalance";
import { abi } from "./abi";

export const getERCBalanceList = async (tlosAddress) => {
  let contractsList = defiTokens.map((token) => {
    return {
      address: token.address,
      abi: abi,
      ticker: token.symbol,
      decimals: token.decimals,
      img: token.logoURI,
      name: token.name,
    };
  });
  let promisesList = contractsList.map(
    (contract) =>
      new Promise((resolve, reject) => {
        resolve(getERCBalance(contract, tlosAddress));
      })
  );

  let valueList = await Promise.all(promisesList);

  return valueList.filter((value) => value.balance > 0);
};

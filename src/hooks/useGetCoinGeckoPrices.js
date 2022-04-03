import React from 'react';


export const useGetCoinGeckoPrices = (tokenList ) =>{
 const [tokensPrices, setTokensPrices] = React.useState({});
 const [loadingTokensPrices, setLoadingTokenPrices] = React.useState(true);

 const onSuccess = (data) =>{
    setTokensPrices(data);
    setLoadingTokenPrices(false);

 }



 const query = tokenList.map ( coin =>  coin.name
    .replace("Wrapped TLOS", "telos")
    .replace("Wrapped Bitcoin", "bitcoin")
    .replace("Polygon", "matic-network")
    .replace("USD Coin", "usd-coin")
    .replace("Avalanche", "avalanche-2")
    .toLocaleLowerCase().replace(/\s/g, ""))
    .join("%2C")

const URL = `https://api.coingecko.com/api/v3/simple/price?ids=${query}&vs_currencies=usd`;


React.useEffect( () =>{
    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const dataRes = await response.json();
    
            if (response.status !== 200) {
              return Promise.reject(dataRes.message);
            } else {
              return dataRes;

            }
          } catch (e) {
            return new Error(`ERROR HUMANO ${e}`);
          }
        
    }

    fetchData(URL).then(onSuccess)

}, [])

return {tokensPrices, loadingTokensPrices}

}






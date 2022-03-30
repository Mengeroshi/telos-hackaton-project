import React from "react";
import { timeFormat} from "d3-time-format";

export const useFetchTlosPrices = () => {
  const [prices, setPrices] = React.useState([]);
  const [loadingPrices, setLoadingPrices] = React.useState(true);

  //console.log(dataState.data[dataState.data.length - 1]);

  const onSuccess = (data) => {
    setPrices(data);
    setLoadingPrices(false);
  };
  React.useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const dataRes = await response.json();

        if (response.status !== 200) {
          return Promise.reject(dataRes.message);
        } else {
          const obo = dataRes.map((item) => {
            const formatDate = timeFormat("%b %d, '%y");
            const date = new Date(item[0]);
            const newDate = formatDate(date);

            const dayObj = {
              date: newDate,
              price: item[4],
            };
            return dayObj;
          });
          return obo;
        }
      } catch (e) {
        return new Error(`ERROR HUMANO ${e}`);
      }
    };

    fetchData(
      "https://api.coingecko.com/api/v3/coins/telos/ohlc?vs_currency=usd&days=30"
    ).then(onSuccess);
  }, []);

  return {prices, loadingPrices }
};

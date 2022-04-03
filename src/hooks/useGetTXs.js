import React from 'react';
import {getLatestBlocksWithTxs} from '../utils/webjs/getLatestBlocksWithTxs';


export const useGetTXs = (address, n) =>{

    const [txs, setTxs] = React.useState([]);
    const [loadingTxs, setLoadingTxs] = React.useState(true);



   
    const onSuccess = (data) =>{

        //const obo =  data.filter()

        setTxs(data);
        setLoadingTxs(false);
   
    }
   
  
   
   
   React.useEffect( () =>{
       const fetchData = async () => {
           try {
               const txs = await getLatestBlocksWithTxs(n);
               return txs;
   
            }
            catch (e) {
                return Promise.reject(e);
            }
           
       }
   
       fetchData().then(onSuccess)
   
   }, [])
   
   return {txs, loadingTxs}
}
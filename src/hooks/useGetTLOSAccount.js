import React from 'react';


export const useGetTLOSAccount = (accountName) =>{
    const URL = `https://telos.caleos.io/v2/state/get_account?account=${accountName}`;

   const [account, setAccount] = React.useState();
   const [loadingAccount, setLoadingAccount] = React.useState(true);
   

   React.useEffect( ()=>{
       const fetchData  = async () =>{
           const response = await fetch(URL);
           const data = await response.json();


           setAccount(data);
           setLoadingAccount(false);
       }
       fetchData();
   }, [accountName])
   return {
       account,
       loadingAccount
    }
}
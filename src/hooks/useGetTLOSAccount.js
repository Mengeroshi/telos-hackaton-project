import React from "react";

export const useGetTLOSAccount = () => {
  const [data, setData] = React.useState({account:{account_name:''}});
  const [accountName, setAccountName] = React.useState('');
  const [loadingAccount, setLoadingAccount] = React.useState(true);
  const [url, setURL] = React.useState('https://telos.caleos.io/v2/state/get_account?account=richpoweidos');
 
  const letsSearch = () => {
      if(accountName === data.account.account_name)return;
      setLoadingAccount(true);
      setURL(`https://telos.caleos.io/v2/state/get_account?account=${accountName}`)
  }

  const fetchData = async () => {
    const response = await fetch(url);
    const dataRes = await response.json();


    try {
        setData(dataRes)
        setLoadingAccount(false);
        
    } catch (e) {
        console.log(e);
    }
  };

  React.useEffect(() => {fetchData();}, [url]);

  return {
    data,
    accountName,
    loadingAccount,
    setAccountName,
    letsSearch
  };
};

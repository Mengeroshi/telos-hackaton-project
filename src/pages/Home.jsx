import { useGetTLOSAccount } from "../hooks/useGetTLOSAccount"

export const Home  = ( ) =>{

    const {account, loadingAccount} = useGetTLOSAccount('richpoweidos');
    
    !loadingAccount? console.log(account) : console.log('loading...')

    return(
        <main>
            home
        </main>
    )
}
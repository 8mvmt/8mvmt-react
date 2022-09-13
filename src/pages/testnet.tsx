import { useStarknet } from '@starknet-react/core';
import { Navig } from '../components/home';
import { MaxBuyPerTx, MaxSupplyForMint, PaymentTokenAddress, ProjectNFTAddress, PublicSaleOpen, ReservedSupplyForMint, UnitPrice, WhitelistedSaleOpen, WhitelistMerkleRoot } from '../components/NFT';
import { ConnectButton, DisconnectButton } from '../components/Wallet';
import { MINTER_CONTRACT_ADDRESS } from '../contracts/addresses';

function Testnet() {
    const { account } = useStarknet();

    return (

        <>
        <div className='w-screen grid place-content-center justify-items-center'>
        <div className="max-w-screen-2xl  w-full  grid grid-cols-12 justify-items-center place-self-center justify-self-center px-20 bg-black min-h-screen content-start position relative">
        <Navig />
            <div className='bg-white col-span-12 w-full grid grid-cols-12 place-content-center z-10 mt-20'>
                <div className=' w-full grid justify-content-center' >
                    <h1 className='bg-sky-300 hover:bg-sky-200 my-5'>Starknet test page</h1>
                    { undefined !== account ? <DisconnectButton account={account} /> : <ConnectButton /> }
                </div>
                </div>
            </div>
            </div>
        </>

        
    );
}

export default Testnet;

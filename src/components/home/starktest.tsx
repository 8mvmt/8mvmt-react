import React, { Component } from 'react';
import { MINTER_CONTRACT_ADDRESS } from '../../contracts/addresses';
import { useStarknet } from '@starknet-react/core';
import { MaxBuyPerTx, MaxSupplyForMint, PaymentTokenAddress, ProjectNFTAddress, PublicSaleOpen, ReservedSupplyForMint, UnitPrice, WhitelistedSaleOpen, WhitelistMerkleRoot } from '../NFT';
import { ConnectButton, DisconnectButton } from '../Wallet';
const { account } = useStarknet();

class Starktest extends Component {
    render() {
        return (
            <div>
                <h1 className='bg-black'>This is the test page</h1>
            <h2>Connect my wallet</h2>
            { undefined !== account ? <DisconnectButton account={account} /> : <ConnectButton /> }
           
            <h2>account</h2>
 
            <p>{account}</p>

            
            </div>
        );
    }
}

export default Starktest;
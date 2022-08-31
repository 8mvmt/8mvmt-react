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
           
            <h2>Call contract</h2>
            <h3>project_nft_address</h3>
            <ProjectNFTAddress contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>payment_token_address</h3>
            <PaymentTokenAddress contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>whitelisted_sale_open</h3>
            <WhitelistedSaleOpen contractAddress={MINTER_CONTRACT_ADDRESS} />
            
            <h3>public_sale_open</h3>
            <PublicSaleOpen contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>max_buy_per_tx</h3>
            <MaxBuyPerTx contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>unit_price</h3>
            <UnitPrice contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>max_supply_for_mint</h3>
            <MaxSupplyForMint contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>reserved_supply_for_mint</h3>
            <ReservedSupplyForMint contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>whitelist_merkle_root</h3>
            <WhitelistMerkleRoot contractAddress={MINTER_CONTRACT_ADDRESS} />
            </div>
        );
    }
}

export default Starktest;
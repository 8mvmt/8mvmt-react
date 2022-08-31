import { useConnectors } from '@starknet-react/core';

export default function DisconnectWallet({ account }: { account: string }) {
    const { disconnect } = useConnectors();
    return (
        <div>
            <p>Account: {account}</p>
            <button className='bg-gray-200 rounded-full h-16 w-60 mx-2 bg-gradient-to-r justify-self-end hover:text-white hover:from-pink-500 hover:to-yellow-500' onClick={() => disconnect()}>Disconnect</button>
        </div>
    )
}
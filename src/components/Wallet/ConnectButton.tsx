import { useConnectors } from '@starknet-react/core';

export default function ConnectWallet() {
    const { available, connect } = useConnectors();
    return (
        <div>
            {available.map((connector) => (
                <button className='bg-gray-200 rounded-full h-16 w-60 mx-2 bg-gradient-to-r justify-self-end hover:text-white hover:from-pink-500 hover:to-yellow-500' key={connector.id()} onClick={() => connect(connector)}>
                {`Connect ${connector.name()}`} echh
                </button>

            ))}
        </div>
    )
    
}
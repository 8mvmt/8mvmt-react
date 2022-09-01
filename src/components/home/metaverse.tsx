import React, { Component } from 'react';
import { useSpring, animated } from "@react-spring/web";


function Metaverse()  {
    const props = useSpring({ loop : true,
        from: { rotateZ: 0 },
        to: { rotateZ: 90 },})
        return (
            
            <div className='  grid min-w-full grid-cols-12 grid-rows-6 justify-center content-center max-h-screen'>

                <div className='col-span-6 row-span-1 col-start-1 grid justify-start'>
                    <h2 className=' font-bold text-4xl'>NFTs INTEROPERABILITY</h2>
                </div>
                <div className='col-span-3 row-span-2 col-start-1 grid justify-center'>
                    <img src="/img/nft1.png" className='w-40' alt="" />
                </div>
                <div className='col-span-3 row-span-2 grid justify-center'>
                    <img src="/img/nft2.png" className='w-40' alt="" />
                </div>
                <div className='col-span-3 row-span-2 grid justify-center'>
                    <img src="/img/nft3.png" className='w-40' alt="" />
                </div>
                <div className='col-span-3 row-span-2 grid justify-center'>
                    <img src="/img/nft4.png" className='w-40' alt="" />
                </div>
                
                
                <div className='col-span-6 row-span-1 col-start-1 grid justify-start'>
                    <h2 className=' font-bold text-4xl'>GAMING INTEROPERABILITY</h2>
                </div>
                <div className='col-span-3 row-span-2 col-start-1 grid justify-center'>
                    <img src="/img/game1.png" className='w-40' alt="" />
                </div>
                <div className='col-span-3  grid justify-center'>
                    <img src="/img/game2.png" className='w-40' alt="" />
                </div>
                <div className='col-span-3  grid justify-center'>
                    <img src="/img/game3.png" className='w-40' alt="" />
                </div>
                <div className='col-span-3  grid justify-center'>
                    <img src="/img/game4.png" className='w-40' alt="" />
                </div>

                
            </div>
        );
    
}

export default Metaverse;
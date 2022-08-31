import React, { Component } from 'react';
import { useSpring, animated } from "@react-spring/web";


function Homeb1()  {
    const props = useSpring({ loop : true,
        from: { rotateZ: 0 },
        to: { rotateZ: 90 },})
        return (
            <div className=' col-span-12 pb-40 w-full grid grid-cols-12 grid-rows-6 justify-items-center place-centent-center content-center z-10 h-screen max-w-screen-xl'>
                <div className=' col-start-3 col-end-11 row-span-3   grid justify-center content-center  w-3/5' >
                    <img src="/img/wlogo.png" alt="" />
                </div>
              
                <div className='col-span-12 row-span-3 w-full grid  content-center h-4/5 place-self-center' >
                  
                  
                </div>
                
    
                <div className='grid col-start-12 col-span-1 row-span-1 justify-items-center place-content-center '> 
                <animated.div
                style={{
                    width: 80,
                    height: 80,
                    ...props
                }}>
                    <div className='grid justify-items-center'><h1 className="grid  justify-center content-center text-7xl font-extralight text-white">+</h1></div>
                </animated.div>
                </div>
                

            </div>
        );
    
}

export default Homeb1;
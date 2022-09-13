import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Navig extends Component {
    render() {
        return (
            <div className='invisible lg:visible w-full col-span-12 bg-white  bg-opacity-20 backdrop-blur-sm h-18 mt-10 px-8 rounded-full max-w-screen-xl'>
                <nav className='grid  h-16   grid-flow-col ' > 
                
                    <div className='grid content-center'>
                    <NavLink to="/">
                        <img
                        id="logo"
                        src="mvmt.png"
                        alt="carbonABLE"
                        className='h-12'
                        />
                    </NavLink>
                    </div>
                
                    <div className='grid content-center'>
                        <ul className=" grid grid-flow-col auto-cols-auto text-white font-extralight" >
                           
                        </ul>
                    </div>
                    <div className='grid content-center justify-self-end grid-flow-col gap-2'>
                    <a href="https://bit.ly/3L4jRud"  target="_blank">
                        <button className='bg-gray-200 rounded-full h-10 w-28 bg-gradient-to-r hover:text-white hover:from-pink-500 hover:to-yellow-500'>
                            Litepaper
                            <div className=''></div>
                        </button>
                        </a>
                        <NavLink to="/testnet">
                        <button className='bg-gray-200 rounded-full h-10 w-28 bg-gradient-to-r hover:text-white hover:from-pink-500 hover:to-yellow-500'>
                            testnet
                            <div className=''></div>
                        </button>
                        </NavLink>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navig;
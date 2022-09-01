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
                            <li className='w-full'>
                                <a href="#projects" className="  hover:text-green-400 hover:text-extr hover:-translate-y-1 hover:scale-110 transition ease-out duration-500 " >Projects</a>
                            </li>
                            <li className='w-full'>
                                <a href="#defi" className="  hover:text-green-400 hover:text-extr transition duration-300 " >NFTs</a>
                            </li>
                            <li className='w-full'>
                                <a href="#how" className="hover:text-green-400 hover:text-extr transition duration-300" >How it works</a>
                            </li>
                            <li className='w-full'>
                                <a href="https://medium.com/@carbonable" target="_blank" className="hover:text-green-400 hover:text-extr transition duration-300" >Blog</a >
                            </li>
                        </ul>
                    </div>
                    <div className='grid content-center justify-self-end'>
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
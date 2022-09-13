import React, { Component } from 'react';
import { useSpring, animated } from "@react-spring/web";


function Footer()  {
    const props = useSpring({ loop : true,
        from: { rotateZ: 0 },
        to: { rotateZ: 90 },})
        return (
            <div className='    grid w-screen  grid-flow-row z-10 '>
                    <div className=" bg-gray-200 my-20  w-screen grid  grid-flow-row  h-auto py-20     content-center justify-center place-content-center  text-black text-center">
                        <p className="  px-20 text-5xl font-extrabold uppercase"> LET’S RAISE <b className=' bg-gradient-to-r from-pink-500 to-yellow-500 px-2 '> MOVEMENT</b>  TO WHERE IT DESSERVE</p>
                        <p className=" px-20  text-2xl font-regular ">Join the community</p>
                        <br />
                        <button className=" w-60 h-10 rounded-full border-yellow-400 border-2 text-sm place-self-center ">COME ON STAGE</button>
                    </div>
                    <div className=" w-full col-span-12 row-span-6  flex flex-wrap justify-center content-center self-center justify-self-center text-white" >
                        <div className=" flex flex-col sm:flex-row w-4/5 sm:justify-between sm:content-around  " >
                        
                        <div className="flex flex-col justify-start content-center m-0 p-0">
                            <p className="font-black text-left text-base md:text-xl 2xl:text-2xl">
                            Let's talk
                            </p>
                            <br />
                            <p className="font-light text-left text-xs">Get in touch with us on discord</p>
                            

                            <br />
                            
                        </div>
                        
                        <div className="flex flex-col justify-start content-end mt-5 sm:m-0 p-0">
                            <p className="font-black text-left text-base md:text-xl 2xl:text-2xl">
                            Site
                            </p>
                            <div className=" flex flex-row justify-start content-center mt-4 font-light text-left text-sm " >
                            <ul className="text-left p-0">
                                <li>
                                <a href="#projects" className=" hover:font-extrabold hover:text-green-400 hover:-translate-y-1 hover:scale-110 transition ease-out duration-500 " >Projects</a>
                            </li>
                            <li>
                                <a href="#defi" className=" hover:font-black hover:text-green-400 transition duration-300 " >DeFi Yield</a>
                            </li>
                            <li>
                                <a href="#how" className="hover:text-green-400 transition duration-300" >How it works</a>
                            </li>
                            <li>
                                <a href="https://medium.com/@carbonable" target="_blank" className="hover:text-green-400 transition duration-300" >Blog</a >
                            </li>
                                <li>
                                <a href="https://carbonable.notion.site/carbonable/CarbonABLE-Lite-Paper-82bda161f3594964931b2be7d84429ff" target="_blank" className="hover:text-green-400 transition duration-300">
                                    Litepaper
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                     
                        <div className="flex flex-col justify-start content-end mt-5 sm:m-0 p-0">
                            <p className="font-black text-left text-base md:text-xl 2xl:text-2xl">
                            Press
                            </p>
                            <div className="flex flex-row justify-start content-center mt-4">
                            <a href="#"
                                ><p className="font-light text-left text-sm">Press releases</p>
                            </a>
                            </div>
                        </div>

                        
                        <div className="flex flex-col justify-start content-end mt-5 mb-5 sm:m-0 p-0">
                            bye
                        </div>
                        </div>
                        <div className=" grid grid-cols-2  my-4 py-4 border-t border-white w-11/12 " >
                        <div className="col-span-2 flex justify-self-center mt-4">
                            <img id="logo" src="mvmt.png" alt="carbonABLE" className="  self-end justify-self-end w-36 mx-5  object-contain" />
                        </div>
                        <div className="col-span-2 flex justify-self-center mt-4">
                            <p className="font-light text-sm ">
                            © 8mvmt- 2022
                            </p>
                        </div>
                    </div>
                </div>
                

             
            </div>
        );
    
}

export default Footer;
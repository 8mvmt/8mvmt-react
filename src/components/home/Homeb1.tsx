import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Homeb1 extends Component {
    render() {
        return (
            <div className='col-span-12  w-screen grid grid-flow-row lg:grid-cols-12 lg:justify-items-center lg:content-center z-10 h-screen max-w-screen-xl'>
                <div className='lg:col-span-5 mb-10 lg:w-3/5 grid justify-center content-center  ' >
                    <img src="/img/wlogo.png" alt="" />
                </div>
                <div className='lg:col-span-7 w-full grid grid-rows-6 gap-8 content-center h-4/5 place-self-center' >
                   <div className='row-span-3 grid justify-center content-center text-center text-6xl font-extrabold text-white'><h1>WE BUILD TECH TO MAKE ART MORE ACCESSIBLE</h1> </div>
                   <div className='row-span-3 grid '>
                        <div className='w-full grid grid-cols-2 place-content-center  content-center'>
                            
                            <button className='bg-gray-200 rounded-full h-16 w-40 lg:w-60  mx-2 bg-gradient-to-r justify-self-end hover:text-white hover:from-pink-500 hover:to-yellow-500'>
                            <NavLink to="/testnet"> Neat! Try tesnet </NavLink>
                            </button>
                            
                            <a href="https://bit.ly/3L4jRud"  target="_blank"><button className='bg-gray-200 rounded-full h-16 w-40 lg:w-60 mx-2 bg-gradient-to-r hover:text-white hover:from-pink-500 hover:to-yellow-500'>
                                read the Litepaper
                            </button> </a>
                            
                        </div>
                        
                        <div className='grid gap-x-8 gap-y-8 grid-cols-2 place-content-center justify-center w-2/5 justify-self-center'>
                        <div className='col-span-2 pt-4 w-full grid justify-center'><p className='text-white font-extralight  '>Powered by Starknet</p></div>
                            <svg className='justify-self-end' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FFFFFF" d="M16 32C24.8364 32 32 24.8367 32 16C32 7.16333 24.8364 0 16 0C7.16357 0 0 7.16333 0 16C0 24.8367 7.16357 32 16 32ZM26.8945 10.855C27.0557 11.0464 27.0293 11.3293 26.8364 11.4883L25.3359 12.7083C25.2334 12.7927 25.1733 12.9177 25.1729 13.0496V13.8313C25.1826 17.5935 23.2861 21.1116 20.1226 23.2012C18.228 24.4077 16.0166 25.032 13.7651 24.9988C11.2046 24.9404 8.68506 24.3501 6.37158 23.2649C6.12109 23.2156 5.9585 22.9749 6.00928 22.7268C6.05908 22.478 6.30273 22.3171 6.5542 22.3674C7.89014 22.3801 9.21533 22.1267 10.4507 21.6218C10.5142 21.5994 10.5645 21.55 10.5879 21.488C10.6304 21.3711 10.5698 21.2427 10.4526 21.2004C9.17188 20.9741 8.08545 20.1414 7.5459 18.9727C7.54053 18.9609 7.53516 18.9492 7.53076 18.9375C7.43799 18.7065 7.55078 18.4453 7.78516 18.3545L8.26611 18.1658C8.3125 18.1433 8.3501 18.1064 8.37256 18.0615C8.42725 17.9502 8.37988 17.8164 8.26709 17.7625C7.06494 17.0125 6.27295 15.7627 6.11475 14.3667C6.104 14.3145 6.10303 14.2615 6.11182 14.2095C6.15186 13.9641 6.38525 13.7981 6.6333 13.8376L7.65039 14.0352C7.69678 14.0415 7.74414 14.0342 7.78662 14.0137C7.89844 13.958 7.94385 13.8232 7.8877 13.7126C7.25293 12.3264 7.10547 10.7705 7.46973 9.29272C7.48047 9.12842 7.58154 8.98364 7.7334 8.91553C7.81885 8.89258 7.90723 8.89502 7.98877 8.91968C8.06689 8.94336 8.13867 8.98779 8.19629 9.05029C10.8306 12.0515 13.2734 13.3362 15.8257 13.0398C15.894 13.0312 15.9517 12.9937 15.9873 12.9407C16.0117 12.9045 16.0254 12.8613 16.0254 12.8152V12.4917C16.0254 10.0105 18.0581 8 20.5669 8C21.5488 8 22.5049 8.31445 23.2915 8.89844C23.4053 8.98291 23.5532 9.00977 23.6914 8.97021L25.5078 8.46704C25.5605 8.45312 25.6147 8.44873 25.668 8.45361C25.7212 8.4585 25.7734 8.4729 25.8228 8.49683C26.0493 8.60449 26.1436 8.87329 26.0356 9.09692L25.6357 9.89648C25.623 9.92334 25.6133 9.95117 25.606 9.98096C25.5449 10.2217 25.6929 10.4651 25.9365 10.5261L26.6538 10.7058C26.7476 10.7283 26.832 10.7805 26.8945 10.855Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="32" height="32" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                             <path fill="#FFFFFF" d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                            </svg>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Homeb1;
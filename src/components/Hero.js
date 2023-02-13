import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>A all in one Crypto-Currency Website</p>
                    <h1>Stay up-to-date with your favourite <span className='hero-span'>Crypto's</span></h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
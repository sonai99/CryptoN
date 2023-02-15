import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <h1>Crypto<span className='primary'>N</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link
                        activeClass='active'
                        to='home'
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                    <Link
                        activeClass='active'
                        to='featured'
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={500}>
                            Featured
                        </Link>
                    </li>
                    <li>
                    <Link
                        activeClass='active'
                        to='coins'
                        smooth={true}
                        spy={true}
                        offset={-100}
                        duration={500}>
                            Coins
                        </Link>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar

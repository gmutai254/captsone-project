import React, { useState } from 'react';
import logo from '../Logo .svg';
import hamburger from '../images/icon _hamburger menu.svg';

function Nav() {
      const[menuOpen, setMenuOpen] = useState(false);

      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      }

    return (
        <nav className= {`navbar ${menuOpen? "open":""}`}>
            <a href='/' className='logo'>
                <img src={logo} alt='logo' />
            </a>

            {/*mobile navbar*/}
            <div className='menu-icon' onClick={toggleMenu}>
                <a href='/' >
                    <img src={hamburger} alt='hamburger icon' />
                </a>
            </div>
            {/*Nav items */}
            <ul className={`nav-links ${menuOpen? "visible": ""}`}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Reservations</a>
                </li>
                <li>
                    <a href='/'>Order Online</a>
                </li>
                <li>
                    <a href='/'>Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
import React from 'react'
import '../components/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <span className='navbar__logo'>Tunes Block</span>
        <ul className='navbar__list'>
                    <li className='navbar__item'>
                        <a className='navbar__link' href="">
                            Home
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a className='navbar__link' href="">
                            Profile
                        </a>
                    </li>
        </ul>
    </nav >
)
}

export default Navbar
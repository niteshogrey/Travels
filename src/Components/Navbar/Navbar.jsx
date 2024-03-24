import React from 'react'
import './navbar.css'
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { useState } from 'react'

const Navbar = () => {

    const [active, setActive] = useState('navBar')

    // funtion to toggle navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    
    // Function to remove navbar
    const removeNav = () => {
        setActive('navBar')
    }

  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className="logodiv">
                <a href="a" className='logo flex'>
                    <h1> <MdTravelExplore className="icon" /> Travel.</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItems">
                        <a href="/" className="navLinks">Home</a>
                    </li>
                    <li className="navItems">
                        <a href="/" className="navLinks">Packeges</a>
                    </li>
                    <li className="navItems">
                        <a href="/" className="navLinks">Shop</a>
                    </li>
                    <li className="navItems">
                        <a href="/" className="navLinks">About</a>
                    </li>
                    <li className="navItems">
                        <a href="/" className="navLinks">Pages</a>
                    </li>
                    <li className="navItems">
                        <a href="/" className="navLinks">News</a>
                    </li>
                    <li className="navItems">
                        <a href="/" className="navLinks">Contact</a>
                    </li>

                    <button className='btn'>
                        <a href="/">Book Now</a>
                    </button>
                </ul>
                <div onClick={removeNav} className="closeNavbar">
                <IoIosCloseCircle className='icon' />
                </div>
            </div>
            <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon' />
            </div>
        </header>
    </section>
  )
}

export default Navbar
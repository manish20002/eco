import React from 'react'
import './navbars.css';
import logo from './images/logorb.png'

export default function navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div>
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="logo"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-11 text-white rounded-full" viewBox="0 0 24 24" />
              <a href='/Home' className="ml-3 text-xl">EcofeastEssentials</a>
            </div>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="nav-item active mr-5 hover:text-gray-900" href='/Home'>Home</a>
            <a className="nav-item mr-5 hover:text-gray-900" href='/About'>About Us</a>
            <a className="nav-item mr-5 hover:text-gray-900" href='/Team'>Team</a>
            <a className="nav-item mr-5 hover:text-gray-900" href='coins'>Product</a>
            <a className="nav-item mr-5 hover:text-gray-900" href='contact'>Contact Us</a>
          </nav>
        </div>
      </header>
    </div>
  )
}

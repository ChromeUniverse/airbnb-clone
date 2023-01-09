import React from 'react'

import airbnb from '../assets/airbnb.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <img className='navbar-img' src={airbnb} alt="" />
    </nav>
  )
}

export default Navbar
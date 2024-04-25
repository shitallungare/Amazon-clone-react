import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav_tabs'>
        <Link className='tab_link' to='/'>Home</Link>
        <Link className='tab_link' to="/books">Books and Magzine</Link>
        <p className='tab_link'>Movies</p>
        <p className='tab_link'>Music</p>
        <p className='tab_link'>Prime Videos</p>
        <p className='tab_link'>Softwares</p>
        <p className='tab_link'>Video Games</p>
        <p className='tab_link'>Top Deals</p>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import brand_logo from '../asset/images/amazon_logo.png'
import prime_logo from '../asset/images/primevideo_logo.png'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header_container'>
      <div className='header'>
        <div className='head_tabs'>
          
          <Link to='/' className='brand_logo border'>
            <img src={brand_logo} alt="amazon_logo" />
          </Link>

          <div className='user_location border'>
            <i class="fa-solid fa-location-dot"></i>
            <div className='location'>
              <small>Deliver to Omkar</small>
              <p>Moshi,Pune 412105</p>
            </div>
          </div>

          <div className='search_bar'>
            <select name="" id="mySelect">
              <option value="all">All</option>
              <option value="books_magzine">Books and Magzine</option>
              <option value="movies_tv">Movies & TV</option>
              <option value="music_cd">Music,CDs</option>
              <option value="prime_video">Prime Videos</option>
              <option value="softwares">Softwares</option>
              <option value="video_game">Video Games</option>
              <option value="deals">Deals</option>
            </select>
            <input type="search" name="" id="" />
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>

          <div className='prime_logo'>
            <img src={prime_logo} alt="prime_logo" />
          </div>

          <div className='user_signin border'>
            <div>
              <small>hello,Omkar</small>
              <p>Account & Lists</p>
            </div>
            <i class="fa-solid fa-angle-down"></i>
          </div>

          <div className='user_orders border'>
            <div>
            <small>Returns</small>
            <p>& Orders</p></div>
          </div>

          <div className='user_cart border'>
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <p>Cart</p>
          </div>

        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Header
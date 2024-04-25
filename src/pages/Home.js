import React from 'react'
import img from '../asset/images/img.jpg'
import Scroll from '../components/Scroll'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <Scroll />
      <div className='welcome'>
        <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
          <a href="https://www.amazon.in/"> Click here to go to amazon.in</a></p>
      </div>

      <Link to='/books' className='adv'>
        <img src={img} alt="img" /></Link>

    </div>
  )
}

export default Home
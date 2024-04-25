import React from 'react'
import BookCard from '../components/BookCard'
import BookNav from '../components/BookNav'

const Books = () => {
  return (
    <div className='book_page'>
      <BookNav />
      <div className='book_heading'>
        <strong>Books at Amazon Store</strong>
        <small>Our best-selling new and future releases. Updated frequently.</small>
      </div>
      <div className='book_section'>
        <h1>Best Sellers</h1>
        <div className='book_container'>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </div>
  )
}

export default Books
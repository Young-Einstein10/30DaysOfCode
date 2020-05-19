import React from 'react'
import Toggler from './Toggler/Toggler'

const Navbar = ({ onToggle }) => {
  return (
    <nav className="">
      <div className="container">
          <p>Powered By <a href="https://newsapi.org/">News API</a> </p>
          <p className="latest-news">
            Latest News Across Nigeria
          </p>
        <Toggler handleToggle={onToggle} />
      </div>
      
    </nav>
  )
}

export default Navbar

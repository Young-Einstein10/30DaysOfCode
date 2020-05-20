import React from 'react'
import Sun from '../assets/sun.svg';
import Moon from '../assets/half-moon.svg';

const Navbar = ({ onToggle, theme }) => {
  return (
    <nav className="">
      <div className="container">
          <p>Powered By <a href="https://newsapi.org/">News API</a> </p>
          <p className="latest-news">
            Latest News Across Nigeria
          </p>
        {/* <Toggler handleToggle={onToggle} /> */}
        <button onClick={onToggle}>
          {theme === 'light' ? <img src={Sun} alt="Toggle Icon" /> : <img src={Moon} alt="Toggle Icon" />}
        </button>
      </div>
      
    </nav>
  )
}

export default Navbar

import React from 'react';
import './Toggler.css';

const Toggler = ({ handleToggle }) => {
  return (
    <span className="toggleWrapper">
      <input type="checkbox" className="dn" id="dn"/>
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler" onClick={handleToggle}>
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </span>
  )
}

export default Toggler

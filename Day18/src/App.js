import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
    } else {
      setTheme('theme-light');
    }
  }, []);

  // function to set a given theme/color-scheme
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  // function to toggle between light and dark theme
  function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
    } else {
      setTheme('theme-dark');
    }
  }

  return (
    <div className="">
      <Navbar onToggle={toggleTheme} /> 
      <Dashboard />    
    </div>
  );
}

export default App;

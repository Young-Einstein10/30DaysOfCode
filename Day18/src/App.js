import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  const [themeState, setThemeState] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setThemeState('dark');
      setTheme('theme-dark');
    } else {
      setThemeState('light');
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
      setThemeState('light');
      setTheme('theme-light');
    } else {
      setThemeState('dark')
      setTheme('theme-dark');
    }
  }

  return (
    <div className="">
      <Navbar onToggle={toggleTheme} theme={themeState} /> 
      <Dashboard />    
    </div>
  );
}

export default App;

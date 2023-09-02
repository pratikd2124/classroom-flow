import React, {  useEffect, useState } from 'react'
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'  
import '../index.css';


const Togglebutton = () => {

  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark', 'light'); // Remove both classes
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };


  return (
      <>
      
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple fill-current w-6 h-6"
              onClick={toggleTheme}
              aria-label="Toggle color mode"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          
      </>
  );
};

export default Togglebutton;




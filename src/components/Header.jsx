 import React, { useContext } from 'react'
 import DarkModeContext from '../context/DarkModeContext';

export const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)

  const handleMode = () => {
    setDarkMode(!darkMode)
  }


  return (
    <header className={`header header--${darkMode ? "dark" : "light"}`}>
      <h1>Rick and Morti API</h1>
      <button type="button" onClick={handleMode}>{darkMode ?  "Dark Mode" : "Light Mode"}</button>
    </header>
  )
}

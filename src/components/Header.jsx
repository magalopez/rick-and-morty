import React, { useState } from 'react'

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`header header--${darkMode ? "dark" : "light"}`}>
      <h1>Rick and Morti API</h1>
      <button type="button" onClick={handleMode}>{darkMode ?  "Dark Mode" : "Light Mode"}</button>
    </div>
  )
}

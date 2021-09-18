import React, { useState } from 'react'

const DarkModeContext = React.createContext({})

export const DarkModeContextProvider = ({children}) => {
  const [ darkMode, setDarkMode ] = useState(false)

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeContext
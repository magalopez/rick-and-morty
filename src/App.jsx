import React, { useContext } from 'react'
import Characters from './components/Characters';
import { Header } from './components/Header';
import DarkModeContext from './context/DarkModeContext';

function App() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <>
      <Header />
      <section className={`content content--${darkMode ? "dark" : "light"}`}>
        <Characters />
      </section>
    </>
  );
}

export default App;

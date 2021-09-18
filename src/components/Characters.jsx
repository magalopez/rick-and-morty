import React, { useState, useContext, useEffect, useReducer } from 'react'
import Card from './Card'
import DarkModeContext from '../context/DarkModeContext';

const initialState = {
  favorites : []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVE' : 
    return {
      ...state,
      favorites : [...state.favorites, action.payload]
    }
    default : 
    return state
  }
}

const Characters = () => {
  const [ characters, setCharacters ] = useState([])
  const [ state, dispatch ] = useReducer(favoriteReducer, initialState)
  const { darkMode } = useContext(DarkModeContext)
  const { favorites } = state

  useEffect(() =>{
    fetch("https://rickandmortyapi.com/api/character/")
    .then(response => response.json())
    .then(data => {
      console.log(`data`, data)
      setCharacters(data.results)
    })
  },[])

  const handleAddFavorite = favorite => {
    dispatch({ type: 'ADD_TO_FAVE', payload : favorite})
  }

  return (
    <div className="container">
      {favorites.length > 0 && (
        <div>
          <h2>Favorites Characters</h2>
          <div className="favorites">
          {favorites.map((character, index) => (
            <img src={character.image} key={index} />
            ))}
          </div>
        </div> )}
      <div>
        <h2>Characters</h2>
        <div className={`characters characters--${darkMode ? "dark" : "light"}`}>
          {characters.map((character, index) => (
            <Card 
            customClass={darkMode ? "dark" : "light"}
            key={index}
            image={character.image}
            name={character.name}
            species={character.species}
            location={character.location?.name}
            origin={character.origin?.name}
            handleAddFavorite={()=> handleAddFavorite(character)}  />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Characters

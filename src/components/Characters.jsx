import React, { useState, useContext, useReducer, useMemo, useRef, useCallback } from 'react';
import Card from './Card';
import DarkModeContext from '../context/DarkModeContext';
import Search from './Search';
import useCharacters from '../hooks/useCharacters';

const API = "https://rickandmortyapi.com/api/character/";
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
  const characters = useCharacters(API)
  const [ search , setSearch ] = useState("")
  const { darkMode } = useContext(DarkModeContext)
  const [ state, dispatch ] = useReducer(favoriteReducer, initialState)
  const { favorites } = state
  const searchInput = useRef(null)

  const handleAddFavorite = favorite => {
    dispatch({ type: 'ADD_TO_FAVE', payload : favorite})
  }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])

  const filteredCharacters = useMemo(() => characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase())), [characters, search]) 

  return (
    <div className="container">
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch} />
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
          {filteredCharacters.map((character, index) => (
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

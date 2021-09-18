import React, {useState, useEffect} from 'react'
import Card from './Card'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() =>{
    fetch("https://rickandmortyapi.com/api/character/")
    .then(response => response.json())
    .then(data => {
      console.log(`data`, data)
      setCharacters(data.results)
    })
  },[])

  return (
    <div className="characters">
      {characters.map((character, index) => (
        <Card 
          key={index}
          image={character.image}
          name={character.name}
          species={character.species}
          location={character.location?.name}
          origin={character.origin?.name}  />
      ))}
    </div>
  )
}

export default Characters

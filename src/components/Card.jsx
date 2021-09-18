import React from 'react'

const Card = (props) => {
  const { customClass, key, image, name, species, location, origin, handleAddFavorite } = props

  return (
    <section className={`card ${customClass}`} key={key}>
      <img src={image} className="card__image"></img>
      <section className="card__info">
        <div className="card__info--top">
          <h2>{name}</h2>
          <span>{species}</span>
        </div>
        <div className="card__info--mid">
          <span>Last known location:</span>
          <p>{location}</p>
        </div>
        <div className="card__info--mid">
          <span>Origin:</span>
          <p>{origin}</p>
        </div>
      </section>
      <button className="card__button" type="button" onClick={handleAddFavorite}>Fave</button>
    </section>
  )
}

export default Card

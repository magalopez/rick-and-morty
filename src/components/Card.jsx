import React from 'react'

const Card = (props) => {
  const { key, image, name, species, location, origin } = props

  return (
    <section className="card" key={key}>
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
    </section>
  )
}

export default Card

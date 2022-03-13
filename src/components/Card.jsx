import React from 'react'

const Card = ({title, thumbnail, short_description,genre}) => {

  return (
    <div className='card'>
      <div className="card-header">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="card-body">
        <span class="tag">{genre}</span>
        <h4>{title}</h4>
        <p>{short_description}</p>
      </div>
    </div>
  )
}

export default Card
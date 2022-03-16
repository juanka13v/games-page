import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({title, thumbnail, short_description,genre, _id}) => {

  return (
    <Link to={`/game/${_id}`} style={{textDecoration: "none"}}>
      <div className='card'>
      <div className="card-header">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="card-body">
        <span className="tag">{genre}</span>
        <h4>{title}</h4>
        <p>{short_description}</p>
      </div>
    </div>
    </Link>
  )
}

export default Card
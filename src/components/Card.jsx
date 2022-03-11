import React from 'react'

const Card = ({title, thumbnail, short_description,genre}) => {

  return (
    <div className='card'>
      <img className='card_img' src={thumbnail} alt={title} />
      <div className='card_content'>
        <h2 className='card_title'>{title}</h2>
        <p className='card_description'>
          {short_description}
        </p>
      </div>
      <div className='card_tag'>
        {genre}
      </div>
    </div>
  )
}

export default Card
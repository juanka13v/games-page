import React from 'react'

import icono from '../assets/icons/cloud-error.svg'

const Error = () => {
  return (
    <div className='container-error'>
        <img src={icono} alt="cloud error" />
        <h3>Oh something wrong...</h3>
        <p>There was an error loading games data!</p>
        <p>Please try again later</p>
    </div>
  )
}

export default Error
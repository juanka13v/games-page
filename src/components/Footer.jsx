import React from 'react';

const Footer = () => {
  return (
    <div className='container_footer'>
        <div className="footer_redes">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-solid fa-envelope"></i>
        </div>
        <ul className="footer_links">
          <li>© All rights reserved.</li>
          <li>Code: <a href="#">Github</a></li>
          <li>Contacto: <a href="#">Portafolio</a></li>
        </ul>
    </div>
  )
}

export default Footer
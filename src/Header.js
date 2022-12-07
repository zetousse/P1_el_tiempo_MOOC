import React from 'react'
import logo from './logo192.png';

function Header() {
  return (
    <div id='cabecera'>
        <img className='logo' src={logo} alt="hola"></img>
        <h3 className='mensaje'> guillermo sanchez recuero
        </h3>
    </div>
  )
}

export default Header
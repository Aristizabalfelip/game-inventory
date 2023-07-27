import React from 'react'
// import { handleClick } from '../assets/s'

export const Buttons = ({ name, handleClick }) => {


  

  return (
    <button onClick={handleClick}>{name}</button>
    
  )
}
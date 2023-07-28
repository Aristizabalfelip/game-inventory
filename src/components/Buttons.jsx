import React from 'react'


export const Buttons = ({ name, handleClick }) => {


  

  return (
    <button onClick={handleClick}>{name}</button>
    
  )
}
import React from 'react'
import {nameFuntion} from '../utils/conditiButt'
import { Link } from 'react-router-dom'


export const Buttons = ({ name, handleClick }) => {
  

  return (
    <>
    <button className='rounded ... bg-slate-400 p-1 text-white' onClick={handleClick}>
   
       {
      name === 'Inventory'   ? name :
       <img className='h-12	p-2' src={nameFuntion(name)} alt="" />
       
    }
     </button>
    
     </>
    
  )
}
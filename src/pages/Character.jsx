import React from 'react'
import { valuesFuntion } from '../utils/condiValues'


export const Character = ({ parts }) => {







 














  const divLeft = (word) => {
    const result = parts?.find(obj => obj.category === word)
    return result ? result.icon : ''
  }
  const divRight = (word) => {
    const result = parts?.find(obj => obj.category === word)
    return result ? result.icon : ''
  }
  const divCenterUp = (word) => {
    const result = parts?.find(obj => obj.category === word)
    return result ? result.icon : ''
  }
  const divCenterCenter = (word) => {
    const result = parts?.find(obj => obj.category === word)
    return result ? result.icon : ''
  }
  const divCenterDown = (word) => {
    const result = parts?.find(obj => obj.category === word)
    return result ? result.icon : ''
  }
  return (
    <>
      <div className='flex items-center '>
        <div className="contenedor">
          <div className="lado-izquierdo flex items-center  justify-center"><img className='h-14 ' src={divLeft('weapon')} alt="" /></div>
          <div className="centro">
            <div className='flex items-center  justify-center'><img className='h-14 ' src={divCenterUp('helm')} alt="" /></div>
            <div className='flex items-center  justify-center'><img className='h-14 ' src={divCenterCenter('armor')} alt="" /></div>
            <div className='flex items-center  justify-center'><img className='h-14 ' src={divCenterDown('greave')} alt="" /></div>
          </div>
          <div className="lado-derecho flex items-center  justify-center"><img className='h-14 ' src={divRight('shield')} alt="" /></div>
        </div>
        <div className='mr-96 text-cyan-50'>
          <p>Name: Elque</p>
          <p>Attack: {valuesFuntion(parts, 'weapon')} </p>
          <p>Defense: {valuesFuntion(parts, 'defense')}</p>
          <p>Armor: {valuesFuntion(parts, 'armor') }</p>
        </div>
      </div>
    </>
  )
}

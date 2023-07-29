import React, { useContext } from 'react'
import { PartsContext } from './Inventory'

export const SelectedItems = () => {

  const { parts } = useContext(PartsContext)

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
    <div className="contenedor">
      <div className="lado-izquierdo"><img src={divLeft('weapon')} alt="" /></div>
      <div className="centro">
        <div><img  src={divCenterUp('helm')} alt=""  height="96" /></div>
        <div><img src={divCenterCenter('armor')} alt="" /></div>
        <div><img src={divCenterDown('greave')} alt="" height="96" /></div>
      </div>
      <div className="lado-derecho"><img src={divRight('shield')} alt="" /></div>
    </div>
  )
}

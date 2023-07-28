import React, { useContext } from 'react'
import { SelectContext } from './Inventory'


export const Option = () => {

  const { select } = useContext(SelectContext)



  const handleEquip = () => {

  }

  return (
    <div>
      <ul>
        <button onClick={handleEquip}>Equip</button>
        <button>Throw</button>
        <button>Cancel</button>
      </ul>
    </div>
  )
}

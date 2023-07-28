import React, { useContext } from 'react'
import { SelectContext } from './Inventory'



export const Option = ({ setParts}) => {

  const { select } = useContext(SelectContext)


  const handleEquip = () => {

    setParts(prev => {
      const holdPrev = [...prev]
      const index = holdPrev.findIndex(obj => obj.category === select.category)   
      if (index != -1) {
        holdPrev[index] = {...select}
      }else{
        holdPrev.push({...select})
      }
      return holdPrev
    })

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

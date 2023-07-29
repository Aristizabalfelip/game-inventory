import React, { useContext } from 'react'
import { SelectContext } from './Inventory'

export const Option = ({ setParts, parts, setShowcomponent,setTypes,types,setArray,array}) => {

  const { select } = useContext(SelectContext)

  const handleEquip = () => {
    if (!parts.map(obj => obj.name).includes(select.name)) {
      setParts(prev => {
        const holdPrev = [...prev]
        const index = holdPrev.findIndex(obj => obj.category === select.category)
        if (index !== -1) {
          holdPrev[index] = { ...select }
        } else {
          holdPrev.push({ ...select })
        }
        return holdPrev
      })
      setShowcomponent(false)
    } else {
      setParts(parts.filter((obj => obj.name !== select.name)) )
    }
  }

  const nameButton = () => { 
    if (parts.map(obj => obj.name).includes(select.name)) {
      return 'Unequip'
    }
    return 'Equip'
  }

  const handleThrow = () => {

   
   if (types.map(obj => obj.category).includes('armor' || 'helm' || 'greave')) {
   
    const newState = {...array}
    newState.armors = array.armors.filter((obj => obj.name !== select.name))
    setArray(newState)

   }else if (types.map(obj => obj.category).includes('weapon')) {

    const newState = {...array}
    newState.weapons = array.weapons.filter((obj => obj.name !== select.name))
    setArray(newState)

   } else {

    const newState = {...array}
    newState.shields = array.shields.filter((obj => obj.name !== select.name))
    setArray(newState)

   }
  }

  const handleCancel = () => {
    setShowcomponent(false)
  }


  return (
    <div>
      <ul className='flex flex-col border p-3 items-start gap-1 bg-slate-900 text-white'>
        <button className= 'p-2 border w-16'onClick={handleEquip}>{nameButton()}</button>
        <button className= 'p-2 border w-16'onClick={handleThrow}>Throw</button>
        <button className= 'p-2 border w-16'onClick={handleCancel}>Cancel</button>
      </ul>
    </div>
  )
}

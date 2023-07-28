import React, { createContext, useContext, useEffect, useState } from 'react'
import { Buttons } from './Buttons'
import { ArrayContext } from './Home'
import { handleClick } from '../utils/conditiButt'
import { Paint } from './Paint'
import Info from './Info'
import { SelectedItems } from './SelectedItems'
import { Option } from './Option'

export const SelectContext = createContext();
export const PartsContext = createContext();

export const Inventory = () => {
    const { array } = useContext(ArrayContext)

    const [types, setTypes] = useState(array.weapons)
    const [select, setSelect] = useState({})
    const [showcomponent, setShowcomponent] = useState(false);
    const [parts, setParts] = useState([])

    useEffect(() => {
        if (array) {
            setTypes(array.weapons)
        }
    }, [array])




    return (
        <>
            <div>
                <Buttons name={'weapons'} handleClick={() => setTypes(handleClick('weapons', array))} />
                <Buttons name={'shields'} handleClick={() => setTypes(handleClick('shields', array))} />
                <Buttons name={'armors'} handleClick={() => setTypes(handleClick('armors', array))} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap:' 5px'}}>
                    {
                        types?.map((inventory, i) => {
                            return <Paint
                                key={i}
                                inventory={inventory}                                                                                                                          img={inventory.icon}
                                value={inventory.value}
                                setSelect={setSelect} 
                                select = {select} 
                                setShowcomponent={setShowcomponent}
                                />
                        })
                    }
                
                        <SelectContext.Provider value={{ select }}>
                            {showcomponent && <Option
                                setParts={setParts}
                                parts={parts} />}
                        </SelectContext.Provider>
                    
                    < PartsContext.Provider value={{parts}}>
                        <SelectedItems />
                    </PartsContext.Provider>
                </div>

            </div>
            <div>
                <Info select={select} />
            </div>

        </>
    )
}

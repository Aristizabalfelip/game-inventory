import React, { createContext, useContext, useEffect, useState } from 'react'
import { Buttons } from './Buttons'
import { ArrayContext } from './Home'
import { handleClick } from '../utils/conditiButt'
import { Paint } from './Paint'
import Info from './Info'
import { SelectedItems } from './SelectedItems'
import { Option } from './Option'

export const SelectContext = createContext();

export const Inventory = () => {
    const { array } = useContext(ArrayContext)

    const [types, setTypes] = useState(array.weapons)
    const [select, setSelect] = useState([])
    const [showcomponent, setShowcomponent] = useState(false);


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
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        types?.map((inventory, i) => {
                            return < Paint
                                key={i}
                                name={inventory.name}
                                category={inventory.category}
                                stats={inventory.stats}
                                description={inventory.description}
                                img={inventory.icon}
                                value={inventory.value}
                                array={array}
                                setSelect={setSelect}
                                select={select}
                                setShowcomponent={setShowcomponent}
                                showcomponent={showcomponent}

                            />
                        })

                    }
                    {
                        <SelectContext.Provider value={{select}}>
                            {showcomponent && <Option />}
                        </SelectContext.Provider>
                    }
                    <SelectedItems />
                </div>

            </div>
            <div>

                <Info select={select} />

            </div>

        </>
    )
}

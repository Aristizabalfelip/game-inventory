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

export const Inventory = ({ setArray,setStateParts }) => {
    const { array } = useContext(ArrayContext)



    const [types, setTypes] = useState(array?.weapons)
    const [select, setSelect] = useState({})
    const [showcomponent, setShowcomponent] = useState(false);
    const [showInfo, setShowInfo] = useState(false)
    const [parts, setParts] = useState([])
    setStateParts(parts)



    useEffect(() => {
        if (select.category) {
            setTypes(array[select.category + 's'])
            if (select.category + 's' === 'helms' ||  select.category + 's' === 'armors' || select.category + 's' === 'greaves') {
                setTypes(array['armors'])
            }
        } else {
            setTypes(array.weapons)
        }
    }, [array])

    return (
        < >
            <div className='flex justify-center'>
                    <div className='flex gap-2 flex-wrap w-96  justify-center h-[600px] '>
                        <div className='flex gap-7 p-2 h-[71px]'>
                            <Buttons name={'weapons'} handleClick={() => setTypes(handleClick('weapons', array))} />
                            <Buttons name={'shields'} handleClick={() => setTypes(handleClick('shields', array))} />
                            <Buttons name={'armors'} handleClick={() => setTypes(handleClick('armors', array))} />
                        </div>
                        <div className='flex gap-2 flex-wrap justify-center content-start   p-[4px]  h-[500px] '>
                        {
                            types?.map((inventory, i) => {
                                return <Paint
                                    key={i}
                                    inventory={inventory} img={inventory.icon}
                                    value={inventory.value}
                                    setSelect={setSelect}
                                    select={select}
                                    setShowcomponent={setShowcomponent}
                                    parts={parts}
                                    setShowInfo={setShowInfo}
                                />
                            })
                        }
                        </div>
                    </div>

                    <SelectContext.Provider value={{ select }}>
                        {showcomponent && <Option
                            setParts={setParts}
                            parts={parts}
                            setShowcomponent={setShowcomponent}
                            setTypes={setTypes}
                            types={types}
                            setArray={setArray}
                            array={array}
                        />}
                    </SelectContext.Provider>

                    <div className='flex flex-col ml-40 gap-7 h-[900px]'>
                        <div>
                            < PartsContext.Provider value={{ parts }}>
                                <SelectedItems />
                            </PartsContext.Provider>
                        </div>
                        <div>
                            {showInfo && <Info
                                select={select}
                                parts = {parts}
                            />}
                        </div>
                    </div>
                </div>
        </>
    )
}

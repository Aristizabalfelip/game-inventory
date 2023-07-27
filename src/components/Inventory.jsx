import React, { useContext, useDebugValue, useEffect, useState } from 'react'
import { Buttons } from './Buttons'
import { ArrayContext } from './Home'
import { handleClick } from '../utils/conditiButt'
import { Paint } from './Paint'
import Info from './Info'
import { SelectedItems } from './SelectedItems'
import { Option } from './Option'

export const Inventory = () => {
    const { array } = useContext(ArrayContext)

    const [types, setTypes] = useState(array.weapons)
    const [select, setSelect] = useState([])
    const [items, setItems] = useState({})
    const [mostrarComponente, setMostrarComponente] = useState(false);

console.log(select);




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
                                setMostrarComponente= {setMostrarComponente}
                                mostrarComponente = {mostrarComponente}
                            />
                        })
                  
                    }
                    {mostrarComponente && <Option/>}
                    <SelectedItems/>
                </div>

            </div>
            <div>
                    <Info select={select}/>
            </div>
           
        </>
    )
}

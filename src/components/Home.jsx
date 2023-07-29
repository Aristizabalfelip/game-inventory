import React, { createContext, useEffect, useState } from 'react'
import { Buttons } from './Buttons'
import { Inventory } from './Inventory'
import { awaitFunction } from '../utils/awaitFun'
import { ButtonPage } from './ButtonPage';

export const ArrayContext = createContext();

export const Home = ({setStateParts}) => {

    const [array, setArray] = useState([])

    useEffect(() => {
        awaitFunction('https://practise-game-inventory.vercel.app/api/items').then(res => setArray(res))
    }, [])


    return (
        <div className='flex flex-col gap-8' >
            <header className='flex justify-center font-sans text-4xl font-extrabold text-white'>Game Inventory Mini Project</header>
            <div className='flex justify-center gap-7 p-2'>
                < Buttons name={'Inventory'} />
                < ButtonPage />
            </div>
            < ArrayContext.Provider value={{ array }}>
                < Inventory
                    setArray={setArray}
                    setStateParts =  {setStateParts} />
            </ArrayContext.Provider>

        </div>
    )
}

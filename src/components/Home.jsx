import React, { createContext, useEffect, useState } from 'react'
import { Buttons } from './Buttons'
import { Inventory } from './Inventory'
import { awaitFunction } from '../utils/awaitFun'

export const ArrayContext = createContext();

export const Home = () => {

    const [array, setArray] = useState([])

    useEffect(() => {
        awaitFunction('https://practise-game-inventory.vercel.app/api/items').then(res => setArray(res))
    }, [])


    return (
        <div>
            <header>Game Inventory Mini Project</header>
            < Buttons name={'Inventory'} />
            < Buttons name={'Character'} />
            < ArrayContext.Provider value={{ array }}>
                < Inventory />
            </ArrayContext.Provider>

        </div>
    )
}

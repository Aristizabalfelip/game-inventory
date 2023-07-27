import React, { useContext, useEffect, useState } from 'react'
import { Buttons } from './Buttons'
import { ArrayContext } from './Home'
import { handleClick } from '../utils/conditiButt'
import { Paint } from './Paint'
import Info from './Info'
import { SelectedItems } from './SelectedItems'

export const Inventory = () => {
    const { array } = useContext(ArrayContext)

    const [types, setTypes] = useState(array.weapons)
    const [select, setSelect] = useState([])
    const [items, setItems] = useState({})


    const [click,setClick] = useState('')

    const buttonDouble = document.querySelector('.buttonDouble')
    console.log(buttonDouble);

     let primerClic = 0;
     const intervaloMaximo = 300
   
     const doubleClick = () => {
        console.log('hola');
     }

     buttonDouble?.addEventListener('click', function() {
        const tiempoActual = new Date().getTime();
      
  
        if (tiempoActual - primerClic < intervaloMaximo) {
            doubleClick();
          primerClic = 0; 
        } else {
          primerClic = tiempoActual;
        }
      });
   




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
                            />
                        })
                    }
                </div>

            </div>
            <div>
                    <Info select={select}/>
            </div>
            <div>
                {/* <SelectedItems/> */}
            </div>
        </>
    )
}

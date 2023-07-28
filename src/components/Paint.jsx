import { useEffect, useState } from "react"



export const Paint = ({ img, value, inventory, setSelect, setShowcomponent, select }) => {

  const [seleccionado, setSeleccionado] = useState(false);


  const firstClick = () => {
    setShowcomponent(false)
    setSeleccionado(true);
    setSelect(inventory);

  }



  const doubleClick = () => {
    setShowcomponent(true);
    //   console.log(select);
    // console.log(inventory.name);
    console.log('COMPARACION', select.name?.includes(inventory.name));
   
  };

  // const validar  = select ? select.name.includes(inventory.name) : 'hola'

  // console.log( select ? select.name.includes(inventory.name) : 'hola'

  // );


  const handleDobleClic = () => {
    if (!seleccionado) {
      firstClick();
    } else {
      doubleClick();
      setSeleccionado(false);
    }

  };



  return (
    <>
      <div >
        <button className="buttonDouble" onClick={handleDobleClic} >
          <img src={img} alt="" height="96" />
          <p>{value}</p>
        </button>
        <hr style={{borderColor: select.name?.includes(inventory.name)? 'blue' : 'silver'}} />
      </div>


    </>
  )
}

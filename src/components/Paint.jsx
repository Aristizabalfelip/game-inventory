import {  useState } from "react"



export const Paint = ({ img, value, inventory, setSelect, setShowcomponent, select,parts }) => {

  const [seleccionado, setSeleccionado] = useState(false);




  const firstClick = () => {
    setShowcomponent(false)
    setSeleccionado(true);
    setSelect(inventory);

  }



  const doubleClick = () => {
    setShowcomponent(true);
  };



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
      <div className="border-2 h-36"  style={{backgroundColor: parts.map( obj => obj.name).includes(inventory.name) ? '#4882b0' : '', padding:'5px'}} >
        <button className="buttonDouble" onClick={handleDobleClic} >
          <img  className = 'h-24'src={img} alt=""  />
          <p>{value}</p>
        </button>
        <hr style={{borderColor: select.name?.includes(inventory.name)? 'blue' : 'white '}} />
      </div>


    </>
  )
}

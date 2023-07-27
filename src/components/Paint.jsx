import { useState } from "react"
import { Option } from "./Option"







export const Paint = ({ img, value, name, category, stats, description, setSelect,setMostrarComponente,mostrarComponente }) => {

  const [ boolean, setBoolean] = useState(false)
  const [seleccionado, setSeleccionado] = useState(false);
 
  const firstClick = () => {
    setSeleccionado(true);
    setBoolean(false)
    setSelect([name, category, Object.values(stats), description,10])
  }


  const doubleClick = () => {
   
    console.log('soy segundo click');
    setMostrarComponente(true);

  };
  const handleDobleClic = () => {
    if (!seleccionado) {
      firstClick();
    } else {
      doubleClick();
    }
  };
  return (
    <>
    <div >
      <button className="buttonDouble"  onClick={handleDobleClic} >
        <img src={img} alt="" />
        <p>{value}</p>
      </button>
      
    </div>
    
 
    </>
  )
}

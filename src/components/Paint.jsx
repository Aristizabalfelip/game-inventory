import { useState } from "react"



export const Paint = ({ img, value, name, category, stats, description,
   setSelect,setShowcomponent}) => {

  const [seleccionado, setSeleccionado] = useState(false);

 

  const firstClick = () => {
    setShowcomponent(false)
    setSeleccionado(true);
    setSelect([name, category, Object.values(stats), description,10,img])
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
    <div >
      <button className="buttonDouble"  onClick={handleDobleClic} >
        <img src={img} alt="" />
        <p>{value}</p>
      </button>
      
    </div>
    
 
    </>
  )
}

import { useState } from "react";




export const Paint = ({ img, value, name, category, stats, description, setSelect }) => {

 
  const handleClick = () => {
    setSelect([name, category, Object.values(stats), description])
  }

  return (
    <div >
      <button className="buttonDouble" onClick={handleClick}>
        <img src={img} alt="" />
        <p>{value}</p>
      </button>
    </div>
  )
}

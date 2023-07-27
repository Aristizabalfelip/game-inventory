import React from 'react'

export const Option = ({name}) => {
  return (
    <div>
        <ul>
           <button>{name}</button>
           <button>Throw</button>
           <button>Cancel</button>
        </ul>
    </div>
  )
}

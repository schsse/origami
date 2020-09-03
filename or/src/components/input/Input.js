import React from 'react'

const Input=({id, value, onChange, label})=>{
    return(
      <div>
           <label htmlFor={label} />{label}
           <input onChange={onChange} />
      </div>
    )
}
export default Input
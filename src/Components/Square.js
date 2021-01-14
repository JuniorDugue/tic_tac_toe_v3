import React from 'react'

function Square({value, children}){
  console.log(value)

  return (
    <button type="button">
      {children}
    </button>
  )
}

export default Square

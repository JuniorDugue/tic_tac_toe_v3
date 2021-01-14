import React from 'react'
import { Button } from "./styles/ButtonStyled"

function Square({value, onClick }){
  // console.log(value)

  return (
    <Button type="button" onClick={(e) => {console.log(value)}}>
      {value}
    </Button>
  )
}

export default Square

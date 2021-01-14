import React from 'react'
import { Button } from "./styles/ButtonStyled"

function Square({value, }){
  // console.log(value)

  return (
    <Button type="button">
      {value}
    </Button>
  )
}

export default Square

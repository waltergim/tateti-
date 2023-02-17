import React, { useState } from 'react'

export const Square = ({value, onSquare } ) => {
 
  return (
    <button className='square' onClick={onSquare} >{value}</button>

  )
}

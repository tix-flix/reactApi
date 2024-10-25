import React from 'react'

function Title({text, color, size}) {
  return (
    <h1 style={{color: color, fontSize: size}}>{text}</h1>
  )
}

export default Title
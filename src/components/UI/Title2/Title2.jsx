import React from 'react'

function Title({text, color, size}) {
  return (
    <h2 style={{color: color, fontSize: size}}>{text}</h2>
  )
}

export default Title
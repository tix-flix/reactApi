import React from 'react'

function Title({text, color, size}) {
    const check = (x) => {
        switch (x) {
            case "Alive":
                return "green"
            case "Dead":
                return "red"                                
            case "unknown":
                return "gray"
            default:
                return "black"
        }
    }

    let styles = {
        color: check(color),
        fontSize: size
    }
  return (
    <h3 style={styles}>{text}</h3>
  )
}

export default Title
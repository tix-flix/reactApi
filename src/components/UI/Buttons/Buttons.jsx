import React from 'react'
import st from './Buttons.module.css'

function Buttons({text, color, bgcolor, size, br}) {
    let styles = {
        color: color,
        backgroundColor: bgcolor,
        fontSize: size,
        borderRadius: br
    }
  return (
    <button style={styles} className={st.btn}>{text}</button>
  )
}

export default Buttons
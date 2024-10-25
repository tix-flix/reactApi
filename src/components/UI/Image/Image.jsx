import React from 'react'
import st from './Image.module.css'

function Image({width, height, to, br}) {
    let styles = {
        width: width,
        height: height,
        borderRadius: br
    } 
  return (
    <img style={styles} className={st.img} src={to} alt="" />
  )
}

export default Image
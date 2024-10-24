import React from 'react'
import st from "./NavLink.module.css"

function NavLink({to, text, color, size}) {
  let styles = {
    color: color,
    fontSize: size,
  }
  return (
    <>
    <a style={styles} className={st.link} href={to}>{text}</a>
    </>
  )
}

export default NavLink


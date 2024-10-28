import React, { Children } from 'react'
import st from './Pagination.module.css'

function Pagination({children}) {
  return (
    <div className={st.cont}>
    {children}
    </div>
  )
}

export default Pagination
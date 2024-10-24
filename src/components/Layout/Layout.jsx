import React from 'react'
import Nav from '../Nav/Nav'

function Layout({children}) {
  return (
    <>
    <div className="wrapper">
        <div className="container">
            <div className="header">
                <Nav/>
            </div>
            <div className="main">
                {children}
            </div>
        </div>
    </div>
    </>
  )
}

export default Layout
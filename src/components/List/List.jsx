import React from 'react'

function List({array}) {
  return (
    <>
    <ul>
        {
           array.map((e,i) => (
            <li key={i}>
               <h1>{e.name}</h1>
               <h2>{e.age}</h2>
               <h3>{e.job}</h3>
            </li>
           )) 
        }
    </ul>
    </>
  )
}

export default List
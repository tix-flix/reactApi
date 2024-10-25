import React from 'react'
import st from './List.module.css'
import Title from '../UI/Title/Title'
import Title2 from '../UI/Title2/Title2'
import Title3 from '../UI/Title3/Title3'
import Image from '../UI/Image/Image'

function List({array}) {
  return (
    <>
    <center className={st.lists}>
    <ul className={st.list}>
        {
          array.map((e,i) => (
            <li className={st.list__item} key={e.id}>
              <div className={st.cont}>
               <Image className={st.img} to={e.image}/>
               <Title text={e.name}/>
               <Title2 text={e.gender}/>
               <Title3 color={e.status} text={e.status}/>
        </div>
            </li>
           )) 
        }
    </ul>
    </center>
    </>
  )
}

export default List
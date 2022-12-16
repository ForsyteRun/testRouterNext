import React from 'react'
import { data } from '../utils/data'
import Card from './Card'

const Main = () => {
  return (
    <div>
        {
               data.poducts.map(el => (
                  <Card {...el} key={el.id}/>
               ))
         }

    </div>
  )
}


export default Main;
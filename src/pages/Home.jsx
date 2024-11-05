import React from 'react'
import Card from '../Constents/Card'
import {IMAGES} from '../Constents/Images'

const Home = () => {
  const data = [
    {id:1 , name:"painting" , icon:IMAGES.PAINTING},
    {id:1 , name:"painting" , icon:IMAGES.PAINTING},
    {id:1 , name:"painting" , icon:IMAGES.PAINTING},
    {id:1 , name:"painting" , icon:IMAGES.PAINTING},
    {id:1 , name:"painting" , icon:IMAGES.PAINTING},
    {id:1 , name:"painting" , icon:IMAGES.ELECTRITION},
    {id:1 , name:"painting" , icon:IMAGES.ELECTRITION},
    {id:1 , name:"painting" , icon:IMAGES.ELECTRITION},
    {id:1 , name:"painting" , icon:IMAGES.ELECTRITION},
    {id:1 , name:"painting" , icon:IMAGES.DRIVER},
    {id:1 , name:"painting" , icon:IMAGES.DRIVER},
    {id:1 , name:"painting" , icon:IMAGES.DRIVER},
    {id:1 , name:"painting" , icon:IMAGES.DRIVER},
  ]
  return (
    <main className='' style={{marginTop:"100px"}}>
      <div className='text-center'>
        <h1>Contact Details</h1> 
      </div>
      <div className="row mt-3 d-flex flex-wrap gap-4 main  d-flex  align-items-center justify-content-center">
        <Card data={data}/>
      </div>
    </main>
  )
}

export default Home
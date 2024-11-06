import React from 'react'
import Card from '../Constents/Card'
import {IMAGES} from '../Constents/Images'
import { useSelector } from 'react-redux'

const Home = () => {

  const {data} = useSelector(state => state.category)
console.log("daaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data)
  // const data = [
  //   {id:1 , name:"painting" , icon:IMAGES.PAINTING},
  //   {id:1 , name:"painting" , icon:IMAGES.PAINTING},
  //   {id:1 , name:"painting" , icon:IMAGES.PAINTING},
  //   {id:1 , name:"painting" , icon:IMAGES.PAINTING},
  //   {id:1 , name:"painting" , icon:IMAGES.PAINTING},
  //   {id:1 , name:"painting" , icon:IMAGES.ELECTRITION},
  //   {id:1 , name:"painting" , icon:IMAGES.ELECTRITION},
  //   {id:1 , name:"painting" , icon:IMAGES.ELECTRITION},
  //   {id:1 , name:"painting" , icon:IMAGES.ELECTRITION},
  //   {id:1 , name:"painting" , icon:IMAGES.DRIVER},
  //   {id:1 , name:"painting" , icon:IMAGES.DRIVER},
  //   {id:1 , name:"painting" , icon:IMAGES.DRIVER},
  //   {id:1 , name:"painting" , icon:IMAGES.DRIVER},
  // ]



  return (
    <main className='' style={{marginTop:"60px"}}>
      <div className='text-center mb-4'>
        <h1>Contact Details</h1> 
      </div>
      <div className="row mt-3 d-flex flex-wrap gap-4 main  d-flex  align-items-center justify-content-center">
        <Card data={data}/>
      </div>
    </main>
  )
}

export default Home
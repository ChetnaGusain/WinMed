import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'

const Cart = () => {


  const params = useParams() ;
  console.log(params)

  return (
    <>
        <Navbar/>
        

    </>
    
  )
}

export default Cart
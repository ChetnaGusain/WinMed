import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Beauty from '../Pages/Beauty/Beauty'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import LabTest from '../Pages/LabTest'
import SignUp from '../Pages/SignUp'
import Upload from '../Pages/Upload'
import Wellness from '../Pages/Wellness'
import Footer from './Footer'
import Navbar from './Navbar'

const AllRoutes = () => {
  return (
    <div>

    <Navbar/>

    <Routes>
         <Route path='/' element={<Home></Home>} />
         <Route path='/upload' element={<Upload></Upload>} />
         <Route path='/cart' element={<Cart></Cart>} />
         <Route path='/signUp' element={<SignUp></SignUp>} />
         <Route path='/wellness' element={<Wellness></Wellness>} />
         <Route path='/labtest' element={<LabTest></LabTest>} />
         <Route path='/beauty' element={<Beauty></Beauty>} />
         
    </Routes>

    <Footer/>
    
    </div>
  )
}

export default AllRoutes
import React from 'react'
import  Navbar  from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import UserDetails from '../pages/UserDetails'
import Login from '../pages/Login'
import CategorieDetails from '../pages/CategorieDetails'
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'
import Notfound from '../components/Notfound'
import ProtectedRouted from '../utils/ProtectedRouted'

const AppRoutes = () => {
  return (
    <>
    <div className='row'>

  <Navbar />
    </div>
  <div className=" row main flex-grow-1 ">
<Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/> 
        <Route path='/contact' element={<Contact />}/> 
        <Route path='/user-details/:id' element={<UserDetails />}/> 
        <Route path='/login' element={<Login />}/> 
        <Route path='/Categories' element={<ProtectedRouted element={<CategorieDetails />} />}/> 
        <Route path='/*' element={<Notfound />}/> 
</Routes>
    </div>
<ToastContainer position='top-right' style={{zIndex:10001}} />
    <Footer />
</>
  )
}

export default AppRoutes

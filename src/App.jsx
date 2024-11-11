// import { useEffect, useState } from 'react'
// import Home from './pages/Home'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import {BrowserRouter ,Routes, Route} from 'react-router-dom'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import UserDetails from './pages/UserDetails'
// import Login from './pages/Login'
// import CategorieDetails from './pages/CategorieDetails'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchUserData } from './redux/slices/UserSlice'
// import { fetchCategoriData } from './redux/slices/CategorySlice'
// import { verifyToken } from './redux/slices/AuthSlice'

// import { ToastContainer } from 'react-toastify'
// import Loader from './components/Loader'
// import ScrollToTop from './utils/ScrollTop'

// function App() {
//   const dispatch = useDispatch()
//   const {isAuthenticated , status} = useSelector((state) => state.auth)


//   useEffect(()=>{
//     dispatch(fetchCategoriData())
//     // dispatch(verifyToken())
//   },[dispatch])

//   if(status === 'loading'){
//     return <Loader />
//   }
  
//   return (
//     <>
   
//     <ScrollToTop />
//       <div className="app d-flex flex-column ">
//         <div>

//       <Navbar />
//         </div>
//       <div className="main flex-grow-1 ">
//         <div className="row">
//     <Routes>
//             <Route path='/' element={<Home />}/>
//             <Route path='/about' element={<About />}/> 
//             <Route path='/contact' element={<Contact />}/> 
//             <Route path='/user-details/:id' element={<UserDetails />}/> 
//             <Route path='/login' element={<Login />}/> 
//             <Route path='/Categories' element={<CategorieDetails />}/> 
//     </Routes>
//         </div>
//       </div>
//     <ToastContainer position='top-right' style={{zIndex:10001}} />
//         <Footer />
//     </div>
//     </>
//   )
// }

// export default App


import { useEffect, useState } from 'react'
import {BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriData } from './redux/slices/CategorySlice'

import Loader from './components/Loader'
import ScrollToTop from './utils/ScrollTop'
import AppRoutes from './Routes/AppRoutes'

function App() {
  const dispatch = useDispatch()
  const {isAuthenticated , status} = useSelector((state) => state.auth)


  useEffect(()=>{
    dispatch(fetchCategoriData())
    // dispatch(verifyToken())
  },[dispatch])

  if(status === 'loading'){
    return <Loader />
  }
  
  return (
    <>
   <BrowserRouter>
    <ScrollToTop />
    <AppRoutes />
   </BrowserRouter>
    </>
  )
}

export default App

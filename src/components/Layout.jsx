import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const Layout = () => {
  return (
   <>
   <div>
   <Header/>
   </div>
   <div className='mt-20'>
   <Outlet/>
   </div>
   <div>
   <Footer/> 
   </div>
   </>
  )
}

export default Layout

import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer';

function Body() {
  return (
    <div className='w-screen flex flex-col gap-10 relative'>
      <Header />
      <div className='flex flex-col justify-start items-center gap-10 py-2'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Body
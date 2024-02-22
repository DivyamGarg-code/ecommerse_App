import React from 'react'
import errorImg from '../images/error.png'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex flex-col gap-4 items-center justify-center w-[100vw] h-[100vh]'>
      <img className="w-[300px]" src={errorImg} alt="error" />
      <span className='font-bold text-4xl'>Page Not Found !</span>
      <span>The page you are looking for does not exist.</span>
      <Link to="/" className='p-2 rounded-md bg-blue-400 hover:bg-blue-500 '>GO BACK TO HOME</Link>
    </div>
  )
}

export default ErrorPage
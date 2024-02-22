import React from 'react'
import shopping from "../images/shopping.png"
import { Link } from 'react-router-dom';
function IntroContainer({data}) {
    const {title,name,content}=data;
  return (
    <div className='flex flex-row items-center justify-center flex-wrap gap-[80px] px-3'>
        <div className='flex flex-col gap-3 max-w-[400px] items-center text-center md:items-start md:text-start'>
            <span className='text-xl text-gray-600'>{title}</span>
            <span className='font-bold text-3xl'>{name}</span>
            <span className='text-gray-600 line-clamp-4'>{content}</span>
            <Link to="/products"><button className='p-2 font-bold bg-blue-400 hover:bg-blue-500 hover:shadow-md'>SHOP NOW</button></Link>
        </div>
        <img className="w-[350px]  hover:scale-105 transition-transform duration-300" src={shopping} alt="error" />
    </div>
  )
}

export default IntroContainer
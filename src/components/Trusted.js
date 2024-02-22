import React from 'react'
import i1 from '../images/i1.png'
import i2 from '../images/i2.png'
import i3 from '../images/i3.png'
import i4 from '../images/i4.png'

function Trusted() {
  return (
    <div className='flex flex-col items-center gap-6 bg-slate-200 py-6 w-full'>
        <span className='text-2xl font-semibold text-center'>Trusted By 1000+ companies</span>
        <div className='flex flex-row items-center justify-center gap-8 flex-wrap'>
            <img className="w-[80px] grayscale" src={i1} alt="error" />
            <img className="w-[80px] grayscale" src={i2} alt="error" />
            <img className="w-[80px] grayscale" src={i3} alt="error" />
            <img className="w-[80px] grayscale" src={i4} alt="error" />
            <img className="w-[80px] grayscale" src={i1} alt="error" />
        </div>
    </div>
  )
}

export default Trusted
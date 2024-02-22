import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faPiggyBank, faShieldHalved, faTruckFast } from '@fortawesome/free-solid-svg-icons'

function Services() {
    return (
        <div className='flex flex-row items-center justify-center gap-4 flex-wrap w-full'>
            <div className='flex flex-col items-center justify-center gap-4 w-[270px] h-[250px] bg-slate-300 rounded-lg'>
                <FontAwesomeIcon icon={faTruckFast} size='2x' />
                <span className='text-[16px] text-center'>Super Fast and Free Delivery</span>
            </div>
            <div className='flex flex-col gap-4 justify-center'>
                <div className='flex flex-col items-center justify-center gap-4 w-[270px] h-[110px] bg-slate-300 rounded-lg'>
                    <FontAwesomeIcon icon={faShieldHalved} size='2x' />
                    <span className='text-[16px] text-center'>Non-contact Shipping</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 w-[270px] h-[110px] bg-slate-300 rounded-lg'>
                    <FontAwesomeIcon icon={faPiggyBank} size='2x' />
                    <span className='text-[16px] text-center'>Money-back Guaranteed</span>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 w-[270px] h-[250px] bg-slate-300 rounded-lg'>
                <FontAwesomeIcon icon={faKey} size='2x' />
                <span className='text-[16px] text-center'>Super Secure Payment System</span>
            </div>
        </div>
    )
}

export default Services
import { faDiscord, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className='h-[150px]'></div>
        <div className='bg-blue-950 flex flex-col items-center gap-8 mt-[80px]'>
            <div className='max-w-[600px] w-full flex flex-row items-center justify-between p-6 shadow-lg rounded-lg bg-gray-100 -mt-14'>
                <div className='flex flex-col'>
                    <span>Ready to get started?</span>
                    <span>Talk to us today</span>
                </div>
                <button className='p-2 bg-blue-400 hover:bg-blue-500 rounded-md'>Get Started</button>
            </div>
            <div className='flex flex-col gap-3 p-2 text-white md:gap-10 md:flex-row'>
                <div className='flex flex-col gap-4 md:max-w-[250px]'>
                    <span className='font-bold'>Online Store</span>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, vero?</span>
                </div>
                <div className='flex flex-col gap-4'>
                    <span>Subscribe to get important updates</span>
                    <input className="p-2 rounded-md text-black" type="email" placeholder='Your E-mail' required />
                    <button className='p-2 bg-blue-500 hover:bg-blue-600 rounded-md font-bold'>Subscribe</button>
                </div>
                <div className='flex flex-col gap-4'>
                    <span>Follow Us</span>
                    <div className='flex flex-row gap-4 items-center'>
                        <Link to="https://discord.com" target='_blank'><FontAwesomeIcon icon={faDiscord} /></Link>
                        <Link to="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link to="https://youtube.com"><FontAwesomeIcon icon={faYoutube} /></Link>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <span>Call Us</span>
                    <span>+91 XXXXX-XXXXX</span>
                </div>
            </div>
            <div className='flex justify-center p-4 text-white gap-10 border-t-2 border-white w-full'>
                <span>&copy;2022 Online Store. All Rights Reserved</span>
                <span>PRIVACY POLICY | TERMS AND CONDITIONS</span>
            </div>
        </div>
        </div>
    )
}

export default Footer
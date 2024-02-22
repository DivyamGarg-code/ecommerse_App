import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import cart from '../images/cart.png'
import "./hamburger.css";
import {useSelector} from 'react-redux'

function Header() {
    const windowSize = window.innerWidth;
    const totalCartItems=useSelector((store)=>store.cart.totalItemCount);
    // console.log(cartItems);
    // const getCartCount=()=>{
    //     let productCount=0;
    //     Object.entries(cartItems).forEach(([key, value]) => {
    //         productCount += cartItems[key]["productCount"];
    //     });
    //     return productCount;
    // }
    // console.log(getCartCount());
    // const totalCartItems=getCartCount();
    return windowSize < 1000 ? <HeaderMobileView totalCartItems={totalCartItems}/>:<HeaderWebView totalCartItems={totalCartItems}/>
}

const HeaderWebView = ({totalCartItems}) => {
    return (
        <div className='flex flex-row items-center justify-between pl-6 pr-10 py-4 w-screen shadow-lg '>
            <img className="h-[30px]" src={logo} alt="error" />
            <div className='flex flex-row gap-4 items-center'>
                <Link to="/" className='navLink'>Home</Link>
                <Link to="/about" className='navLink'>About</Link>
                <Link to="/products" className='navLink'>Products</Link>
                <Link to="/contact" className='navLink'>Contact</Link>
                <button className='bg-blue-300 py-2 px-3 shadow-md rounded-sm'>Log In</button>
                <Link to="/cart" className='relative' title='Go to Cart'>
                    <img className="h-[30px]" src={cart} alt="error" />
                    <div className='bg-blue-300 p-1 rounded-full font-bold w-fit h-fit text-[10px] absolute top-[-10px] right-[-10px]'>{totalCartItems}</div>
                </Link>
            </div>
        </div>
    )
}


const HeaderMobileView=({totalCartItems})=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenuBar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='w-full'>
            <div className='flex flex-row items-center justify-between px-6 py-4 w-full shadow-lg '>
                <img className="h-[30px]" src={logo} alt="error" />
                <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenuBar}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            {/* Content with slide-down effect */}
            <div className={`menu-container ${isOpen ? "open" : ""}`}>
                <div className='flex flex-col gap-6 items-center bg-slate-200 p-4'>
                    <Link to="/" onClick={toggleMenuBar}>Home</Link>
                    <Link to="/about" onClick={toggleMenuBar}>About</Link>
                    <Link to="/products" onClick={toggleMenuBar}>Products</Link>
                    <Link to="/contact" onClick={toggleMenuBar}>Contact</Link>
                    <button className='bg-blue-300 py-2 px-3 shadow-md rounded-sm'>Log In</button>
                    <Link to="/cart" className='relative' title='Go to Cart'onClick={toggleMenuBar}>
                        <img className="h-[30px]" src={cart} alt="error" />
                        <div className='bg-blue-300 p-1 rounded-full font-bold w-fit h-fit text-[10px] absolute top-[-10px] right-[-10px]'>{totalCartItems}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Header

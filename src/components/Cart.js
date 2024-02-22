import React, {useEffect } from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { clearCart } from '../utils/cartSlice';

function Cart() {
  const dispatch=useDispatch();
  const {cartItems,totalItemCount,totalAmount}=useSelector((store)=>store.cart);
  useEffect(()=>{
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  },[])
  // const totalItemCount=useSelector((store)=>store.cart.totalItemCount);
  // const cartItems=useSelector((store)=>store.cart.cartItems);
  return (
    <div className='max-w-[600px] w-full flex flex-col gap-2 px-4'>
      <span>Cart : <b>{totalItemCount} Items</b></span>
      <div className='w-full border border-black'></div>
      {Object.values(cartItems).map((productInfo)=>{
        return <CartItem key={productInfo.id} productInfo={productInfo}/>
        // Under process............
        // return <Link to={`/singleProduct?id=${productInfo.id}`}><CartItem key={productInfo.id} productInfo={productInfo}/></Link>
      })}
      <div className='w-full flex flex-row items-center justify-between flex-wrap'>
        <Link to="/products"><button className='p-2 rounded-md bg-blue-400 hover:bg-blue-500 font-semibold mt-4'>Continue Shopping</button></Link>
        <button className='p-2 rounded-md bg-blue-400 hover:bg-blue-500 font-semibold mt-4' onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>
      </div>
      <div>Total Amount : ₹ {totalAmount}</div>
    </div>
  )
}

export default Cart

